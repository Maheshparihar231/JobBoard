import * as React from "react";
import { useState } from 'react';
import { View,Text,StyleSheet,     
            Linking,
            ImageBackground, 
            TouchableOpacity, ScrollView,
            Dimensions,
            ToastAndroid,
        } from "react-native";
import * as Clipboard from 'expo-clipboard';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const Coursedetails = ({route}) => {
  //const navigations = useNavigation();
  const [copied , setcopied] = useState(false);
  const item = route.params.item;
  const handlecopy=()=>{
    // Copy the string to the clipboard
    Clipboard.setString(item.email);
    setcopied(true);
    ToastAndroid.show("copied to clipboard",ToastAndroid.SHORT)
    console.log('copied');
    setTimeout(()=>{
        setcopied(false);
    },2000);
  }
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.headboxPosition}>
        <View style={styles.imagebox}>
            <ImageBackground
                style={styles.logoIcon}
                source={{ uri: item.image }}
            />
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.titletext}>
        Reverse Engineering .NET For Beginners (Visual Basic) {item.name}
        </Text>
        <View style={styles.datepost}>
          <Text style={styles.postedOn}>Platform</Text>
          <Text style={styles.postedOn}>Udemy</Text>
        </View>
        <View style={styles.datepost}>
          <Text style={styles.postedOn}>Posted On</Text>
          <Text style={styles.postedOn}>12 may 2022</Text>
        </View>
        <View style={styles.dynamic}>
          <TouchableOpacity onPress={handlecopy}>
            <View style={styles.maincopycontainer}  >
              <View style={styles.texbox}>
                <View style={styles.copytexbox}>
                    <Text style={styles.copytex}>
                        {item.email}
                    </Text>
                </View>
                <View style={styles.copytexbutton}>
                    
                        <Text>{copied?'Copied':'Copy'}</Text>
                    
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.applybuttonCONTAINER}>
            <TouchableOpacity style={[styles.applybutton]}
              onPress={()=>{
                Linking.openURL(item.website).catch((err)=>{
                  console.error("Failed opening page because: ", err)
                  alert('Failed to open page')
                })
              }}
            >
              <Text style={styles.applybuttontext}>
              Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Coursedetails


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    backgroundColor:"#242424",
  },
  headboxPosition:{
    width:'100%',
    height:height*0.4,
    padding:15,
    backgroundColor:'black',
    justifyContent:"center",
  },
  logoIcon:{
    width:'100%',
    height:'100%',
    //position:"absolute",
  },
  details:{
    padding:20,
  },
  titletext:{
    fontSize:25,
    fontWeight:"700",
    marginBottom:20,
    color:"white",
  },
  datepost:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:5,
  },
  postedOn:{
    fontSize:20,
    fontWeight:"600",
    color:'grey'
  },
  maincopycontainer:{
    justifyContent:"center",
    alignItems:"center",
  },
  texbox:{
    flexDirection:"row",
    justifyContent:"center",    
    backgroundColor:'grey',
    borderRadius:20,
  },
  copytexbox:{
    backgroundColor:'grey',
    justifyContent:"center",
    alignItems:"center",
    height:50,
    borderWidth:1.5,
    borderStyle: 'dashed',
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    padding:10,
    borderColor:'#891fed'
  },
  copytexbutton:{
    justifyContent:"center",
    alignItems:"center",
    height:50,
    padding:10,
    backgroundColor:'#891fed',
    borderTopRightRadius:20,
    borderBottomRightRadius:20
  },
  copytex:{
    fontWeight: 'bold',
  },
  applybuttonCONTAINER:{
    justifyContent:"center",
    alignItems:"center",
  },
  applybutton:{
    borderRadius:15,
    paddingVertical:10,
    paddingHorizontal:15,
    backgroundColor:'#891fed'
  },
  applybuttontext:{
    fontSize:20,
    color:'white',
    fontWeight: 'bold'
  },
  dynamic:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignContent:'center',
    marginVertical:20,
  }
});
