---
id: owner-reference
title: OwnerReference
pagination_label: OwnerReference
sidebar_label: OwnerReference
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'OwnerReference'] 
slug: /tools/sdk/powershell/v3/models/owner-reference
tags: ['SDK', 'Software Development Kit', 'OwnerReference']
---


# OwnerReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Owner type. This field must be either left null or set to &#39;IDENTITY&#39; on input, otherwise a 400 Bad Request error will result. | [optional] 
**Id** |  Pointer to **String** | Identity id | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the owner. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner&#39;s display name, otherwise a 400 Bad Request error will result. | [optional] 

## Examples

- Prepare the resource
```powershell
$OwnerReference = Initialize-PSSailpointOwnerReference  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name support
```

- Convert the resource to JSON
```powershell
$OwnerReference | ConvertTo-JSON
```


[[Back to top]](#) 

