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
            clickCount: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(
            {
                clickCount: this.state.clickCount + 1
            })
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
        var sum = 0;

        table.forEach(e => {
            sum += e.temperature;
        });


        return (
            <div>
                <p> My Table Data</p>
                <table onClick={this.handleClick} style={styleTable}>
                    <thead>
                    <tr>
                        <td>Temperature</td>
                        <td>Time</td>
                    </tr>
                    </thead>
                    <tbody style = {body}>{table.map(t => (
                        <tr>
                            <td>{t.temperature} </td>
                            <td>{t.unix_timestamp} </td>
                        </tr>
                    ))}</tbody>
                </table>
                <div>
                    Average temp: {(sum / 5).toFixed(2)}
                </div>
                <div>
                    Click count : {this.state.clickCount}
                </div>

            </div>
        );

    }

}

export default MeasurementTable
 /// test
