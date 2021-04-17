import { BASEURL } from '../utils/constants';

export const apiGetCharacter = () => {

    const url = BASEURL;

    return fetch(url)
        .then(response => response.json());
};
