import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface AnalyticsBarProps {
  videoIntervals: any;
  handleGraphClick: any;
  graphYValues: any;
}

const lineColors = ["#8884d8", "#82ca9d", "#4287f5"]; //hardcoded for this task for 3 tag types

export default class AnalyticsBar extends Component<AnalyticsBarProps> {
  render() {

    const renderLines = () => {
      return this.props.graphYValues.map((tag, index) => <Line type="monotone" dataKey={tag} stroke={lineColors[index]} activeDot={{ onClick: this.props.handleGraphClick }} />)
    };

    return (
      <LineChart
        width={1600}
        height={160}
        data={this.props.videoIntervals}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />

        <Legend />
        {renderLines()}
      </LineChart>
    );
  }
}
