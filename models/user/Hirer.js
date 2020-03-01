import { User } from "./User";

export class Hirer extends User {
  constructor(
    firstName = "",
    lastName = "",
    company = "",
    profilePicture = "https://via.placeholder.com/150C/"
  ) {
    super(firstName, lastName, profilePicture);
    this.company = company;
  }
}
