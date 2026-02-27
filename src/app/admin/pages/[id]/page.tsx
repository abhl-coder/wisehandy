import { prisma } from "@/lib/db";
import EditPageForm from "./ui";

export const dynamic = "force-dynamic";

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const page = await prisma.page.findUnique({ where: { id } });

  if (!page) return <div>Page not found.</div>;

  return <EditPageForm page={page} />;
}
