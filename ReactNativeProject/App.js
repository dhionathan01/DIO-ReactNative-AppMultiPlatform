import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState(0)
  function modificaNumero() {
    const novoNumero = Math.floor(Math.random() * 100);
    setNumero(novoNumero);
  };
  return (
    <>
      <SafeAreaView  style={style.container}>
        <Text style={style.numero}>{numero}</Text>
        <TouchableOpacity onPress={modificaNumero} style={style.botao}>
          <Text>Gerar número</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  botao: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  }
});
export default App;
