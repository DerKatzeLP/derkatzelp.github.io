export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/information.html", { loader: () => import(/* webpackChunkName: "information.html" */"C:/Users/DFI/IdeaProjects/david-fischer.dev/docs/.vuepress/.temp/pages/information.html.js"), meta: {"title":"Informationen"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/DFI/IdeaProjects/david-fischer.dev/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/DFI/IdeaProjects/david-fischer.dev/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
