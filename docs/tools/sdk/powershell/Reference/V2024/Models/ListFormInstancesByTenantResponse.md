---
id: v2024-list-form-instances-by-tenant-response
title: ListFormInstancesByTenantResponse
pagination_label: ListFormInstancesByTenantResponse
sidebar_label: ListFormInstancesByTenantResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListFormInstancesByTenantResponse', 'V2024ListFormInstancesByTenantResponse'] 
slug: /tools/sdk/powershell/v2024/models/list-form-instances-by-tenant-response
tags: ['SDK', 'Software Development Kit', 'ListFormInstancesByTenantResponse', 'V2024ListFormInstancesByTenantResponse']
---


# ListFormInstancesByTenantResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **Int64** | Count number of Results | [optional] 
**Results** | [**[]FormInstanceResponse**](form-instance-response) | Results holds a list of FormInstanceResponse items | [optional] 

## Examples

- Prepare the resource
```powershell
$ListFormInstancesByTenantResponse = Initialize-PSSailpoint.V2024ListFormInstancesByTenantResponse  -Count 1 `
 -Results null
```

- Convert the resource to JSON
```powershell
$ListFormInstancesByTenantResponse | ConvertTo-JSON
```


[[Back to top]](#) 

