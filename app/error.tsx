"use client";

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorProps {
  error: Error;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  useEffect(() => {
    console.error("An error occurred:", error);
  }, [error]);

  return (
    <EmptyState
      title="Uh oh!"
      subtitle="Something went wrong. Please try again later."
    />
  );
};

export default Error;
