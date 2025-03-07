import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import React, { useState } from 'react';

import { Participant } from '../../components/Participant';

export default function Home(){

    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd(){
      if(participants.includes(participantName)){
        return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome!" )
      }

      // participants.push('Ana');
      setParticipants(prevState => [...prevState, participantName])
      setParticipantName('');
      console.log(participants)
    }

    function handleParticipantRemove(name: String){
      Alert.alert("Apagando participante", `Você realmente quer remover ${name}?`, [
        {
          text: 'Sim',
          onPress: () => Alert.alert("", "Deletado!")
        },
        {
          text: 'Não',
          style: 'cancel'
        }

      ])
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
          onChangeText={setParticipantName}
          // onChangeText={text => setParticipantName(text)}
          value={participantName}
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

