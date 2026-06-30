import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  articleCategories,
  type ArticleCategoryFilter,
  knowledgeHubArticles
} from "@/data/articles";
import { removeJsonLd, setJsonLd, setSeoMetadata } from "@/lib/seo";

const KnowledgeHubPage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ArticleCategoryFilter>("All");

  useEffect(() => {
    setSeoMetadata({
      title: "Paint Knowledge Hub | CoatingBazaar",
      description:
        "Explore practical paint and coating articles on industrial finishing, decorative paints, VOC compliance, and surface preparation.",
      keywords: ["paint knowledge hub", "coating articles", "paint blog", "industrial paints"],
      canonicalPath: "/knowledge-hub"
    });

    setJsonLd("knowledge-hub-blog", {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "CoatingBazaar Knowledge Hub",
      description:
        "Technical articles and practical guides on paints, coatings, and surface preparation.",
      url: `${window.location.origin}/knowledge-hub`
    });

    return () => {
      removeJsonLd("knowledge-hub-blog");
    };
  }, []);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return knowledgeHubArticles.filter((article) => {
      const categoryMatch = category === "All" || article.category === category;

      if (!normalizedQuery) return categoryMatch;

      const queryMatch =
        article.title.toLowerCase().includes(normalizedQuery) ||
        article.summary.toLowerCase().includes(normalizedQuery) ||
        article.keywords.some((keyword) => keyword.toLowerCase().includes(normalizedQuery));

      return categoryMatch && queryMatch;
    });
  }, [category, query]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container py-10 md:py-14">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Knowledge Hub</h1>
          <p className="mt-3 text-muted-foreground">
            Practical blogs and articles about paints, coatings, and smarter specification decisions.
          </p>
        </header>

        <section className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-[1fr_auto]">
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by topic, keyword, or coating type"
            aria-label="Search articles"
          />

          <div className="flex flex-wrap items-center gap-2 md:justify-end">
            {articleCategories.map((item) => (
              <Button
                key={item}
                size="sm"
                variant={category === item ? "default" : "outline"}
                onClick={() => setCategory(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-8 grid max-w-6xl gap-5 md:grid-cols-2" aria-label="Articles list">
          {filteredArticles.map((article) => (
            <article key={article.slug}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span>{article.readTime}</span>
                    <span>{new Date(article.publishedOn).toLocaleDateString()}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                  <CardDescription className="text-sm leading-6">{article.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild>
                    <Link to={`/knowledge-hub/${article.slug}`}>Read article</Link>
                  </Button>
                </CardContent>
              </Card>
            </article>
          ))}
        </section>

        {filteredArticles.length === 0 && (
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-border bg-card p-6 text-center">
            <h2 className="text-lg font-semibold text-foreground">No matching article found</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a broader keyword like epoxy, primer, powder coating, or VOC.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default KnowledgeHubPage;


