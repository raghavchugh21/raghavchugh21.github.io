module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Raghav Chugh - CS Undergrad";
      return args;
    });
  },
  pwa: {
    name: "Raghav Chugh",
    themeColor: "#1e202c",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#1e202c",
    msTileColor: "#1e202c",
    manifestPath: "manifest.json",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      // ...other Workbox options...
      exclude: [/\.map$/, /_redirects/],
    },
  },
};
