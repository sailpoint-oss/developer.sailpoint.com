---
id: beta-search-form-definitions-by-tenant400-response
title: SearchFormDefinitionsByTenant400Response
pagination_label: SearchFormDefinitionsByTenant400Response
sidebar_label: SearchFormDefinitionsByTenant400Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchFormDefinitionsByTenant400Response', 'BetaSearchFormDefinitionsByTenant400Response'] 
slug: /tools/sdk/powershell/beta/models/search-form-definitions-by-tenant400-response
tags: ['SDK', 'Software Development Kit', 'SearchFormDefinitionsByTenant400Response', 'BetaSearchFormDefinitionsByTenant400Response']
---


# SearchFormDefinitionsByTenant400Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **String** |  | [optional] 
**Messages** | [**[]ErrorMessage**](error-message) |  | [optional] 
**StatusCode** | **Int64** |  | [optional] 
**TrackingId** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchFormDefinitionsByTenant400Response = Initialize-BetaSearchFormDefinitionsByTenant400Response  -DetailCode null `
 -Messages null `
 -StatusCode null `
 -TrackingId null
```

- Convert the resource to JSON
```powershell
$SearchFormDefinitionsByTenant400Response | ConvertTo-JSON
```


[[Back to top]](#) 

