
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/anyanime/program/practice/react-projects/official-website/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/home/anyanime/program/practice/react-projects/official-website/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/anyanime/program/practice/react-projects/official-website/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/home/anyanime/program/practice/react-projects/official-website/src/pages/index.js")),
  "component---src-pages-layout-js": preferDefault(require("/home/anyanime/program/practice/react-projects/official-website/src/pages/layout.js")),
  "component---src-pages-portfolio-js": preferDefault(require("/home/anyanime/program/practice/react-projects/official-website/src/pages/portfolio.js"))
}

