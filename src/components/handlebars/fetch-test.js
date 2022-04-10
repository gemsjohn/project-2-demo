export const owener_fetch = function() {
    var apiUrl_heroku = "https://pacific-depths-79804.herokuapp.com/api/owners";
    fetch(apiUrl_heroku)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    
                });
            } else {
                alert("Error: " + response.statusText)
            }
        })
        .catch(function(error) {
            alert("Unable to connect to Google Auth");
        });
};