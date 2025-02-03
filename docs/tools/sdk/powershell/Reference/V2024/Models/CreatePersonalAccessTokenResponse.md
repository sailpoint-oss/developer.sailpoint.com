---
id: v2024-create-personal-access-token-response
title: CreatePersonalAccessTokenResponse
pagination_label: CreatePersonalAccessTokenResponse
sidebar_label: CreatePersonalAccessTokenResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreatePersonalAccessTokenResponse', 'V2024CreatePersonalAccessTokenResponse'] 
slug: /tools/sdk/powershell/v2024/models/create-personal-access-token-response
tags: ['SDK', 'Software Development Kit', 'CreatePersonalAccessTokenResponse', 'V2024CreatePersonalAccessTokenResponse']
---


# CreatePersonalAccessTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the personal access token (to be used as the username for Basic Auth). | [required]
**Secret** | **String** | The secret of the personal access token (to be used as the password for Basic Auth). | [required]
**Scope** | **[]String** | Scopes of the personal  access token. | [required]
**Name** | **String** | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | [required]
**Owner** | [**PatOwner**](pat-owner) |  | [required]
**Created** | **System.DateTime** | The date and time, down to the millisecond, when this personal access token was created. | [required]
**AccessTokenValiditySeconds** | **Int32** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [required]

## Examples

- Prepare the resource
```powershell
$CreatePersonalAccessTokenResponse = Initialize-PSSailpoint.V2024CreatePersonalAccessTokenResponse  -Id 86f1dc6fe8f54414950454cbb11278fa `
 -Secret 1d1bef2b9f426383447f64f69349fc7cac176042578d205c256ba3f37c59adb9 `
 -Scope [demo:personal-access-token-scope:first, demo:personal-access-token-scope:second] `
 -Name NodeJS Integration `
 -Owner null `
 -Created 2017-07-11T18:45:37.098Z `
 -AccessTokenValiditySeconds 36900
```

- Convert the resource to JSON
```powershell
$CreatePersonalAccessTokenResponse | ConvertTo-JSON
```


[[Back to top]](#) 

