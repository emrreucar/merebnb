import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import React from "react";
import ListingClient from "./ListingClient";
import { SafeListing, SafeUser } from "@/app/types";
import getReservations from "@/app/actions/getReservations";

interface IParams {
  listingId?: string;
}

const SingleListingPage = async ({ params }: { params: Promise<IParams> }) => {
  const { listingId } = await params;
  const listing = await getListingById(listingId as IParams);
  const reservations = await getReservations(listingId as IParams);
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
