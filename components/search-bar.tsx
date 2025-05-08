"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchBarProps {
  placeholder: string
  clientSideFilter: "tools" | "tutorials" | "glossary"
}

export function SearchBar({ placeholder, clientSideFilter }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (!searchTerm) {
      // Show all items when search is empty
      showAllItems(clientSideFilter)
      return
    }

    const lowerSearchTerm = searchTerm.toLowerCase()

    if (clientSideFilter === "tools") {
      const toolsGrid = document.getElementById("tools-grid")
      if (!toolsGrid) return

      Array.from(toolsGrid.children).forEach((child) => {
        const toolName = child.getAttribute("data-name")?.toLowerCase() || ""
        const toolDescription = child.getAttribute("data-description")?.toLowerCase() || ""
        const toolCategory = child.getAttribute("data-category")?.toLowerCase() || ""

        const matches =
          toolName.includes(lowerSearchTerm) ||
          toolDescription.includes(lowerSearchTerm) ||
          toolCategory.includes(lowerSearchTerm)

        child.classList.toggle("hidden", !matches)
      })
    } else if (clientSideFilter === "tutorials") {
      const tutorialsGrid = document.getElementById("tutorials-grid")
      if (!tutorialsGrid) return

      Array.from(tutorialsGrid.children).forEach((child) => {
        const tutorialTitle = child.getAttribute("data-title")?.toLowerCase() || ""
        const tutorialDescription = child.getAttribute("data-description")?.toLowerCase() || ""
        const tutorialTags = child.getAttribute("data-tags")?.toLowerCase() || ""

        const matches =
          tutorialTitle.includes(lowerSearchTerm) ||
          tutorialDescription.includes(lowerSearchTerm) ||
          tutorialTags.includes(lowerSearchTerm)

        child.classList.toggle("hidden", !matches)
      })
    } else if (clientSideFilter === "glossary") {
      const glossaryList = document.getElementById("glossary-list")
      if (!glossaryList) return

      Array.from(glossaryList.children).forEach((child) => {
        const termName = child.querySelector("h3")?.textContent?.toLowerCase() || ""
        const termDefinition = child.querySelector("p")?.textContent?.toLowerCase() || ""

        const matches = termName.includes(lowerSearchTerm) || termDefinition.includes(lowerSearchTerm)

        child.classList.toggle("hidden", !matches)
      })
    }
  }, [searchTerm, clientSideFilter])

  function showAllItems(type: "tools" | "tutorials" | "glossary") {
    const containerId = type === "tools" ? "tools-grid" : type === "tutorials" ? "tutorials-grid" : "glossary-list"

    const container = document.getElementById(containerId)
    if (!container) return

    Array.from(container.children).forEach((child) => {
      child.classList.remove("hidden")
    })
  }

  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        className="pl-8"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}
