import {graphic} from "echarts";
import Colors from "../../constants/Colors";

function getOptions(data: [number, number][]) {
  return {
    xAxis: {
      type: 'time',
      splitLine: {
        show: true,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: Colors.lightGrey,
        }
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitNumber: 8,
    },
    yAxis: [{
      show: false,
      type: 'value',
      boundaryGap: false,
      max: 'dataMax',
      min: function (value) {
        return value.min - 100;
      }
    },
      {
        show: false,
        type: 'value',
        boundaryGap: false,
        max: function (value) {
          return value.max * 2;
        },
        min: function (value) {
          return value.min - 20;
        },
      }
    ],
    series: [
      {
        type: 'line',
        showSymbol: false,
        data: data,
        itemStyle: {
          color: Colors.primaryBlue,
        },
        areaStyle: {
          color: new graphic.LinearGradient(0.5, 0, 0.5, 1, [
            { offset: 0, color: '#E8E7FF' },
            { offset: 1, color: 'rgba(255, 255, 255, 0)' }
          ])
        },
        endLabel: {
          show: true,
          backgroundColor: Colors.primaryBlue,
          borderColor: 'transparent',
          padding: [10, 12],
          borderRadius: 4,
          fontWeight: 'bold',
          offset: [-5, 0],
          color: '#fff',
          formatter: function (params) {
            return params.value[1].toFixed(2);
          }
        },
      },
      {
        barWidth: 2.5,
        barGap: 10,
        type: 'bar',
        data: data.map(d => [d[0], d[1] * 0.15]),
        yAxisIndex: 1,
        itemStyle: {
          color: '#cecfd0',
        },
      }
    ],
    tooltip: {
      trigger: 'axis',
      position: (pos) => ['90%', pos[1] - 18],
      axisPointer: {
        type: 'cross',
        label: {
          show: false,
        },
      },
      formatter: function (params, ticket, callback) {
        return params[0].data[1].toFixed(2);
      },
      textStyle: {
        color: '#fff'
      },
      backgroundColor: '#1A243A',
      borderColor: 'transparent',
      className: 'tooltip-custom',
    },
  };
}

export default getOptions;
