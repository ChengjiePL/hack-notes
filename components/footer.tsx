import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">Ethical Hacking Help</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Ethical Hacking Help. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link
            href="https://github.com/yourusername/ethical-hacking-help"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="mailto:contact@ethicalhackinghelp.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
