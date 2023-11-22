import { Mode } from '../types';

export const getAllModes = async (): Promise<Mode[]> => {
    return fetch('https://60816d9073292b0017cdd833.mockapi.io/modes', // the url should be on .env
        {
            method: 'GET'
        })
        .then(response => response.json())
        .catch(error => console.error('Error occurred on getting modes: ', error));
};
