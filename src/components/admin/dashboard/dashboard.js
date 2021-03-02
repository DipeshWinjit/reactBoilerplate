import React, { Component } from 'react';
import { getData } from '../../../services/adminApi';

class Dashboard extends Component {

    state = {
        array: []
    }

    componentDidMount() {
        this.getDataHandler();
    }

    getDataHandler = () => {
        getData().then(
            (response) => {
                console.log('getDataHandler', response)

                this.setState({
                    array: response.data
                })
            }
        )
    }

    render() {
        return (
            <div className="container">
                <h5>Dashboard</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.array.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row" >{i+1}</th>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                       
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}



export default Dashboard;