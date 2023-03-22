---
id: error-handling
title: Error Handling
pagination_label: Error Handling
sidebar_label: Error Handling
sidebar_position: 3
sidebar_class_name: errorHandling
keywords: ['connectivity', 'connectors', 'error handling']
description: Any time code can fail due to validation issues, connectivity or configuration errors, handle the error and provide information back to the user about what went wrong.
slug: /docs/saas-connectivity/in-depth/error-handling
tags: ['Connectivity']
---

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

## Not Found Error Type

The connector SDK offers a special error type of "Not Found". This error will signal to IdentityNow that the specific account is not in the source system, and in the case where it should be in the source system, IdentityNow will then call the connector ```std:account:create``` command to create the account. An example of this in pracice can be found below:

```javascript
.stdAccountUpdate(async (context: Context, input: StdAccountUpdateInput, res: Response<StdAccountUpdateOutput>) => {
    const account = await myClient.getAccount(input.identity)
    if (!account) {
        // account was not found, but identity now has the account and expects it to be there! 
        // Send an error message to IdentityNow so the account is automatically created
        if (!account) {
            throw new ConnectorError("account is not found", ConnectorErrorType.NotFound)
        }
    }

    ... perform normal account update logic below

```

## Custom Errors

You can also create custom errors and use them in your code to give more meaningful and specific responses to error states. For example, when you are configuring your connector, it is recommended that you throw an `InvalidConfigurationError` instead of a generic ConnectorError. To do this, create the custom error:

[invalid-configuration-error.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/errors/invalid-configuration-error.ts)

```javascript
import {ConnectorError, ConnectorErrorType} from '@sailpoint/connector-sdk';

/**
 * Thrown when an application missing configuration during initialization
 */

export class InvalidConfigurationException extends ConnectorError {
  /**
   * Constructor
   * @param message Error message
   * @param type ConnectorErrorType they type of error
   */
  constructor(message: string, type?: ConnectorErrorType) {
    super(message, type);
    this.name = 'InvalidConfigurationException';
  }
}
```

Then throw the error in your code:

[airtable.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts)

```javascript
import { InvalidConfigurationException } from "./errors/invalid-configuration-error"

export class AirtableClient {
    private readonly airTableBase: Airtable.Base
    constructor(config: any) {
        // Fetch necessary properties from config.
        // Following properties actually do not exist in the config -- it just serves as an example.
        if (config.apiKey == null) {
            throw new InvalidConfigurationException('token must be provided from config')
        }
        if (config.airtableBase == null) {
            throw new InvalidConfigurationException('airtableBase base id needed')
        }
        Airtable.configure({apiKey: config.apiKey})
        this.airTableBase = Airtable.base(config.airtableBase)
    }

    ...

}
```

## Recommended custom exceptions and examples of when to use

#### InvalidConfigurationException
- During any operation if connector requires certain configuration to connect to the managed-system which is not provided or is faulty. This could happen before sending a request to the managed system

#### InsufficientPermissionException
- During any operation if connector gets a known Managed System exception indicating lack of permission

#### InvalidRequestException
- During any operation when the connector is creating messages to be sent to the managed system, but it fails to create a message. This could happen before sending a request to the managed system.

#### ObjectAlreadyExistsException
- During provisioning operation of type create(only) the connector is trying to create an entity on the managed system but the same entity is already existing on the managed system.

#### InvalidResponseException
- During aggregation or in the getObject when the connector is unable to parse a data received from Managed System. If something fails, when converting managed system response to ResourceObject.

#### TimeoutException
- This is intended for cases in which the connector receives timeout related error/exception from the managed system.