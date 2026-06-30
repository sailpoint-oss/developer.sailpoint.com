---
id: additionalownerref
title: Additionalownerref
pagination_label: Additionalownerref
sidebar_label: Additionalownerref
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Additionalownerref', 'Additionalownerref'] 
slug: /tools/sdk/powershell/accounts/models/additionalownerref
tags: ['SDK', 'Software Development Kit', 'Additionalownerref', 'Additionalownerref']
---


# Additionalownerref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | Type of the additional owner; IDENTITY for an identity, GOVERNANCE_GROUP for a governance group. | [optional] 
**Id** | **String** | ID of the identity or governance group. | [optional] 
**Name** | **String** | Display name. It may be left null or omitted on input. If set, it must match the current display name of the identity or governance group, otherwise a 400 Bad Request error may result. | [optional] 

## Examples

- Prepare the resource
```powershell
$Additionalownerref = Initialize-Additionalownerref  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name support
```

- Convert the resource to JSON
```powershell
$Additionalownerref | ConvertTo-JSON
```


[[Back to top]](#) 

