import axios from 'axios';

export const getUsers = async () => {
    const response = await axios.get("https://randomuser.me/api");
    return await response.data.results;
}