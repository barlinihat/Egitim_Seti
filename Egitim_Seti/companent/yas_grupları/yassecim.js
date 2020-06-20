import * as React from 'react';
import { StyleSheet, Text, View ,Button,ImageBackground,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

 export default class DetailScrean extends React.Component {
     
     static navigationOptions=({navigation})=>{   //Gelen degeri header alanına yazdırırız
         return{
             title:'',
             headerTransparent:true, //Arka taraftaki header kaldırır
             headerTintColor: '#fff',
         }
     }

    render() {
        const{navigate,goBack,push,getParam}=this.props.navigation;
        // const title=getParam('title','Default value'); //Diğer sayfadan gelen veri buraya eklenir
      return (
        <ImageBackground
        resizeMode={'stretch'}
        source={require('../../resim/arkaplan.jpg')} style={{flex:1,width:'100%',height:'100%'}} >
        <View style={styles.container}>
       <View style={styles.container1}>
        <TouchableOpacity style={[styles.myButton,{backgroundColor:'#ff7f00'}]}
        onPress={()=>navigate('yas23')}
          ><View  style={styles.myText}>
            <Text style={{fontSize:20,color:'white'}}>2-3 Yaş</Text>
            </View >
          </TouchableOpacity>
         
          <TouchableOpacity style={[styles.myButton,{backgroundColor:'#ff3030'}]}
          onPress={()=>navigate('yas34')}
          ><View  style={styles.myText}>
            <Text style={{fontSize:20,color:'white'}}>3-4 Yaş</Text>
            </View >
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.myButton,{backgroundColor:'#1874cd'}]}
          onPress={()=>navigate('yas45')}
          ><View  style={styles.myText}>
            <Text style={{fontSize:20,color:'white'}}>4-5 Yaş</Text>
            </View >
          </TouchableOpacity>
    
        </View>
        <View style={styles.topLogo}>
          <TouchableOpacity>
        <Image source={require('../../resim/ses1.png')}
        style={styles.iconCompanenet}
        ></Image></TouchableOpacity>
        <TouchableOpacity>
         <Image source={require('../../resim/ses2.png')}
        style={[styles.iconCompanenet,{marginRight:100}]}
        ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
         <Image source={require('../../resim/cocuk.jpeg')}
        style={{width:100,height:100,borderRadius:15}}
        ></Image>
        </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container1:{
    flex:5,
     width:'85%',
     alignItems: 'center',
     justifyContent: 'flex-end',
    },
    topLogo:{
     flex:2,
     flexDirection:'row',
     alignItems:'center'
    },
    myButton:
    {
    borderRadius:12,
    width:300,
    height:50,
    marginVertical:15,

    } ,
    myText:{
      justifyContent:'center',
      alignItems:'center',
      paddingTop:7
    },
    iconCompanenet:{
      width:50,
      height:50,
      marginRight:10,
    },
  });