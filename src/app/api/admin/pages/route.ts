import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const pages = await prisma.page.findMany({
    orderBy: { updatedAt: "desc" },
  });
  return NextResponse.json({ pages });
}

export async function POST(req: Request) {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const page = await prisma.page.create({
    data: {
      slug: body.slug,
      title: body.title,
      status: body.status || "draft",
      seoTitle: body.seoTitle || null,
      seoDesc: body.seoDesc || null,
      canonicalUrl: body.canonicalUrl || null,
      body: body.body || [],
    },
  });

  return NextResponse.json({ page });
}
