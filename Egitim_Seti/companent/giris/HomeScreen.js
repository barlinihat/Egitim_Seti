import * as React from 'react';
import { StyleSheet, Text, View,Button,Image,ImageBackground,TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeScrenn extends React.Component {
    render() {
        const{navigate,push}=this.props.navigation;
       
      return (
        <ImageBackground
        resizeMode={'stretch'}
        source={require('../../resim/arkaplan.jpg')} style={{flex:1,width:'100%',height:'100%'}} >
        <View style={styles.container}>
        <View style={{alignItems:'flex-end',flex:1,width:400}}>
        <TouchableOpacity  style={[styles.myButton1,{backgroundColor:'#ff7f00'}]}
          onPress={()=>navigate('yassecim')}//sayfalar arası geçiş için kulanılır,Push ve detail farkı sayfalar kendi sayfanda yenilemeyapar push
         ><View  style={styles.myText}>
         <Text style={{fontSize:20,color:'white'}}>Başla</Text>
         </View >
        
        
        
        </TouchableOpacity>
        </View>
        <View style={styles.container1}>          
        <Text style={styles.logo}>Okul Öncesi</Text>
       <Text style={styles.logo}>Eğitim</Text>    
        </View>         
        <View style={styles.container2}> 
        <View style={styles.icon1}> 
        <Image source={require('../../resim/tik3.png')}
        style={styles.iconCompanenet}
        ></Image>
        <TextInput   style={styles.myInput} 
       placeholder='E posta giriniz'
       keyboardAppearance='dark' //editörde klavye rengi
       keyboardType='default'

       />
       </View>
       <View style={[styles.icon2,{marginVertical:10}]}> 
       <Image source={require('../../resim/indir.png')}
        style={[styles.iconCompanenet,styles.iconCompanent2]}
        ></Image>
     <TextInput   style={[styles.myInput]}
     secureTextEntry={true}
      placeholder='Şifre giriniz'      
       autoCapitalize='sentences'
     
        />
      </View>
        
        <View style={styles.buttonCompanent}>
          <TouchableOpacity  style={[styles.myButton,{backgroundColor:'#ff7f00'}]}
          onPress={()=>navigate('yassecim')}//sayfalar arası geçiş için kulanılır,Push ve detail farkı sayfalar kendi sayfanda yenilemeyapar push
         ><View  style={styles.myText}>
         <Text style={{fontSize:20,color:'white'}}>Eğitim Başlasın</Text>
         </View >

          </TouchableOpacity>
         <View style={{marginVertical:15}}>
         <TouchableOpacity style={[styles.myButton,{backgroundColor:'#ff7f00'}]}
          onPress={()=>navigate('Record')} //Bu sayede veri gönderiyoruz
          ><View  style={styles.myText}>
            <Text style={{fontSize:20,color:'white'}}>Kayıt Ol</Text>
            </View >
          </TouchableOpacity>
          </View>

            <TouchableOpacity style={[styles.myButton,,{backgroundColor:'red'}]}
         
          >
           <View  style={styles.myText}>
            <Text style={{fontSize:20,color:'white'}}>Şifre Unuttum</Text>
            </View >
            </TouchableOpacity>

        </View>
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
       flex:4,
       justifyContent:'center',
       alignItems:'center',
       marginTop:25
    },
    container2:{
       flex:5
       
    },
    myInput:{
      width:300,
      height:50,
      backgroundColor:'#4ba123',
      paddingHorizontal:5,
      borderRadius:5
      },
      myButton:
      {
      borderRadius:15,
      width:300,
      height:40,
      } ,
      myText:{
     justifyContent:'center',
     alignItems:'center',
     paddingTop:7
     
      },
      icon1:{
       flexDirection:'row',
      },
      icon2:{
       flexDirection:'row'
      },
      iconCompanenet:{
        width:50,
        height:50,
        marginRight:10,
      },
      iconCompanent2:{
        borderRadius:50,
        width:35,
        height:35,
        marginHorizontal:10,
        marginRight:15,
        marginTop:10

      },
      buttonCompanent:{
        alignItems:'flex-end'
      },
      logo:{
        fontSize:50,
        color:'blue'
            },
      myButton1:{
      borderRadius:15,
      marginTop:30,
      width:120,
      height:40,
        }
  });