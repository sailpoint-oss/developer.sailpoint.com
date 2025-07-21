---
id: v2025-create-personal-access-token-request
title: CreatePersonalAccessTokenRequest
pagination_label: CreatePersonalAccessTokenRequest
sidebar_label: CreatePersonalAccessTokenRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreatePersonalAccessTokenRequest', 'V2025CreatePersonalAccessTokenRequest'] 
slug: /tools/sdk/powershell/v2025/models/create-personal-access-token-request
tags: ['SDK', 'Software Development Kit', 'CreatePersonalAccessTokenRequest', 'V2025CreatePersonalAccessTokenRequest']
---


# CreatePersonalAccessTokenRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the personal access token (PAT) to be created. Cannot be the same as another PAT owned by the user for whom this PAT is being created. | [required]
**Scope** | **[]String** | Scopes of the personal  access token. If no scope is specified, the token will be created with the default scope ""sp:scopes:all"". This means the personal access token will have all the rights of the owner who created it. | [optional] 
**AccessTokenValiditySeconds** | **Int32** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [optional] 
**ExpirationDate** | **System.DateTime** | Date and time, down to the millisecond, when this personal access token will expire. If not provided, the token will expire 6 months after its creation date. The value must be a valid date-time string between the current date and 6 months from the creation date. | [optional] 

## Examples

- Prepare the resource
```powershell
$CreatePersonalAccessTokenRequest = Initialize-V2025CreatePersonalAccessTokenRequest  -Name NodeJS Integration `
 -Scope [demo:personal-access-token-scope:first, demo:personal-access-token-scope:second] `
 -AccessTokenValiditySeconds 36900 `
 -ExpirationDate 2018-01-11T18:45:37.098Z
```

- Convert the resource to JSON
```powershell
$CreatePersonalAccessTokenRequest | ConvertTo-JSON
```


[[Back to top]](#) 

