import React, { useState, useContext } from "react";
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
import { Context as LocalLinksContext } from "../context/LocalLinksContext";
import { Snackbar } from 'react-native-paper';
const LocalAddLinkScreen = ({ navigation }) => {
    const { state } = useContext(LocalLinksContext)

    return (
        <View style={fullScreen} >
            <StatusBar style="auto" />
            <View style={styles.container}>
                <AppHeader title={"Add link"}
                    onBackPressed={() => navigation.goBack()} />
                <View style={homeCurve} >
                    <AddLinkForm navigation={navigation} />
                </View>
            </View>


            <Snackbar
                visible={state.error ? true : false}
            // onDismiss={onDismissSnackBar}
            //</View>action={{ label: 'Undo', onPress: () => { }, }  }
            >
                {state.error}
            </Snackbar>
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
