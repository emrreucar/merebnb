import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorites";
import { SafeUser } from "../types";
import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();

  const favorites = await getFavorites(currentUser?.id as SafeUser["id"]);

  if (!currentUser)
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subtitle="Please login to view your favorites"
        />
      </ClientOnly>
    );

  if (favorites.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorites yet."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient
        favorites={favorites}
        currentUser={currentUser as SafeUser}
      />
    </ClientOnly>
  );
};

export default FavoritesPage;
