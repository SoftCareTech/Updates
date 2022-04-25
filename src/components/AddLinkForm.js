import React, { useContext, useState } from "react";
import { Text, Button, Input } from 'react-native-elements'
import { View, StyleSheet, Pressable, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import Svg, { Path, Polygon } from 'react-native-svg';
import Spacer from './Spacer'

import { Dropdown } from 'react-native-element-dropdown';
import { ButtonNegative, ButtonPositive, addbtn, penBtn, minusBtn } from "./project_elements";
import { colorBlack, colorPrimary, colorRed, colorWhite, centered } from "./project_styles";
import PopAddLinkAdavance from "./PopAddLinkAdvance";
import AntDesign from 'react-native-vector-icons/AntDesign';
import ItemKeyValue from "./ItemKeyValue";
import { ActivityIndicator, Colors } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";
import doa from "../db/databaseR";
import { Context as LocalLinksContext } from "../context/LocalLinksContext";
const addLinkForm = ({ navigation }) => {
  const { state, editLink, setError } = useContext(LocalLinksContext)
  const data = state.currentLink // default values 
  const [url, setUrl] = useState(data ? data.url : '')
  const [title, setTitle] = useState(data ? data.title : '')
  const [category, setCategory] = useState(data ? data.category : '')
  const [country, setCountry] = useState(data ? data.country : '')
  const [advance, setAdvance] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [params, setParams] = useState(data ? data.params : []);


  if (!data) return <View style={centered}>
    <ActivityIndicator size={'large'} animating={true} color={colorPrimary} />
  </View>
  //https://github.com/hoaphantn7604/react-native-element-dropdown]
  //https://oblador.github.io/react-native-vector-icons/
  const options = [
    { label: 'Job link', value: 'job' },
    { label: 'Political', value: 'polities' },
    { label: 'Studies', value: 'studies' },
    { label: 'School', value: 'school' },
    { label: 'Work place', value: 'work' },
    { label: 'News', value: 'news' },
    { label: 'Shoping', value: 'shoping' },
  ];

  const optionsCountry = [
    { label: 'All', value: 'All' },
    { label: 'Nigeria', value: 'Nigeria' },
    { label: 'Ghana', value: 'Ghana' },
  ];



  const submitParams = (data) => {
    const isEqual = (a, b) => {
      if (a.name === b.name & a.type === b.type) return true
      return false
    }
    let x = false
    for (var i = 0; i < params.length; i++)
      if (isEqual(data, params[i])) {
        x = true; break;
      }
    const uniqueParams = x ? params.map(item =>
      item.mame === data.name && item.type === data.type ? data
        : item)
      : [...params, data]

    try {

      const paramsObj = { params: uniqueParams }
      editLink(state.currentLink._id, paramsObj)
      setParams(uniqueParams)
    } catch (e) {
      console.log(e)
      setError('Error occured')
    }
  }



  const advanceSection = () => {


    return <> <View style={styles.addSvg} >
      <TouchableOpacity onPress={() => {
        setModalVisible(!modalVisible)
      }} >
        <Svg style={styles.addSvg}
          height="26" width="26" viewBox="0 0 292.377 292.377" >
          <Path fill={colorPrimary} d={addbtn} />
        </Svg>
      </TouchableOpacity>
    </View>
      <Spacer />
      <Spacer>
        <FlatList
          style={styles.flatList}
          data={params}
          keyExtractor={(data) => data.key + data.type}
          renderItem={({ item }) => {
            return <ItemKeyValue value={item.value} name={item.name}
              type={item.type}
              onEdit={(data) => {
                console.log("edit")
              }}
              onDelete={(data) => {
                console.log("delete")
              }}
            />
          }} />
      </Spacer> </>
  }

  const controlSection = () => {
    return < Spacer >
      <View style={styles.controlContainer}>
        <ButtonNegative title={"Cancel"}
          onPress={() => {
            navigation.goBack()
          }}
        />
        <ButtonPositive title={"Next"}
          disabled={(url, title, category) ? false : true}
          onPress={async () => {
            try {
              editLink(state.currentLink._id, { url, title, category, country })
              navigation.navigate("LocalAddLinkConfig")
            } catch (e) {
              setError('Error ocured')
            }


          }}
        />
      </View>
    </Spacer >
  }






  return < >
    <PopAddLinkAdavance
      visibility={modalVisible}
      changeVisibility={() => {
        setModalVisible(!modalVisible)
      }}
      onSubmit={(data) => {
        setModalVisible(!modalVisible)
        submitParams(data)
      }

        // 


      } />
    <Spacer>
      <Input label="Url(Link)"
        autoCapitalize='none'
        autoCorrect={false}
        value={url}
        onChangeText={setUrl}
      />
    </Spacer>
    <Spacer>
      <Input
        label="Title"
        autoCorrect={false}
        value={title}
        onChangeText={setTitle} />
    </Spacer>
    <Spacer>
      <Text style={styles.categoryLabel} > Category</Text>
      <Dropdown
        style={styles.categoryOption}
        data={options}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={'Select category'}
        searchPlaceholder="Search..."
        value={category}
        onChange={item => {
          setCategory(item.value);
        }} />

    </Spacer>


    <Spacer>
      <Text style={styles.categoryLabel} > Country</Text>
      <Dropdown
        style={styles.categoryOption}
        data={optionsCountry}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={'Select country'}
        searchPlaceholder="Search..."
        value={country}
        onChange={item => {
          setCountry(item.value);
        }} />

    </Spacer>
    <Spacer>

      <View style={{
        flex: 1,
        justifyContent: 'space-between'
        , flexDirection: "row"
        , marginBottom: 8,
      }}>
        <Text style={styles.categoryLabel}>Advance </Text>
        <Pressable onPress={async () => {
          setAdvance(!advance)

        }}>
          <AntDesign
            style={styles.icon}
            color={colorBlack}
            name={advance ? "upcircleo" : "downcircleo"}
            size={20} /></Pressable>
      </View>


    </Spacer>
    {advance ? advanceSection() : null}

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


  categoryLabel: {
    fontSize: 20

  },
  categoryOption: {
    fontSize: 20,
    marginHorizontal: 8

  },

  flatList: {
    flex: -1,
    minHeight: 100

  },
  addSvg: {
    fontSize: 16,
    flex: 1,
    alignItems: "flex-start"
    , marginEnd: 16, marginLeft: 8
  }

})

export default addLinkForm
