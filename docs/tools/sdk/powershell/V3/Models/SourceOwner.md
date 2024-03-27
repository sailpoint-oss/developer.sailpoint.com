---
id: source-owner
title: SourceOwner
pagination_label: SourceOwner
sidebar_label: SourceOwner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SourceOwner'] 
slug: /tools/sdk/powershell/v3/models/source-owner
tags: ['SDK', 'Software Development Kit', 'SourceOwner']
---


# SourceOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | The type of object being referenced | [optional] 
**Id** |  Pointer to **String** | ID of the identity | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceOwner = Initialize-PSSailpointSourceOwner  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name MyName
```

- Convert the resource to JSON
```powershell
$SourceOwner | ConvertTo-JSON
```


[[Back to top]](#) 

