---
id: v2024-list-form-definitions-by-tenant-response
title: ListFormDefinitionsByTenantResponse
pagination_label: ListFormDefinitionsByTenantResponse
sidebar_label: ListFormDefinitionsByTenantResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListFormDefinitionsByTenantResponse', 'V2024ListFormDefinitionsByTenantResponse'] 
slug: /tools/sdk/powershell/v2024/models/list-form-definitions-by-tenant-response
tags: ['SDK', 'Software Development Kit', 'ListFormDefinitionsByTenantResponse', 'V2024ListFormDefinitionsByTenantResponse']
---


# ListFormDefinitionsByTenantResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **Int64** | Count number of results. | [optional] 
**Results** | [**[]FormDefinitionResponse**](form-definition-response) | List of FormDefinitionResponse items. | [optional] 

## Examples

- Prepare the resource
```powershell
$ListFormDefinitionsByTenantResponse = Initialize-V2024ListFormDefinitionsByTenantResponse  -Count 1 `
 -Results null
```

- Convert the resource to JSON
```powershell
$ListFormDefinitionsByTenantResponse | ConvertTo-JSON
```


[[Back to top]](#) 

