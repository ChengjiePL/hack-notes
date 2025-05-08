import { Breadcrumbs } from "@/components/breadcrumbs"
import { SearchBar } from "@/components/search-bar"
import { TutorialCard } from "@/components/tutorial-card"
import { tutorials } from "@/data/tutorials"

export default function TutorialsPage() {
  return (
    <div className="container mx-auto space-y-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tutorials", href: "/tutorials" },
        ]}
      />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Ethical Hacking Tutorials</h1>
        <p className="text-muted-foreground">Step-by-step guides to help you learn ethical hacking techniques.</p>
      </div>

      <SearchBar placeholder="Search tutorials..." clientSideFilter="tutorials" />

      <div className="grid gap-6 md:grid-cols-2" id="tutorials-grid">
        {tutorials.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </div>
  )
}
