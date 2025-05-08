import { Breadcrumbs } from "@/components/breadcrumbs"
import { SearchBar } from "@/components/search-bar"
import { glossaryTerms } from "@/data/glossary"

export default function GlossaryPage() {
  return (
    <div className="container mx-auto space-y-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Glossary", href: "/glossary" },
        ]}
      />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Ethical Hacking Glossary</h1>
        <p className="text-muted-foreground">
          A comprehensive list of terms and definitions related to ethical hacking and cybersecurity.
        </p>
      </div>

      <SearchBar placeholder="Search glossary terms..." clientSideFilter="glossary" />

      <div className="space-y-6" id="glossary-list">
        {glossaryTerms.map((term) => (
          <div key={term.id} className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold mb-2">{term.term}</h3>
            <p>{term.definition}</p>
            {term.relatedTerms && term.relatedTerms.length > 0 && (
              <div className="mt-2">
                <span className="text-sm font-medium">Related terms: </span>
                <span className="text-sm text-muted-foreground">{term.relatedTerms.join(", ")}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
