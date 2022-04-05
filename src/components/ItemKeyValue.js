
import React from "react"
import { StyleSheet, TouchableOpacity, Pressable, Text, View } from "react-native"
import Svg, { Path, Polygon } from "react-native-svg"
import { penBtn, minusBtn } from "./project_elements"
import { colorPrimary, colorWhite, colorRed, colorWhiteSmoke, colorBlack } from "./project_styles"
import { Divider } from 'react-native-paper';



const ItemKeyValue = ({ name, value, type, onEdit, onDelete }) => {
    return <View style={styles.listItem}>
        <TouchableOpacity onPress={() => {
            onDelete({ name, value, type })
        }} >
            <Svg style={styles.minusBtn}
                height="22" width="22" viewBox="0 0 25 17" >
                <Path fill={colorRed} d={minusBtn} />
            </Svg>
        </TouchableOpacity>

        <View style={styles.item_container}>
            < Text style={styles.item_text}>{name} </Text>
        </View>
        <View style={styles.verticalDivider} />
        <View style={styles.item_container}>

            < Text style={styles.item_text}>{value} </Text>
        </View>
        {type ? <View style={styles.verticalDivider} /> : null}
        {type ? <View style={styles.item_container}>

            < Text style={styles.item_text}>{type} </Text>
        </View> : null}


        <TouchableOpacity onPress={() => onEdit({ name, value, type })} >
            <Svg
                style={styles.penBtn}
                height="20" width="20" viewBox="0 0 220.001 220.001" >
                <Polygon points={"0, 220 59.34, 213.86 6.143, 160.661"} />
                <Path fill={colorPrimary} d={penBtn} />
            </Svg>

        </TouchableOpacity>
    </View>

}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: "row"
        , justifyContent: "space-between"
        , marginVertical: 8
        , flexWrap: "wrap"
        ,
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
    item_container: {
        flex: 1
        , flexShrink: 1,
        alignContent: "flex-start"
        , justifyContent: "flex-start",
        padding: 2
    },
    item_text: {
        textAlign: "justify"
    },
    minusBtn: {
        marginRight: 2
        , alignSelf: "flex-start",
        flexGrow: 2
    },
    penBtn: {
        marginLeft: 2,
        flex: 2,
        flexGrow: 2,
        alignItems: "flex-end",
    },
    verticalDivider: {
        backgroundColor: colorBlack,
        flex: 1, flexDirection: "column",
        width: 1,
        maxWidth: 1, margin: 2
    }
})

export default ItemKeyValue

