---
id: error-handling
title: Error Handling
pagination_label: Error Handling
sidebar_label: Error Handling
sidebar_position: 3
sidebar_class_name: errorHandling
keywords: ['connectivity', 'connectors', 'error handling']
description: If the code fails due to validation issues, connectivity, or configuration errors, you can handle the error and provide the user with information about what went wrong.
slug: /connectivity/saas-connectivity/in-depth/error-handling
tags: ['Connectivity']
---

If the code fails due to validation issues, connectivity or configuration errors, you can handle the error and provide the user with information about what went wrong. Properly handled errors make it easier to debug and identify what happened in your connector when something goes wrong.

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

The connector SDK offers a special error type of "Not Found". This error signals to ISC that the specific account is not in the source system. If the account should be in the source system, ISC will then call the connector `std:account:create` command to create the account.

Here is an example:

```javascript
.stdAccountUpdate(async (context: Context, input: StdAccountUpdateInput, res: Response<StdAccountUpdateOutput>) => {
    const account = await myClient.getAccount(input.identity)
    if (!account) {
        // account was not found, but identity now has the account and expects it to be there!
        // Send an error message to Identity Security Cloud so the account is automatically created
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

## Recommended custom exceptions and examples of when to use them

#### InvalidConfigurationException

- Use this exception during any operation if the connector requires a certain configuration to connect to the managed-system, but the configuration is either faulty or not provided. This could happen before sending a request to the managed system.

#### InsufficientPermissionException

- Use this exception during any operation if the connector gets a known managed system exception indicating a lack of permission.

#### InvalidRequestException

- Use this exception during any operation if the connector is creating messages to be sent to the managed system but is failing to create a message. This could happen before sending a request to the managed system.

#### ObjectAlreadyExistsException

- Use this exception during the provisioning operation of the type create(only) if the connector is trying to create an entity that already exists on the managed system.

#### InvalidResponseException

- Use this exception during aggregation or in the getObject when the connector is unable to parse data received from managed system. This could happen if something fails when converting a managed system response to a ResourceObject.

#### TimeoutException

- This is intended for cases in which the connector receives timeout related error/exceptions from the managed system.
