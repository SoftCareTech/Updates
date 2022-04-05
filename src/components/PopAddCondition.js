import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { ButtonNegative, ButtonPositive } from "./project_elements";
import { title, colorPrimary, colorWhite, colorWhiteSmoke } from "./project_styles";
import { Input, } from "react-native-elements";
import { Dropdown } from 'react-native-element-dropdown';
import { Modal, Dimensions, StyleSheet, Text, View } from "react-native";
import Spacer from "./Spacer";
import { TextInput } from "react-native";
const PopAddCondition = ({ visibility, changeVisibility,
    data = { text: "", exist: true, },
    onSubmit }) => {
    const [text, setText] = useState(data.text)
    const [exist, setExist] = useState(data.exist)
    const options = [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
    ];


    const controlSection = () => {
        return < Spacer >
            <View style={styles.controlContainer}>
                <ButtonNegative title={"Cancel"}
                    onPress={() => {
                        changeVisibility()
                    }}
                />
                <ButtonPositive title={"Add"} disabled={text ? false : true}
                    onPress={() => {
                        onSubmit({ text, exist })
                    }}
                />
            </View>
        </Spacer >
    }


    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visibility}
                onRequestClose={() => changeVisibility()} >


                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <Spacer>
                            <Text style={title}>Condition</Text>
                            <TextInput autoCapitalize='none'
                                autoCorrect={false}
                                value={text}
                                multiline
                                placeholder="Type text here that you want to observe changes"
                                onChangeText={setText}
                                underlineColor={colorPrimary}
                                backgroundColor={colorWhiteSmoke}
                                style={{
                                    fontSize: 20, width: 200, height: 150,
                                    alignSelf: "stretch",
                                }}
                            />

                        </Spacer>
                        <Spacer>
                            <Text style={styles.categoryLabel}>
                                Above text exist?</Text>

                            <Dropdown
                                style={styles.categoryOption}
                                data={options}
                                maxHeight={200}
                                labelField="label"
                                valueField="value"
                                value={exist}
                                onChange={item => {
                                    setExist(item.value);
                                }} />

                        </Spacer>

                        {controlSection()}
                    </View>
                </View>
            </Modal>


        </View>
    );
}

const styles = StyleSheet.create({
    type: {
        flex: 2,
        width: 5
    },
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

    categoryLabel: {
        fontSize: 16

    },
    categoryOption: {
        fontSize: 20,
        flex: 1,
        minWidth: 200,
        justifyContent: "flex-start"

    },

    centeredView: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-end",
        marginTop: 22
    },
    modalView: {
        flex: 1,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
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
    },
    controlContainer: {
        flex: 1
        , height: 50,
        flexDirection: "row",
        justifyContent: "space-around",
    },



});


export default PopAddCondition