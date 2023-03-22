---
id: connector-timeouts
title: Connector Timeouts
pagination_label: Connector Timeouts
sidebar_label: Connector Timeouts
sidebar_position: 1.2
sidebar_class_name: connectorTimeouts
keywords: ['connectivity', 'connectors', 'timeout']
description: IdentityNow will throw an error if your connector does not send a response in 3 minutes. For connector commands that might take longer than 3 minutes, make sure to send data at regular intervals to prevent a timeout
slug: /docs/saas-connectivity/in-depth/connector-timeouts
tags: ['Connectivity']
---

IdentityNow SaaS Connectivity connectors will send a timeout error if the connector does not send a response in 3 minutes. If a connector is sending thousands of records, then the process of fetching the records will likely exceed this timeout limit, and you can also run into other issues with memory utilization if you are trying to store all those records in memory before sending them to IdentityNow. In order to prevent this, it is recommended to paginate through your source data and send data back on regular intervals. Below is one example of how this can be done.

```javascript
async getAccounts(res: Response<StdAccountListOutput>): Promise<boolean> {
    return this.airtableBase('Users').select(
        // in this case, each page will only be ten records, but this could be increased depending on your needs and the limits of the source connector
        {pageSize: 10}
    // each page will be called recursively until there are no more records to fetch, at which case the promise is fulfilled
    ).eachPage((records, fetchNextPage) => {
        for (let record of records) {
            // this is the part that sends the data to IdentityNow. Since eachPage is called with just 10 records, if there are 100 records total, we would send data back to IDN in 10 sets of 10 records.
            res.send({
                identity: record.id,
                attributes: {
                    id: <string>record.get('id'),
                    email: <string>record.get('email'),
                    fullname: <string>record.get('fullname'),
                    entitlements: <string[]>(record.get('entitlements') ? record.get('entitlements') : [])
                }
            })
        }
        fetchNextPage()

    }).then(()=>{
        return true
    }).catch((err) => {
        throw new ConnectorError('error while fetching accounts')
    })
}

```
