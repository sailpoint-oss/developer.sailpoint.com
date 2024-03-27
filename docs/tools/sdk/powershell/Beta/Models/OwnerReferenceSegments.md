---
id: owner-reference-segments
title: OwnerReferenceSegments
pagination_label: OwnerReferenceSegments
sidebar_label: OwnerReferenceSegments
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'OwnerReferenceSegments'] 
slug: /tools/sdk/powershell/beta/models/owner-reference-segments
tags: ['SDK', 'Software Development Kit', 'OwnerReferenceSegments']
---


# OwnerReferenceSegments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Owner type. This field must be either left null or set to &#39;IDENTITY&#39; on input, otherwise a 400 Bad Request error will result. | [optional] 
**Id** |  Pointer to **String** | Identity id | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the owner. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner&#39;s display name, otherwise a 400 Bad Request error will result. | [optional] 

## Examples

- Prepare the resource
```powershell
$OwnerReferenceSegments = Initialize-PSSailpointBetaOwnerReferenceSegments  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name support
```

- Convert the resource to JSON
```powershell
$OwnerReferenceSegments | ConvertTo-JSON
```


[[Back to top]](#) 

