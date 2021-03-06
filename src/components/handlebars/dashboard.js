// Primary dependencies
import React from 'react';
import Handlebars from 'handlebars';

// Import partials
import { Petscard } from './partials/pets-card';
import { Jobscard } from './partials/jobs-card';
import { Navblock } from './partials/nav-block';
import { CreateJob } from './partials/modal/create-job';

// import { owner_fetch } from './fetch-test';

// Set up the Owner Dashboard template
const template = Handlebars.compile(`
    {{> nav-block}}

    <div class="dashboard-container">
        <h1 id="your-dashboard" class="text-center">Your Dashboard</h1>
        
        <div id="pets-container" class="d-flex flex-column mx-auto" style="width: 92%;">
            <h1>Your Pets</h1>
            <div id="pet-cards" class="d-flex flex-row">

                {{> pets-card ownersPets}}

                <form class="create-pet-form card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Add a Pet</h5>
                        <div class="form-outline">
                            <input type="text" name="pet-name" class="form-control" placeholder="Pet Name"/>
                            <label class="form-label" for="fist-name"></label>
                        </div>
                        <div class="form-outline">
                            <input type="text" name="pet-type" class="form-control" placeholder="Breed"/>
                            <label class="form-label" for="pet-name"></label>
                        </div>
                        <textarea id="about-pet-input" class="card-subtitle mb-2 text-muted form-outline" name="about-pet" placeholder="About your pet"></textarea>
                    </div>
                    <div>
                        <button class="float-right mr-3 mb-3 btn success" type="submit">Confirm</button>
                    </div>
                </form>

            </div>  
        </div>
        
        <div id="jobs-container" class="d-flex flex-column mx-auto" style="width: 92%;">

            <div class="d-flex flex-row justify-content-between mt-2">
                <h1>Job Postings</h2>
            </div>

            <div class="tabbable">
                
                <ul class="nav nav-tabs">
                    <li class="active nav-item">
                        <a class="nav-link active job-tab current-jobs-tab" href="#tab1" data-toggle="tab">Current posts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link job-tab past-jobs-tab" href="#tab2" data-toggle="tab">Past posts</a>
                    </li>
                </ul>

                <div class="tab-content">
                    <div class="tab-pane active" id="tab1">
                        <p>List of current jobs</p>
                        {{> jobs-card jobs}}
                    </div>
                    <div class="tab-pane" id="tab2">
                        <p>List of past jobs</p>
                        {{> jobs-card completedJobs }}
                    </div>
                </div>

            </div>  
        </div>     
    </div>

    <script src="/javascript/create-pet.js"></script>
    <script src="/javascript/create-job.js"></script>


    {{> modal/create-job }}
`);

// Export the Owner Dashboard using the template and the partials
export const Dashboard = () => {  
    return (
        <div
        dangerouslySetInnerHTML={{__html: template(Navblock, Petscard, Jobscard, CreateJob)}}
      />
    );
};


