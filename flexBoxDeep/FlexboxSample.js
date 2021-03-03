import React from 'react';
import {View, Text} from 'react-native';

/**
 * flexdirection - mainaxis
 * justifycontent - children along main axis
 * alignItems - children along cross axis
 * flex- weight of child
 * alignSelf - within parent, child align itself
 * position - relative and absolute(like frameLaylout)
 * Todo: flexwrap and alignContent
 *
 * @return {*} 
 */
function FlexboxSample() {
  return (
    <View style={{padding: 50, 
        flexDirection:'column',
        width: 300,
        height: '80%',
        borderColor:'black',
        justifyContent:'space-around',
        alignItems:'stretch'}}>
        <View
          style={{
            backgroundColor: 'red',
            flex:1,
            alignSelf:'flex-end',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            flex:2,
            alignSelf:'ba',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: 'green',
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>3</Text>
        </View>
      </View>
  );
}

export default FlexboxSample;
