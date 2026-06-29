---
id: attrsyncsource
title: Attrsyncsource
pagination_label: Attrsyncsource
sidebar_label: Attrsyncsource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Attrsyncsource', 'Attrsyncsource'] 
slug: /tools/sdk/powershell/sources/models/attrsyncsource
tags: ['SDK', 'Software Development Kit', 'Attrsyncsource', 'Attrsyncsource']
---


# Attrsyncsource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE" ] | DTO type of target source for attribute synchronization. | [optional] 
**Id** | **String** | ID of target source for attribute synchronization. | [optional] 
**Name** | **String** | Human-readable name of target source for attribute synchronization. | [optional] 

## Examples

- Prepare the resource
```powershell
$Attrsyncsource = Initialize-Attrsyncsource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$Attrsyncsource | ConvertTo-JSON
```


[[Back to top]](#) 

