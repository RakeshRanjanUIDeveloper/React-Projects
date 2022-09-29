import axios from 'axios';

const KEY = 'AIzaSyDSzr0s4lltKKLuXmxtObKhW2Zs2eXG-ZM';

export default axios.create({
    baseURL :'https://www.googleapis.com/youtube/v3',
    params :{
        part:'snippet',
        type:'video',
        maxResults: 5,
        key:KEY
    }
})
