import { defineStore } from "pinia"
import {getProfiles} from '../profiles';

import {proxyPrint} from "../utils"

export const useProfileStore = defineStore('profiles', {
    state: () => ({
        profiles: getProfiles(),
        profilesSwiped: 0,
        STDsContracted: 0,
        STDsDodged: 0,
        timesGottenLaidSafely: 0,
    }),
    actions: {
        matchProfile(matched: boolean) {

            if (this.profilesSwiped > this.profiles.length - 1) {
                return;
            }

            this.profiles[this.profiles.length - this.profilesSwiped - 1].matched = matched;
            this.profiles[this.profiles.length - this.profilesSwiped - 1].swiped = true;

            const hasSTD = this.profiles[this.profilesSwiped].answer;

            this.profilesSwiped += 1;
        
            
            if (matched && hasSTD) {
                this.STDsContracted++;
                return ["STD",this.profiles[this.profilesSwiped].explication];
            } else if (matched && !hasSTD) {
                this.timesGottenLaidSafely++;
                return ["SEX",this.profiles[this.profilesSwiped].explication];
            } else if (!matched && !hasSTD) {
                return ["",""];
            } else {
                this.STDsDodged++;
                return ["DODGE",this.profiles[this.profilesSwiped].explication];
            }
        }
    }
});