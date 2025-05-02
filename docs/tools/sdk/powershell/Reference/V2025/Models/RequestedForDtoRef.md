---
id: v2025-requested-for-dto-ref
title: RequestedForDtoRef
pagination_label: RequestedForDtoRef
sidebar_label: RequestedForDtoRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedForDtoRef', 'V2025RequestedForDtoRef'] 
slug: /tools/sdk/powershell/v2025/models/requested-for-dto-ref
tags: ['SDK', 'Software Development Kit', 'RequestedForDtoRef', 'V2025RequestedForDtoRef']
---


# RequestedForDtoRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The identity id for which the access is requested | [required]
**RequestedItems** | [**[]RequestedItemDtoRef**](requested-item-dto-ref) | the details for the access items that are requested for the identity | [required]

## Examples

- Prepare the resource
```powershell
$RequestedForDtoRef = Initialize-PSSailpoint.V2025RequestedForDtoRef  -IdentityId cb89bc2f1ee6445fbea12224c526ba3a `
 -RequestedItems null
```

- Convert the resource to JSON
```powershell
$RequestedForDtoRef | ConvertTo-JSON
```


[[Back to top]](#) 

