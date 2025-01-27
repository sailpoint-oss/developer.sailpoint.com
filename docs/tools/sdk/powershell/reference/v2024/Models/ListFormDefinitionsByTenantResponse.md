---
id: list-form-definitions-by-tenant-response
title: ListFormDefinitionsByTenantResponse
pagination_label: ListFormDefinitionsByTenantResponse
sidebar_label: ListFormDefinitionsByTenantResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListFormDefinitionsByTenantResponse'] 
slug: /tools/sdk/powershell/v2024/models/list-form-definitions-by-tenant-response
tags: ['SDK', 'Software Development Kit', 'ListFormDefinitionsByTenantResponse']
---


# ListFormDefinitionsByTenantResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** |  Pointer to **Int64** | Count number of results. | [optional] 
**Results** |  Pointer to [**[]FormDefinitionResponse**](form-definition-response) | List of FormDefinitionResponse items. | [optional] 

## Examples

- Prepare the resource
```powershell
$ListFormDefinitionsByTenantResponse = Initialize-PSSailpoint.V2024ListFormDefinitionsByTenantResponse  -Count 1 `
 -Results null
```

- Convert the resource to JSON
```powershell
$ListFormDefinitionsByTenantResponse | ConvertTo-JSON
```


[[Back to top]](#) 

