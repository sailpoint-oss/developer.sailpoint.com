---
id: original-request
title: OriginalRequest
pagination_label: OriginalRequest
sidebar_label: OriginalRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'OriginalRequest'] 
slug: /tools/sdk/powershell/v3/models/original-request
tags: ['SDK', 'Software Development Kit', 'OriginalRequest']
---


# OriginalRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** |  Pointer to **String** | Account ID. | [optional] 
**AttributeRequests** |  Pointer to [**[]AttributeRequest**](attribute-request) | Attribute changes requested for account. | [optional] 
**Op** |  Pointer to **String** | Operation used. | [optional] 
**Source** |  Pointer to [**AccountSource**](account-source) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$OriginalRequest = Initialize-PSSailpointOriginalRequest  -AccountId CN&#x3D;Abby Smith,OU&#x3D;Austin,OU&#x3D;Americas,OU&#x3D;Demo,DC&#x3D;seri,DC&#x3D;acme,DC&#x3D;com `
 -AttributeRequests null `
 -Op add `
 -Source null
```

- Convert the resource to JSON
```powershell
$OriginalRequest | ConvertTo-JSON
```


[[Back to top]](#) 

