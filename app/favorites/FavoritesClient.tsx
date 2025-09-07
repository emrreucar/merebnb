import React from "react";
import Container from "../components/Container";
import { SafeUser } from "../types";
import ListingCard from "../components/listings/ListingCard";
import Heading from "../components/Heading";

interface FavoritesClientProps {
  favorites: any[];
  currentUser: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  favorites,
  currentUser,
}) => {
  return (
    <Container>
      <Heading
        title="Favorites"
        subTitle="List of places you have favorited!"
      />

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

export default FavoritesClient;
