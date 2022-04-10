// Primary dependencies
import React from "react";
import Handlebars from 'handlebars';

// import { owner_fetch } from '../fetch-test';

let ownerName = "REPLACE";

const apiUrl_heroku = "http://localhost:3001/api/owners";
    fetch(apiUrl_heroku)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    // console.log(data);
                    // Jobscard(data);
                    test(data);
                });
            } else {
                alert("Error: " + response.statusText)
            }
        })
        .catch(function(error) {
            alert("Unable to connect to Google Auth");
        });

const test = (data) => {
    
    console.log(data[0].first_name);
    ownerName = data[0].first_name;
    console.log(ownerName);
    return ownerName;
}

// Set up the Job Card template
const template = Handlebars.registerPartial(
    'jobs-card',
        `<div class="card mb-2">
            <div class="card-body">
                <h4 class="card-title">${ownerName}</h5>
                <h5 class="card-subtitle mb-2 text-muted">Visit: Walk</h6>
                <h5 class="card-text">Pay: $35</h5>
                <h6 class="card-text text-muted">Time: 4/6/2022 at 3:00pm</h6>
                <h6 class="card-text text-muted">Location: 1234 Big Dog Ct, Raleigh, NC, 27103</h6>
            </div>
        </div>`
);

// Export the Job Cards using the template
export const Jobscard = () => {
    // owner_fetch(); // This is just for testing purposes, when logging in as an owner check the console log
    return (
        <div
            dangerouslySetInnerHTML={{__html: template}}
        />
    )
}