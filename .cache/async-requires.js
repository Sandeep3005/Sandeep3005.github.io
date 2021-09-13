// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-connect-js": () => import("./../../../src/pages/connect.js" /* webpackChunkName: "component---src-pages-connect-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-portfolio-js": () => import("./../../../src/pages/portfolio.js" /* webpackChunkName: "component---src-pages-portfolio-js" */),
  "component---src-pages-resume-js": () => import("./../../../src/pages/resume.js" /* webpackChunkName: "component---src-pages-resume-js" */)
}

