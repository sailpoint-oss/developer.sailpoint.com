---
id: identityattributenames
title: Identityattributenames
pagination_label: Identityattributenames
sidebar_label: Identityattributenames
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityattributenames', 'Identityattributenames'] 
slug: /tools/sdk/powershell/identityattributes/models/identityattributenames
tags: ['SDK', 'Software Development Kit', 'Identityattributenames', 'Identityattributenames']
---


# Identityattributenames

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | List of identity attributes' technical names. | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityattributenames = Initialize-Identityattributenames  -Ids ["name","displayName"]
```

- Convert the resource to JSON
```powershell
$Identityattributenames | ConvertTo-JSON
```


[[Back to top]](#) 

