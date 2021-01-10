import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryStack,
  VictoryLabel,
  VictoryAxis,
  VictoryGroup,
} from 'victory-native';

const data = [{x: 'a', y: 5616}, {x: 'b', y: 89000}, , {x: 'c', y: 53000}];
const data1 = [
  {x: 'v', y: 13000},
  {x: 's', y: 16500},
  {x: 'x', y: 14250},
];

// const history = [
//   {
//     confirmed: 86329261,
//     date: '2021-01-05',
//     deaths: 1877503,
//     recovered: 51298160,
//   },
//   {
//     confirmed: 87120499,
//     date: '2021-01-06',
//     deaths: 1892648,
//     recovered: 52957167,
//   },
//   {
//     confirmed: 87969643,
//     date: '2021-01-07',
//     deaths: 1907362,
//     recovered: 53294752,
//   },
//   {
//     confirmed: 88742817,
//     date: '2021-01-08',
//     deaths: 1921868,
//     recovered: 53587617,
//   },
//   {
//     confirmed: 88867633,
//     date: '2021-01-09',
//     deaths: 1921845,
//     recovered: 53672217,
//   },
// ];

const Graph = ({history}) => {
  const [confirmedCasesData, setConfirmedCasesData] = useState(null);
  const [recoveredCasesData, setRecoveredCasesData] = useState(null);
  const [deathCasesData, setDeathCasesData] = useState(null);

  const comfirmedCases = () => {
    if (history) {
      const confirmedCase = history.map((obj) => {
        const date = new Date(obj.date).toDateString().substr(4, 6);
        return {x: date, y: Math.round(obj.confirmed)};
      });

      setConfirmedCasesData(confirmedCase);
    }
  };
  const deathCases = () => {
    if (history) {
      const deathCase = history.map((obj) => {
        const date = new Date(obj.date).toDateString().substr(4, 6);
        return {x: date, y: Math.round(obj.deaths)};
      });

      setDeathCasesData(deathCase);
    }
  };
  const recoveredCases = () => {
    if (history) {
      const recoveredCase = history.map((obj) => {
        const date = new Date(obj.date).toDateString().substr(4, 6);
        return {x: date, y: Math.round(obj.recovered)};
      });

      setRecoveredCasesData(recoveredCase);
    }
  };

  useEffect(() => {
    comfirmedCases();
    deathCases();
    recoveredCases();
  }, [history]);

  return (
    <View style={styles.container}>
      {history && (
        <VictoryChart
          style={{
            parent: {
              // border: '1px solid #ccc',
            },
            background: {
              // fill: '',
            },
          }}
          width={350}
          theme={VictoryTheme.material}
          // domainPadding={{x: 10}}
          // domain={{y: [0]}}
          // animate={1000}
        >
          <VictoryAxis
            tickFormat={(t) =>
              t > 999999
                ? `${Math.round(t / 1000000)}M`
                : `${Math.round(t / 1000)}K`
            }
            style={{
              axis: {stroke: '#000'},
              axisLabel: {fontSize: 16},
              ticks: {stroke: '#000'},
              grid: {stroke: '#B3E5FC', strokeWidth: 0.25},
            }}
            dependentAxis
          />
          <VictoryAxis
            style={{
              axis: {stroke: '#000'},
              axisLabel: {fontSize: 16},
              ticks: {stroke: '#000'},
              tickLabels: {
                fontSize: 11,
                padding: 3,
              },
            }}
          />
          <VictoryGroup offset={15} colorScale={'qualitative'}>
            <VictoryBar
              data={deathCasesData}
              style={{data: {fill: 'red'}}}
              alignment="start"
            />
            <VictoryBar
              data={confirmedCasesData}
              style={{data: {fill: 'green'}}}
              alignment="start"
            />
            <VictoryBar
              barWidth={10}
              data={recoveredCasesData}
              style={{data: {fill: 'purple'}}}
              alignment="start"
            />
          </VictoryGroup>
          <VictoryGroup offset={15} colorScale={'qualitative'}>
            <VictoryBar
              data={deathCasesData}
              style={{data: {fill: 'red'}}}
              alignment="start"
            />
            <VictoryBar
              data={confirmedCasesData}
              style={{data: {fill: 'green'}}}
              alignment="start"
            />
            <VictoryBar
              data={recoveredCasesData}
              style={{data: {fill: 'purple'}}}
              alignment="start"
            />
          </VictoryGroup>
          <VictoryGroup offset={15} colorScale={'qualitative'}>
            <VictoryBar
              data={deathCasesData}
              style={{data: {fill: 'red'}}}
              alignment="start"
            />
            <VictoryBar
              data={confirmedCasesData}
              style={{data: {fill: 'green'}}}
              alignment="start"
            />
            <VictoryBar
              data={recoveredCasesData}
              style={{data: {fill: 'purple'}}}
              alignment="start"
            />
          </VictoryGroup>
        </VictoryChart>
      )}
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const myDataset = [
  [
    {x: 'a', y: 1},
    {x: 'b', y: 2},
    {x: 'c', y: 3},
    {x: 'd', y: 2},
    {x: 'e', y: 1},
  ],
  [
    {x: 'a', y: 2},
    {x: 'b', y: 3},
    {x: 'c', y: 4},
    {x: 'd', y: 5},
    {x: 'e', y: 5},
  ],
  [
    {x: 'a', y: 1},
    {x: 'b', y: 2},
    {x: 'c', y: 3},
    {x: 'd', y: 4},
    {x: 'e', y: 4},
  ],
];

const Graph2 = () => {
  const transformData = (dataset) => {
    const totals = dataset[0].map((data, i) => {
      return dataset.reduce((memo, curr) => {
        return memo + curr[i].y;
      }, 0);
    });
    return dataset.map((data) => {
      return data.map((datum, i) => {
        return {x: datum.x, y: (datum.y / totals[i]) * 100};
      });
    });
  };

  const dataset = transformData(myDataset);
  return (
    <VictoryChart height={400} width={400} domainPadding={{x: 30, y: 20}}>
      <VictoryStack colorScale={['black', 'blue', 'tomato']}>
        {dataset.map((data, i) => {
          return <VictoryBar data={data} key={i} />;
        })}
      </VictoryStack>
      <VictoryAxis dependentAxis tickFormat={(tick) => `${tick}%`} />
      <VictoryAxis tickFormat={['a', 'b', 'c', 'd', 'e']} />
    </VictoryChart>
  );
};

