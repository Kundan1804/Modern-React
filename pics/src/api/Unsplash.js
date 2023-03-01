import axios from "axios"

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID Ds8ILwMH0TPaIT6tBrojBr3RZc6FPtPAXby3IPqIwUQ'
      }
});