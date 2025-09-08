import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { SafeUser } from "../types";
import useLoginModal from "./useLoginModal";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;
        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
          setTimeout(() => {
            toast.success("Removed from favorites");
          }, 500);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
          setTimeout(() => {
            toast.success("Added to favorites");
          }, 500);
        }

        await request();
        router.refresh();
      } catch (error) {
        console.log("error", error);
        toast.error("Something went wrong");
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, router]
  );
  return { hasFavorited, toggleFavorite };
};

export default useFavorite;
