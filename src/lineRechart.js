import React, {Component} from 'react';

import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class LineRechart extends Component {

    callAPI() {
        fetch("https://mobileplatforms.herukoapp.com")
            // https://mobileplatforms.herukoapp.com
            // http://localhost:1337/Graphs
            // https://white-flower-003b77f03.azurestaticapps.net/#/lineRechart
            .then(res => res.json())
            .then(data => this.setState({solar: data}))
            .catch(err => err);
    }

    constructor(props) {
        super(props);
        this.state = {
            solar: [],
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

        const {solar} = this.state;

        return (
         /*   <div>
                <p> My Table Data</p>
                <table>
                    <thead>
                    <tr>
                        <td>Time</td>
                        <td>solar</td>
                    </tr>
                    </thead>
                    <tbody>{solar.map(t => (
                        <tr>
                            <td>{t.timestamp} </td>
                            <td>{t.solar_modul} </td>
                        </tr>
                    ))}</tbody>
                </table>
           </div>

          */

           <LineChart width={730} height={250} data={solar}
                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="solar_modul" stroke="#0095FF" />

            </LineChart>

);

}

}


export default LineRechart;
