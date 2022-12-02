import profiles from './assets/profils.json';


export const getProfiles = () => {
    
    const profiles = JSON.parse(localStorage.getItem('profiles') || "[]");

    console.log(profiles)

    if (profiles !== null && profiles.profils !== undefined) {
        return profiles.profils;
    } else {
        return [];
    }
    
}