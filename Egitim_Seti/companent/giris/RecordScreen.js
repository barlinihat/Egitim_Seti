import * as React from 'react';
import { StyleSheet, Text, View ,ImageBackground,TextInput,Image,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

 export default class RecordScreen extends React.Component {
state = {
    date :new Date()
}
  static navigationOptions={
    title:'',  //headerTitle yazabiliriz
   // headerBackTitle:'Geri', 
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold',
      },  
     headerStyle: {
    backgroundColor: '#f4511e',
     },    
   
};

    render() {
        const{navigate,goBack,push,getParam}=this.props.navigation;
        // const title=getParam('title','Default value'); //Diğer sayfadan gelen veri buraya eklenir
      return (
        <ImageBackground
        resizeMode={'stretch'}
        source={require('../../resim/arkaplan.jpg')} style={{flex:1,width:'100%',height:'100%'}} >
        <View style={styles.container}> 
        <View style={styles.logo1}>
        <Text style={styles.logo}>Okul Öncesi</Text>
       <Text style={styles.logo}>Eğitim</Text>    
        </View>
        <ScrollView>
        <View style={styles.container1}>
          <View>
        <TouchableOpacity>
         <Image source={require('../../resim/cocuk.jpeg')}
        style={{width:80,height:60,borderRadius:15,marginRight:50}}
        ></Image>
        <Text>Resim ekle</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.cinsiyet,{marginHorizontal:20, backgroundColor:'blue',}]}> 
          <View><Text style={{color:'white'}}>E</Text></View>
          </TouchableOpacity > 
          <TouchableOpacity style={[styles.cinsiyet,{backgroundColor:'red'}]}>
          <View><Text style={{color:'white'}}>K</Text></View>
          </TouchableOpacity>       
        </View>    
       <View style={styles.container2}>
        
       <View style={styles.icon1}> 
        <Image source={require('../../resim/tik2.png')}
        style={styles.iconCompanenet}
        ></Image>
        <TextInput   style={styles.myInput} 
       placeholder='Ad soyadı giriniz...'
       keyboardAppearance='dark' //editörde klavye rengi
       keyboardType='default'
       //email adres @ işareti gelir klavyeye
       //decimal pad sadece sayı girilir noktada var
       //number pad sadece sayı gelir
       //phone pad numaara girmek için kulanılır
       />
       </View>
       <View style={[styles.icon2,{marginVertical:10}]}> 
       <Image source={require('../../resim/tik3.png')}
        style={styles.iconCompanenet}
        ></Image>
     <TextInput   style={[styles.myInput]}
        placeholder='Doğum tarihini giriniz...'
       //editable={false} bu içeriğine veri girilip girilemeyeceği
       autoCapitalize='sentences'
       //sentences bu sayede cümle ilk harfi büyük
       //words kelim ebasları büyük
       //charactersklavye büyük getitir
        />
      </View>
      

      <View style={styles.icon1}> 
        <Image source={require('../../resim/tik1.png')}
        style={styles.iconCompanenet}
        ></Image>
        <TextInput   style={styles.myInput} 
       placeholder='Ebeveyin eposta giriniz...'
       keyboardAppearance='dark' //editörde klavye rengi
       keyboardType='default'
       //email adres @ işareti gelir klavyeye
       //decimal pad sadece sayı girilir noktada var
       //number pad sadece sayı gelir
       //phone pad numaara girmek için kulanılır
       />
       </View>
       <View style={[styles.icon2,{marginVertical:10}]}> 
       <Image source={require('../../resim/indir.png')}
        style={styles.iconCompanenet,{borderRadius:50,width:35,height:35,marginRight:15}}
        ></Image>
     <TextInput   style={[styles.myInput]}
        placeholder='Şifreyi giriniz...'
       //editable={false} bu içeriğine veri girilip girilemeyeceği
       autoCapitalize='sentences'
       //sentences bu sayede cümle ilk harfi büyük
       //words kelim ebasları büyük
       //charactersklavye büyük getitir
        />
      </View>
     <View style={{alignItems:'flex-end'}}>
          <TouchableOpacity style={[styles.myButton,{backgroundColor:'#ff7f00'}]}
          onPress={()=>navigate('Home',
          {title:'Detail 2'})} //Bu sayede veri gönderiyoruz
          ><View  style={styles.myText}>
            <Text style={{fontSize:20,color:'white'}}>Kayıt Ol</Text>
            </View >
          </TouchableOpacity>
          </View>
          </View>
          </ScrollView>
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
    flex:1.5,
     width:'85%',
     alignItems: 'flex-end',
     justifyContent: 'flex-end',
     flexDirection:'row',  
     marginBottom:20
 
    },
    logo1:
    {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginTop:25,
      marginTop:150
    },
    container2:{
      flex:5
    },
    myInput:{
      width:300,
      height:40,
      backgroundColor:'#4ba123',
      paddingHorizontal:5,
      },
    
    myButton:
    {
    borderRadius:15,
    width:300,
    height:40,
    marginVertical:15,

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
      flexDirection:'row',
      height:40,
      width:40
     },
     iconCompanenet:{
      width:40,
      height:40,
      marginRight:10,
    },
    cinsiyet:{
 
      width:50,
      height:50,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',

    },
    logo:{
      fontSize:50,
      color:'blue'
          }
  });