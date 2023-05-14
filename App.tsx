import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Car } from './car';
import { Piller } from './piller';


export default function App() {
  const [isTrue, setIsTrue] = useState<boolean>(true);
  const [bbb, setbbb] = useState<number>(0);
  const [mmm, setmmm] = useState<number>(0);

  function toggleIsTrue() {
    setIsTrue(!isTrue);
  }

  function seteee(ggg: number) {
    setbbb(ggg);
  }

  function setppp(qqq: number) {
    setmmm(qqq);
  }


  return (
    <View >
      <Text>random info</Text>
      <Text>random info</Text>
      <Text>random info</Text>
      <Text>random info</Text>
      <TouchableOpacity onPress={toggleIsTrue}>
        <Text>Toggle isTrue</Text>
      </TouchableOpacity>

      {isTrue ? (
        <View>
          <Text>set to true</Text>
          <Car setccc={seteee} />
          <Text>The random number for car is {bbb}!</Text>
          <Piller setiii={setppp} />
          <Text>The random number for piller is {mmm}!</Text>
        </View>
      ) : (
        <View>
          <Text>set to false</Text>
        </View>
      )}
    </View>
  );
}
