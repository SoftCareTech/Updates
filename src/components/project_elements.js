import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, } from "react-native";
import Svg, { Path } from 'react-native-svg';
import { colorPrimary, colorWhite, colorBlack, colorRed, colorWhiteSmoke } from "./project_styles";
//colors
///icons
const SvgAppIco = "M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"

const SvgDots3Vertical = "M144,192a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,144,192ZM128,80a16,16,0,1,0-16-16A16.01833,16.01833,0,0,0,128,80Zm0,32a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,128,112Z"
//viewBox="0 0 256 256" 
const bg1 = "M0,64L80,101.3C160,139,320,213,480,240C640,267,800,245,960,208C1120,171,1280,117,1360,90.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
const bg2 = "M0,64L80,101.3C160,139,320,213,480,240C640,267,800,245,960,208C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
const addbtn = "M146.188,0C65.576,0,0,65.582,0,146.188s65.576,146.188,146.188,146.188s146.188-65.582,146.188-146.188S226.801,0,146.188,0z M194.962,152.155h-42.806v42.8c0,3.3-2.667,5.967-5.967,5.967c-3.3,0-5.967-2.667-5.967-5.967v-42.8H97.415c-3.294,0-5.967-2.673-5.967-5.967s2.673-5.967,5.967-5.967h42.806V97.415c0-3.294,2.667-5.967,5.967-5.967c3.3,0,5.967,2.673,5.967,5.967v42.806h42.806c3.3,0,5.967,2.673,5.967,5.967S198.261,152.155,194.962,152.155z"
const refreshbtn = "M278.235,33.267c-116.7,0-211.6,95-211.6,211.7v0.7l-41.9-63.1c-4.1-6.2-12.5-7.9-18.7-3.8c-6.2,4.1-7.9,12.5-3.8,18.7l60.8,91.5c2.2,3.3,5.7,5.4,9.6,5.9c0.6,0.1,1.1,0.1,1.7,0.1c3.3,0,6.5-1.2,9-3.5l84.5-76.1c5.5-5,6-13.5,1-19.1c-5-5.5-13.5-6-19.1-1l-56.1,50.7v-1c0-101.9,82.8-184.7,184.6-184.7s184.7,82.8,184.7,184.7s-82.8,184.7-184.6,184.7c-49.3,0-95.7-19.2-130.5-54.1c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1c40,40,93.1,62,149.6,62c116.6,0,211.6-94.9,211.6-211.7S394.935,33.267,278.235,33.267z"
const backbtn = "M45.506,33.532c-1.741-7.42-7.161-17.758-23.554-19.942V7.047c0-1.364-0.826-2.593-2.087-3.113c-1.261-0.521-2.712-0.229-3.675,0.737L1.305,19.63c-1.739,1.748-1.74,4.572-0.001,6.32L16.19,40.909c0.961,0.966,2.415,1.258,3.676,0.737c1.261-0.521,2.087-1.75,2.087-3.113v-6.331c5.593,0.007,13.656,0.743,19.392,4.313c0.953,0.594,2.168,0.555,3.08-0.101C45.335,35.762,45.763,34.624,45.506,33.532z"
const check = "m7.7,404.6c0,0 115.2,129.7 138.2,182.68l99,0c41.5-126.7 202.7-429.1 340.92-535.1c28.6-36.8-43.3-52-101.35-27.62-87.5,36.7-252.5,317.2-283.3,384.64-43.7,11.5-89.8-73.7-89.84-73.7z"
const minusBtn = "M2,12 C1.447,12 1,11.553 1,11 L1,7 C1,6.447 1.447,6 2,6 L16,6 C16.553,6 17,6.447 17,7 L17,11 C17,11.553 16.553,12 16,12 L2,12 L2,12 Z"
const penBtn = "M132.018,34.787l53.197,53.197L69.568,203.631L16.37,150.434L132.018,34.787z M212.696,60.502c9.738-9.738,9.742-25.527,0-35.268l-17.93-17.93c-9.738-9.74-25.529-9.738-35.268,0l-17.346,17.347l53.199,53.196L212.696,60.502z"
const ButtonWide = ({ title, onPress }) => {
    return (<>
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.buttonWide}>
                {title}
            </Text>
        </TouchableOpacity>
    </>)
}
const ButtonShare = ({ title, selected = 0, onPress }) => {
    const show = selected > 0
    return (<>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.btnShare}>
                <Text style={styles.btnShareText}>{title}</Text>

                {show ?
                    <Text style={styles.btnShareNumber}> {selected} </Text>
                    : null}
            </View>
        </TouchableOpacity>
    </>)
}
const ButtonPositive = ({ title, onPress, disabled }) => {
    return (<>
        {disabled ? <Text style={styles.buttonPositiveDisable}>
            {title} </Text> : <TouchableOpacity onPress={onPress}>
            <Text style={styles.buttonPositive}>
                {title}
            </Text>
        </TouchableOpacity>
        }
    </>)

}

const ButtonNegative = ({ title, onPress }) => {
    return (<>
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.buttonNegative}>
                {title}
            </Text>
        </TouchableOpacity>
    </>)

}
const ButtonX = ({ title, onPress }) => {
    return (<>
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.button}>
                {title}
            </Text>
        </TouchableOpacity>
    </>)

}

const RoundCheck = ({ size = 50, value, onCheckChange }) => {
    return (<View style={styles.roundCheck}>
        <TouchableOpacity onPress={onCheckChange(!value)}>
            {(value) ?
                <Svg
                    height={size}
                    width={size}
                    viewBox="0 0 600 600"
                >
                    <Path fill={colorPrimary} d={SvgAppIco} />
                </Svg> : <Text >
                    X
                </Text>}
        </TouchableOpacity>
    </View>)

}

const styles = StyleSheet.create({
    roundCheck: {
        borderColor: "red",
        borderRadius: 60
        , bordertWidth: 4,

    },
    buttonWide: {
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 32,
        paddingRight: 32,
        backgroundColor: colorPrimary,
        color: colorWhite,
        borderRadius: 60,
        textAlign: "center",
        fontSize: 20



    },
    buttonPositive: {
        padding: 8,
        backgroundColor: colorPrimary,
        color: colorWhite,
        borderWidth: 1,
        borderColor: colorWhite
        , borderRadius: 25,
        fontWeight: "bold",
        fontSize: 20,
        minWidth: 100,
        textAlign: "center",
        margin: 8,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonPositiveDisable: {
        padding: 8,
        backgroundColor: colorPrimary,
        color: colorWhite,
        borderWidth: 1,
        borderColor: colorWhite
        , borderRadius: 25,
        fontWeight: "bold",
        fontSize: 20,
        minWidth: 100,
        textAlign: "center",
        margin: 8,
        opacity: 0.5,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonNegative: {
        margin: 8,
        padding: 8,
        backgroundColor: colorWhite,
        color: colorPrimary,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: colorPrimary,
        fontWeight: "bold",
        fontSize: 20
        , minWidth: 100,
        textAlign: "center",

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 8,
        elevation: 5,
    },
    btnShare: {
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 32,
        paddingRight: 32,
        backgroundColor: colorPrimary,
        borderRadius: 60,
        flexDirection: "row",
        alignItems: "center",
        flexDirection: 'row'
        , justifyContent: 'center'


    },
    btnShareText: {
        paddingRight: 5,
        color: colorWhite,
        borderRadius: 60,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20

    },
    btnShareNumber: {
        color: colorWhite,
        borderRadius: 60,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
        , borderColor: colorWhiteSmoke,
        borderWidth: 1,



    },
})






export {

    SvgAppIco,
    ButtonWide, ButtonX, ButtonShare, ButtonNegative, ButtonPositive,
    SvgDots3Vertical, penBtn, minusBtn,
    bg1, bg2
    , addbtn, refreshbtn, backbtn, RoundCheck,

}


















