import axios from 'axios';

async function covidDataAPI() {
    try {
        const resp: Array<any> = await axios.get(`https://api.covid19api.com/summary`);
        return resp
    } catch (error) {
        return {
            status: 500,
            message: 'Falha de conexão com o Servidor!'
        }
    }
};

export default covidDataAPI;