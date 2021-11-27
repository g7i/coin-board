import React, {useEffect, useState} from "react";
import ReactECharts from 'echarts-for-react';
import axios from "axios";
import getOptions from "./ChartOptions";
import {BaseURL} from "../../constants/Api";
import {CHART_WIDTH} from "../../constants/Others";
import ChartActions from "../ChartActions";
import './chart.css';
import { Spin } from "antd";

async function getChartData(days: string) {
  try {
    const { data } = await axios.get(`${BaseURL}bitcoin/market_chart?vs_currency=usd&days=${days}`);
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default function Chart() {
  const [selectedRange, setSelectedRange] = useState("1");
  const [data, setData] = useState<[number, number][]>([[0, 0]]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = (await getChartData(selectedRange)).prices;
      setData(data.map(item => [item[0], item[1]]));
      setLoading(false);
    };
    getData();
  }, [selectedRange]);

  return (
    <Spin spinning={loading} style={spinStyle}>
      <ChartActions selectedRange={selectedRange} setSelectedRange={setSelectedRange} />
      <div className="chart-container">
        <ReactECharts option={getOptions(data)} style={chartInlineStyles} />
      </div>
    </Spin>
  )
}

const chartInlineStyles = {
  width: CHART_WIDTH + 220,
  left: -120,
  height: 500,
};

const spinStyle = {
  width: CHART_WIDTH,
};
