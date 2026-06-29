---
id: getpersonalaccesstokenresponse
title: Getpersonalaccesstokenresponse
pagination_label: Getpersonalaccesstokenresponse
sidebar_label: Getpersonalaccesstokenresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Getpersonalaccesstokenresponse', 'Getpersonalaccesstokenresponse'] 
slug: /tools/sdk/powershell/personalaccesstokens/models/getpersonalaccesstokenresponse
tags: ['SDK', 'Software Development Kit', 'Getpersonalaccesstokenresponse', 'Getpersonalaccesstokenresponse']
---


# Getpersonalaccesstokenresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the personal access token (to be used as the username for Basic Auth). | [required]
**Name** | **String** | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | [required]
**Scope** | **[]String** | Scopes of the personal  access token. | [required]
**Owner** | [**Patowner**](patowner) |  | [required]
**Created** | **System.DateTime** | The date and time, down to the millisecond, when this personal access token was created. | [required]
**LastUsed** | **System.DateTime** | The date and time, down to the millisecond, when this personal access token was last used to generate an access token. This timestamp does not get updated on every PAT usage, but only once a day. This property can be useful for identifying which PATs are no longer actively used and can be removed. | [optional] 
**Managed** | **Boolean** | If true, this token is managed by the SailPoint platform, and is not visible in the user interface. For example, Workflows will create managed personal access tokens for users who create workflows. | [optional] [default to $false]
**AccessTokenValiditySeconds** | **Int32** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [optional] [default to 43200]
**ExpirationDate** | **System.DateTime** | Date and time, down to the millisecond, when this personal access token will expire. **Important:** When `expirationDate` is `null` or empty, the token will never expire (and `userAwareTokenNeverExpires` will be `true`). When `expirationDate` is provided, this value must be a future date. There is no upper limit on how far in the future the expiration date can be set. | [optional] 
**UserAwareTokenNeverExpires** | **Boolean** | Indicates that the user who created or updated this Personal Access Token is aware of and acknowledges the security implications of creating a token that will never expire. When `true`, this flag confirms that the user understood the security risks associated with non-expiring tokens at the time of creation or update. **Security Awareness:** This field serves as a record that the user acknowledged: * Tokens that never expire pose a greater security risk if compromised * Non-expiring tokens should be used only when necessary and with appropriate security measures * Regular rotation and monitoring of non-expiring tokens is recommended **Behavior:** * When `true`: Indicates that the user acknowledged they were creating a token that will never expire. When `expirationDate` is `null`, the token will never expire. * When `false`: The token follows normal expiration rules based on the `expirationDate` field and `accessTokenValiditySeconds` setting. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Getpersonalaccesstokenresponse = Initialize-Getpersonalaccesstokenresponse  -Id 86f1dc6fe8f54414950454cbb11278fa `
 -Name NodeJS Integration `
 -Scope ["demo:personal-access-token-scope:first","demo:personal-access-token-scope:second"] `
 -Owner null `
 -Created 2017-07-11T18:45:37.098Z `
 -LastUsed 2017-07-11T18:45:37.098Z `
 -Managed false `
 -AccessTokenValiditySeconds 36900 `
 -ExpirationDate 2026-12-31T23:59:59.999Z `
 -UserAwareTokenNeverExpires false
```

- Convert the resource to JSON
```powershell
$Getpersonalaccesstokenresponse | ConvertTo-JSON
```


[[Back to top]](#) 

