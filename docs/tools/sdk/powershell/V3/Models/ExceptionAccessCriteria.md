---
id: exception-access-criteria
title: ExceptionAccessCriteria
pagination_label: ExceptionAccessCriteria
sidebar_label: ExceptionAccessCriteria
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ExceptionAccessCriteria'] 
slug: /tools/sdk/powershell/v3/models/exception-access-criteria
tags: ['SDK', 'Software Development Kit', 'ExceptionAccessCriteria']
---


# ExceptionAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** |  Pointer to [**ExceptionCriteria**](exception-criteria) |  | [optional] 
**RightCriteria** |  Pointer to [**ExceptionCriteria**](exception-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ExceptionAccessCriteria = Initialize-ExceptionAccessCriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$ExceptionAccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

