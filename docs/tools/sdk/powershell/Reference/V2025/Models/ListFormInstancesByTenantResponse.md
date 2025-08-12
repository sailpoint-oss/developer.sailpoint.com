---
id: v2025-list-form-instances-by-tenant-response
title: ListFormInstancesByTenantResponse
pagination_label: ListFormInstancesByTenantResponse
sidebar_label: ListFormInstancesByTenantResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListFormInstancesByTenantResponse', 'V2025ListFormInstancesByTenantResponse'] 
slug: /tools/sdk/powershell/v2025/models/list-form-instances-by-tenant-response
tags: ['SDK', 'Software Development Kit', 'ListFormInstancesByTenantResponse', 'V2025ListFormInstancesByTenantResponse']
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
$ListFormInstancesByTenantResponse = Initialize-V2025ListFormInstancesByTenantResponse  -Count 1 `
 -Results null
```

- Convert the resource to JSON
```powershell
$ListFormInstancesByTenantResponse | ConvertTo-JSON
```


[[Back to top]](#) 

