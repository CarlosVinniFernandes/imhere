import { Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import React from 'react';

import { Participant } from '../../components/Participant';

export default function Home(){

    const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Carlos', 'Fernando', 'José', 'Maria', 'Moises', 'Leoncio', 'Mayk']

    function handleParticipantAdd(){
    }

    function handleParticipantRemove(name: String){
      console.log(`Você clicou para remover ${name}`)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
        </Text>
      <Text style={styles.eventDate}>
        Segunda, 09 de Janeiro de 2004
        </Text>
        
        <View style={styles.form}>
          <TextInput 

          style={styles.input} 
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
          keyboardType= "numeric"
          />

          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
              <Text style={styles.buttonText}>
              +
              </Text>
          </TouchableOpacity>
        </View>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          <FlatList 
            // data={[]}
            data={participants}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Participant 
                key = {item}
                name = {item}
                onRemove={() => handleParticipantRemove(item)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text style={styles.listEmpyText}>
                Ninguém chegou no evento ainda!
              </Text>
            )}
          />

        {/* </ScrollView>       */}
    </View>
      
  )
}

