// Primary dependencies
import React from 'react';
import Handlebars from 'handlebars';

// Import partials
import { Navblock } from './partials/nav-block';
import { Jobscard } from './partials/jobs-card';

// Set up the Walker Dashboard template
const template = Handlebars.compile(`
{{> nav-block}}

<div class="dashboard-container">
    <h1 id="your-dashboard" class="text-center">Walker Dashboard</h1>
    <div id="jobs-container" class="d-flex flex-column mx-auto" style="width: 92%;">
        <div class="tabbable">
            <ul class="nav nav-tabs">
                <li class="active nav-item">
                    <a class="nav-link active job-tab" href="#tab1" data-toggle="tab">Current posts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link job-tab" href="#tab2" data-toggle="tab">Past posts</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="tab1">
                    <p>List of current posts</p>
                    {{> jobs-card jobs}}
                </div>
                <div class="tab-pane" id="tab2">
                    <p>List of past jobs</p>
                    {{> jobs-card walkerJobsCompleted }}
                </div>
            </div>
        </div>  
    </div>     
</div>

<script src="/javascript/walker-dashboard.js"></script>
`);

// Export the Walker Dashboard using the template and the partials
export const WalkerDash = () => {
    return (
        <div
        dangerouslySetInnerHTML={{__html: template(Navblock, Jobscard)}}
      />
    );
};