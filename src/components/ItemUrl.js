import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { bg1, bg2, SvgAppIco, SvgDots3Vertical, } from "./project_elements";
import { colorBlack, colorPrimary, colorRed, colorWhite, colorWhiteSmoke } from "./project_styles";

import Svg, { Path } from 'react-native-svg';
const ItemUrl = function App({ title, time, status, statusColor = colorBlack }) {

    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);


    const edit = "Edit"
    const visit = "Visit"
    const refresh = "Refresh"
    const remove = "Remove"
    return (

        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title} >{title}</Text>
                <View style={styles.statusContainer}>
                    <Text style={styles.time} >{time} </Text>
                    <Text style={{ fontSize: 15, color: statusColor }} >{status} </Text>
                </View>
            </View>
            <Menu
                styles={styles.optionMenu}
                visible={visible}
                anchor={<TouchableOpacity onPress={showMenu}>
                    <Svg height="50" width="50" viewBox="0 0 250 250" >
                        <Path fill={colorBlack} d={SvgDots3Vertical} />
                    </Svg>
                </TouchableOpacity>}
                onRequestClose={hideMenu}>
                <MenuItem onPress={hideMenu}>{edit}</MenuItem>
                <MenuItem onPress={hideMenu}>{visit}</MenuItem>
                <MenuItem onPress={hideMenu}>{refresh}</MenuItem>
                <MenuItem onPress={hideMenu}>{remove}</MenuItem>
                <MenuDivider />
            </Menu>
        </View>
    );
}

const styles = StyleSheet.create({
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
