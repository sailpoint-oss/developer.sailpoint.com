---
id: v1-createpersonalaccesstokenrequest-v1
title: CreatepersonalaccesstokenrequestV1
pagination_label: CreatepersonalaccesstokenrequestV1
sidebar_label: CreatepersonalaccesstokenrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CreatepersonalaccesstokenrequestV1', 'v1CreatepersonalaccesstokenrequestV1']
slug: /tools/sdk/typescript/personal_access_tokens/models/createpersonalaccesstokenrequest-v1
tags: ['SDK', 'Software Development Kit', 'CreatepersonalaccesstokenrequestV1', 'v1CreatepersonalaccesstokenrequestV1']
---

# CreatepersonalaccesstokenrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The name of the personal access token (PAT) to be created. Cannot be the same as another PAT owned by the user for whom this PAT is being created. | [default to undefined]
**scope** | **(optional)** `Array<string>` | Scopes of the personal  access token. If no scope is specified, the token will be created with the default scope \"sp:scopes:all\". This means the personal access token will have all the rights of the owner who created it. | [default to undefined]
**accessTokenValiditySeconds** | **(optional)** `number` | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [default to undefined]
**expirationDate** | **(optional)** `string` | Date and time, down to the millisecond, when this personal access token will expire. **Important:** When `expirationDate` is `null` or empty (not included in the request body), the token will never expire. **Required Validation:** If `expirationDate` is `null` or empty, `userAwareTokenNeverExpires` must be set to `true`. This is a required validation rule. **Valid Values (dependent on `userAwareTokenNeverExpires`):** * **When `userAwareTokenNeverExpires` is `true` (or required to be `true`):** `expirationDate` can be `null` or omitted from the request body. When `expirationDate` is `null` or empty, the token will never expire. * **When `userAwareTokenNeverExpires` is `false` or omitted:** `expirationDate` must be provided and must be a valid date-time string representing a future date (after the current date/time). There is no upper limit on how far in the future the expiration date can be set. `expirationDate` cannot be `null` in this case. **Validation Rules:** * **If `expirationDate` is `null` or not included in the request body:** `userAwareTokenNeverExpires` must be set to `true` (required). The token will never expire. * **If `expirationDate` is provided and is not `null`:** `userAwareTokenNeverExpires` can be omitted. | [default to undefined]
**userAwareTokenNeverExpires** | **(optional)** `boolean` | Indicates that the user creating this Personal Access Token is aware of and acknowledges the security implications of creating a token that will never expire. When set to `true`, this flag confirms that the user understands the security risks associated with non-expiring tokens. **Security Awareness:** Setting this field to `true` serves as an explicit acknowledgment that the user creating the token understands: * Tokens that never expire pose a greater security risk if compromised * Non-expiring tokens should be used only when necessary and with appropriate security measures * Regular rotation and monitoring of non-expiring tokens is recommended **Required Validation:** If `expirationDate` is `null` or empty (not included in the request body), `userAwareTokenNeverExpires` must be set to `true`. This is a required validation rule. **Validation Rules:** * **If `expirationDate` is `null` or not included in the request body:** `userAwareTokenNeverExpires` must be set to `true` (required). * **If `expirationDate` is provided and is not `null`:** `userAwareTokenNeverExpires` can be omitted. **Behavior:** * When set to `true`: Indicates that the user acknowledges they are creating a token that will never expire. When `expirationDate` is `null` or empty, the token will never expire. * When set to `false` or not specified (and `expirationDate` is provided): The token will follow normal expiration rules based on the `expirationDate` field and `accessTokenValiditySeconds` setting. | [default to false]

