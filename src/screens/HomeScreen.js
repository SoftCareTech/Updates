import React, { useEffect, useContext, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import HomeHeader from "../components/HomeHeader";
import { fullScreen, homeCurve, colorWhiteSmoke, colorBlack, colorPrimary, colorRed, colorWhite } from "../components/project_styles"
import ItemUrl from "../components/ItemUrl";
import { addbtn, refreshbtn, SvgAppIco } from "../components/project_elements";
import PopAddLink from "../components/PopAddLink"
import Svg, { Path } from 'react-native-svg';
import { Context as LocalLinksContext } from "../context/LocalLinksContext";
const HomeScreen = function App({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const { state, getLinks } = useContext(LocalLinksContext)
    useEffect(() => {
        getLinks()
        navigation.addListener('didFocus', () => {
            getLinks()
        })
        return () => {
            ///on destroyed
            // listen.remove()
        }
    }, [])
    const { localLinks
    } = state
    return (
        <View style={fullScreen} >
            <View style={styles.container}>
                <HomeHeader title={"Updates"}
                    updates={"2 updates"}
                    errors={"1 error"}
                    percent={"78"} optionMenuSelected={(index) => {
                        if (index == 0) navigation.navigate('ShareLinks')
                    }} />
                <View style={homeCurve}>
                    <TouchableOpacity onPress={() => {
                        console.log("refresh")
                    }} >
                        <Svg style={styles.refreshSvg} height="50" width="50" viewBox="0 0 489.935 489.935" >
                            <Path fill={colorPrimary} d={refreshbtn} />
                        </Svg>
                    </TouchableOpacity>
                    <FlatList
                        style={styles.flatList}
                        data={localLinks}
                        keyExtractor={(data) => data.url}
                        renderItem={({ item }) => {
                            return < ItemUrl title={item.title} time={item.time} status={item.status}
                            />
                        }} />

                </View>
            </View>
            <View style={styles.addSvg} >
                <TouchableOpacity onPress={() => {
                    setModalVisible(!modalVisible)
                }} >
                    <Svg style={styles.addSvg}
                        height="50" width="50" viewBox="0 0 292.377 292.377" >
                        <Path fill={colorPrimary} d={addbtn} />
                    </Svg>
                </TouchableOpacity>
            </View>

            <PopAddLink
                navigation={navigation}
                visibility={modalVisible}
                changeVisibility={() => {
                    //Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }} />

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
        marginTop: -30,
        padding: 30,
        zIndex: -1,
        elevation: -1,
    },
    refreshSvg: {
        alignSelf: "center"
        , marginTop: 4
        , zIndex: -1
    }, addSvg: {
        position: 'absolute',
        alignSelf: "center",
        bottom: 16,
        backgroundColor: colorWhite
    }
});
export default HomeScreen
