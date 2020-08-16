export class UserLoginDetails {
  constructor(username, password, deviceToken, deviceType) {
    this.username = username;
    this.password = password;
    this.deviceToken = deviceToken;
    this.deviceType = deviceType;
  }

  getUserDetails() {
    return {
      username: this.username,
      password: this.password,
      deviceToken: this.deviceToken,
      deviceType: this.deviceType,
    };
  }
}
