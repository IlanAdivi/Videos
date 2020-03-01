import axios from 'axios';

const KEY = `AIzaSyCGIG3m1hDfrhUwgkPUB2krn6I-Oprqe8Y`;

export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`,
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
})