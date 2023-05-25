import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import SearchInput from '../../components/SearchInput/SearchInput'
import { useForm } from 'react-hook-form';

export default function Explore() {

  // useform config
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
      <View style={{flex: 1}}>
        <View style={styles.mainView}>
          <SearchInput
            name="data"
            control={control}
            placeholder="Search..."
            rules={{
              required: 'description is required',
              minLength: {
                value: 5,
                message: 'should be at least 5 characters long',
              },
              maxLength: {
                value: 150,
                message: 'should not be more than 150 characters ',
              },
            }}
          />    
        <Ionicons name='ios-search' style={styles.search}/>
        </View>
        <View style={styles.linkCard}>
            <Text style={styles.title}>Discover new things...</Text>
            <Text style={styles.body}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus quod ipsam sapiente odio nemo voluptas porro velit dolores voluptatum!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus quod ipsam sapiente odio nemo voluptas porro velit dolores voluptatum!</Text>
        </View>
        <Text style={{color: 'black', marginVertical: 10, marginLeft: 10, fontSize: 15, fontWeight: 'bold'}}>Other useful links </Text>

        <View style={styles.otherLinks}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* card 1 */}
            <View style={styles.card}>
              <View style={{width: '67%'}}> 
                <Text style={{fontSize: 17,
                fontWeight: 'bold', marginBottom: 7}}>Explore plants</Text>
                <Text style={styles.cardBody} numberOfLines={4}>
                porro velit dolores voluptatum!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus quod ipsam sapiente odio nemo voluptas porro velit dolores voluptatum!
              </Text>
              </View>
              <View style={{width: '30%', height: 105, borderRadius: 15, backgroundColor: 'lightgreen', alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome5 name='leaf' color='green' size={30}/>  
              </View>
            </View>
            
            {/* card 2 */}
            <View style={styles.card}>
              <View style={{width: '67%'}}> 
                <Text style={{fontSize: 17,
                fontWeight: 'bold', marginBottom: 7}}>Explore plants</Text>
                <Text style={styles.cardBody} numberOfLines={4}>
                porro velit dolores voluptatum!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus quod ipsam sapiente odio nemo voluptas porro velit dolores voluptatum!
              </Text>
              </View>
              <View style={{width: '30%', height: 105, borderRadius: 15, backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome5 name='viruses' color='blue' size={30}/>  
              </View>
            </View>

            {/* card 3 */}
            <View style={styles.card}>
              <View style={{width: '67%'}}> 
                <Text style={{fontSize: 17,
                fontWeight: 'bold', marginBottom: 7}}>Explore plants</Text>
                <Text style={styles.cardBody} numberOfLines={4}>
                porro velit dolores voluptatum!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus quod ipsam sapiente odio nemo voluptas porro velit dolores voluptatum!
              </Text>
              </View>
              <View style={{width: '30%', height: 105, borderRadius: 15, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center'}}>
                <MaterialCommunityIcons name='web' color='black' size={30}/>  
              </View>
            </View>

            {/* card 4 */}
            <View style={styles.card}>
              <View style={{width: '67%'}}> 
                <Text style={{fontSize: 17,
                fontWeight: 'bold', marginBottom: 7}}>Explore plants</Text>
                <Text style={styles.cardBody} numberOfLines={4}>
                porro velit dolores voluptatum!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus quod ipsam sapiente odio nemo voluptas porro velit dolores voluptatum!
              </Text>
              </View>
              <View style={{width: '30%', height: 105, borderRadius: 15, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome5 name='tractor' color='yellow' size={30}/>  
              </View>
            </View>


          </ScrollView>
        </View>
      </View>
     
    )
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: 270,
    backgroundColor: '#051F20',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 5
  },
  search:{
    position: 'absolute',
    top: 16,
    right: 16,
    fontSize: 30,
    color: 'black',
    backgroundColor: 'grey',
    padding: 11,
    borderRadius: 10
  },
  textStyle: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white'
  },
  linkCard: {
    width: '92%',
    alignSelf: 'center',
    marginTop: -170,
    height: 220,
    backgroundColor: 'white',
    elevation: 8,
    borderRadius: 20,
    padding: 15
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body:{
    fontSize: 15,
    fontWeight: '300',
    color: '#041e5a'
  },
  otherLinks:{
    height: 440,
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    marginBottom: 20
  },
  card:{
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding:5,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 8,
    marginVertical: 5
  },
  cardBody: {
    color: 'black',
    fontSize: 14,
  },
})