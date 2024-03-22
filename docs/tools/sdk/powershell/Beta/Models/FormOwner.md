---
id: form-owner
title: FormOwner
pagination_label: FormOwner
sidebar_label: FormOwner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FormOwner'] 
slug: /tools/sdk/powershell/beta/models/form-owner
tags: ['SDK', 'Software Development Kit', 'FormOwner']
---


# FormOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | FormOwnerType value. IDENTITY FormOwnerTypeIdentity | [optional] 
**Id** |  Pointer to **String** | Unique identifier of the form&#39;s owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormOwner = Initialize-PSSailpointBetaFormOwner  -Type IDENTITY `
 -Id 00000000-0000-0000-0000-000000000000
```

- Convert the resource to JSON
```powershell
$FormOwner | ConvertTo-JSON
```


[[Back to top]](#) 

