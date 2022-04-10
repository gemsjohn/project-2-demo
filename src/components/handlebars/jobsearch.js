// Primary dependencies
import React from 'react';
import Handlebars from 'handlebars';

// Import partials
import { Navblock } from './partials/nav-block';
import { Jobscard } from './partials/jobs-card';

// Set up the Job Search Dashboard template
const template = Handlebars.compile(`
    {{> nav-block}}
    <div class="row justify-content-center mt-5">
        <div class="col-12 col-md-10 col-lg-8 mt-5">
            {{!-- <div class="col-auto">
                <button class="btn btn-success" type="submit">Search</button>
            </div> --}}
            <h1 id="jobs-in-area">Showing jobs in your area</h1>
            <div class="mt-2">
                {{> jobs-card jobs}}
            </div>
        </div>
    </div>
`);

// Export the Job Search Dashboard using the template and the partials
export const Jobsearch = () => {
    return (
        <div
        dangerouslySetInnerHTML={{__html: template(Navblock, Jobscard)}}
      />
    );
};