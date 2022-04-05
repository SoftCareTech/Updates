import React, { useReducer, useState } from "react";
import { Text, Button, Input } from 'react-native-elements'
import {
  View, StyleSheet, Pressable,
  TouchableOpacity, FlatList, Dimensions
} from 'react-native'
import Svg, { Path, Polygon } from 'react-native-svg';
import Spacer from './Spacer'

import { ButtonNegative, ButtonPositive, addbtn, } from "./project_elements";
import { colorBlack, colorPrimary, colorRed, colorWhite } from "./project_styles";
import PopAddCondition from "./PopAddCondition";
import AntDesign from 'react-native-vector-icons/AntDesign';
import ItemKeyValue from "./ItemKeyValue";
import Checkbox from 'expo-checkbox';

const AddConfigForm = ({ navigation }) => {
  const [global, setGlobal] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [body, setBody] = useState("");
  const [condionsList, setCondionList] = useState([
    { text: "Not hiring", exist: false, },
    { text: "Hiring a new person in this role", exist: true, },
    { text: "Apllication closed", exist: false, }

  ]);
  //https://github.com/hoaphantn7604/react-native-element-dropdown
  //https://oblador.github.io/react-native-vector-icons/


  const controlSection = () => {
    return < Spacer >
      <View style={styles.controlContainer}>
        <ButtonNegative title={"Back"}
          onPress={() => {
            navigation.goBack()
          }}
        />
        <ButtonPositive title={"Submit"}
          onPress={() => {
            navigation.replace("Home")

          }}
        />
      </View>
    </Spacer >
  }





  return < >
    <PopAddCondition
      visibility={modalVisible}
      changeVisibility={() => {
        setModalVisible(!modalVisible)
      }}
      onSubmit={(data) => {
        console.log(data)
        setModalVisible(!modalVisible)
      }} />


    <Spacer>
      <View style={styles.globalContainer}>
        <Text style={styles.globalLabel} > Gblobal changes</Text>
        <Checkbox style={styles.checkbox} value={global} onValueChange={
          (value) => {
            setGlobal(value)

          }} />
      </View>
      {global ? <Text>No need to config Conditions if you want observe all changes </Text> : null}
    </Spacer>

    <Spacer>
      <View style={styles.globalContainer}>
        <Text style={styles.globalLabel} >Conditions </Text>
        <View>
          <TouchableOpacity onPress={() => {
            setModalVisible(!modalVisible)
          }} >
            <Svg style={styles.addSvg}
              height="26" width="26" viewBox="0 0 292.377 292.377" >
              <Path fill={colorPrimary} d={addbtn} />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </Spacer>


    <Spacer>
      <FlatList
        style={styles.flatList}
        data={condionsList}
        keyExtractor={(data) => data.text}
        renderItem={({ item }) => {
          return <ItemKeyValue name={item.text} value={item.exist}
            type={null}
            onEdit={(data) => {
              console.log("edit")
            }}
            onDelete={(data) => {
              console.log("delete")
            }}
          />
        }} />
    </Spacer>
    {controlSection()}
  </>
}


const styles = StyleSheet.create({
  controlContainer: {
    flex: 1
    , height: 50,
    flexDirection: "row",
    justifyContent: "space-around"

  },
  globalContainer: {
    flex: 1,
    justifyContent: 'space-between'
    , flexDirection: "row"
    , marginBottom: 8,
  },

  globalLabel: {
    fontSize: 20
    , fontWeight: "bold"

  },

  flatList: {
    flex: -1,
    minHeight: 100

  },
  addSvg: {
    fontSize: 16,
    marginLeft: 8
  }

})

export default AddConfigForm 