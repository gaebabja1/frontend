import React, { Component } from 'react';
import StockService from '../service/StockService';

class ListStockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            boards: []
        }
		
    }
  
    componentDidMount() {
        StockService.getStocks().then((res) => {
            this.setState({ staocks: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Stocks List</h2>
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>운용사</th>
                                <th>서브운용사 </th>
                                <th>종목 </th>
                                <th>펀드 </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.stocks.map(
                                    stock => 
                                    <tr key = {stock.imc}>
                                        <td> {stock.imc} </td>
                                        <td> {stock.sub_imc} </td>
                                        <td> {stock.item} </td>
                                        <td> {stock.fund} </td>   
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListStockComponent;