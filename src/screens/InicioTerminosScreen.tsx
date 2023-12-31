import React, { useEffect, useState } from 'react';
import { StackScreenProps } from "@react-navigation/stack";
import { Dimensions, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";


const {width, height} = Dimensions.get('window');

interface Props extends StackScreenProps<any, any>{};

export const InicioTerminosScreen = ({navigation}:Props) =>{
    return(
        <View style={style.container}>
            <ImageBackground
            source={require('../assets/img/portada-4.png')}
            style={{
                position: 'absolute',
                width,
                height
            }}
            resizeMode="cover"
            />

            <View style={style.containerBtn}>
                <TouchableOpacity
                activeOpacity={0.7} 
                style={style.btnDiccionario} onPress={()=>navigation.navigate('PresentacionScreen')}>
                    <Image
                    source={require('../assets/img/libro-3.png')}
                    style={style.iconoBtn}
                    />
                </TouchableOpacity>
            </View>

        </View>
    );
};


const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    containerBtn:{
        marginTop:25,
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
        top: 80
    },
    btnDiccionario: {
        width: 120,
        height: 120,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'transparent',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    
        elevation: 10,
      },
      iconoBtn: {
        width: '120%',
        height: '120%',
      },
})