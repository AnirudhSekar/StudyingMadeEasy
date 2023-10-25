import React from 'react'
import {SafeAreaView, Text, Dimensions} from 'react-native'
const Speak = () => {
    return (
        <SafeAreaView style={{backgroundColor:"#fff", width:Dimensions.get('window').width, height:Dimensions.get('window').height}}>
            <Text style={{textAlign:'center', justifyContent:"center"}}>Speak Screen</Text>
        </SafeAreaView>
    )
}

export default Speak