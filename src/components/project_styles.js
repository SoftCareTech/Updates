import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const colorPrimary = "#1CAE81"
const colorWhiteSmoke = "#F5F5F5"
const colorWhite = "#FFFFFF"
const colorBlack = "#000000"
const colorRed = "#FB1515"



const styles = StyleSheet.create({
    homeCurve: {
        backgroundColor: colorWhiteSmoke,
        marginTop: -50
        , borderTopLeftRadius: 50,
        borderTopRightRadius: 50
        , minHeight: 100,
        flex: 1,
    },
    fullScreen: {
        flex: 2,
        borderWidth: 0,
        borderColor: colorPrimary
    },
    title: {
        fontWeight: "bold"
        , fontSize: 40,
        color: colorBlack,
        marginBottom: 24, marginTop: 0
    },

});

const homeCurve = styles.homeCurve
const fullScreen = styles.fullScreen
const title = styles.title

export {
    colorPrimary, colorBlack, colorWhite, colorWhiteSmoke,
    colorRed,
    homeCurve,
    fullScreen,
    title
}
