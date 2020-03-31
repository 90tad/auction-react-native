const BASE_URL = 'http://103.74.116.95:8084/account/';
export const Url = {
    SIGN_IN: `${BASE_URL}public/Account/mobile/login`,
    GET_DISPLAY_NAME: `${BASE_URL}auth/user/Account/displayName`,
    GET_AUTHORITIES: `${BASE_URL}auth/user/Authority/getAuthorities`,
    GET_AVATAR_ID: `${BASE_URL}auth/user/Avartar/getDefault`, //TODO: fix typo
    GUEST_AVATAR_URL: 'https://res.cloudinary.com/techsnips/image/fetch/w_2000,f_auto,q_auto,c_fit/https://adamtheautomator.com/content/images/size/w2000/2019/10/user-1633249_1280.png',
};
