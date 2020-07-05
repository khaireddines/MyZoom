import axios from 'axios';


export default axios.create({
  baseURL: "https://"+window.location.hostname+"/",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Socket-Id': window.Echo.socketId()
  }
});
