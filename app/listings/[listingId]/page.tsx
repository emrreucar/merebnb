import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import React from "react";
import ListingClient from "./ListingClient";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { Listing } from "@/app/generated/prisma";
import getReservations from "@/app/actions/getReservations";

interface IParams {
  listingId?: string;
}

const SingleListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ListingClient
      listing={listing as SafeListing & { user: SafeUser }}
      reservations={reservations}
      currentUser={currentUser as SafeUser | null}
    />
  );
};

export default SingleListingPage;
