import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers :{
        Authorization:'Client-ID 8oMW8YH6KVf0rdyy89_xKsdUpFDRbzT3z9x5CzPlDvQ'
      }
})