import axios from 'axios';
export const owner_details = () => {
    let o_user_id;
    let o_first_name;
    let o_last_name;
    let o_email;

    async function myFunction() {
        const res = await axios.get(`https://pacific-depths-79804.herokuapp.com/api/owners`);
        // may need a for loop here to cycle through the data
        o_user_id = res.data[1].id;
        o_first_name = res.data[1].first_name;
        o_last_name = res.data[1].last_name;
        o_email = res.data[1].email;
        localStorage.setItem('o_user_id', o_user_id);
        localStorage.setItem('o_first_name', o_first_name);
        localStorage.setItem('o_last_name', o_last_name);
        localStorage.setItem('o_email', o_email);
    }
    myFunction();
    let o_local_user_id = localStorage.getItem('o_user_id');
    let o_local_first_name = localStorage.getItem('o_first_name');
    let o_local_last_name = localStorage.getItem('o_last_name');
    let o_local_email = localStorage.getItem('o_email');

    return {
        o_id: o_local_user_id,
        o_first_name: o_local_first_name,
        o_last_name: o_local_last_name,
        o_email: o_local_email,
    }
}
export const walker_details = () => {
    let w_user_id;
    let w_first_name;
    let w_last_name;
    let w_email;

    async function myFunction() {
        const res = await axios.get(`https://pacific-depths-79804.herokuapp.com/api/walkers`);
        // may need a for loop here to cycle through the data
        w_user_id = res.data[1].id;
        w_first_name = res.data[1].first_name;
        w_last_name = res.data[1].last_name;
        w_email = res.data[1].email;
        localStorage.setItem('w_user_id', w_user_id);
        localStorage.setItem('w_first_name', w_first_name);
        localStorage.setItem('w_last_name', w_last_name);
        localStorage.setItem('w_email', w_email);
    }
    myFunction();
    let w_local_user_id = localStorage.getItem('w_user_id');
    let w_local_first_name = localStorage.getItem('w_first_name');
    let w_local_last_name = localStorage.getItem('w_last_name');
    let w_local_email = localStorage.getItem('w_email');

    return {
        w_id: w_local_user_id,
        w_first_name: w_local_first_name,
        w_last_name: w_local_last_name,
        w_email: w_local_email,
    }
}