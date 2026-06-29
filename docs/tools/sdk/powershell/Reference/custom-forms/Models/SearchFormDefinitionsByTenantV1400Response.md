---
id: search-form-definitions-by-tenant-v1400-response
title: SearchFormDefinitionsByTenantV1400Response
pagination_label: SearchFormDefinitionsByTenantV1400Response
sidebar_label: SearchFormDefinitionsByTenantV1400Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchFormDefinitionsByTenantV1400Response', 'SearchFormDefinitionsByTenantV1400Response'] 
slug: /tools/sdk/powershell/customforms/models/search-form-definitions-by-tenant-v1400-response
tags: ['SDK', 'Software Development Kit', 'SearchFormDefinitionsByTenantV1400Response', 'SearchFormDefinitionsByTenantV1400Response']
---


# SearchFormDefinitionsByTenantV1400Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **String** |  | [optional] 
**Messages** | [**[]Errormessage**](errormessage) |  | [optional] 
**StatusCode** | **Int64** |  | [optional] 
**TrackingId** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchFormDefinitionsByTenantV1400Response = Initialize-SearchFormDefinitionsByTenantV1400Response  -DetailCode null `
 -Messages null `
 -StatusCode null `
 -TrackingId null
```

- Convert the resource to JSON
```powershell
$SearchFormDefinitionsByTenantV1400Response | ConvertTo-JSON
```


[[Back to top]](#) 

