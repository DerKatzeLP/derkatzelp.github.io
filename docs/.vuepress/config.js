import { defaultTheme } from "@vuepress/theme-default"
import { defineUserConfig } from "vuepress/cli"
import { viteBundler } from "@vuepress/bundler-vite"

export default defineUserConfig({
  lang: "de-DE",

  title: "david-fischer.dev",
  description: "Personal Website",

  theme: defaultTheme({
    logo: "/images/hero.png",

    navbar: ["/", "/information"],
  }),

  bundler: viteBundler(),
})
