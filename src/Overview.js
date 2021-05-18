import React, {Component} from 'react';
import "./Overview.css";

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
        var sumCar = 0;
        var sumWashing = 0;
        var sumSolar = 0;
        var sumTV = 0;
        var sumLaptop = 0;
        //var sumtest = 80;


        table.forEach(e => {
            sumCar+= e.car;
            sumSolar+= e.solar_modul;
            sumTV+= e.fernseher;
            sumLaptop+= e.laptop;
            sumWashing+= e.washing_machine
        });

        var sumTotal = sumSolar + sumLaptop + sumTV + sumCar + sumWashing;

        const sum = {
            fontWeight: "bold",
            color: sumTotal>100 ? "red"  : "green",
        };

        const text1 = {
            display: sumTotal>200 ? "initial" : "none",
        }

        const text2 = {
            display: sumTotal>-199 && sumTotal<=199 ? "initial" : "none",
        }

        const text3 = {
            display: sumTotal<=-200 ? "initial" : "none",
        }

        return (
            <div>
                <h1> Consumption Profile</h1>
                <table>
                    <tr>
                        <th>Device</th>
                        <th> Consumption last 100 minutes</th>
                    </tr>
                    <tr>
                        <td>Car </td>
                        <td>{(sumCar)} </td>
                    </tr>
                    <tr>
                        <td>Washing machine </td>
                        <td>{(sumWashing)} </td>
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

                <div>
                    <p></p>
                    <p></p>
                    <h3 style = {text1}> Oh there is no sun! It would be better if you reduce your power consumption. </h3>
                    <h3 style = {text2}> Doing really great! You can leave everything like it is. </h3>
                    <h3 style = {text3}> It is so sunny. See if you can use all the power coming in. </h3>
                </div>
            </div>


        );

    }

}

export default Overview
