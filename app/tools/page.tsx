import { Breadcrumbs } from "@/components/breadcrumbs"
import { SearchBar } from "@/components/search-bar"
import { ToolCard } from "@/components/tool-card"
import { tools } from "@/data/tools"

export default function ToolsPage() {
  return (
    <div className="container mx-auto space-y-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
        ]}
      />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Ethical Hacking Tools</h1>
        <p className="text-muted-foreground">
          Browse our collection of essential tools for penetration testing and security assessments.
        </p>
      </div>

      <SearchBar placeholder="Search tools..." clientSideFilter="tools" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" id="tools-grid">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  )
}
