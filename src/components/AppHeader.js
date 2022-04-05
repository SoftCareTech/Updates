import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { backbtn } from "./project_elements";
import { colorBlack, colorPrimary, colorWhite, colorWhiteSmoke } from "./project_styles";

import Svg, { Path } from 'react-native-svg';

const AppHeader = function App({ title, onBackPressed }) {
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
            <TouchableOpacity onPress={onBackPressed} >
                <View style={styles.backSvg}>
                    <Svg
                        height="30" width="30" viewBox="0 0 45.58 45.58" >
                        <Path fill={colorWhite} d={backbtn} />
                    </Svg>
                </View>

            </TouchableOpacity>
            <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.title} >{title}</Text>
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

});


export default AppHeader