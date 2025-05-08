import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import type { Tutorial } from "@/types/tutorial"

interface TutorialCardProps {
  tutorial: Tutorial
}

export function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <Card data-title={tutorial.title} data-description={tutorial.description} data-tags={tutorial.tags.join(",")}>
      <CardHeader>
        <CardTitle>{tutorial.title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {tutorial.readTime} min read • {tutorial.difficulty}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{tutorial.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tutorial.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/tutorials/${tutorial.slug}`}>
            Read Tutorial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
