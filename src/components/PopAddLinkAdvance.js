import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { ButtonNegative, ButtonPositive } from "./project_elements";
import { title, colorPrimary, colorWhite, colorWhiteSmoke } from "./project_styles";
import { Input } from "react-native-elements";
import { Dropdown } from 'react-native-element-dropdown';
import { Modal, Dimensions, StyleSheet, Text, View } from "react-native";
import Spacer from "./Spacer";
const PopAddLinkAdavance = ({ visibility, changeVisibility,
    data = { name: "", value: "", type: "" },
    onSubmit }) => {
    const [name, setName] = useState(data.name)
    const [value, setValue] = useState(data.value)
    const [type, setType] = useState(data.type)

    const options = [
        { label: 'Params', value: 'params' },
        { label: 'body', value: 'body' },
        { label: 'Header', value: 'header' }
    ];



    const controlSection = () => {


        return < Spacer >
            <View style={styles.controlContainer}>
                <ButtonNegative title={"Cancel"}
                    onPress={() => {
                        changeVisibility()
                    }}
                />

                <ButtonPositive title={"Add"}
                    disabled={(name, value, type) ? false : true}
                    onPress={() => {
                        onSubmit({ name, value, type })
                    }}
                />
            </View>
        </Spacer >
    }


    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visibility}
                onRequestClose={() => changeVisibility()} >


                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={title}>Add data</Text>
                        <Spacer>
                            <Text style={styles.categoryLabel} > Type</Text>

                            <Dropdown
                                style={styles.categoryOption}
                                data={options}
                                maxHeight={200}
                                labelField="label"
                                valueField="value"
                                placeholder={'Select type'}
                                value={type}
                                onChange={item => {
                                    setType(item.value);
                                }} />

                        </Spacer>
                        <Spacer>
                            <Input label="key"
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={name}
                                onChangeText={setName}
                            />
                        </Spacer>
                        <Spacer>
                            <Input
                                label="Value"
                                autoCorrect={false}
                                value={value}
                                onChangeText={setValue} />
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
        fontSize: 20

    },
    categoryOption: {
        fontSize: 20,
        marginHorizontal: 8
        , flex: 1,
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


export default PopAddLinkAdavance