export type AuthPayload = {
  name: string;
  email: string;
  given_ame: string;
  family_Name: string;
  picture: string;
  sub: string;
};

type Address = {
  street: string;
  city: string;
  suite: string;
  zipCode: string;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  website: string;
  phone: string;
  address: Address;
  company: Company;
};

export type Album = {
  id: number;
  userId: number;
  title: string;
};

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
