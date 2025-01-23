---
id: non-employee-identity-reference-with-id
title: NonEmployeeIdentityReferenceWithId
pagination_label: NonEmployeeIdentityReferenceWithId
sidebar_label: NonEmployeeIdentityReferenceWithId
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeIdentityReferenceWithId'] 
slug: /tools/sdk/powershell/v2024/models/non-employee-identity-reference-with-id
tags: ['SDK', 'Software Development Kit', 'NonEmployeeIdentityReferenceWithId']
---


# NonEmployeeIdentityReferenceWithId

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to [**NonEmployeeIdentityDtoType**](non-employee-identity-dto-type) |  | [optional] 
**Id** |  Pointer to **String** | Identity id | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeIdentityReferenceWithId = Initialize-PSSailpoint.V2024NonEmployeeIdentityReferenceWithId  -Type null `
 -Id 5168015d32f890ca15812c9180835d2e
```

- Convert the resource to JSON
```powershell
$NonEmployeeIdentityReferenceWithId | ConvertTo-JSON
```


[[Back to top]](#) 

