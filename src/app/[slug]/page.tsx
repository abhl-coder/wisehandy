import SiteLayout from "@/components/SiteLayout";
import PageRenderer from "@/components/PageRenderer";
import { getPageBySlug } from "@/lib/content";
import { notFound } from "next/navigation";

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page || page.status !== "published") {
    notFound();
  }

  return (
    <SiteLayout>
      <PageRenderer blocks={page.body as any} />
    </SiteLayout>
  );
}
