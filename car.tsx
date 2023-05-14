import { useEffect, useState } from "react";
import { View, Text } from "react-native";

interface Props {
  setccc: (number: number) => void;
}

export function Car(props: Props) {
  const [aaa, setaaa] = useState<number>(0);

  useEffect(() => {
    const ddd = Math.floor(Math.random() * 10) + 1;
    setaaa(ddd);
    props.setccc(ddd);
  }, []);

  return (
    <View>
      <Text>helllo</Text>
    </View>
  );
}