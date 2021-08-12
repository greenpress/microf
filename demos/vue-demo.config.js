module.exports = {
  apps: [
    {
      name: "host",
      cwd: "./demos/vue-admin-panel-example",
      script: "npm run dev"
    },
    {
      name: "microApp",
      cwd: "./demos/vue-micro-app-example",
      script: "npm run dev"
    },
    {
      name: "settings",
      cwd: "./demos/vue-settings-example",
      script: "npm run dev"
    }
  ]
}
