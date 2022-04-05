import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { bg1, bg2, SvgAppIco, SvgDots3Vertical, } from "./project_elements";
import { colorBlack, colorPrimary, colorWhite, colorWhiteSmoke } from "./project_styles";

import Svg, { Path } from 'react-native-svg';

const HomeHeader = function App({ title, updates, errors, percent, symbol = "%", optionMenuSelected }) {
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);
    const shareLink = "Share links"
    const shareApp = "Share App"
    const about = "About"
    const settings = "Settings"
    return (<View style={styles.container}>
        <View style={styles.backgroundSvg} />
        <View style={styles.titleContainer}>
            <Text style={styles.title} >{title}</Text>
            <Menu
                styles={styles.optionMenu}
                visible={visible}
                anchor={<TouchableOpacity onPress={showMenu}>
                    <Svg height="50" width="50" viewBox="0 0 250 250" >
                        <Path fill={colorWhite} d={SvgDots3Vertical} />
                    </Svg>
                </TouchableOpacity>}
                onRequestClose={hideMenu}>
                <MenuItem onPress={() => {
                    hideMenu()
                    optionMenuSelected(0)
                }}>{shareLink}</MenuItem>
                <MenuItem onPress={hideMenu}>{shareApp}</MenuItem>
                <MenuItem onPress={hideMenu}>{about}</MenuItem>
                <MenuItem onPress={hideMenu}>{settings}</MenuItem>
            </Menu>
        </View>
        <View style={styles.subTitle} >
            <Text style={styles.updates} >{updates}</Text>
            <Text style={styles.errors} >{errors}</Text>
        </View>
        <View style={styles.percentContainer}>
            <Text style={styles.percentText}>{percent}</Text>
            <Text style={styles.percentSymbol}>{symbol}</Text>
        </View>

        <StatusBar style="auto" />

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
        alignItems: 'flex-start',
        flexDirection: 'row'
        , justifyContent: 'space-between'

    },

    subTitleContainer: {
        flex: 1,
        width: Dimensions.get('window').width,
        alignItems: 'stretch',
        flexDirection: 'column'
        , justifyContent: 'space-between'

    },
    title: {
        fontWeight: "bold"
        , fontSize: 40,
        color: colorWhite,
    },
    updates: {
        fontSize: 15,
        color: colorWhite,
    },
    errors: {

        fontSize: 15,
        color: colorWhite
    },
    percentText: {
        fontSize: 60,
        color: colorWhite,
    },
    percentSymbol: {
        fontSize: 40,
        color: colorWhite,
    },
    percentContainer: {
        alignItems: "flex-end"
        , alignSelf: "flex-end",
        alignContent: "flex-end",
        marginTop: -20,
        flexDirection: "row"

    },
});

//<MenuItem disabled>Disabled item</MenuItem>


import { Component } from 'react';


//export default 
class App extends Component {
    render() {
        return (
            <>
                <View style={styles1.box1}></View>
                <View style={styles1.box2}></View>
            </>
        );
    }
}

const styles1 = StyleSheet.create({
    box1: {
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    box2: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        position: 'absolute',
        top: 10,
        left: 30

    },
});

export default HomeHeader