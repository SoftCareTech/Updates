import res from "express/lib/response";
import doa from "../db/databaseR"
import { loadAndCompare } from "./useUpdatesLookup";
const reloadAll = async () => {
    const data = await doa.getUrls()
    data.forEach(element => {
        reload(element)
    });

}

const loadAndSave = (urlData) => {
    const searchOption = {
        oldData: urlData.newData,
        global: urlData.global,
        conditions: urlData.conditions
    }
    try {

        const res = await loadAndCompare({ link: urlData.url, search: searchOption, config: null })
        doa.updateUrl(urlData._id, {
            status: res.result.status,
            lastScanned: new Date().getMilliseconds(),
            oldData: res.result.changes > 1 ? urlData.newData : urlData.oldData
            , newData: res.data,

        })
    } catch (e) {
        doa.updateUrl(urlData._id, {
            status: res.status,
            lastScanned: new Date().getMilliseconds(),

        })
        console.error(e)
    }
}

export { reloadAll, reload }

