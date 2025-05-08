export interface Tutorial {
  id: string
  title: string
  slug: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  readTime: number
  publishedAt: string
  tags: string[]
  content: TutorialContent[]
}

export type TutorialContent =
  | { type: "heading"; content: string }
  | { type: "paragraph"; content: string }
  | { type: "code"; content: string; language?: string }
  | { type: "list"; items: string[] }
