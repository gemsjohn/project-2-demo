// Primary dependencies
import React from "react";
import Handlebars from 'handlebars';
import { getUserData, userSession } from '../../../auth';
import { job_details } from '../fetch';




const pullJobs = () => {
    const stxAddress = getUserData().profile.stxAddress.mainnet;
    const str_stxAddress = JSON.stringify(stxAddress);
    console.log(job_details(str_stxAddress))
    return job_details(str_stxAddress);
}

{!userSession.isUserSignedIn() ? console.log("NOT SIGNED INNNN") : pullJobs()}

// Set up the Job Card template
const template = Handlebars.registerPartial(
    'jobs-card',
        `<div class="card mb-2">
            <div class="card-body">
                <h4 class="card-title">${pullJobs().j_owner_first_name} ${pullJobs().j_owner_last_name}</h5>
                <h5 class="card-text">Pet: ${pullJobs().j_pet_name}</h5>
                <h5 class="card-subtitle">Visit: {{#if walk }}Walk{{/if}}{{#if check_in }}Check-In{{/if}}</h6>
                <h5 class="card-text">Pay: ${pullJobs().j_pay}</h5>
                <h6 class="card-text text-muted">Time: ${pullJobs().j_timefrime}</h6>
                <h6 class="card-text text-muted">Location: ${pullJobs().j_location}</h6>
            </div>
        </div>`
);

// Export the Job Cards using the template
export const Jobscard = () => { 
    return (
        <div
            dangerouslySetInnerHTML={{__html: template}}
        />
    )
}