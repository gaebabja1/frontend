import axios from 'axios';

const BOARD_API_URL = "http://localhost:8080/api/stocks"; 

class StockService {

    getStocks() {
        return axios.get(STOCK_API_URL);
    }
}

export default new StockService();