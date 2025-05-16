---
id: violation-context
title: ViolationContext
pagination_label: ViolationContext
sidebar_label: ViolationContext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ViolationContext', 'ViolationContext'] 
slug: /tools/sdk/powershell/v3/models/violation-context
tags: ['SDK', 'Software Development Kit', 'ViolationContext', 'ViolationContext']
---


# ViolationContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policy** | [**ViolationContextPolicy**](violation-context-policy) |  | [optional] 
**ConflictingAccessCriteria** | [**ExceptionAccessCriteria**](exception-access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ViolationContext = Initialize-ViolationContext  -Policy null `
 -ConflictingAccessCriteria null
```

- Convert the resource to JSON
```powershell
$ViolationContext | ConvertTo-JSON
```


[[Back to top]](#) 

