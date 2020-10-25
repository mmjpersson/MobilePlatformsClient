import React, {Component} from 'react';
import "./MeasurementTable.css";

class Average extends Component {


    callAPI() {
        //fetch("http://localhost:1337/")
        fetch("https://mobileplatformsapi.azurewebsites.net/")
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

        table.forEach(e => {
            sumPhone+= e.handy;
            sumSolar+= e.solar_modul;
            sumTV+= e.fernseher;
            sumLaptop+= e.laptop;
        });


        return (
            <div>
                <p> Average Consumption</p>


                <div>
                    <p> Average consumption Phone: {(sumPhone / 20).toFixed(2)}</p>
                    <p> Average production Solar: {(sumSolar / 20).toFixed(4)}</p>
                    <p> Average consumption TV: {(sumTV / 20).toFixed(2)}</p>
                    <p> Average consumption Laptop: {(sumLaptop / 20).toFixed(2)}</p>
                </div>

            </div>
        );

    }

}

export default Average
