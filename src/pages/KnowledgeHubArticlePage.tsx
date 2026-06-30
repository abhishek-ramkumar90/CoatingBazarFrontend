import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { knowledgeHubArticles } from "@/data/articles";
import { removeJsonLd, setJsonLd, setSeoMetadata } from "@/lib/seo";

const KnowledgeHubArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = knowledgeHubArticles.find((item) => item.slug === slug);

  useEffect(() => {
    if (!article) {
      setSeoMetadata({
        title: "Article Not Found | CoatingBazaar",
        description: "The requested knowledge hub article could not be found.",
        canonicalPath: "/knowledge-hub"
      });
      removeJsonLd("knowledge-hub-article");
      return;
    }

    setSeoMetadata({
      title: `${article.title} | CoatingBazaar Knowledge Hub`,
      description: article.seoDescription,
      keywords: article.keywords,
      canonicalPath: `/knowledge-hub/${article.slug}`
    });

    setJsonLd("knowledge-hub-article", {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.seoDescription,
      datePublished: article.publishedOn,
      author: {
        "@type": "Organization",
        name: "CoatingBazaar"
      },
      publisher: {
        "@type": "Organization",
        name: "CoatingBazaar"
      },
      keywords: article.keywords.join(", "),
      mainEntityOfPage: `${window.location.origin}/knowledge-hub/${article.slug}`
    });

    if (article.faq?.length) {
      setJsonLd("knowledge-hub-faq", {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      });
    } else {
      removeJsonLd("knowledge-hub-faq");
    }

    return () => {
      removeJsonLd("knowledge-hub-article");
      removeJsonLd("knowledge-hub-faq");
    };
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <h1 className="text-3xl font-bold text-foreground">Article not found</h1>
            <p className="mt-3 text-muted-foreground">
              The article you are looking for does not exist or has been moved.
            </p>
            <Button asChild className="mt-6">
              <Link to="/knowledge-hub">Back to Knowledge Hub</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container py-10 md:py-14">
        <article className="mx-auto max-w-4xl">
          <header className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="secondary">{article.category}</Badge>
              <span>{article.readTime}</span>
              <span>{new Date(article.publishedOn).toLocaleDateString()}</span>
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{article.title}</h1>
            <p className="mt-3 text-base leading-7 text-muted-foreground">{article.summary}</p>
          </header>

          <section className="mt-8 space-y-8 rounded-2xl border border-border bg-card p-6 md:p-8">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-base leading-7 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </section>

          {article.faq && article.faq.length > 0 && (
            <section className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>
              <div className="mt-4 space-y-4">
                {article.faq.map((item) => (
                  <section key={item.question} className="rounded-lg border border-border p-4">
                    <h3 className="text-lg font-medium text-foreground">{item.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.answer}</p>
                  </section>
                ))}
              </div>
            </section>
          )}

          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/knowledge-hub">Explore more articles</Link>
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default KnowledgeHubArticlePage;

