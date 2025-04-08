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

## Examples

- Prepare the resource
```powershell
$CreatePersonalAccessTokenRequest = Initialize-PSSailpoint.V2025CreatePersonalAccessTokenRequest  -Name NodeJS Integration `
 -Scope [demo:personal-access-token-scope:first, demo:personal-access-token-scope:second] `
 -AccessTokenValiditySeconds 36900
```

- Convert the resource to JSON
```powershell
$CreatePersonalAccessTokenRequest | ConvertTo-JSON
```


[[Back to top]](#) 

