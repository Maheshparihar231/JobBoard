import { StyleSheet,Image,Linking,ScrollView,Dimensions, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Touchable } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
//const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function JobDetailsScreen({route}) {
  //console.log(route.params.item)
  const item = route.params.item;
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.headbox}>
        <View style={styles.imagebox}>
          <Image style={styles.imagestyle} source={{ uri: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2020-11/amazon.jpg" }}/>  
        </View>
        <Text style={styles.name}>{'amazon'.toUpperCase()}</Text>
      </View>
      <View style={styles.detailbox}>
        <View style={styles.subdetail}>
          <Text style={styles.subheadings}>PostedOn</Text>
          <Text style={styles.subheadingR}>12 June 2023</Text>
        </View>
        <View style={styles.subdetail}>
          <Text style={styles.subheadings}>Role</Text>
          <Text style={styles.subheadingR}>SDE2</Text>
        </View>
        <View style={styles.subdetail}>
          <Text style={styles.subheadings}>Salary</Text>
          <Text style={styles.subheadingR}>30k/month</Text>
        </View>
        <View style={styles.subdetail}>
          <Text style={styles.subheadings}>Eligibility</Text>
          <Text style={styles.subheadingR}>2023/2022</Text>
        </View>
        <View style={styles.subdetail}>
          <Text style={styles.subheadings}>Experience</Text>
          <Text style={styles.subheadingR}>2yr. exp</Text>
        </View>
        <View style={styles.subdetail}>
          <Text style={styles.subheadings}>Location</Text>
          <Text style={styles.subheadingR}>Remote/On-Site</Text>
        </View>
        <View style={styles.skillbox}>
          <Text style={styles.skillheadtext}>Skills Required :</Text>
          <View style={styles.skills}>
            <Text style={styles.skilltext}>Eligibility made an box in react native Eligibi made an box in react native</Text>
          </View>
        </View>
        <View style={styles.applybuttonCONTAINER}>
        <TouchableOpacity onPress={()=>{
            Linking.openURL(item.website).catch((err)=>{
              console.error("Failed opening page because: ", err)
              alert('Failed to open page')
            })
          }} activeOpacity={0.8}>
      <LinearGradient colors={["#12c2e9","#c471ed","#f64f59"]} style={styles.button}>
        <View style={styles.buttonRad}>
          <Text style={styles.buttonText}>Apply</Text>
        </View>
        
      </LinearGradient>
    </TouchableOpacity>
      </View>
      </View>
    </View>
    </ScrollView>
    
  );
}

export default JobDetailsScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#242424',
  },
  title:{
    fontSize:25,
    color:"white"
  },
  background:{
    height:15,
    backgroundColor: '#000',
    flexDirection:"row",
  },
  viewallbuttontext:{
    backgroundColor:'#fff',
    height:10,
  },
  headbox:{
    backgroundColor: '#000',
    width:"100%",
    flexDirection:'row',
    //justifyContent:"center",
    alignItems:'center'
  },
  imagestyle:{
    borderWidth:5,
    borderColor:"white",
    width:100,
    height:100,
    marginTop:40,
    margin:20,
    borderRadius:20
  },
  name:{
    color:"white",
    //top:100,
    fontSize:30,
  },
  subdetail:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
  },
  skillbox:{
    marginTop:20,
    marginHorizontal:20,
  },
  subheadings:{
    fontWeight:"700",
    fontSize:20,
    color:'white'
  },
  subheadingR:{
    fontWeight:"700",
    fontSize:20,
    color:'white'
  },
  skills:{
    width:"100%",
    borderWidth:2,
    borderRadius:10,
    padding:5,
    borderColor:"white",
  },
  skilltext:{
    fontSize:18,
    lineHeight:25,
    color:'white'
  },
  skillheadtext:{
    fontWeight:"700",
    fontSize:20,
    marginBottom:10,
    color:'white'
  },
  applybuttonCONTAINER:{
    justifyContent:"center",
    alignItems:"center",
    marginVertical:25,
  },
  button: {
    borderRadius:1,
    padding:10,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    fontSize:20,
    color:'white'
  },
  buttonRad:{
    width:"100%",
    borderRadius: 50,
    backgroundColor: '#283c86',
    paddingVertical:5,
    paddingHorizontal:20,
  },
})