import React, {Component} from 'react';
import "./Average.css";

class Overview extends Component {


    callAPI() {
        fetch("http://localhost:1337/")
            .then(res => res.json())
            .then(data => this.setState({table: data}))
            .catch(err => err);
    }

    constructor(props) {
        super(props);
        this.state = {
            table: [],
        };

    }


    componentDidMount() {
        this.callAPI();
        try {
            setInterval(async () => {
                this.callAPI();
            }, 2000)
        } catch (e) {
            console.log(e);
        }

    }

    render() {


        const {table} = this.state;
        var sumPhone = 0;
        var sumSolar = 0;
        var sumTV = 0;
        var sumLaptop = 0;
        var sumTotal = sumSolar + sumLaptop + sumTV + sumPhone;
        table.forEach(e => {
            sumPhone+= e.handy;
            sumSolar+= e.solar_modul;
            sumTV+= e.fernseher;
            sumLaptop+= e.laptop;
        });
        var sumTotal = sumSolar + sumLaptop + sumTV + sumPhone;
        const sum = {
            fontWeight: "bold",
            color: sumTotal>100 ? "red"  : "green",
        };

        return (
            <div>
                <h1> Consumption Profile</h1>
                <table>
                    <tr>
                        <th>Device</th>
                        <th> Consumption last 30 minutes</th>
                    </tr>
                    <tr>
                        <td>Phone </td>
                        <td>{(sumPhone)} </td>
                    </tr>
                    <tr>
                        <td>TV </td>
                        <td>{(sumTV)} </td>
                    </tr>
                    <tr>
                        <td>Laptop </td>
                        <td>{(sumLaptop)} </td>
                    </tr>
                    <tr>
                        <td>Solar </td>
                        <td>{(sumSolar)} </td>
                    </tr>
                    <tr style = {sum}>
                        <td>Total consumption </td>
                        <td>{(sumTotal)} </td>
                    </tr>
                </table>

            </div>
        );

    }

}

export default Overview
