export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/information.html", { loader: () => import(/* webpackChunkName: "information.html" */"C:/Users/DFI/IdeaProjects/homepage/pages/docs/.vuepress/.temp/pages/information.html.js"), meta: {"title":"Informationen"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/DFI/IdeaProjects/homepage/pages/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/DFI/IdeaProjects/homepage/pages/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
