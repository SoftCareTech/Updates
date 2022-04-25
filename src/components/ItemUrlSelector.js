import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { bg1, bg2, RoundCheck, SvgAppIco, SvgDots3Vertical, } from "./project_elements";
import { colorBlack, colorPrimary, colorRed, colorWhite, colorWhiteSmoke } from "./project_styles";
import Checkbox from 'expo-checkbox';

const ItemUrl = function App({ title, url, onCheckChange }) {
    const [isChecked, setChecked] = useState(false);
    return (
        /*
        cannot share or add http but https
        add red to http and disable check
        
        */
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title} >{title}</Text>
                <View style={styles.statusContainer}>
                    <Text numberOfLines={3} ellipsizeMode='tail' style={styles.url} >{url} </Text>
                </View>
            </View>
            <View style={styles.section}>
                <Checkbox style={styles.checkbox} value={isChecked} onValueChange={
                    (value) => {
                        onCheckChange(value)
                        setChecked(value)

                    }} />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        margin: 0,
    },
    container: {
        flex: -1,
        backgroundColor: colorWhite,
        flexDirection: 'row'
        , justifyContent: 'space-between'
        , padding: 8
        , margin: 8
        , borderRadius: 25,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 8,
        elevation: 5,


    },

    textContainer: {
        flex: -1,
        alignItems: 'flex-start',
        flexDirection: 'column'
        , justifyContent: 'space-between'

    },
    statusContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row'
        , justifyContent: 'flex-start'

    },
    optionMenu: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row'
        , justifyContent: 'flex-end'

    },
    title: {
        fontWeight: "bold"
        , fontSize: 20,
        color: colorBlack,

    },
    time: {
        fontWeight: "bold"
        , fontSize: 16,
        color: colorBlack,

    },

});
export default ItemUrl
