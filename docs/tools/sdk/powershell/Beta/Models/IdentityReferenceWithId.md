---
id: identity-reference-with-id
title: IdentityReferenceWithId
pagination_label: IdentityReferenceWithId
sidebar_label: IdentityReferenceWithId
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityReferenceWithId'] 
slug: /tools/sdk/powershell/beta/models/identity-reference-with-id
tags: ['SDK', 'Software Development Kit', 'IdentityReferenceWithId']
---


# IdentityReferenceWithId

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** |  Pointer to **String** | Identity id | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityReferenceWithId = Initialize-PSSailpointBetaIdentityReferenceWithId  -Type null `
 -Id 5168015d32f890ca15812c9180835d2e
```

- Convert the resource to JSON
```powershell
$IdentityReferenceWithId | ConvertTo-JSON
```


[[Back to top]](#) 

