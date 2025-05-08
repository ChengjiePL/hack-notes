import type { GlossaryTerm } from "@/types/glossary"

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "ethical-hacking",
    term: "Ethical Hacking",
    definition:
      "The practice of testing computer systems, networks, and applications to identify security vulnerabilities that a malicious hacker could exploit, with the permission of the system owner and with the intention of improving security.",
    relatedTerms: ["Penetration Testing", "White Hat Hacker", "Vulnerability Assessment"],
  },
  {
    id: "penetration-testing",
    term: "Penetration Testing",
    definition:
      "A method of evaluating the security of a computer system or network by simulating an attack from malicious outsiders or insiders. The process involves identifying and attempting to exploit security vulnerabilities.",
    relatedTerms: ["Ethical Hacking", "Red Team", "Vulnerability Assessment"],
  },
  {
    id: "vulnerability",
    term: "Vulnerability",
    definition:
      "A weakness in a system, application, or network that could be exploited by a threat actor to gain unauthorized access or perform unauthorized actions.",
    relatedTerms: ["Exploit", "CVE", "Zero-Day"],
  },
  {
    id: "exploit",
    term: "Exploit",
    definition:
      "A piece of software, code, or sequence of commands that takes advantage of a vulnerability to cause unintended behavior or gain unauthorized access to a system.",
    relatedTerms: ["Vulnerability", "Payload", "Zero-Day Exploit"],
  },
  {
    id: "payload",
    term: "Payload",
    definition:
      "The component of malware or an exploit that performs the malicious action, such as stealing data, creating a backdoor, or damaging the system.",
    relatedTerms: ["Exploit", "Malware", "Shellcode"],
  },
  {
    id: "sql-injection",
    term: "SQL Injection",
    definition:
      "A code injection technique used to attack data-driven applications by inserting malicious SQL statements into entry fields for execution by the backend database.",
    relatedTerms: ["Injection Attack", "Cross-Site Scripting", "Input Validation"],
  },
  {
    id: "xss",
    term: "Cross-Site Scripting (XSS)",
    definition:
      "A type of security vulnerability typically found in web applications that allows attackers to inject client-side scripts into web pages viewed by other users.",
    relatedTerms: ["SQL Injection", "CSRF", "Input Validation"],
  },
  {
    id: "csrf",
    term: "Cross-Site Request Forgery (CSRF)",
    definition:
      "An attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated, by tricking them into clicking a link or loading a page.",
    relatedTerms: ["XSS", "Session Hijacking", "Same-Origin Policy"],
  },
  {
    id: "mitm",
    term: "Man-in-the-Middle (MitM) Attack",
    definition:
      "An attack where the attacker secretly relays and possibly alters the communications between two parties who believe they are directly communicating with each other.",
    relatedTerms: ["ARP Spoofing", "SSL Stripping", "Session Hijacking"],
  },
  {
    id: "dos",
    term: "Denial of Service (DoS)",
    definition:
      "An attack aimed at making a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to the internet.",
    relatedTerms: ["DDoS", "Resource Exhaustion", "Amplification Attack"],
  },
]
