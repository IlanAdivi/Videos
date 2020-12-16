import axios from 'axios';

const KEY = `AIzaSyBhA79ZVa9EwMVMlGzRP41Jmz9GeuxzByk`;

export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`,
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
})