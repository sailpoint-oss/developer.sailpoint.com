---
id: beta-owner-reference
title: OwnerReference
pagination_label: OwnerReference
sidebar_label: OwnerReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OwnerReference', 'BetaOwnerReference'] 
slug: /tools/sdk/powershell/beta/models/owner-reference
tags: ['SDK', 'Software Development Kit', 'OwnerReference', 'BetaOwnerReference']
---


# OwnerReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Owner type. This field must be either left null or set to 'IDENTITY' on input, otherwise a 400 Bad Request error will result. | [optional] 
**Id** | **String** | Identity id | [optional] 
**Name** | **String** | Human-readable display name of the owner. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner's display name, otherwise a 400 Bad Request error will result. | [optional] 

## Examples

- Prepare the resource
```powershell
$OwnerReference = Initialize-PSSailpoint.BetaOwnerReference  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name support
```

- Convert the resource to JSON
```powershell
$OwnerReference | ConvertTo-JSON
```


[[Back to top]](#) 

