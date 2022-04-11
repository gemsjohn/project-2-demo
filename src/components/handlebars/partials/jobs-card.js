// Primary dependencies
import React from "react";
import Handlebars from 'handlebars';
import { getUserData, userSession } from '../../../auth';
import { job_details } from '../fetch';

// Pull jobs based on the users stxAddress. This function reviews the /api/jobs DB and searches
// for an owner_id that equals the users stxAddress (the unique id that corresponds to their Hiro Web Wallet account)
const pullJobs = () => {
    const stxAddress = getUserData().profile.stxAddress.mainnet;
    const str_stxAddress = JSON.stringify(stxAddress);
    console.log(job_details(str_stxAddress))
    return job_details(str_stxAddress);
}

// Terenary operator: {condition ? expression if TRUE : expression if FALSE}
// If the user IS NOT signed in then console log "NOT SIGNED IN!"
// If the user IS signed in then run the pullJobs() function
{!userSession.isUserSignedIn() ? console.log("NOT SIGNED IN!!!!") : pullJobs()}

// Set up the Job Card template
// const template = Handlebars.registerPartial(
//     'jobs-card',
//         `<div class="card mb-2">
//             <div class="card-body">
//                 <h4 class="card-title">${pullJobs().j_owner_first_name} ${pullJobs().j_owner_last_name}</h5>
//                 <h5 class="card-text">Pet: ${pullJobs().j_pet_name}</h5>
//                 <h5 class="card-subtitle">Visit: {{#if walk }}Walk{{/if}}{{#if check_in }}Check-In{{/if}}</h6>
//                 <h5 class="card-text">Pay: ${pullJobs().j_pay}</h5>
//                 <h6 class="card-text text-muted">Time: ${pullJobs().j_timefrime}</h6>
//                 <h6 class="card-text text-muted">Location: ${pullJobs().j_location}</h6>
//             </div>
//         </div>`
// );

const template = Handlebars.registerPartial(
    'jobs-card',
        `<div class="card mb-2">
            <div class="card-body">
                <h4 class="card-title">Placeholder Name</h5>
                <h5 class="card-text">Pet: Placeholder Pet Name</h5>
                <h5 class="card-subtitle">Visit: {{#if walk }}Walk{{/if}}{{#if check_in }}Check-In{{/if}}</h6>
                <h5 class="card-text">Pay: Placeholder Pay</h5>
                <h6 class="card-text text-muted">Time: Placeholder Time</h6>
                <h6 class="card-text text-muted">Location: Placeholder location</h6>
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