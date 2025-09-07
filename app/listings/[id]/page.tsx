import React from "react";

const SingleListingPage = ({ params }: { params: { id: string } }) => {
  return <div>Single Listing Page {params.id}</div>;
};

export default SingleListingPage;
