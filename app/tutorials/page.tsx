import { Breadcrumbs } from "@/components/breadcrumbs";
import { CodeBlock } from "@/components/code-block";
import { tutorials } from "@/data/tutorials";
import { notFound } from "next/navigation";

// Add generateStaticParams function to pre-generate all tutorial pages at build time
export function generateStaticParams() {
  return tutorials.map((tutorial) => ({
    slug: tutorial.slug,
  }));
}

export default function TutorialPage({ params }: { params: { slug: string } }) {
  const tutorial = tutorials.find((t) => t.slug === params.slug);

  if (!tutorial) {
    notFound();
  }

  return (
    <div className="container mx-auto space-y-6 w-full">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tutorials", href: "/tutorials" },
          { label: tutorial.title, href: `/tutorials/${tutorial.slug}` },
        ]}
      />

      <article className="prose prose-stone dark:prose-invert w-full max-w-full">
        <h1>{tutorial.title}</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Difficulty: {tutorial.difficulty}</span>
          <span>•</span>
          <span>Published: {tutorial.publishedAt}</span>
        </div>

        <p className="lead">{tutorial.description}</p>

        {tutorial.content.map((section, index) => (
          <div key={index} className="w-full">
            {section.type === "heading" && <h2>{section.content}</h2>}
            {section.type === "paragraph" && <p>{section.content}</p>}
            {section.type === "code" && (
              <CodeBlock
                code={section.content}
                language={section.language || "bash"}
              />
            )}
            {section.type === "list" && (
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </article>
    </div>
  );
}
