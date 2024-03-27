---
id: list-form-instances-by-tenant-response
title: ListFormInstancesByTenantResponse
pagination_label: ListFormInstancesByTenantResponse
sidebar_label: ListFormInstancesByTenantResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ListFormInstancesByTenantResponse'] 
slug: /tools/sdk/powershell/beta/models/list-form-instances-by-tenant-response
tags: ['SDK', 'Software Development Kit', 'ListFormInstancesByTenantResponse']
---


# ListFormInstancesByTenantResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** |  Pointer to **Int64** | Count number of Results | [optional] 
**Results** |  Pointer to [**[]FormInstanceResponse**](form-instance-response) | Results holds a list of FormInstanceResponse items | [optional] 

## Examples

- Prepare the resource
```powershell
$ListFormInstancesByTenantResponse = Initialize-PSSailpointBetaListFormInstancesByTenantResponse  -Count 1 `
 -Results null
```

- Convert the resource to JSON
```powershell
$ListFormInstancesByTenantResponse | ConvertTo-JSON
```


[[Back to top]](#) 

