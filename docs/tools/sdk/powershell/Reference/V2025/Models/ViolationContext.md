---
id: v2025-violation-context
title: ViolationContext
pagination_label: ViolationContext
sidebar_label: ViolationContext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ViolationContext', 'V2025ViolationContext'] 
slug: /tools/sdk/powershell/v2025/models/violation-context
tags: ['SDK', 'Software Development Kit', 'ViolationContext', 'V2025ViolationContext']
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
$ViolationContext = Initialize-V2025ViolationContext  -Policy null `
 -ConflictingAccessCriteria null
```

- Convert the resource to JSON
```powershell
$ViolationContext | ConvertTo-JSON
```


[[Back to top]](#) 

