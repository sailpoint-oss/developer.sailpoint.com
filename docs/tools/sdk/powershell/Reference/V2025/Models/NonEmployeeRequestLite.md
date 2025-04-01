---
id: v2025-non-employee-request-lite
title: NonEmployeeRequestLite
pagination_label: NonEmployeeRequestLite
sidebar_label: NonEmployeeRequestLite
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeRequestLite', 'V2025NonEmployeeRequestLite'] 
slug: /tools/sdk/powershell/v2025/models/non-employee-request-lite
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestLite', 'V2025NonEmployeeRequestLite']
---


# NonEmployeeRequestLite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Non-Employee request id. | [optional] 
**Requester** | [**NonEmployeeIdentityReferenceWithId**](non-employee-identity-reference-with-id) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeRequestLite = Initialize-PSSailpoint.V2025NonEmployeeRequestLite  -Id ac110005-7156-1150-8171-5b292e3e0084 `
 -Requester null
```

- Convert the resource to JSON
```powershell
$NonEmployeeRequestLite | ConvertTo-JSON
```


[[Back to top]](#) 

