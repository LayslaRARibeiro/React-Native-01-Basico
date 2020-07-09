import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

function BoasVindas(props) {

  const [nome, setNome] = useState(''); 
  const [sobrenome, setSobrenome] = useState(''); 
  const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
  const [mostrarMenssagem, setMostrarMensagem] = useState(false);

  const _apresentarMenssagem = () => {
    if (!nome == '' && !sobrenome == ''){
      setMostrarMensagem(true);
    }else {
     Alert.alert(
         'Preenchimento obrigatório',
         'Informe o nome e o sobrenome!',
         [
             { text: 'ok' },
         ],
     );
  }
}

const _limpar = () => {
    setNome('');
    setSobrenome('');
    setMostrarMensagem(false);
}

    return (
    <View style={styles.container}>

        <Text style={styles.titulo}>Identifique-se</Text>

        <TextInput
                style={styles.campo}
                placeholder="Digite seu nome"
                onChangeText={nome => setNome(nome)}
                value={nome}
     />

     <TextInput
                style={styles.campo}
                placeholder="Digite seu sobrenome"
                onChangeText={sobrenome => setSobrenome(sobrenome)}
                value={sobrenome}
    />

     <View style={styles.botaoContainer}>
            <Button
                onPress={_apresentarMenssagem}
                title='ok'
           />
     </View>

    {mostrarMenssagem && (
    <View>
      <Text style={styles.texto}>Olá,{nome} {sobrenome}! {props.saudacao} </Text>
      <Text style={styles.texto}>{mensagem}</Text>
    </View>
    )}
      
  <View style={styles.botaoContainer}>
      <Button
        onPress={_limpar}
        title="Limpar"
  />
  </View>

  </View>
  )
}
const styles = StyleSheet.create({
  container: {
     backgroundColor: '#081a31',
     width: 300,
     borderRadius: 5,
     padding: 10,
     margin: 10
  },
  titulo: {
      fontsize: 16,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
  },
  textos: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: "center",
  },
  campo: {
      backgroundColor: '#dcedff',
      fontSize: 14,
      marginBottom: 5,
      marginTop: 5,
      borderRadius: 5,
      height: 35,
  },
  botaoContainer: {
      marginBottom: 5,
      marginTop: 5,
      borderRadius: 5,
  },
});
export default BoasVindas;
