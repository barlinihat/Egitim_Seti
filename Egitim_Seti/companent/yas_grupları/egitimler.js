import * as React from 'react';
import {Container, Content, Button} from 'native-base';
import Video, { FilterType } from 'react-native-video';
import { StyleSheet,Text, ImageBackground } from 'react-native';
function egitimler({navigation,route}) {
    const{external,videoURL}=route.params;
    const [filterType,setFilterType]=React.useState(FilterType.MONOCHROME)
    return ( 
   <ImageBackground
   source={require('../../resim/arkaplan.jpg')} style={{flex:1,width:'100%',height:'100%'}}
   resizeMode={'stretch'}
   >
        <Video
         controls
        filterEnable
        filter={filterType}
        source={external?{uri:videoURL}:videoURL}   // Can be a URL or a local file.
        style={{flex:1}}
        resizeMode='stretch'
        />        
    </ImageBackground>
          );
  }
  const styles = StyleSheet.create({});
  
  


  export default egitimler;