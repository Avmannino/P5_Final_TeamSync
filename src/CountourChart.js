import React, { Component } from 'react';
import { XYPlot, XAxis, YAxis, ContourSeries, MarkSeriesCanvas } from 'react-vis';
import DATA from './old-faithful.json';

function updateData() {
    return DATA.map(row => ({
        waiting: row.waiting + (Math.random() - 0.5) * 10,
        eruptions: row.eruptions + (Math.random() - 0.5) * 2
    }));
}

export default class ContourMap extends Component {
    state = {
        data: DATA
    };

    render() {
        const { data } = this.state;
        return (
            <div>
                <XYPlot
                    xDomain={[40, 100]}
                    yDomain={[1.5, 8]}
                    width={600}
                    height={350}
                >
                    <ContourSeries
                        animation
                        data={data}
                    />
                    <MarkSeriesCanvas
                        animation
                        data={data}
                        size={1}
                        color={'#125C77'}
                    />
                    <XAxis />
                    <YAxis />
                </XYPlot>
                <button onClick={() => this.setState({ data: updateData() })}>
                    UPDATE
                </button>
            </div>
        );
    }
}
