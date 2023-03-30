import { StyleSheet,Image,FlatList, Text, TouchableOpacity, View } from 'react-native'
import React,{ useState, useEffect,} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Svg, { Path } from "react-native-svg";

function JobScreen({ navigation }) {
  const [myData, setMyData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
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
            navigation.navigate('Job Details',{item : item,})}
            }>
            <LinearGradient
              style={styles.card}
              colors={["#12c2e9","#c471ed","#f64f59"]}
              >
              <View style={styles.borderbox}>
                <View style={styles.imagebox}>
                  <Image style={styles.imagestyle} source={{ uri: item.image }} />
                </View>
                <View style={styles.detail}>
                  <Text style={styles.title}>{item.name.toUpperCase()}</Text>
                  <Text style={styles.position}>{item.mobile}</Text>
                  <View style={styles.shortinfo}>
                    <Svg 
                      width={20}
                      height={24}
                      style="color: white" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24">
                        <Path 
                          d="M18,4.48a8.45,8.45,0,0,
                            0-12,12l5.27,5.28a1,1,0,
                            0,0,1.42,0L18,16.43A8.45,
                            8.45,0,0,0,18,4.48ZM16.57,
                            15,12,19.59,7.43,15a6.46,6.46,
                            0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,
                            6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,
                            0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,
                            4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,
                            0,0,1,13.64,12.09Z" 
                            fill="white">
                        </Path>
                    </Svg>
                    <Text style={styles.mode}>
                      Remote
                    </Text>
                    <Svg 
                      width={20}
                      height={24}
                      style="color: rgb(129, 29, 211);" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24">
                        <Path 
                          d="M12,2C6.48,2,2,6.48,2,12s4.48,
                            10,10,10s10-4.48,10-10S17.52,2,
                            12,2z M12.88,17.76V19h-1.75v-1.29 c-0.74-0.18-2.39-0.77-3.02-2.96l1.65-0.67c0.06,
                            0.22,0.58,2.09,2.4,2.09c0.93,0,1.98-0.48,
                            1.98-1.61c0-0.96-0.7-1.46-2.28-2.03 c-1.1-0.39-3.35-1.03-3.35-3.31c0-0.1,
                            0.01-2.4,2.62-2.96V5h1.75v1.24c1.84,
                            0.32,2.51,1.79,2.66,2.23l-1.58,0.67 c-0.11-0.35-0.59-1.34-1.9-1.34c-0.7,
                            0-1.81,0.37-1.81,1.39c0,0.95,0.86,1.31,
                            2.64,1.9c2.4,0.83,3.01,2.05,3.01,3.45 C15.9,
                            17.17,13.4,17.67,12.88,17.76z" 
                            fill="#811dd3">
                          </Path>
                    </Svg>
                    <Text style={styles.mode}>
                      Paid
                    </Text>
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
      colors={['#141E30','#243B55']}
    ><View style={styles.flatlist}>
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
    height: 150,
    margin:1,
    padding:10,
    borderRadius:20,
  },
  borderbox:{
    flexDirection:'row',
    backgroundColor:"#000",
    width:"100%",
    borderRadius:18,
  },
  imagebox:{
    justifyContent:"center",
    margin:20
  },
  imagestyle:{
    height:100,
    width:100,
    borderRadius:20,
  },
  detail:{
    marginTop:20,
    height:80,
  },
  title:{
    fontSize:20,
    color:"white",
    marginBottom:8,
  },
  position:{
    color:"white",
    fontSize:15,
    marginBottom:15,
  },
  shortinfo:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  mode:{
    color:"white",
    marginLeft:5,
    marginRight:8,
  }
})
