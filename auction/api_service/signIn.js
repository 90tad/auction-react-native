import {Url} from './Url';

let AUTHORITY_HEADER = {
    Accept: '*/*',
    Authorization: '',
};

const HEADER = {
    Accept: 'application/json',
    'Content-type': 'application/json',
};

let currentUser = {};

export const signIn = async function () {
    const input = JSON.stringify({username: 'admin', password: '12345678'});
    const requestConfig = {
            method: 'POST',
            headers: HEADER,
            body: input,
        }
    ;
    try {
        const response = await fetch(Url.SIGN_IN, requestConfig);
        const responseJson = await response.json();
        AUTHORITY_HEADER.Authorization = `Bearer ${responseJson.token}`;
        await setCurrentUser(responseJson);
        await getDisplayName()
            .then(responseJson => currentUser.displayName = responseJson.displayName);
        await getAuthorities()
            .then(responseJson => currentUser.authorities = responseJson);
        await getCurrentUserAvatarUrl()
            .then(imgUrl => setCurrentUserAvatarUrl(imgUrl));
        await console.log(`currentUser: ${JSON.stringify(currentUser)}`);
        return currentUser;
    } catch (e) {
        throw e;
    }
};

async function getCurrentUserAvatarUrl() {
    const url = Url.GET_AVATAR_ID;
    const requestConfig = {
        method: 'GET',
        headers: AUTHORITY_HEADER,
    };
    const response = await fetch(url, requestConfig);
    const responseJson = await response.json();
    const idUpload = responseJson.idUpload;
    return `http://103.74.116.95:8090/auctions-upload-file/api/public/upload/Picture/image?id=${idUpload}`;
}

async function getDisplayName() {
    const url = Url.GET_DISPLAY_NAME;
    const requestConfig = {
        method: 'GET',
        headers: AUTHORITY_HEADER,
    };
    const response = await fetch(url, requestConfig);
    return await response.json();
}

async function getAuthorities() {
    const url = Url.GET_AUTHORITIES;
    const requestConfig = {
        method: 'GET',
        headers: AUTHORITY_HEADER,
    };
    const response = await fetch(url, requestConfig);
    return await response.json();
}

async function setCurrentUser(obj) {
    currentUser = obj;
}

async function setCurrentUserAvatarUrl(url) {
    currentUser.avatarUrl = url;
}
