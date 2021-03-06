import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryGroup,
} from 'victory-native';

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
        <VictoryChart width={350} theme={VictoryTheme.material}>
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
