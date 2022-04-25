import React, { useState, useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { ButtonNegative, ButtonPositive } from "./project_elements";
import { title, colorPrimary, colorWhite, colorWhiteSmoke } from "./project_styles";
import doa from "../db/databaseR";
import { Alert, Modal, Dimensions, StyleSheet, Text, Pressable, View } from "react-native";
import { Context as LocalLinksContext } from "../context/LocalLinksContext";
const PopAddLink = ({ visibility, changeVisibility, navigation }) => {

    const { initLink } = useContext(LocalLinksContext)
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visibility}
                onRequestClose={() => changeVisibility()}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={title}>Add</Text>
                        <ButtonPositive title={"Local"} onPress={async () => {
                            changeVisibility()
                            await initLink()
                            navigation.navigate("LocalAddLink")
                        }
                        } />
                        <ButtonPositive title={"Online"}
                            onPress={() => {
                                changeVisibility()
                                navigation.navigate("OnlineAddLinks")
                            }} />
                        <View style={{ marginTop: 24 }} >
                            <ButtonNegative title={"Cancel"} onPress={() => changeVisibility()} />
                        </View>
                    </View>
                </View>
            </Modal>


        </View>
    );
}

const styles = StyleSheet.create({
    backgroundSvg: {

        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: colorPrimary,

    },
    container: {
        flex: -1,
        alignItems: 'flex-start',
        padding: 16,
        flexDirection: 'column'
        , justifyContent: 'space-between'

        , paddingBottom: 50
    },

    titleContainer: {
        flex: -1,
        width: Dimensions.get('window').width - 16,
        alignItems: 'center',
        flexDirection: 'row'
        , justifyContent: 'flex-start'

    },
    title: {
        fontWeight: "bold"
        , fontSize: 40,
        color: colorWhite,
    },
    backSvg: {
        flex: 1,
        paddingRight: 16,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'

    },






    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        width: Dimensions.get('window').width - 100,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }




});


export default PopAddLink