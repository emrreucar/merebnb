import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import { SafeUser } from "../types";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getListings({
    userId: currentUser?.id,
  });

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subtitle="Please login to view your trips"
        />
      </ClientOnly>
    );
  }

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="Looks like you haven't listed any properties."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient
        listings={listings}
        currentUser={currentUser as SafeUser | null}
      />
    </ClientOnly>
  );
};

export default PropertiesPage;
