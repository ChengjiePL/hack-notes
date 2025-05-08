import type { LucideIcon } from "lucide-react"

export interface Tool {
  id: string
  name: string
  description: string
  category: string
  icon?: LucideIcon
  tags: string[]
  documentationUrl: string
  tutorialSlug?: string
}
