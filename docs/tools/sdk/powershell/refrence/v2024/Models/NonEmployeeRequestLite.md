---
id: non-employee-request-lite
title: NonEmployeeRequestLite
pagination_label: NonEmployeeRequestLite
sidebar_label: NonEmployeeRequestLite
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeRequestLite'] 
slug: /tools/sdk/powershell/v2024/models/non-employee-request-lite
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestLite']
---


# NonEmployeeRequestLite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Non-Employee request id. | [optional] 
**Requester** |  Pointer to [**NonEmployeeIdentityReferenceWithId**](non-employee-identity-reference-with-id) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeRequestLite = Initialize-PSSailpoint.V2024NonEmployeeRequestLite  -Id ac110005-7156-1150-8171-5b292e3e0084 `
 -Requester null
```

- Convert the resource to JSON
```powershell
$NonEmployeeRequestLite | ConvertTo-JSON
```


[[Back to top]](#) 

