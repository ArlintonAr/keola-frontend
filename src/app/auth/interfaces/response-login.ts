export interface ResponseLogin {
  access_Token:   string;
  token_Type:     string;
  expires_in:     number;
  dateExpire:     Date;
  refreshToken:   null;
  message:        null;
  userDataUpdate: UserDataUpdate;
}

export interface UserDataUpdate {
  numberMonthsRegistration: number;
  requestDataUpdate:        boolean;
  description:              string;
  equalData:                number;
  isSuccess:                boolean;
}
