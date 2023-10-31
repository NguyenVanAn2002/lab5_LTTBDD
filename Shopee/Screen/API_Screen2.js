import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TextInput, Button} from 'react-native';


export default function API_Screen2() {
  return ( 
    <View style={styles.container}>
        <View style={styles.viewHead}>
            <Image style={styles.viewImageFace}
                   source={require("../../Shopee/face.jpg")}            
            />
            <View style={styles.viewText1}>
                <Text style={styles.textHead1}>Hi Twinkle</Text>
                <Text style={styles.textHead2}>Have agrate day a head</Text>
            </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewHead:{
    width:"100%",
    height:200,
    flexDirection:"row"
  },
  viewImageFace:{
    width:50,
    height:50,
    marginLeft:150,
    marginTop:15,
    borderRadius:"50%"
  },
  viewText1:{
    marginTop:15,
    width:200,
    height:200,
  },
  textHead1:{
    fontSize:24,
    fontWeight:700,
    marginLeft:20
  },
  textHead2:{
    fontWeight:700,
    fontSize:12,
    
  }
 
})