/*  
    Android limit
On Android asyncstorage has a limitation of 6 MB per default, you might want to increase it
long size = 50L * 1024L * 1024L; // 50 MB 
com.facebook.react.modules.storage.ReactDatabaseSupplier.getInstance(getApplicationContext()).setMaximumSize(size);
*/


import Datastore from 'react-native-local-mongodb'
import AsyncStorage from '@react-native-async-storage/async-storage'
const db = new Datastore({
    filename: 'asyncStorageKey',
    storage: AsyncStorage,
    autoload: true
});

const doa = {
    addUrl: async (urlDoc) => {
        return db.insertAsync(urlDoc);
    },
    addUrlParams: (urlId, paramsDoc) => {

    }
    , addUrlCondition: (urlId, conditionsDoc) => {

    }
    , removeUrl: (urlId) => {
        return db.removeAsync({
            _id: urlId
        });

    }
    , updateUrl: async (urlId, urlDoc) => {
        return db.update({
            _id: urlId
        }, { $set: urlDoc }, {});

    }
    , updateUrlParams: (urlId, paramsDoc) => {

    }
    , updateUrlCondition: (urlId, conditionsDoc) => {
        db.update({ url: 'Jupiter' }, { planet: 'Pluton' }, {}, function (err, numReplaced) {
            // numReplaced = 1
            // The doc #3 has been replaced by { _id: 'id3', planet: 'Pluton' }
            // Note that the _id is kept unchanged, and the document has been replaced
            // (the 'system' and inhabited fields are not here anymore)
        });
    },
    getUrls: async (filter = null) => {
        if (filter != null)
            return db.findAsync({ $where: function () { return Object.keys(this) > 6; } });
        else return db.findAsync({})
    },
    getUrl: async (urlId) => {
        return db.findAsync({ _id: urlId });
    }


    , getUrlParams: (urlId) => {

    }
    , getUrlConditions: (urlId,) => {

    }
}

export { db }
export default doa 