import React, { useState, useContext, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, FlatList, Dimensions } from 'react-native';
import {
    colorWhite, fullScreen,
    homeCurve, colorWhiteSmoke,
    colorPrimary,
    colorBlack
} from "../components/project_styles"
import ItemUrlSelector from "../components/ItemUrlSelector";
import { ButtonNegative, ButtonShare } from "../components/project_elements";
import AppHeader from "../components/AppHeader";
import SearchBar, { SearchBar2 } from "../components/SearchBar";

import { Context as LocalLinksContext } from "../context/LocalLinksContext";
const ShareLinksScreen = function App({ navigation }) {
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
    const [selected, setSelected] = useState([])
    const [searchText, setSearchText] = useState('')
    return (
        <View style={fullScreen} >
            <View style={styles.container}>
                <AppHeader title={"Share Links"} onBackPressed={() => navigation.goBack()} />
                <View style={homeCurve}>
                    <SearchBar2 term={searchText}
                        onTermSubmit={() => {
                            getLinks(searchText)
                        }}
                        onTermChange={(t) => {
                            setSearchText(t)
                            getLinks(t)
                        }}


                    />

                    <FlatList
                        style={styles.flatList}
                        data={localLinks}
                        keyExtractor={(data) => data.url}
                        renderItem={({ item }) => {
                            return < ItemUrlSelector title={item.title} url={item.url}
                                onCheckChange={(isChecked) => {
                                    if (isChecked) {
                                        setSelected([...selected, item.url])
                                    } else {
                                        setSelected(selected.filter(function (value, index, arr) {
                                            return value != item.url;
                                        }))
                                    }

                                }} />
                        }} />

                </View>
            </View>
            <View style={styles.addSvg} >
                {selected.length > 0 ?
                    <ButtonShare title={"Share"} selected={selected.length} onPress={() => {
                        console.log("Sharing ")
                        console.log(selected)
                        navigation.goBack();
                    }} /> : null}
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
export default ShareLinksScreen
