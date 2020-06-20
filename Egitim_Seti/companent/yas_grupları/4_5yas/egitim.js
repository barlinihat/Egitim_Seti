import React, { Component } from 'react';
import {  StyleSheet, View ,Image,ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class egitim extends Component {
    render() {
        const{navigation} =this.props;
        return (
            <ImageBackground
            resizeMode={'stretch'}
            source={require('../../../resim/arkaplan.jpg')} style={{flex:1,width:'100%',height:'100%'}} >
            <View  style={styles.container}>

        <View style={styles.ayar1}> 
       <TouchableOpacity  
       onPress={()=>
        navigation.navigate('egitimler',{
        videoURL:require('./egitimgecis/Akrabalar.mp4')
      })
    }
       >
       <Image source={require('./Resim/Akrabalar.jpeg')}
       style={styles.iconCompanenet}
        resizeMode={'stretch'}
    
        ></Image>
        </TouchableOpacity>
      
        
         
       <TouchableOpacity 
       onPress={()=>
        navigation.navigate('egitimler',{
        videoURL:require('./egitimgecis/organlar.mp4')
      })
    }
       >
       <Image source={require('./Resim/organlar.jpeg')}
        resizeMode='stretch'
        style={styles.iconCompanenet}
        ></Image>
        </TouchableOpacity>

        </View> 
    


        <View style={styles.ayar1}> 
       <TouchableOpacity 
       onPress={()=>
        navigation.navigate('egitimler',{
        videoURL:require('./egitimgecis/saatler.mp4')
      })
    }
       >
       <Image source={require('./Resim/saatler.jpeg')}
       style={styles.iconCompanenet}
        resizeMode='stretch'
        ></Image>
        </TouchableOpacity>
    

         
       <TouchableOpacity
       onPress={()=>
        navigation.navigate('egitimler',{
        videoURL:require('./egitimgecis/kırmızıbalık.mp4')
      })
    } 
       >
       <Image source={require('./Resim/kirmizibalik.jpeg')}
       style={styles.iconCompanenet}
        resizeMode='stretch'
        ></Image>
        </TouchableOpacity>
        </View>
         </View>
         </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
container:{
    flex:1,
    marginVertical:120,
    
},
ayar1:
{
flexDirection:'row',
marginTop:30
},
iconCompanenet:
{
borderRadius:30,
width:140,
height:140,
margin:30

}
})
