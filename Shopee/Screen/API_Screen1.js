import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TextInput, Button} from 'react-native';


export default function API_Screen1() {
  return (
    <View styles={styles.container}>
        <View style={styles.viewImage}>
            <Image style={styles.styleImage}
                   source={require("../../Shopee/noteBook.jpg")}
            />
        </View>
        <View style={styles.viewText}>
            <Text style={styles.styleText}>MANAGE YOUR <br></br>          TASK</Text>
        </View>
        <View style={styles.viewInput}>
            <Image style={styles.styleImage2}
                   source={require("../../Shopee/email.jpg")}/>
            <TextInput style={styles.inputText} defaultValue='Enter your name'></TextInput>
        </View>
        <View style={styles.viewStart}>
        <Button
                style={styles.styleGet}
                title="GET STARTED ->"
                color="blue"
                />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewImage:{
    width:271,
    height:271,
    marginTop:52,
    marginLeft:60,
    alignItems:"center"
  },
  styleImage:{
    width:"100%",
    height:"100%"
  },
  viewText:{
    width:390,
    height:72,
    marginTop:30,
    alignContent:"center" ,
    alignItems:"center"
  },
  styleText:{
    fontSize:24,
    fontWeight:700,
    alignItems:"center",
    color:"purple"
  },
  viewInput:{
    width:334,
    height:43,
    flexDirection:"row",
    marginLeft:28,
    marginTop:30,
    borderWidth:2,
    borderRadius:10
  },
  styleImage2:{
    width:20,
    height:20,
    marginTop:12,
    marginLeft:16
  },
  inputText:{
    width:"100%",
    height:"100%",
    marginLeft:8,
    color:"gray"
  },
  viewStart:{
    width:"100%",
    height:400,
    alignItems:"center",
    marginTop:50,
    borderRadius:12
  },
  styleGet:{
    width:190,
    height:44,
    borderRadius:12,
    marginTop:30
  }
});