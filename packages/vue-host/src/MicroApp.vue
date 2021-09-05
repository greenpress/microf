<template>
  <iframe ref="iframe" @load="loaded"/>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { getMicroFrontendState } from './state';

export default {
  name: 'MicroApp',
  props: {
    path: String,
    url: String,
    app: Object
  },
  setup(props) {
    const iframe = ref(undefined);
    const lastApp = ref('');

    function changeSrc() {
      iframe.value.setAttribute('src', props.url);
    }

    function emit(data = {}) {
      iframe.value.contentWindow.postMessage({
        hostUrl: window.location.origin,
        token: props.app.token,
        ...data
      }, props.url);
    }

    function loaded() {
      emit({
        routes: getMicroFrontendState().routesByApps
      });
    }

    onMounted(changeSrc);

    watch(() => props.url, () => {
      if (props.app.connected && lastApp.value === props.app.token) {
        emit({
          type: 'RouteChange',
          url: props.url,
          path: props.path
        })
      } else {
        changeSrc();
      }
      lastApp.value = props.app.token;
    })

    return { iframe, loaded };
  }
}
</script>
