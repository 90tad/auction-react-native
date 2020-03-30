const BASE_URL = 'http://103.74.116.95:8084/account/';
export const Url = {
  SIGN_IN: `${BASE_URL}public/Account/mobile/login`,
  GET_DISPLAY_NAME: `${BASE_URL}auth/user/Account/displayName`,
  GET_AUTHORITIES: `${BASE_URL}auth/user/Authority/getAuthorities`,
  GET_AVATAR_ID: `${BASE_URL}auth/user/Avartar/getDefault`, //TODO: fix typo
};
