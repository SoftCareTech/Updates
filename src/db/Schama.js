

export default appSchema({

    version: 1,
    tables: [
        tableSchema({
            name: "url",
            columns: [

                { name: "url", type: "string" },
                { name: "title", type: "string" },
                { name: "category", type: "string" },
                { name: "country", type: "string" },
                { name: "is_observed", type: "boolean" }
                , { name: "is_pinned", type: "boolean" }
                , { name: "last_scanned_at", type: "number" }
                , { name: "status", type: "string" }
                , { name: "old_data", type: "string" }
                , { name: "old_data", type: "string" }
            ]

        }),

        tableSchema({
            name: "conditions",
            columns: [
                { name: "url_id", type: "string" },
                { name: "text", type: "string" },
                { name: "exist", type: "boolean" }

            ]
        }),
        tableSchema({
            name: "params",
            columns: [
                { name: "url_id", type: "string" },
                { name: "key", type: "string" },
                { name: "value", type: "string" }
                , { name: "type", type: "string" }

            ]
        })
    ]

})




