
const apiUrl_heroku = "http://localhost:3001/api/owners";
    fetch(apiUrl_heroku)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    // console.log(data);
                    owner_fetch(data);
                });
            } else {
                alert("Error: " + response.statusText)
            }
        })
        .catch(function(error) {
            alert("Unable to connect to Google Auth");
        });

export const owner_fetch = function(data) {
    // const test = {
    //     id: data[0].id,
    //     first_name: data[0].first_name,
    //     last_name: data[0].last_name,
    //     email: data[0].email,
    //     password: data[0].password
    // };
    return (
        data
    )
};