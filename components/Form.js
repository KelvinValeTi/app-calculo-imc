import {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from "react-native";
import ResultImc from './ResultImc';
import styles from "./StyleForm";

export default function Form(){
    
    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [imc, setImc] = useState(null);

    //msg erro
    const [msgErroAltura, setMsgErroAltura]= useState(null);
    const [msgErroPeso, setMsgErroPeso]= useState(null);

    //função de validação
    function validation(){

        /**Variavel local de controle de erro*/
        let alturaErro="";
        let pesoErro="";

        //validação de altura
        if(altura>10 && altura<300){
            setMsgErroAltura(null);
            alturaErro="";
        }else{
            setMsgErroAltura("Digite uma altura válida*");
            setImc(null);
            alturaErro = "erro";
        }

        if(peso>1 && peso<200){
            setPeso(peso);
            setMsgErroPeso(null);
            pesoErro="";
        }else{
            setMsgErroPeso("Digite um peso válido*");
            setImc(null);
            pesoErro="erro";
        }

        if(alturaErro== "" && pesoErro== ""){
            calculaImc(altura/100, peso);
        }
    }   

    //função de calculo de IMC
    function calculaImc(altura, peso){
        setImc((peso / (altura*altura)).toFixed(2));
        classificaImc((peso / (altura*altura)).toFixed(2));
    }

    const [msgClassification, setMsgClassification]=useState("jhhghf");

    //função que classifica o grau de risco
    function classificaImc(imc){
        
        if(imc<16){
        setMsgClassification("Magreza Grau III");
        }else if(imc>=16 && imc<17){
        setMsgClassification("Magreza Grau II");
        }else if(imc>=17 && imc<18.5){
        setMsgClassification("Magreza Grau I");
        }else if(imc>=18.5 && imc<25){
        setMsgClassification("Eutrofia");
        }else if(imc>=25 && imc<30){
        setMsgClassification("Sobrepeso");
        }else if(imc>=30 && imc<35){
        setMsgClassification("Obesidade Grau I");
        }else if(imc>=35 && imc<=40){
        setMsgClassification("Obesidade Grau II");
        }else if(imc>40){
        setMsgClassification("Obesidade Grau III");
        }
    }

    function reset(){
        setImc(null);
        setAltura(null);
        setPeso(null);
    }

    /**
     * RETORNO
     */
    return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={styles.body} >

            {/**RENDERIZAÇÃO CONDICIONAL */}
            {imc==null?
                <View style={styles.form}>

                    <Text style={styles.textLabel}>Altura:</Text>
                    
                    {msgErroAltura!=null? <Text style={styles.error}>{msgErroAltura}</Text>:<View></View>}

                    <TextInput
                    style={styles.input} 
                    placeholder="Altura em centimetros"
                    onChangeText={setAltura}
                    value={altura}
                    keyboardType='numeric'
                    />

                    <Text style={styles.textLabel}>Peso:</Text>

                    {msgErroPeso!=null? <Text style={styles.error}>{msgErroPeso}</Text>:<View></View>}
                    
                    <TextInput 
                        style={styles.input}
                        placeholder="Peso em Kg"
                        onChangeText={setPeso}
                        value={peso}
                        keyboardType='numeric'
                    />

                    <TouchableOpacity
                        style={styles.button} 
                        onPress={()=>validation()}
                    >
                        <Text style={styles.textButton} >Calcular Imc</Text>
                    </TouchableOpacity>
                </View>            
                : 
                <View style={styles.viewResultContainer}>
                    <ResultImc imc ={imc} risco={msgClassification} />
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={()=>reset()}
                    >
                        <Text style={styles.textButton}>Calcular Novamente</Text>
                    </TouchableOpacity>
                </View>
                }
        </View>
    </TouchableWithoutFeedback>
  );
}
