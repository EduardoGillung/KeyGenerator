import { useIsFocused } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '../../hooks/useStorage';

export function Passwords() {
  const [listPasswords, setListPasswords] = useState([])
  const focused = useIsFocused();
  const { getItem } = useStorage();

  useEffect(() => {
    async function loadPasswords(){
      const passwords = await getItem("@pass")
      setListPasswords(passwords);

    }

  }, [focused])
 return (
  <SafeAreaView style={{ flex: 1, }}>
   <View style={styles.header}>
    <Text style={styles.title}>Minhas senhas</Text>
   </View>

   <View style={styles.content}>
    <FlatList
      data={listPasswords}
      keyExtractor={ (item) => String(item) }
      renderItem={ ({ item }) => <Text>{item}</Text> } 
    />
   </View>
  </SafeAreaView>
   
  );
}
const styles = StyleSheet.create({
  header:{
    backgroundColor: '#392de9',
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },
  title:{
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  }
})