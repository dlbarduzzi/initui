import { env } from "@/config/env"

export type SiteConfig = {
  name: string
  description: string
  url: string
}

export const siteConfig: SiteConfig = {
  name: "INITUI",
  description: "A components app with UI sample elements.",
  url: env.NEXT_PUBLIC_APP_URL,
}
