---
id: v2024-get-personal-access-token-response
title: GetPersonalAccessTokenResponse
pagination_label: GetPersonalAccessTokenResponse
sidebar_label: GetPersonalAccessTokenResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPersonalAccessTokenResponse', 'V2024GetPersonalAccessTokenResponse'] 
slug: /tools/sdk/powershell/v2024/models/get-personal-access-token-response
tags: ['SDK', 'Software Development Kit', 'GetPersonalAccessTokenResponse', 'V2024GetPersonalAccessTokenResponse']
---


# GetPersonalAccessTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the personal access token (to be used as the username for Basic Auth). | [required]
**Name** | **String** | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | [required]
**Scope** | **[]String** | Scopes of the personal  access token. | [required]
**Owner** | [**PatOwner**](pat-owner) |  | [required]
**Created** | **System.DateTime** | The date and time, down to the millisecond, when this personal access token was created. | [required]
**LastUsed** | **System.DateTime** | The date and time, down to the millisecond, when this personal access token was last used to generate an access token. This timestamp does not get updated on every PAT usage, but only once a day. This property can be useful for identifying which PATs are no longer actively used and can be removed. | [optional] 
**Managed** | **Boolean** | If true, this token is managed by the SailPoint platform, and is not visible in the user interface. For example, Workflows will create managed personal access tokens for users who create workflows. | [optional] [default to $false]
**AccessTokenValiditySeconds** | **Int32** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [optional] [default to 43200]
**ExpirationDate** | **System.DateTime** | Date and time, down to the millisecond, when this personal access token will expire. If not provided, the token will expire 6 months after its creation date. The value must be a valid date-time string between the current date and 6 months from the creation date. | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPersonalAccessTokenResponse = Initialize-V2024GetPersonalAccessTokenResponse  -Id 86f1dc6fe8f54414950454cbb11278fa `
 -Name NodeJS Integration `
 -Scope [demo:personal-access-token-scope:first, demo:personal-access-token-scope:second] `
 -Owner null `
 -Created 2017-07-11T18:45:37.098Z `
 -LastUsed 2017-07-11T18:45:37.098Z `
 -Managed false `
 -AccessTokenValiditySeconds 36900 `
 -ExpirationDate 2018-01-11T18:45:37.098Z
```

- Convert the resource to JSON
```powershell
$GetPersonalAccessTokenResponse | ConvertTo-JSON
```


[[Back to top]](#) 

