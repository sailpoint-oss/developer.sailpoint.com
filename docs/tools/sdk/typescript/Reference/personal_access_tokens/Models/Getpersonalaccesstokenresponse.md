---
id: v1-getpersonalaccesstokenresponse-v1
title: GetpersonalaccesstokenresponseV1
pagination_label: GetpersonalaccesstokenresponseV1
sidebar_label: GetpersonalaccesstokenresponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'GetpersonalaccesstokenresponseV1', 'v1GetpersonalaccesstokenresponseV1']
slug: /tools/sdk/typescript/personal_access_tokens/models/getpersonalaccesstokenresponse-v1
tags: ['SDK', 'Software Development Kit', 'GetpersonalaccesstokenresponseV1', 'v1GetpersonalaccesstokenresponseV1']
---

# GetpersonalaccesstokenresponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The ID of the personal access token (to be used as the username for Basic Auth). | [default to undefined]
**name** | `string` | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | [default to undefined]
**scope** | `Array<string>` | Scopes of the personal  access token. | [default to undefined]
**owner** | `PatownerV1` |  | [default to undefined]
**created** | `string` | The date and time, down to the millisecond, when this personal access token was created. | [default to undefined]
**lastUsed** | **(optional)** `string` | The date and time, down to the millisecond, when this personal access token was last used to generate an access token. This timestamp does not get updated on every PAT usage, but only once a day. This property can be useful for identifying which PATs are no longer actively used and can be removed. | [default to undefined]
**managed** | **(optional)** `boolean` | If true, this token is managed by the SailPoint platform, and is not visible in the user interface. For example, Workflows will create managed personal access tokens for users who create workflows. | [default to false]
**accessTokenValiditySeconds** | **(optional)** `number` | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [default to 43200]
**expirationDate** | **(optional)** `string` | Date and time, down to the millisecond, when this personal access token will expire. **Important:** When `expirationDate` is `null` or empty, the token will never expire (and `userAwareTokenNeverExpires` will be `true`). When `expirationDate` is provided, this value must be a future date. There is no upper limit on how far in the future the expiration date can be set. | [default to undefined]
**userAwareTokenNeverExpires** | **(optional)** `boolean` | Indicates that the user who created or updated this Personal Access Token is aware of and acknowledges the security implications of creating a token that will never expire. When `true`, this flag confirms that the user understood the security risks associated with non-expiring tokens at the time of creation or update. **Security Awareness:** This field serves as a record that the user acknowledged: * Tokens that never expire pose a greater security risk if compromised * Non-expiring tokens should be used only when necessary and with appropriate security measures * Regular rotation and monitoring of non-expiring tokens is recommended **Behavior:** * When `true`: Indicates that the user acknowledged they were creating a token that will never expire. When `expirationDate` is `null`, the token will never expire. * When `false`: The token follows normal expiration rules based on the `expirationDate` field and `accessTokenValiditySeconds` setting. | [default to false]

