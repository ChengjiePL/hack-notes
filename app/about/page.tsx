import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto space-y-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">About Ethical Hacking Help</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            Ethical Hacking Help was created to provide accessible, comprehensive resources for individuals interested
            in learning ethical hacking techniques. Our goal is to promote responsible security practices and help build
            a safer digital environment.
          </p>
          <p>
            We believe that understanding security vulnerabilities is essential for creating robust systems and
            applications. By educating users about ethical hacking methodologies, we aim to contribute to the
            development of more secure digital infrastructure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Responsible Use</h2>
          <p>The information provided on this site is intended for educational purposes only. Users are expected to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Obtain proper authorization before testing any system or network</li>
            <li>Respect privacy and confidentiality</li>
            <li>Report vulnerabilities responsibly</li>
            <li>Adhere to applicable laws and regulations</li>
          </ul>
          <p>We do not condone or support any illegal activities or unauthorized system access.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Project Information</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">License</h3>
              <p className="text-sm text-muted-foreground mb-4">
                This project is licensed under the MIT License, allowing for free use, modification, and distribution.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View License
                </Link>
              </Button>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Source Code</h3>
              <p className="text-sm text-muted-foreground mb-4">
                The complete source code for this project is available on GitHub.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://github.com/yourusername/ethical-hacking-help"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p>If you have any questions, suggestions, or concerns, please feel free to reach out to us:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email: contact@ethicalhackinghelp.com</li>
            <li>Twitter: @EthicalHackHelp</li>
            <li>GitHub: github.com/yourusername/ethical-hacking-help</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
