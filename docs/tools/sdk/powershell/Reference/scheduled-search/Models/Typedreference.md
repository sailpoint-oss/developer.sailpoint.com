---
id: typedreference
title: Typedreference
pagination_label: Typedreference
sidebar_label: Typedreference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Typedreference', 'Typedreference'] 
slug: /tools/sdk/powershell/scheduledsearch/models/typedreference
tags: ['SDK', 'Software Development Kit', 'Typedreference', 'Typedreference']
---


# Typedreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dtotype**](dtotype) |  | [required]
**Id** | **String** | The id of the object.  | [required]

## Examples

- Prepare the resource
```powershell
$Typedreference = Initialize-Typedreference  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313
```

- Convert the resource to JSON
```powershell
$Typedreference | ConvertTo-JSON
```


[[Back to top]](#) 

