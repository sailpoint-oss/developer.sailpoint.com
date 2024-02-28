---
id: connector-timeouts
title: Connector Timeouts
pagination_label: Connector Timeouts
sidebar_label: Connector Timeouts
sidebar_position: 1.2
sidebar_class_name: connectorTimeouts
keywords: ['connectivity', 'connectors', 'timeout']
description: IdentityNow will throw an error if your connector does not send a response in 3 minutes. For connector commands that might take longer than 3 minutes, make sure to send data at regular intervals to prevent a timeout.
slug: /connectivity/saas-connectivity/in-depth/connector-timeouts
tags: ['Connectivity']
---

An IdentityNow SaaS Connectivity connector will send a timeout error if it doesn't send a response within 3 minutes. If the connector is sending thousands of records, the record fetching process will likely exceed this timeout limit. If you are storing all those records in memory before sending them to IDN, you can run into memory utilization issues. To prevent these issues, you should paginate through your source data and send the data back in regular intervals.

In the case of a long running API call to the source system, you can also optionally send `res.keepAlive()` to keep the connection to IdentityNow open without having to send any data to IdentityNow. If `res.keepAlive()` or `res.send()` is not called within 3 minutes, a connector timeout will occur.

This is an example of how to set up this pagination: 

```javascript
async getAccounts(res: Response<StdAccountListOutput>): Promise<boolean> {
    return this.airtableBase('Users').select(
        // in this case, each page will only be ten records, but this could be increased depending on your needs and the limits of the source connector
        {pageSize: 10}
    // each page will be called recursively until there are no more records to fetch, at which case the promise is fulfilled
    ).eachPage((records, fetchNextPage) => {
        for (let record of records) {
            // this is the part that sends the data to IdentityNow. Since eachPage is called with just 10 records, 
            // if there are 100 records total, we would send data back to IDN in 10 sets of 10 records.
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
