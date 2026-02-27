import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const params = await context.params;
  const body = await req.json();

  const page = await prisma.page.update({
    where: { id: params.id },
    data: {
      slug: body.slug,
      title: body.title,
      status: body.status,
      seoTitle: body.seoTitle || null,
      seoDesc: body.seoDesc || null,
      canonicalUrl: body.canonicalUrl || null,
      body: body.body || [],
    },
  });

  return NextResponse.json({ page });
}

export async function DELETE(
  _req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const params = await context.params;
  await prisma.page.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
