// Primary dependencies
import React from "react";
import Handlebars from 'handlebars';

// Set up the Pet Card template
const template = Handlebars.registerPartial(
    'pets-card',
    `<div class="card mr-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ this.pet_name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ this.pet_type }}</h6>
            <p class="card-text">{{ this.description }}</p>
        </div>
        <button class="btn btn-lg btn-success" type="button" data-toggle="modal" data-target="#exampleModal">New job</button>
    </div>`
);

// Export the Pet Cards using the template
export const Petscard = () => {
    return (
        <div
            dangerouslySetInnerHTML={{__html: template}}
        />
    )
}