import React, {Component} from 'react';
import "./MeasurementTable.css";

class MeasurementTable extends Component {


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
        const styleTable ={
            border: "1px solid black",
            padding: "10px"
        };
        const body = {
            color: "red",
            width: "100px"
        };

        const {table} = this.state;
        var sumPhone = 0;
        var sumSolar = 0;
        var sumTV = 0;
        var sumLaptop = 0;

        table.forEach(e => {
            sumPhone+= e.handy;
            sumSolar+= e.solar_modul;
            sumTV+= e.fernseher;
            sumLaptop+= e.laptop;
        });


        return (
            <div>
                <p> My Table Data</p>
                <table  style={styleTable}>
                    <thead>
                    <tr>
                        <td>Time</td>
                        <td>phone</td>
                        <td>solar</td>
                        <td>TV</td>
                        <td>Laptop</td>
                    </tr>
                    </thead>
                    <tbody style = {body}>{table.map(t => (
                        <tr>
                            <td>{t.timestamp} </td>
                            <td>{t.handy} </td>
                            <td>{t.solar_modul} </td>
                            <td>{t.fernseher} </td>
                            <td>{t.laptop} </td>
                        </tr>
                    ))}</tbody>
                </table>




            </div>
        );

    }

}

export default MeasurementTable
/// test
