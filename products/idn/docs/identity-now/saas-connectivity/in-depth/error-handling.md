---
id: error-handling
title: Error Handling
pagination_label: Error Handling
sidebar_label: Error Handling
sidebar_position: 3
sidebar_class_name: errorHandling
keywords: ["connectivity", "connectors", "error handling"]
description: Any time code can fail due to validation issues, connectivity or configuration errors, handle the error and provide information back to the user about what went wrong.
slug: /docs/saas-connectivity/in-depth/error-handling
tags: ["Connectivity"]
---
# Error Handling
Any time code can fail due to validation issues, connectivity or configuration errors, handle the error and provide information back to the user about what went wrong. If you handle your errors properly, it will be easier to debug and pinpoint what happened in your connector when something goes wrong.

## Connector Errors
The connector SDK has a built-in ConnectorError to use in your project to handle most generic errors:

[airtable.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts)

```javascript
import { ConnectorError } from "@sailpoint/connector-sdk"

...

export class AirtableClient {

...

    async getAllAccounts(): Promise<AirtableAccount[]> {
        return this.airTableBase('Users').select({
            view: 'Grid view'
        }).firstPage().then(records => {
            const recordArray: Array<AirtableAccount> = []
            for (const record of records) {
                recordArray.push(AirtableAccount.createWithRecords(record))
            }
            return recordArray
        }).catch(err => {
            throw new ConnectorError('error while getting accounts: ' + err)
        })
    }
```

## Custom Errors
You can also create custom errors and use them in your code to give more meaningful and specific responses to error states. For example, when you are configuring your connector, it is recommended that you throw an ```InvalidConfigurationError``` instead of a generic ConnectorError. To do this, create the custom error:

[invalid-configuration-error.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/errors/invalid-configuration-error.ts)
```javascript
import { ConnectorError, ConnectorErrorType } from '@sailpoint/connector-sdk'

/**
 * Thrown when an application missing configuration during initialization
 */

export class InvalidConfigurationError extends ConnectorError {
    /**
     * Constructor
     * @param message Error message
     * @param type ConnectorErrorType they type of error
     */
    constructor(message: string, type?: ConnectorErrorType) {
        super(message, type)
        this.name = 'InvalidConfigurationError'
    }
}
```

Then throw the error in your code:

[airtable.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts)
```javascript
import { InvalidConfigurationError } from "./errors/invalid-configuration-error"

export class AirtableClient {
    private readonly airTableBase: Airtable.Base
    constructor(config: any) {
        // Fetch necessary properties from config.
        // Following properties actually do not exist in the config -- it just serves as an example.
        if (config.apiKey == null) {
            throw new InvalidConfigurationError('token must be provided from config')
        }
        if (config.airtableBase == null) {
            throw new InvalidConfigurationError('airtableBase base id needed')
        }
        Airtable.configure({apiKey: config.apiKey})
        this.airTableBase = Airtable.base(config.airtableBase)
    }

    ...

}
```