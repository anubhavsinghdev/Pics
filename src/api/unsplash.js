import axios from 'axios';
export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID vSVoYbP4Ftv0Y61XT7-79utUOFnAmHD_v7oBm6kzWtU",
    }
}); 