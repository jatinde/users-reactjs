import axios from 'axios';

export const getUsers = async () => {
    const response = await axios.get("https://randomuser.me/api");
    console.log(response.data.results);
    return await response.data.results;
}