if ((<any>global).TNS_WEBPACK) {
    require("bundle-entry-points");

    const context = (<any>require).context("~/", true, /(root|page|fragment)\.(xml|css|js|ts|scss|less|sass)$/);
    global.registerWebpackModules(context);
}
