---
id: create-personal-access-token-response
title: CreatePersonalAccessTokenResponse
pagination_label: CreatePersonalAccessTokenResponse
sidebar_label: CreatePersonalAccessTokenResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CreatePersonalAccessTokenResponse'] 
slug: /tools/sdk/powershell/beta/models/create-personal-access-token-response
tags: ['SDK', 'Software Development Kit', 'CreatePersonalAccessTokenResponse']
---


# CreatePersonalAccessTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The ID of the personal access token (to be used as the username for Basic Auth). | 
**Secret** |  **String** | The secret of the personal access token (to be used as the password for Basic Auth). | 
**Scope** |  **[]String** | Scopes of the personal  access token. | 
**Name** |  **String** | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | 
**Owner** |  [**PatOwner**](pat-owner) |  | 
**Created** |  **System.DateTime** | The date and time, down to the millisecond, when this personal access token was created. | 

## Examples

- Prepare the resource
```powershell
$CreatePersonalAccessTokenResponse = Initialize-BetaCreatePersonalAccessTokenResponse  -Id 86f1dc6fe8f54414950454cbb11278fa `
 -Secret 1d1bef2b9f426383447f64f69349fc7cac176042578d205c256ba3f37c59adb9 `
 -Scope [demo:personal-access-token-scope:first, demo:personal-access-token-scope:second] `
 -Name NodeJS Integration `
 -Owner null `
 -Created 2017-07-11T18:45:37.098Z
```

- Convert the resource to JSON
```powershell
$CreatePersonalAccessTokenResponse | ConvertTo-JSON
```


[[Back to top]](#) 

