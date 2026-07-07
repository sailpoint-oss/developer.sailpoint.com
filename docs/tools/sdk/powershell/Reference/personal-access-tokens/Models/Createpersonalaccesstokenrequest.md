---
id: createpersonalaccesstokenrequest
title: Createpersonalaccesstokenrequest
pagination_label: Createpersonalaccesstokenrequest
sidebar_label: Createpersonalaccesstokenrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Createpersonalaccesstokenrequest', 'Createpersonalaccesstokenrequest'] 
slug: /tools/sdk/powershell/personalaccesstokens/models/createpersonalaccesstokenrequest
tags: ['SDK', 'Software Development Kit', 'Createpersonalaccesstokenrequest', 'Createpersonalaccesstokenrequest']
---


# Createpersonalaccesstokenrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the personal access token (PAT) to be created. Cannot be the same as another PAT owned by the user for whom this PAT is being created. | [required]
**Scope** | **[]String** | Scopes of the personal  access token. If no scope is specified, the token will be created with the default scope ""sp:scopes:all"". This means the personal access token will have all the rights of the owner who created it. | [optional] 
**AccessTokenValiditySeconds** | **Int32** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [optional] 
**ExpirationDate** | **System.DateTime** | Date and time, down to the millisecond, when this personal access token will expire. **Important:** When `expirationDate` is `null` or empty (not included in the request body), the token will never expire. **Required Validation:** If `expirationDate` is `null` or empty, `userAwareTokenNeverExpires` must be set to `true`. This is a required validation rule. **Valid Values (dependent on `userAwareTokenNeverExpires`):** * **When `userAwareTokenNeverExpires` is `true` (or required to be `true`):** `expirationDate` can be `null` or omitted from the request body. When `expirationDate` is `null` or empty, the token will never expire. * **When `userAwareTokenNeverExpires` is `false` or omitted:** `expirationDate` must be provided and must be a valid date-time string representing a future date (after the current date/time). There is no upper limit on how far in the future the expiration date can be set. `expirationDate` cannot be `null` in this case. **Validation Rules:** * **If `expirationDate` is `null` or not included in the request body:** `userAwareTokenNeverExpires` must be set to `true` (required). The token will never expire. * **If `expirationDate` is provided and is not `null`:** `userAwareTokenNeverExpires` can be omitted. | [optional] 
**UserAwareTokenNeverExpires** | **Boolean** | Indicates that the user creating this Personal Access Token is aware of and acknowledges the security implications of creating a token that will never expire. When set to `true`, this flag confirms that the user understands the security risks associated with non-expiring tokens. **Security Awareness:** Setting this field to `true` serves as an explicit acknowledgment that the user creating the token understands: * Tokens that never expire pose a greater security risk if compromised * Non-expiring tokens should be used only when necessary and with appropriate security measures * Regular rotation and monitoring of non-expiring tokens is recommended **Required Validation:** If `expirationDate` is `null` or empty (not included in the request body), `userAwareTokenNeverExpires` must be set to `true`. This is a required validation rule. **Validation Rules:** * **If `expirationDate` is `null` or not included in the request body:** `userAwareTokenNeverExpires` must be set to `true` (required). * **If `expirationDate` is provided and is not `null`:** `userAwareTokenNeverExpires` can be omitted. **Behavior:** * When set to `true`: Indicates that the user acknowledges they are creating a token that will never expire. When `expirationDate` is `null` or empty, the token will never expire. * When set to `false` or not specified (and `expirationDate` is provided): The token will follow normal expiration rules based on the `expirationDate` field and `accessTokenValiditySeconds` setting. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Createpersonalaccesstokenrequest = Initialize-Createpersonalaccesstokenrequest  -Name NodeJS Integration `
 -Scope ["demo:personal-access-token-scope:first","demo:personal-access-token-scope:second"] `
 -AccessTokenValiditySeconds 36900 `
 -ExpirationDate 2026-12-31T23:59:59.999Z `
 -UserAwareTokenNeverExpires false
```

- Convert the resource to JSON
```powershell
$Createpersonalaccesstokenrequest | ConvertTo-JSON
```


[[Back to top]](#) 

