import {View, Text, Button} from "react-native";
import styles from "./StyleResultImc";

export default function ResultImc(props){
  
  return (
    <View style={styles.viewContainer}>
        <Text style={styles.text}>{"IMC: " + props.imc}</Text>
        <Text style={styles.textRisco}>{"Risco: "}{props.risco}</Text>
    </View>
  );
}