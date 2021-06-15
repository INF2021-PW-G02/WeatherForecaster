import React from 'react';
import './App.css';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import axios from 'axios';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

export default class Cities extends React.Component {
    constructor() {
        super();
        this.state = {
            hourlyLogs: [],
            hourlyLogs2: []
        };
    }
    componentDidMount() {
        axios.get('http://[::1]:3000/cities/1/weather-hourly-forecast-logs')
            .then(response => {
                this.setState({ hourlyLogs: response.data })
                console.log(response.data)
            });
        axios.get('http://[::1]:3000/cities/2/weather-hourly-forecast-logs')
            .then(response => {
                this.setState({ hourlyLogs2: response.data })
                console.log(response.data)
            });
    }





    render() {
        return (
            <div id="charts">
                <br></br>
                <Card>
                    <CardHeader title="Welcome to Weather Forecaster" />
                        <CardContent>This is where you can better visualize the 
                            contents of the DataBase and also manage the records of our API.
                    </CardContent>
                </Card>
                <br></br>
                <Card>
                    <div className="chart" id="chart">
                        <h3 className="chartTitle" id="chartTitle">Forecast for city of Madrid</h3>
                        <ResponsiveContainer width={"100%"} height={500}>
                            <LineChart
                                width={500}
                                height={300}
                                data={this.state.hourlyLogs}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="start_timestamp" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
                <br></br>
                <Card>
                    <div className="chart" id="chart">
                        <h3 className="chartTitle" id="chartTitle">Forecast for city of Madrid</h3>
                        <ResponsiveContainer width={"100%"} height={500}>
                            <LineChart
                                width={500}
                                height={300}
                                data={this.state.hourlyLogs2}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="start_timestamp" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>
        );
    }
}


//http://[::1]:3000/