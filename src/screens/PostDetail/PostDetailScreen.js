import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'
import { useUserAuthContext } from '../../../contexts/UserAuthContext'
import { useStoreContext } from '../../../contexts/GlobalStoreContext'


export default function PostDetailScreen() {
  // route
  const route = useRoute()
  // user
  const {user} = useUserAuthContext()
  const {dbUser} = useStoreContext()

  // parameters
  const data = route.params?.data

  return (
    <View style={{flex: 1}}>

      <View 
        key={data?.id}
        style={styles.postDetails}>
        <Text style={styles.userName}>{dbUser.data.getUser.name}</Text>
        <Text style={styles.emailAddress}>{dbUser.data.getUser.email}</Text>

        <Image 
          source={{uri: data?.postimage}} 
          style={styles.postImage}/>

        <Text style={styles.description}>{data?.description}</Text>
      </View>
        <Text style={{marginVertical: 10, fontSize: 18, fontWeight: '600', marginLeft: 10}}>See related posts</Text>
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
  postDetails:{
    marginTop: 10,
  },
  userName:{
    fontSize: 25,
    fontWeight: '500',
    marginLeft:10,
  },
  emailAddress:{
    marginLeft: 10,
    marginVertical: 2,
    fontSize: 14,
    fontWeight: '200',
    color: 'grey'
  },
  postImage:{
    width: '100%',
    height: 300,
    marginTop: 14
  },
  description:{
    padding: 5,
    marginTop: 10
  },
   otherLinks:{
    height: 400,
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 200
  },
  card:{
    width: '100%',
    flexDirection: 'row',
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