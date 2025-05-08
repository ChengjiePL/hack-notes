import type { Tool } from "@/types/tool"
import { Terminal, Shield, Database, Wifi, Lock, Bug } from "lucide-react"

export const tools: Tool[] = [
  {
    id: "nmap",
    name: "Nmap",
    description:
      "A powerful network scanner used to discover hosts and services on a computer network, thus building a map of the network.",
    category: "Network Scanning",
    icon: Wifi,
    tags: ["network", "scanning", "reconnaissance", "port scanning"],
    documentationUrl: "https://nmap.org/docs.html",
    tutorialSlug: "how-to-use-nmap",
  },
  {
    id: "metasploit",
    name: "Metasploit Framework",
    description:
      "A comprehensive penetration testing platform that enables you to find, exploit, and validate vulnerabilities.",
    category: "Exploitation",
    icon: Bug,
    tags: ["exploitation", "vulnerability", "penetration testing"],
    documentationUrl: "https://docs.metasploit.com/",
  },
  {
    id: "wireshark",
    name: "Wireshark",
    description:
      "A network protocol analyzer that lets you capture and interactively browse the traffic running on a computer network.",
    category: "Network Analysis",
    icon: Terminal,
    tags: ["network", "packet analysis", "traffic monitoring"],
    documentationUrl: "https://www.wireshark.org/docs/",
  },
  {
    id: "burp-suite",
    name: "Burp Suite",
    description:
      "An integrated platform for performing security testing of web applications, with various tools working together seamlessly.",
    category: "Web Application Security",
    icon: Shield,
    tags: ["web security", "proxy", "scanner"],
    documentationUrl: "https://portswigger.net/burp/documentation",
    tutorialSlug: "web-app-testing-with-burp-suite",
  },
  {
    id: "sqlmap",
    name: "SQLMap",
    description:
      "An open source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws.",
    category: "Database Security",
    icon: Database,
    tags: ["SQL injection", "database", "automation"],
    documentationUrl: "http://sqlmap.org/",
  },
  {
    id: "john-the-ripper",
    name: "John the Ripper",
    description: "A fast password cracker, currently available for many flavors of Unix, Windows, and other platforms.",
    category: "Password Cracking",
    icon: Lock,
    tags: ["password", "cracking", "brute force"],
    documentationUrl: "https://www.openwall.com/john/doc/",
  },
]
