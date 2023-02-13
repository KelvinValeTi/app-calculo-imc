import { StyleSheet, View, Button} from 'react-native';

/**components import */
import Form from "./components/Form";
import Title from "./components/Title";


export default function App() {

  return (
    <View style={styles.container}>
      <Title/>
      <Form />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFFBEB",
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
    height:"100%",
    paddingTop:100,
  },
});
