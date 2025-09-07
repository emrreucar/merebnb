import prisma from "@/app/libs/prismadb";
import getListings from "./getListings";
import getCurrentUser from "./getCurrentUser";

export default async function getFavorites(userId: string) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return [];
  }

  try {
    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });

    const safeFavorites = favorites.map((favorite) => ({
      ...favorite,
      createdAt: favorite.createdAt.toISOString(),
    }));

    return safeFavorites;
  } catch (error) {
    throw new Error(error as any);
  }
}
