---
id: v2025-exception-access-criteria
title: ExceptionAccessCriteria
pagination_label: ExceptionAccessCriteria
sidebar_label: ExceptionAccessCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExceptionAccessCriteria', 'V2025ExceptionAccessCriteria'] 
slug: /tools/sdk/powershell/v2025/models/exception-access-criteria
tags: ['SDK', 'Software Development Kit', 'ExceptionAccessCriteria', 'V2025ExceptionAccessCriteria']
---


# ExceptionAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | [**ExceptionCriteria**](exception-criteria) |  | [optional] 
**RightCriteria** | [**ExceptionCriteria**](exception-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ExceptionAccessCriteria = Initialize-PSSailpoint.V2025ExceptionAccessCriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$ExceptionAccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

