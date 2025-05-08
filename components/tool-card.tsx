import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Tool } from "@/types/tool"

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card data-name={tool.name} data-description={tool.description} data-category={tool.category}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">{tool.name}</CardTitle>
            <CardDescription>{tool.category}</CardDescription>
          </div>
          {tool.icon && <tool.icon className="h-6 w-6 text-muted-foreground" />}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{tool.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href={tool.documentationUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Documentation
          </Link>
        </Button>
        {tool.tutorialSlug && (
          <Button variant="default" asChild>
            <Link href={`/tutorials/${tool.tutorialSlug}`}>Learn More</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
