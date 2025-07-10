export default defineBackground(() => {
  browser.runtime.onInstalled.addListener(function (object) {
    let externalUrl = "https://contexia.web.app/";

    if (object.reason === browser.runtime.OnInstalledReason.INSTALL) {
      browser.tabs.create({ url: externalUrl });
    }
  });

  browser.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});
