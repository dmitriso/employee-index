import axios from "axios";

// AXIOS API CALL FROM DATABASE
export default {
    search: () => axios.get("https://randomuser.me/api/?results=40")
};