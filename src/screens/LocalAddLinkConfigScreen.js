import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, FlatList, Dimensions } from 'react-native';
import {
    colorWhite, fullScreen,
    homeCurve, colorWhiteSmoke,
    colorPrimary,
    colorBlack
} from "../components/project_styles"
import AppHeader from "../components/AppHeader";
import AddConfigForm from "../components/AddConfigForm";
const LocalAddLinkConfigScreen = function App({ navigation }) {


    return (
        <View style={fullScreen} >
            <View style={styles.container}>
                <AppHeader title={"Add Link Configuration"} onBackPressed={() => navigation.goBack()} />
                <View style={homeCurve}>


                    <AddConfigForm navigation={navigation} />
                </View>


            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: colorWhiteSmoke,
        flex: 1,
        minHeight: Dimensions.get('window').height - 16,
    },
    flatList: {
        marginTop: -0,
        paddingTop: 0,
        zIndex: -1,
        elevation: -1,
    },
    selected: {
        fontSize: 30,
        alignSelf: "center",
        borderColor: colorPrimary,
        borderWidth: 1,
        marginTop: 8
        , borderRadius: 5550
    },
    refreshSvg: {
        alignSelf: "center"
        , margin: 4
    }, addSvg: {
        position: 'absolute',
        alignSelf: "center",
        bottom: 0,
        margin: 16
    }
});
export default LocalAddLinkConfigScreen
