import { User } from "./User";

export class Worker extends User {
  constructor(
    firstName = "",
    lastName = "",
    profession = "",
    profilePicture = "https://via.placeholder.com/150C/"
  ) {
    super(firstName, lastName, profilePicture);
    this.profession = profession;
  }
}
