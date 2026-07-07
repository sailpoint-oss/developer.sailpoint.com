---
id: v1-createpersonalaccesstokenresponse-v1
title: CreatepersonalaccesstokenresponseV1
pagination_label: CreatepersonalaccesstokenresponseV1
sidebar_label: CreatepersonalaccesstokenresponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CreatepersonalaccesstokenresponseV1', 'v1CreatepersonalaccesstokenresponseV1']
slug: /tools/sdk/typescript/personal_access_tokens/models/createpersonalaccesstokenresponse-v1
tags: ['SDK', 'Software Development Kit', 'CreatepersonalaccesstokenresponseV1', 'v1CreatepersonalaccesstokenresponseV1']
---

# CreatepersonalaccesstokenresponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The ID of the personal access token (to be used as the username for Basic Auth). | [default to undefined]
**secret** | `string` | The secret of the personal access token (to be used as the password for Basic Auth). | [default to undefined]
**scope** | `Array<string>` | Scopes of the personal  access token. | [default to undefined]
**name** | `string` | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | [default to undefined]
**owner** | `PatownerV1` |  | [default to undefined]
**created** | `string` | The date and time, down to the millisecond, when this personal access token was created. | [default to undefined]
**accessTokenValiditySeconds** | `number` | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [default to undefined]
**expirationDate** | `string` | Date and time, down to the millisecond, when this personal access token will expire. If not provided, the token will expire 6 months after its creation date. The value must be a valid date-time string between the current date and 6 months from the creation date. | [default to undefined]

