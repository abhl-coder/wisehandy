import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const menu = await prisma.menu.findFirst({
    where: { location: "main" },
    include: { items: { orderBy: { order: "asc" } } },
  });

  return NextResponse.json({ menu });
}

export async function PUT(req: Request) {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const items = Array.isArray(body.items) ? body.items : [];

  const menu =
    (await prisma.menu.findFirst({ where: { location: "main" } })) ||
    (await prisma.menu.create({
      data: { name: "Main Menu", location: "main" },
    }));

  await prisma.menuItem.deleteMany({ where: { menuId: menu.id } });
  await prisma.menuItem.createMany({
    data: items.map((i: any, idx: number) => ({
      menuId: menu.id,
      label: i.label,
      url: i.url,
      order: idx,
    })),
  });

  return NextResponse.json({ ok: true });
}
