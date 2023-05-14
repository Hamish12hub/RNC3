import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  setRandomNumberTwo: (numberTwo: number) => void;
}

export function TestTwo(props: Props) {
  const [randomNumberTwo, setRandomNumberTwo] = useState<number>(0);

  useEffect(() => {
    const numberTwo = Math.floor(Math.random() * 10) + 1;
    setRandomNumberTwo(numberTwo);
    props.setRandomNumberTwo(numberTwo);
  }, []);

  return (
    <View>
    </View>
  );
}