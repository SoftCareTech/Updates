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
import AddLinkForm from "../components/AddLinkForm";

const LocalAddLinkScreen = ({ navigation }) => {
    return (
        <View style={fullScreen} >
            <View style={styles.container}>
                <AppHeader title={"Add link"}
                    onBackPressed={() => navigation.goBack()} />
                <View style={homeCurve} >
                    <AddLinkForm navigation={navigation} />
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

});
export default LocalAddLinkScreen
