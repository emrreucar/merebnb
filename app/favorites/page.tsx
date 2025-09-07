import React from "react";
import Container from "../components/Container";
import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorites";
import { SafeUser } from "../types";
import ListingCard from "../components/listings/ListingCard";
import { Listing } from "../generated/prisma";

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();

  const favorites = await getFavorites(currentUser?.id as SafeUser["id"]);

  console.log("favoriteListings -> ", favorites);

  return (
    <Container>
      <h1 className="text-neutral-800 font-bold text-4xl">My Favorites</h1>
      <div
        className="
        pt-6
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      "
      >
        {favorites?.map((fav) => (
          <ListingCard
            key={fav.id}
            currentUser={currentUser as SafeUser}
            data={fav}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesPage;
