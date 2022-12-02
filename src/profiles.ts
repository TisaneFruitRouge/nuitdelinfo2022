import profilesJSON from './assets/profiles.json';

export const getProfiles = () => {
    
    const profiles = JSON.parse(localStorage.getItem('profils') || JSON.stringify(profilesJSON));

    if (profiles !== null && profiles.profils !== undefined) {
        return profiles.profils;
    } else {
        return [];
    }
    
}