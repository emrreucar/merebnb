import React from "react";
import Container from "../components/Container";
import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorites";
import { SafeUser } from "../types";
import ListingCard from "../components/listings/ListingCard";
import Heading from "../components/Heading";
import Button from "../components/Button";
import EmptyState from "../components/EmptyState";

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();

  const favorites = await getFavorites(currentUser?.id as SafeUser["id"]);

  if (!currentUser) return null;
  return (
    <Container>
      {favorites.length !== 0 && (
        <h1 className="text-neutral-800 font-bold text-4xl">My Favorites</h1>
      )}

      {favorites.length === 0 && (
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorites yet."
        />
      )}
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
