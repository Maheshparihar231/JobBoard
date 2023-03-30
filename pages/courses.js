import { StyleSheet,Image,FlatList,Modal, Text, TouchableOpacity, View } from 'react-native'
import React,{ useState, useEffect, Component } from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Svg, { Path } from "react-native-svg";

function JobScreen({ navigation }) {
  const [myData, setMyData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  // Filled Star. You can also give the path from local
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';


  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
        //"https://jsonplaceholder.typicode.com/users"
      )
      // .then(response=>response.json())
      // .then(data=>{
      //   setMyData(data.filter(item=>item.name==='Susbscribe Techical'));
      // });
      const realData = await response.json();
      setMyData(realData);
      setIsLoaded(false);
      // console.log(realData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {getUserData()}, []);

  // render the students cards
  const showCourseData = ({ item }) => {
    return (
    <View>
        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate('Course Details',{item : item,})}
            }>
            <LinearGradient
              style={styles.card}
              colors={['#b92b27','#4A00E0']}
              >
              <View style={styles.borderbox}>
                <View style={styles.imagebox}>
                  <Image style={styles.imagestyle} source={{ uri: item.image }} />
                </View>
                <View style={styles.detail}>
                  <Text style={styles.title}>{item.name}</Text>
                  <View style={styles.rating} >
                    <Text style={styles.platform}>Udemy</Text>
                    <View style={styles.stars}>
                      {maxRating.map((item,key)=>{
                        return(
                          <Image
                            style={styles.starImage}
                            source={
                              item <= 3
                                ? { uri: starImageFilled }
                                : { uri: starImageCorner }
                            }
                          />
                        )
                      })}
                      <Text style={{
                        color:"white",
                        fontSize:15,
                        marginHorizontal:8}}>3</Text>
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
        </TouchableOpacity>
    </View>
    );
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={['#360033','#0b8793']}>
      <View style={styles.flatlist}>
        <FlatList
            keyExtractor={(item) => item.id}
            data={myData}
            renderItem={showCourseData}
            ItemSeparatorComponent={() => <View style={{height: 30}} />}
            showsVerticalScrollIndicator={false}
          />
      </View>
      
    </LinearGradient>
  );
}

export default JobScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
  },
  flatlist:{
    top:20,
    marginHorizontal:20,
  },
  card:{
    flexDirection:'row',
    margin:1,
    padding:10,
    borderRadius:20,
  },
  borderbox:{
    backgroundColor:"#000",
    width:"100%",
    borderRadius:20,
  },
  imagebox:{
    justifyContent:"center",
    marginHorizontal:10,
    marginTop:10
  },
  imagestyle:{
    height:150,
    width:"100%",
    borderRadius:15,
  },
  detail:{
    flex:1,
    justifyContent:"center",
    //marginTop:10,
    height:80,
    padding:20,
  },
  title:{
    fontSize:20,
    color:"white",
    marginBottom:8,
  },
  rating:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center'
  },
  platform:{
    color:"white",
    fontSize:15,
    //marginBottom:15,
  },
  shortinfo:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center',
  },
  mode:{
    color:"white",
    marginLeft:5,
    marginRight:8,
  },
  stars:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center',
  },
  starImage:{
      width: 15,
      height: 15,
      resizeMode: 'cover',
  }
})
