---
id: conflictingaccesscriteria
title: Conflictingaccesscriteria
pagination_label: Conflictingaccesscriteria
sidebar_label: Conflictingaccesscriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Conflictingaccesscriteria', 'Conflictingaccesscriteria'] 
slug: /tools/sdk/powershell/sodpolicies/models/conflictingaccesscriteria
tags: ['SDK', 'Software Development Kit', 'Conflictingaccesscriteria', 'Conflictingaccesscriteria']
---


# Conflictingaccesscriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | [**Accesscriteria**](accesscriteria) |  | [optional] 
**RightCriteria** | [**Accesscriteria**](accesscriteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Conflictingaccesscriteria = Initialize-Conflictingaccesscriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$Conflictingaccesscriteria | ConvertTo-JSON
```


[[Back to top]](#) 

