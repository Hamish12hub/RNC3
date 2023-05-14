import { useEffect, useState } from "react";
import { View, Text } from "react-native";

interface Props {
  setiii: (number: number) => void;
}

export function Piller(props: Props) {
  const [hhh, sethhh] = useState<number>(0);

  useEffect(() => {
    const jjj = Math.floor(Math.random() * 10) + 1;
    sethhh(jjj);
    props.setiii(jjj);
  }, []);

  return (
    <View>
      <Text>helllo</Text>
    </View>
  );
}