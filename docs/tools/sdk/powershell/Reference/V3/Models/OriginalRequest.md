---
id: original-request
title: OriginalRequest
pagination_label: OriginalRequest
sidebar_label: OriginalRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OriginalRequest', 'OriginalRequest'] 
slug: /tools/sdk/powershell/v3/models/original-request
tags: ['SDK', 'Software Development Kit', 'OriginalRequest', 'OriginalRequest']
---


# OriginalRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | **String** | Account ID. | [optional] 
**Result** | [**Result**](result) |  | [optional] 
**AttributeRequests** | [**[]AttributeRequest**](attribute-request) | Attribute changes requested for account. | [optional] 
**Op** | **String** | Operation used. | [optional] 
**Source** | [**AccountSource**](account-source) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$OriginalRequest = Initialize-PSSailpoint.V3OriginalRequest  -AccountId CN&#x3D;Abby Smith,OU&#x3D;Austin,OU&#x3D;Americas,OU&#x3D;Demo,DC&#x3D;seri,DC&#x3D;acme,DC&#x3D;com `
 -Result null `
 -AttributeRequests null `
 -Op add `
 -Source null
```

- Convert the resource to JSON
```powershell
$OriginalRequest | ConvertTo-JSON
```


[[Back to top]](#) 

