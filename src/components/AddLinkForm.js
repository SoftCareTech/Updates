import React, { useReducer, useState } from "react";
import { Text, Button, Input } from 'react-native-elements'
import { View, StyleSheet, Pressable, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import Svg, { Path, Polygon } from 'react-native-svg';
import Spacer from './Spacer'

import { Dropdown } from 'react-native-element-dropdown';
import { ButtonNegative, ButtonPositive, addbtn, penBtn, minusBtn } from "./project_elements";
import { colorBlack, colorPrimary, colorRed, colorWhite } from "./project_styles";
import PopAddLinkAdavance from "./PopAddLinkAdvance";
import AntDesign from 'react-native-vector-icons/AntDesign';
import ItemKeyValue from "./ItemKeyValue";
import { NavigationContainer } from "@react-navigation/native";
const addLinkForm = ({ navigation }) => {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [advance, setAdvance] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [advanceParams, setAdvanceParams] = useState([
    { name: "token", value: "hsbjjjgffgrhhghhhhhhhhhhhghntgfddjbd", type: "body" },
    { name: "user", value: "hsbjdmkjbd", type: "header" },
    { name: "bearer", value: "hsbjdjhhjbd", type: "Authorization" }

  ]);
  //https://github.com/hoaphantn7604/react-native-element-dropdown
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
          data={advanceParams}
          keyExtractor={(data) => data.value}
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
          onPress={() => {
            navigation.navigate("LocalAddLinkConfig", { url, title, category, advance })

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
        console.log(data)
        setModalVisible(!modalVisible)
      }} />
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

      <View style={{
        flex: 1,
        justifyContent: 'space-between'
        , flexDirection: "row"
        , marginBottom: 8,
      }}>
        <Text style={styles.categoryLabel}>Advance </Text>
        <Pressable onPress={() => setAdvance(!advance)}>
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

/*
var db = new PouchDB('dbname');

db.put({
  _id: 'dave@gmail.com',
  name: 'David',
  age: 69
});

db.changes().on('change', function() {
  console.log('Ch-Ch-Changes');
});

db.replicate.to('http://example.com/mydb');


mport PouchDB from 'pouchdb-react-native'
const db = new PouchDB('mydb')
 
// use PouchDB
db.get('4711')
  .then(doc => console.log(doc))
 



Android limit
On Android asyncstorage has a limitation of 6 MB per default, you might want to increase it

// MainApplication.getPackages() 
long size = 50L * 1024L * 1024L; // 50 MB 
com.facebook.react.modules.storage.ReactDatabaseSupplier.getInstance(getApplication






    'use strict'

import React from 'react'
import {
  AsyncStorage,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

import ActionButton from 'react-native-action-button'
import PouchDB from 'pouchdb-react-native'
import NavigationExperimental from 'react-native-deprecated-custom-components'

const localDB = new PouchDB('myDB')
console.log(localDB.adapter)

AsyncStorage.getAllKeys()
  .then(keys => AsyncStorage.multiGet(keys))
  .then(items => console.log('all pure Items', items))
  .catch(error => console.warn('error get all Items', error))

export default React.createClass({
  getInitialState () {
    const updateDocs = () => {
      localDB.allDocs({include_docs: true, limit: null})
        .then(result => {
          const items = result.rows.map(row => row.doc)
          const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
          this.setState({
            dataSource: ds.cloneWithRows(items),
            count: items.length
          })
        })
        .catch(error => console.warn('Could not load Documents', error, error.message))
    }

    localDB.changes({since: 'now', live: true})
      .on('change', () => updateDocs())

    updateDocs()

    return {
      dataSource: null,
      syncUrl: 'http://localhost:5984/test'
    }
  },
  render () {
    const renderScene = (route, navigator) => (
      <View style={{flex: 1, marginTop: 20, backgroundColor: '#FFFFFF'}}>
        {route.render()}
      </View>
    )

    const renderMain = () => {
      const insertAttachment = () => {
        const doc = {
          'title': 'with attachment',
          '_attachments': {
            'att.txt': {
              'content_type': 'text/plain',
              'data': 'TGVnZW5kYXJ5IGhlYXJ0cywgdGVhciB1cyBhbGwgYXBhcnQKTWFrZS' +
                      'BvdXIgZW1vdGlvbnMgYmxlZWQsIGNyeWluZyBvdXQgaW4gbmVlZA=='
            }
          }
        }

        localDB.post(doc)
          .then(result => console.log('save.attachment', result))
          .catch(error => console.warn('save.attachment.error', error, error.message, error.stack))
      }

      const insertRecords = count => {
        for (let index = 0; index < count; index++) {
          localDB.post({
            text: `Record ${index}/${count}`
          })
        }
      }

      const destroy = count => {
        localDB.destroy()
          .then(() => console.log('destroyed'))
          .catch(error => console.warn('destroyed', error))
      }

      const { dataSource } = this.state

      const renderSeparator = (sectionID, rowID) => (
        <View
          key={rowID}
          style={{borderColor: '#969A99', borderBottomWidth: StyleSheet.hairlineWidth}} />
      )

      const renderRow = (row) => {
        const updateItem = () => {
          const newRow = {...row}
          newRow.clickCount = newRow.clickCount ? newRow.clickCount + 1 : 1

          localDB.put(newRow)
            .then(result => console.log('Updated Item', result))
            .catch(error => console.warn('Error during update Item', error))
        }

        return (
          <TouchableHighlight onPress={updateItem}>
            <View key={row._id}>
              <Text style={{fontWeight: 'bold'}}>{row._id}</Text>
              <Text>{JSON.stringify(row, null, 4)}</Text>
            </View>
          </TouchableHighlight>
        )
      }

      const renderList = () => (
        <ListView
          dataSource={dataSource}
          renderRow={renderRow}
          renderSeparator={renderSeparator}
          enableEmptySections />
      )

      return (
        <View style={{flex: 1}}>
          <View>
            {!!this._sync && <Text style={{fontWeight: 'bold'}}>{this.state.syncUrl}</Text>}
            <Text style={{fontWeight: 'bold'}}>Count: {this.state.count}</Text>
          </View>
          <View
            style={{borderColor: '#969A99', borderBottomWidth: StyleSheet.hairlineWidth}} />
          {!dataSource
            ? (<Text>Loading...</Text>)
            : renderList()
          }
          <ActionButton buttonColor='#78B55E'>
            <ActionButton.Item
              buttonColor='#005BFF'
              title='Destroy Database'
              onPress={destroy}>
              <Text>destroy</Text>
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor='#005BFF'
              title='Insert Attachments'
              onPress={insertAttachment}>
              <Text>attach</Text>
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor='#005BFF'
              title='Insert 250 Records'
              onPress={() => insertRecords(250)}>
              <Text>insert</Text>
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor='#005BFF'
              title='Sync'
              onPress={() => this._navigator.push({name: 'Sync', render: renderSync})}>
              <Text>sync</Text>
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor='#005BFF'
              title='Add Item'
              onPress={() => this._navigator.push({name: 'AddItem', render: renderAddItem})}>
              <Text>+</Text>
            </ActionButton.Item>
          </ActionButton>
        </View>
      )
    }

    const renderButton = (text, onPress) => {
      return (
        <TouchableHighlight
          onPress={onPress}
          style={{
            flexDirection: 'column',
            paddingTop: 3,
            paddingBottom: 3,
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: '#78B55E',
            borderRadius: 5
          }}>
          <Text
            style={{
              flex: 1,
              fontSize: 18,
              fontWeight: 'bold',
              color: '#FFFFFF',
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 2,
              alignSelf: 'center'
            }}>
            {text}
          </Text>
        </TouchableHighlight>
      )
    }

    const renderSync = () => {
      const addSync = () => {
        if (this._sync) {
          this._sync.cancel()
          this._sync = null
        }

        if (this.state.syncUrl) {
          const remoteDb = new PouchDB(this.state.syncUrl, {ajax: {cache: false}})
          this._sync = PouchDB.sync(localDB, remoteDb, {live: true, retry: true})
            .on('error', error => console.error('Sync Error', error))
            .on('change', info => console.log('Sync change', info))
            .on('paused', info => console.log('Sync paused', info))
        }

        this._navigator.pop()
      }

      return (
        <View style={{flex: 1}}>
          <TextInput
            style={{
              height: 40,
              lineHeight: 40,
              fontSize: 16,
              paddingLeft: 10,
              paddingRight: 10
            }}
            autoFocus
            keyboardType='url'
            clearButtonMode='always'
            placeholder='enter URL'
            onChangeText={(text) => this.setState({syncUrl: text})}
            value={this.state.syncUrl} />
          {renderButton('Add Sync', addSync)}
        </View>
      )
    }

    const renderAddItem = () => {
      const addItem = () => {
        localDB.post(JSON.parse(this.state.newItem))
          .then(result => {
            this.setState({newItem: ''})
            this._navigator.pop()
          })
          .catch(error => console.error('Error during create Item', error, error.message))
      }

      return (
        <View style={{flex: 1}}>
          <TextInput
            style={{
              height: 340,
              lineHeight: 40,
              fontSize: 16,
              paddingLeft: 10,
              paddingRight: 10
            }}
            autoFocus
            clearButtonMode='always'
            multiline
            placeholder='JSON Object here'
            onChangeText={(text) => this.setState({newItem: text})}
            value={this.state.newItem} />
          {renderButton('Add Item', addItem)}
        </View>
      )
    }

    return (
      <View style={{flex: 1}}>
        <NavigationExperimental.Navigator
          ref={navigator => { this._navigator = navigator }}
          renderScene={renderScene}
          initialRoute={{name: 'Main', render: renderMain}}
        />
      </View>
    )
  }
})
*/