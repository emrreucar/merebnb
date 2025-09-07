import { Listing, Reservation, User } from "../generated/prisma";

// omit -> type, key: tanımladığım type içerisinden çıkarttığım alanlar yani User tipi içinde bu 3 değeri çıkarttım onların yerine yeniden tip tanımladım

// & -> bu 2 alanı birleştirip yeni bir tip oluşturuyorum.

// type A = {name: string}
// type B = {age: number}

// type C  = A & B;

// type C = {name: string, age: number}

export type SafeUser = Omit<
  User,
  "created_at" | "updated_at" | "email_verified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};
