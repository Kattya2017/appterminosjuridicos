import { StackScreenProps } from "@react-navigation/stack";
import { Image } from "react-native";
import { Dimensions, View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RootStackParams } from "../navigator/StackNavigator";



const {width, height} = Dimensions.get('window');

interface Props extends StackScreenProps<any, any>{};

export const TerminoJuridicosScreen = ({}:Props) =>{
    return(
        <View style={style.container}>
            <ImageBackground
            source={require('../assets/img/fondo-palabras-2.png')}
            style={{
                position: 'absolute',
                width: '100%',
                height: height+30, marginTop:-20
            }}
            resizeMode='cover'
            />
        </View>


    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    }
});