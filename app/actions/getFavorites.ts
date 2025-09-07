import prisma from "@/app/libs/prismadb";
import getListings from "./getListings";

export default async function getFavorites(userId: string) {
  const listings = await getListings();

  try {
    const user = await prisma.user.findMany({
      where: {
        id: userId,
      },
    });

    return listings.filter((listing) =>
      user[0]?.favoriteIds?.includes(listing.id)
    );
  } catch (error) {
    throw new Error(error as any);
  }
}
