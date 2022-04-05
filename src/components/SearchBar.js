import React from "react";
import { TextInput, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { colorWhite, colorBlack, colorPrimary } from "./project_styles";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return <View style={styles.backgroundStyle}>
        <Feather name='search' style={styles.iconStyle} />
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            value={term}
            onChangeText={onTermChange}
            // onEndEditing={() =>    onTermSubmit()  }
            onSubmitEditing={onTermSubmit}
            placeholder="Search"
            style={styles.inputStyle} />
    </View>
}
const SearchBar2 = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={styles.searchContainer}>
        <TextInput
            selectionColor={colorPrimary}
            placeholder="Search"
            onChangeText={onTermChange}
            underlineColorAndroid="transparent"
            style={styles.searchInput}
            value={term}
            onSubmitEditing={onTermSubmit}
        />

        <TouchableOpacity onPress={onTermSubmit}>
            <Text style={styles.searchBtn}>Search</Text>
        </TouchableOpacity>

    </View>
}
const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: colorWhite
        , height: 50,
        borderRadius: 25,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row'

    }
    , inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        alignSelf: "center",
        fontSize: 35
    },
    searchContainer: {
        flex: -1,
        height: 50,
        minWidth: Dimensions.get('window').width - 32,
        flexDirection: "row",
        marginRight: 16,
        marginLeft: 16,
        marginTop: 16,

    },
    searchInput: {
        backgroundColor: colorWhite,
        flex: 1,
        color: colorBlack,
        borderRadius: 50,
        borderColor: colorPrimary,
        fontSize: 18,
        width: ((Dimensions.get('window').width - 32) * 0.65),
        padding: 8,
    },
    searchBtn: {
        flex: 1,
        color: colorPrimary,
        fontSize: 25,
        fontWeight: "bold",
        borderRadius: 50,
        marginLeft: 8,

    },
    searchBtnC: {
        backgroundColor: colorWhite,
        flex: 1,
        borderRadius: 50,
        padding: 32
        , backgroundColor: "blue",

    },
})
export default SearchBar

export {
    SearchBar2
}



