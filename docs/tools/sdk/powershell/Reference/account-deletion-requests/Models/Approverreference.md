---
id: approverreference
title: Approverreference
pagination_label: Approverreference
sidebar_label: Approverreference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approverreference', 'Approverreference'] 
slug: /tools/sdk/powershell/accountdeletionrequests/models/approverreference
tags: ['SDK', 'Software Development Kit', 'Approverreference', 'Approverreference']
---


# Approverreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of supported DtoType like IDENTITY, MACHINE_IDENTITY etc. | [optional] 
**Type** | **String** | Type of Dto | [optional] 
**Name** | **String** | Display name of DtoType like IDENTITY, MACHINE_IDENTITY etc | [optional] 

## Examples

- Prepare the resource
```powershell
$Approverreference = Initialize-Approverreference  -Id 85131bd73fdc423599e57f40b29f01fe `
 -Type IDENTITY `
 -Name SailPoint Support
```

- Convert the resource to JSON
```powershell
$Approverreference | ConvertTo-JSON
```


[[Back to top]](#) 

