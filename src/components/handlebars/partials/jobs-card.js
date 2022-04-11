// Primary dependencies
import React from "react";
import Handlebars from 'handlebars';

// Set up the Job Card template
const template = Handlebars.registerPartial(
    'jobs-card',
        `<div class="card mb-2">
            <div class="card-body">
                <h4 class="card-title">TEST</h5>
                <h5 class="card-subtitle mb-2 text-muted">Visit: Walk</h6>
                <h5 class="card-text">Pay: $35</h5>
                <h6 class="card-text text-muted">Time: 4/6/2022 at 3:00pm</h6>
                <h6 class="card-text text-muted">Location: 1234 Big Dog Ct, Raleigh, NC, 27103</h6>
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