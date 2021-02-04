/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// AXIOS API CALL FROM DATABASE
export default {
    search: function() {
        return axios.get("https://randomuser.me/api/?seed=foobar&results=30&inc=picture,name,phone,email,dob");
    }
};