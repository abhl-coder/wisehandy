import { prisma } from "@/lib/db";

export async function getPageBySlug(slug: string) {
  try {
    return await prisma.page.findUnique({ where: { slug } });
  } catch {
    return null;
  }
}

export async function getMenuByLocation(location: string) {
  try {
    return await prisma.menu.findFirst({
      where: { location },
      include: { items: { orderBy: { order: "asc" } } },
    });
  } catch {
    return null;
  }
}
