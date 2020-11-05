import React, {Component} from 'react';
import "./MeasurementTable.css";

class MeasurementTable extends Component {


    callAPI() {
        fetch("https://mobileplatforms.herukoapp.com/")
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

    return (
        <div>
            <h1> Power Consumption Table </h1>
            <table>
                <tr>
                    <th>Time</th>
                    <th>Car</th>
                    <th>Washing machine</th>
                    <th>TV</th>
                    <th>Laptop</th>
                    <th>Solar</th>
                </tr>

                <tbody>{table.map(t => (
                    <tr>
                        <td>{t.timestamp} </td>
                        <td>{t.car} </td>
                        <td>{t.washing_machine} </td>
                        <td>{t.fernseher} </td>
                        <td>{t.laptop} </td>
                        <td>{t.solar_modul} </td>

                    </tr>
                ))}</tbody>
            </table>




        </div>
    );

}

}

export default MeasurementTable
/// test
