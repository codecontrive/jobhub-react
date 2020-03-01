export class User {
  constructor(
    firstName = "",
    lastName = "",
    profilePicture = "https://via.placeholder.com/150C/"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profilePicture = profilePicture;
  }
}
