---
id: beta-get-personal-access-token-response
title: GetPersonalAccessTokenResponse
pagination_label: GetPersonalAccessTokenResponse
sidebar_label: GetPersonalAccessTokenResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPersonalAccessTokenResponse', 'BetaGetPersonalAccessTokenResponse'] 
slug: /tools/sdk/powershell/beta/models/get-personal-access-token-response
tags: ['SDK', 'Software Development Kit', 'GetPersonalAccessTokenResponse', 'BetaGetPersonalAccessTokenResponse']
---


# GetPersonalAccessTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The ID of the personal access token (to be used as the username for Basic Auth). | [required]
**Name** |  **String** | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | [required]
**Scope** |  **[]String** | Scopes of the personal  access token. | [required]
**Owner** |  [**PatOwner**](pat-owner) |  | [required]
**Created** |  **System.DateTime** | The date and time, down to the millisecond, when this personal access token was created. | [required]
**LastUsed** |  Pointer to **System.DateTime** | The date and time, down to the millisecond, when this personal access token was last used to generate an access token. This timestamp does not get updated on every PAT usage, but only once a day. This property can be useful for identifying which PATs are no longer actively used and can be removed. | [optional] 
**Managed** |  Pointer to **Boolean** | If true, this token is managed by the SailPoint platform, and is not visible in the user interface. For example, Workflows will create managed personal access tokens for users who create workflows. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$GetPersonalAccessTokenResponse = Initialize-PSSailpoint.BetaGetPersonalAccessTokenResponse  -Id 86f1dc6fe8f54414950454cbb11278fa `
 -Name NodeJS Integration `
 -Scope [demo:personal-access-token-scope:first, demo:personal-access-token-scope:second] `
 -Owner null `
 -Created 2017-07-11T18:45:37.098Z `
 -LastUsed 2017-07-11T18:45:37.098Z `
 -Managed false
```

- Convert the resource to JSON
```powershell
$GetPersonalAccessTokenResponse | ConvertTo-JSON
```


[[Back to top]](#) 

