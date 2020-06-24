import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Image, TouchableOpacity, TextInput,StatusBar } from 'react-native';
import {SearchBar} from 'react-native-elements';

export default function Home({ navigation }) {

  const [flastList, setFlastList] = useState([]);
  const [search,setSearch]=useState([]);

  fetch('http://dotplays.com/wp-json/wp/v2/posts?_embed')
    .then(response => response.json())
    .then(json => { setFlastList(json); })
   
    
  
  return (
    
    <View style={styles.container}>
     
      <View style={{ height: 50, width: '100%' }}>
        <SearchBar
          placeholder="Search here"
          round
          searchIcon={{ size: 24 }}
          underlineColorAndroid="transparent"
          onChangeText={search => setSearch(search)}
          value={search}
        />
      </View>
      <FlatList style={{ marginTop: 40, flex: 1 }}
        data={flastList}

        renderItem={({ item }) =>
          <View style={{ flexDirection: "row" }}>
            <Image style={{ height: 100, width: 100 }}
              source={{ uri: item._embedded['wp:featuredmedia'][0].source_url }} />
            <View style={{ flexDirection: "column", flex: 1, marginLeft: 20, marginBottom: "10%" }}>
              <Text style={{ marginBottom: 5 }}>{item.date}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Profile', { name: [item.content.rendered, item.slug, item.title.rendered] })}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '700', }}>{item.title.rendered}</Text>
              </TouchableOpacity>
              <Text>{item.excerpt.rendered['<p></p>']}</Text>

            </View>
          </View>
        }
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
