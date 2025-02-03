---
id: owner-reference-segments
title: OwnerReferenceSegments
pagination_label: OwnerReferenceSegments
sidebar_label: OwnerReferenceSegments
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OwnerReferenceSegments', 'OwnerReferenceSegments'] 
slug: /tools/sdk/powershell/v3/models/owner-reference-segments
tags: ['SDK', 'Software Development Kit', 'OwnerReferenceSegments', 'OwnerReferenceSegments']
---


# OwnerReferenceSegments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Owner type. This field must be either left null or set to 'IDENTITY' on input, otherwise a 400 Bad Request error will result. | [optional] 
**Id** | **String** | Identity id | [optional] 
**Name** | **String** | Human-readable display name of the owner. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner's display name, otherwise a 400 Bad Request error will result. | [optional] 

## Examples

- Prepare the resource
```powershell
$OwnerReferenceSegments = Initialize-PSSailpoint.V3OwnerReferenceSegments  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name support
```

- Convert the resource to JSON
```powershell
$OwnerReferenceSegments | ConvertTo-JSON
```


[[Back to top]](#) 

