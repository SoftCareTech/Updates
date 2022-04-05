import React from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { SvgAppIco, ButtonWide, } from '../components/project_elements';
import { colorPrimary, colorWhiteSmoke } from '../components/project_styles';
const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <>

                <Svg
                    height="30%"
                    width="30%"
                    viewBox="0 0 122.61 122.88"
                >
                    <Path fill={colorPrimary} d={SvgAppIco} />
                </Svg>
            </>

            <Text style={styles.title}>Updates</Text>
            <Text style={styles.msg}>Check all updates on differnt website  at onces</Text>
            <ButtonWide title="GET STARTED" onPress={() => {
                navigation.replace('Home')
            }} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorWhiteSmoke,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 5
    },
    msg: {
        fontWeight: "normal",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 60,
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    },

});
export default WelcomeScreen


