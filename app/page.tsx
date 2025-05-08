import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Shield, BookOpen } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto space-y-8 py-6">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Ethical Hacking Help</h1>
        <p className="text-xl text-muted-foreground">
          Your comprehensive resource for ethical hacking tools, tutorials, and knowledge.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <Terminal className="h-8 w-8 mb-2" />
            <CardTitle>Tools</CardTitle>
            <CardDescription>
              Discover essential tools for penetration testing and security assessments.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Browse our curated collection of ethical hacking tools with detailed guides on how to use them
              effectively.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/tools">Explore Tools</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <BookOpen className="h-8 w-8 mb-2" />
            <CardTitle>Tutorials</CardTitle>
            <CardDescription>Step-by-step guides for beginners and advanced users.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Learn ethical hacking techniques with our comprehensive tutorials, from basic concepts to advanced
              methodologies.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/tutorials">View Tutorials</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="h-8 w-8 mb-2" />
            <CardTitle>Glossary</CardTitle>
            <CardDescription>Understand the terminology of cybersecurity.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access our searchable glossary of ethical hacking terms and concepts to enhance your understanding.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/glossary">Open Glossary</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="rounded-lg border bg-card p-6 shadow">
        <h2 className="text-2xl font-semibold mb-4">Why Ethical Hacking?</h2>
        <div className="space-y-4">
          <p>
            Ethical hacking involves identifying and addressing security vulnerabilities in systems, networks, and
            applications before malicious hackers can exploit them.
          </p>
          <p>By learning ethical hacking techniques, you can:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Protect organizations from cyber threats</li>
            <li>Develop secure applications and systems</li>
            <li>Pursue a career in cybersecurity</li>
            <li>Contribute to a safer digital environment</li>
          </ul>
          <div className="mt-4">
            <Button variant="outline" asChild>
              <Link href="/about">Learn More About Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
