import { StackScreenProps } from "@react-navigation/stack";
import { Image } from "react-native";
import { Dimensions, View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RootStackParams } from "../navigator/StackNavigator";
import Pdf from 'react-native-pdf';


const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { };

export const TerminoJuridicosScreen = ({ }: Props) => {
    return (
        <View style={style.container}>
            {/* <ImageBackground
            source={require('../assets/img/fondo-palabras-3.png')}
            style={{
                position: 'absolute',
                width: '100%',
                height: height+30, marginTop:-20
            }}
            resizeMode='cover'
            /> */}
            <Pdf
                trustAllCerts={false}
                source={require('../assets/pdf/prueba-shipibo.pdf')}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={style.pdf} />
        </View>


    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    pdf: {
        //flex: 1,
        width: width,
        height: '100%',
        backgroundColor: '#fff'
    },
});