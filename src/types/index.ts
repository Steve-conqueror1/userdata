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
  id: string;
  name: string;
  email: string;
  username: string;
  website: string;
  phone: string;
  address: Address;
  company: Company;
};
