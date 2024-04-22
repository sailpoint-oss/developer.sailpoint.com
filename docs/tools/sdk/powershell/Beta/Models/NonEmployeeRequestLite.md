---
id: non-employee-request-lite
title: NonEmployeeRequestLite
pagination_label: NonEmployeeRequestLite
sidebar_label: NonEmployeeRequestLite
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'NonEmployeeRequestLite'] 
slug: /tools/sdk/powershell/beta/models/non-employee-request-lite
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestLite']
---


# NonEmployeeRequestLite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Non-Employee request id. | [optional] 
**Requester** |  Pointer to [**IdentityReferenceWithId**](identity-reference-with-id) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeRequestLite = Initialize-BetaNonEmployeeRequestLite  -Id null `
 -Requester null
```

- Convert the resource to JSON
```powershell
$NonEmployeeRequestLite | ConvertTo-JSON
```


[[Back to top]](#) 

