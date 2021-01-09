import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryStack,
} from 'victory-native';

const data = [{x: 'a', y: 5616}, {x: 'b', y: 89000}, , {x: 'c', y: 53000}];
const data1 = [
  {x: 'v', y: 13000},
  {x: 's', y: 16500},
  {x: 'x', y: 14250},
];

const history = [
  {
    confirmed: 86329261,
    date: '2021-01-05',
    deaths: 1877503,
    recovered: 51298160,
  },
  {
    confirmed: 87120499,
    date: '2021-01-06',
    deaths: 1892648,
    recovered: 52957167,
  },
  {
    confirmed: 87969643,
    date: '2021-01-07',
    deaths: 1907362,
    recovered: 53294752,
  },
  {
    confirmed: 88742817,
    date: '2021-01-08',
    deaths: 1921868,
    recovered: 53587617,
  },
  {
    confirmed: 88867633,
    date: '2021-01-09',
    deaths: 1921845,
    recovered: 53672217,
  },
];

const Graph = () => {
  const [confirmedCasesData, setConfirmedCasesData] = useState(null);
  const [recoveredCasesData, setRecoveredCasesData] = useState(null);
  const [deathCasesData, setDeathCasesData] = useState(null);

  const comfirmedCases = () => {
    if (history) {
      const confirmedCase = history.map((obj) => {
        return {x: obj.date, y: obj.confirmed / 1000};
      });

      setConfirmedCasesData(confirmedCase);
    }
  };
  const deathCases = () => {
    if (history) {
      const deathCase = history.map((obj) => {
        return {x: obj.date, y: obj.deaths / 1000};
      });

      setDeathCasesData(deathCase);
    }
  };
  const recoveredCases = () => {
    if (history) {
      const recoveredCase = history.map((obj) => {
        return {x: obj.date, y: obj.recovered / 1000};
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
      <VictoryChart width={350} theme={VictoryTheme.material}>
        <VictoryStack colorScale={['tomato', 'orange', 'gold']}>
          <VictoryBar data={deathCasesData} alignment="start" />
          <VictoryBar data={confirmedCasesData} alignment="start" />
          <VictoryBar data={recoveredCasesData} alignment="start" />
          {/* <VictoryBar
            data={[
              {x: '2021-01-05', y: 86329},
              {x: '2021-01-06', y: 87120},
              {x: '2021-01-07', y: 87969},
              {x: '2021-01-08', y: 88742},
              {x: '2021-01-09', y: 88867},
            ]}
            alignment="start"
          /> */}
        </VictoryStack>
      </VictoryChart>
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
