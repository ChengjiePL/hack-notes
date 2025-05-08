import type { Tutorial } from "@/types/tutorial"

export const tutorials: Tutorial[] = [
  {
    id: "nmap-tutorial",
    title: "How to Use Nmap for Network Scanning",
    slug: "how-to-use-nmap",
    description:
      "Learn how to use Nmap to discover hosts and services on a network, identify open ports, and detect security vulnerabilities.",
    difficulty: "Beginner",
    readTime: 15,
    publishedAt: "2023-05-15",
    tags: ["network", "scanning", "reconnaissance", "nmap"],
    content: [
      {
        type: "heading",
        content: "Introduction to Nmap",
      },
      {
        type: "paragraph",
        content:
          "Nmap (Network Mapper) is a free and open-source utility for network discovery and security auditing. It uses raw IP packets in novel ways to determine what hosts are available on the network, what services those hosts are offering, what operating systems they are running, and dozens of other characteristics.",
      },
      {
        type: "heading",
        content: "Installation",
      },
      {
        type: "paragraph",
        content:
          "Before we begin, you'll need to install Nmap on your system. Here's how to install it on different operating systems:",
      },
      {
        type: "code",
        content:
          "# Ubuntu/Debian\nsudo apt update\nsudo apt install nmap\n\n# Fedora/RHEL/CentOS\nsudo dnf install nmap\n\n# macOS (using Homebrew)\nbrew install nmap\n\n# Windows\n# Download the installer from https://nmap.org/download.html",
        language: "bash",
      },
      {
        type: "heading",
        content: "Basic Scanning Techniques",
      },
      {
        type: "paragraph",
        content: "Let's start with some basic scanning techniques. The simplest Nmap scan is just specifying a target:",
      },
      {
        type: "code",
        content: "nmap 192.168.1.1",
        language: "bash",
      },
      {
        type: "paragraph",
        content:
          "This will perform a basic scan of the top 1000 ports on the target. You can also scan an entire subnet:",
      },
      {
        type: "code",
        content: "nmap 192.168.1.0/24",
        language: "bash",
      },
      {
        type: "heading",
        content: "Port Specification",
      },
      {
        type: "paragraph",
        content: "You can specify which ports to scan using the -p option:",
      },
      {
        type: "code",
        content:
          "# Scan specific ports\nnmap -p 22,80,443 192.168.1.1\n\n# Scan a range of ports\nnmap -p 1-100 192.168.1.1\n\n# Scan all 65535 ports\nnmap -p- 192.168.1.1",
        language: "bash",
      },
      {
        type: "heading",
        content: "Scan Types",
      },
      {
        type: "paragraph",
        content: "Nmap offers different scan types for different scenarios:",
      },
      {
        type: "list",
        items: [
          "TCP SYN scan (-sS): Default scan type, relatively unobtrusive and stealthy",
          "TCP connect scan (-sT): More noticeable but doesn't require special privileges",
          "UDP scan (-sU): For scanning UDP services",
          "Ping scan (-sn): Just determine if hosts are online, without port scanning",
        ],
      },
      {
        type: "code",
        content:
          "# TCP SYN scan (requires root/admin privileges)\nsudo nmap -sS 192.168.1.1\n\n# TCP connect scan\nnmap -sT 192.168.1.1\n\n# UDP scan\nsudo nmap -sU 192.168.1.1\n\n# Ping scan\nnmap -sn 192.168.1.0/24",
        language: "bash",
      },
      {
        type: "heading",
        content: "OS and Version Detection",
      },
      {
        type: "paragraph",
        content: "Nmap can attempt to determine the operating system and service versions running on the target:",
      },
      {
        type: "code",
        content:
          "# OS detection\nsudo nmap -O 192.168.1.1\n\n# Service version detection\nnmap -sV 192.168.1.1\n\n# Combine OS and version detection\nsudo nmap -sV -O 192.168.1.1",
        language: "bash",
      },
      {
        type: "heading",
        content: "Output Options",
      },
      {
        type: "paragraph",
        content: "Nmap provides several output formats for saving scan results:",
      },
      {
        type: "code",
        content:
          "# Normal output to a text file\nnmap 192.168.1.1 -oN scan_results.txt\n\n# XML output\nnmap 192.168.1.1 -oX scan_results.xml\n\n# All formats (Normal, XML, and Grepable)\nnmap 192.168.1.1 -oA scan_results",
        language: "bash",
      },
      {
        type: "heading",
        content: "Ethical Considerations",
      },
      {
        type: "paragraph",
        content:
          "Remember that scanning networks without permission is illegal in many jurisdictions. Always ensure you have proper authorization before scanning any network or system that you don't own.",
      },
      {
        type: "paragraph",
        content:
          "For practice, you can use your own network, dedicated lab environments, or platforms like TryHackMe and HackTheBox that provide legal environments for practicing security techniques.",
      },
    ],
  },
  {
    id: "burp-suite-tutorial",
    title: "Web Application Testing with Burp Suite",
    slug: "web-app-testing-with-burp-suite",
    description:
      "Learn how to use Burp Suite for web application security testing, including intercepting requests, analyzing responses, and identifying vulnerabilities.",
    difficulty: "Intermediate",
    readTime: 20,
    publishedAt: "2023-06-22",
    tags: ["web security", "burp suite", "proxy", "penetration testing"],
    content: [
      {
        type: "heading",
        content: "Introduction to Burp Suite",
      },
      {
        type: "paragraph",
        content:
          "Burp Suite is one of the most popular tools for web application security testing. It's an integrated platform that contains various tools designed to facilitate the process of testing web applications for security vulnerabilities.",
      },
      {
        type: "heading",
        content: "Installation and Setup",
      },
      {
        type: "paragraph",
        content:
          "First, download Burp Suite from the PortSwigger website. There's a free Community Edition that's perfect for learning:",
      },
      {
        type: "code",
        content:
          "# Visit https://portswigger.net/burp/communitydownload\n# Download and install the appropriate version for your operating system",
        language: "bash",
      },
      {
        type: "paragraph",
        content:
          "After installation, you'll need to configure your browser to use Burp Suite as a proxy. By default, Burp listens on 127.0.0.1:8080.",
      },
      {
        type: "heading",
        content: "Configuring Your Browser",
      },
      {
        type: "paragraph",
        content: "For Firefox, go to Settings > Network Settings > Settings and configure the proxy:",
      },
      {
        type: "list",
        items: [
          "Manual proxy configuration",
          "HTTP Proxy: 127.0.0.1",
          "Port: 8080",
          "Check 'Use this proxy server for all protocols'",
        ],
      },
      {
        type: "paragraph",
        content: "For Chrome, you can use an extension like 'SwitchyOmega' to manage proxy settings easily.",
      },
      {
        type: "heading",
        content: "Installing Burp's CA Certificate",
      },
      {
        type: "paragraph",
        content: "To intercept HTTPS traffic, you need to install Burp's CA certificate in your browser:",
      },
      {
        type: "list",
        items: [
          "Start Burp Suite and go to http://burp in your browser",
          "Click on 'CA Certificate' in the top-right corner",
          "Save the certificate and import it into your browser's trusted certificates",
        ],
      },
      {
        type: "heading",
        content: "Using the Proxy Tool",
      },
      {
        type: "paragraph",
        content:
          "The Proxy is the most frequently used tool in Burp Suite. It lets you intercept, inspect, and modify requests and responses between your browser and the web application.",
      },
      {
        type: "code",
        content:
          "# To intercept requests:\n1. Go to the Proxy tab in Burp Suite\n2. Ensure 'Intercept is on' is enabled\n3. Browse to your target web application\n4. Requests will be intercepted and displayed in Burp",
        language: "plaintext",
      },
      {
        type: "paragraph",
        content: "You can then forward, drop, or modify the request before sending it to the server.",
      },
      {
        type: "heading",
        content: "Analyzing the Target",
      },
      {
        type: "paragraph",
        content:
          "As you browse the application with Burp's proxy enabled, it builds a site map in the Target tab. This gives you an overview of the application's structure and helps identify potential attack vectors.",
      },
      {
        type: "heading",
        content: "Using the Scanner (Pro Feature)",
      },
      {
        type: "paragraph",
        content:
          "Burp Scanner automatically identifies security vulnerabilities. While this is a Pro feature, understanding how it works is valuable:",
      },
      {
        type: "list",
        items: [
          "Right-click on a host or URL in the Target tab",
          "Select 'Scan' to initiate a vulnerability scan",
          "Review the results in the Scanner tab",
        ],
      },
      {
        type: "heading",
        content: "Using the Repeater",
      },
      {
        type: "paragraph",
        content:
          "The Repeater tool allows you to manually modify and resend requests to the server, which is useful for testing potential vulnerabilities:",
      },
      {
        type: "list",
        items: [
          "Intercept a request in the Proxy",
          "Right-click and select 'Send to Repeater'",
          "Modify the request in the Repeater tab",
          "Click 'Send' to send the modified request",
          "Analyze the response",
        ],
      },
      {
        type: "heading",
        content: "Practical Example: Testing for SQL Injection",
      },
      {
        type: "paragraph",
        content: "Let's use Burp Suite to test for a basic SQL injection vulnerability:",
      },
      {
        type: "code",
        content:
          "# Original request parameter\nid=1\n\n# Modified parameter to test for SQL injection\nid=1'\n\n# Or\nid=1 OR 1=1",
        language: "plaintext",
      },
      {
        type: "paragraph",
        content: "If the application is vulnerable, you might see SQL errors in the response or unexpected behavior.",
      },
      {
        type: "heading",
        content: "Ethical Considerations",
      },
      {
        type: "paragraph",
        content:
          "Always ensure you have permission before testing any web application for security vulnerabilities. Unauthorized testing can be illegal and unethical.",
      },
      {
        type: "paragraph",
        content:
          "For practice, use dedicated vulnerable web applications like DVWA (Damn Vulnerable Web Application), WebGoat, or OWASP Juice Shop.",
      },
    ],
  },
  {
    id: "password-cracking-tutorial",
    title: "Password Cracking Techniques with John the Ripper",
    slug: "password-cracking-with-john",
    description:
      "Learn how to use John the Ripper for password cracking, including dictionary attacks, brute force attacks, and rainbow table attacks.",
    difficulty: "Advanced",
    readTime: 25,
    publishedAt: "2023-07-10",
    tags: ["password cracking", "john the ripper", "security", "authentication"],
    content: [
      {
        type: "heading",
        content: "Introduction to Password Cracking",
      },
      {
        type: "paragraph",
        content:
          "Password cracking is the process of recovering passwords from data that has been stored in or transmitted by a computer system. This tutorial focuses on using John the Ripper, a popular password cracking tool, for educational purposes.",
      },
      {
        type: "heading",
        content: "Ethical Considerations",
      },
      {
        type: "paragraph",
        content:
          "Before we begin, it's crucial to understand that password cracking should only be performed on systems you own or have explicit permission to test. Unauthorized password cracking is illegal and unethical.",
      },
      {
        type: "heading",
        content: "Installing John the Ripper",
      },
      {
        type: "code",
        content:
          "# Ubuntu/Debian\nsudo apt update\nsudo apt install john\n\n# Fedora/RHEL/CentOS\nsudo dnf install john\n\n# macOS (using Homebrew)\nbrew install john\n\n# For the jumbo version with additional features\n# Clone the repository and compile from source\ngit clone https://github.com/openwall/john.git\ncd john/src\n./configure && make",
        language: "bash",
      },
      {
        type: "heading",
        content: "Basic Usage",
      },
      {
        type: "paragraph",
        content:
          "John the Ripper can crack various password hash types. Here's how to use it with a basic password file:",
      },
      {
        type: "code",
        content:
          "# Create a sample password file (for demonstration)\necho 'user:$1$salt$hashedpassword' > passwords.txt\n\n# Run John on the password file\njohn passwords.txt\n\n# Show cracked passwords\njohn --show passwords.txt",
        language: "bash",
      },
      {
        type: "heading",
        content: "Dictionary Attacks",
      },
      {
        type: "paragraph",
        content: "Dictionary attacks use a list of common passwords to attempt to crack password hashes:",
      },
      {
        type: "code",
        content:
          "# Using a wordlist for dictionary attack\njohn --wordlist=/path/to/wordlist.txt passwords.txt\n\n# Common wordlists include rockyou.txt, which contains millions of real passwords\n# from data breaches (available in Kali Linux or can be downloaded)",
        language: "bash",
      },
      {
        type: "heading",
        content: "Rule-Based Attacks",
      },
      {
        type: "paragraph",
        content: "Rules can transform dictionary words to match common password patterns:",
      },
      {
        type: "code",
        content:
          "# Using rules with a wordlist\njohn --wordlist=/path/to/wordlist.txt --rules passwords.txt\n\n# John comes with several rule sets, including 'Single', 'Wordlist', and 'Incremental'",
        language: "bash",
      },
      {
        type: "heading",
        content: "Brute Force Attacks",
      },
      {
        type: "paragraph",
        content: "Brute force attacks try all possible character combinations:",
      },
      {
        type: "code",
        content:
          "# Incremental mode (brute force)\njohn --incremental passwords.txt\n\n# Limit to specific character sets\njohn --incremental=Digits passwords.txt  # Only digits\njohn --incremental=Alpha passwords.txt  # Only letters",
        language: "bash",
      },
      {
        type: "heading",
        content: "Cracking Specific Hash Types",
      },
      {
        type: "paragraph",
        content: "John can automatically detect many hash types, but sometimes you need to specify the format:",
      },
      {
        type: "code",
        content:
          "# Specify hash format\njohn --format=md5crypt passwords.txt\njohn --format=sha512crypt passwords.txt\njohn --format=bcrypt passwords.txt\n\n# List all available formats\njohn --list=formats",
        language: "bash",
      },
      {
        type: "heading",
        content: "Cracking Password-Protected ZIP Files",
      },
      {
        type: "paragraph",
        content: "John can also crack password-protected archives with the help of additional tools:",
      },
      {
        type: "code",
        content:
          "# First, extract the hash from the ZIP file\nzip2john protected.zip > zip.hash\n\n# Then crack the hash\njohn zip.hash",
        language: "bash",
      },
      {
        type: "heading",
        content: "Performance Optimization",
      },
      {
        type: "paragraph",
        content: "Password cracking can be resource-intensive. Here are some tips to optimize performance:",
      },
      {
        type: "list",
        items: [
          "Use the --fork option to utilize multiple CPU cores",
          "Set the --max-run-time parameter to limit the duration",
          "Use the --session flag to save progress and resume later",
          "Consider using GPU acceleration with the jumbo version of John",
        ],
      },
      {
        type: "code",
        content:
          "# Using multiple cores\njohn --fork=4 passwords.txt\n\n# Limiting run time to 1 hour\njohn --max-run-time=3600 passwords.txt\n\n# Saving and resuming a session\njohn --session=mysession passwords.txt\njohn --restore=mysession",
        language: "bash",
      },
      {
        type: "heading",
        content: "Defensive Measures",
      },
      {
        type: "paragraph",
        content: "Understanding password cracking techniques helps in implementing better password policies:",
      },
      {
        type: "list",
        items: [
          "Use strong, unique passwords for each account",
          "Implement multi-factor authentication",
          "Use modern hashing algorithms with appropriate work factors (bcrypt, Argon2)",
          "Enforce minimum password length and complexity requirements",
          "Implement account lockout policies after failed attempts",
        ],
      },
      {
        type: "paragraph",
        content:
          "Remember that the goal of learning these techniques is to better understand security vulnerabilities and how to protect against them, not to gain unauthorized access to systems.",
      },
    ],
  },
]
