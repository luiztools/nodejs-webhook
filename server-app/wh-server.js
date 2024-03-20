const axios = require("axios");

const webhooks = {
    1: "http://localhost:3001/webhook",
    2: "http://localhost:3002/url-personalizada",
    3: "http://localhost:3003/url-aleatoria"
};

module.exports = (order) => {
    const url = webhooks[order.produto];
    return axios.post(url, order);
}