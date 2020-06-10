import axios from 'axios';


export default axios.create({
  baseURL: "http://"+window.location.hostname+"/",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});
