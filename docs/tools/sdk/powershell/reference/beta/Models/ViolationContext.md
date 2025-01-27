---
id: violation-context
title: ViolationContext
pagination_label: ViolationContext
sidebar_label: ViolationContext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ViolationContext'] 
slug: /tools/sdk/powershell/beta/models/violation-context
tags: ['SDK', 'Software Development Kit', 'ViolationContext']
---


# ViolationContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policy** |  Pointer to [**ViolationContextPolicy**](violation-context-policy) |  | [optional] 
**ConflictingAccessCriteria** |  Pointer to [**ExceptionAccessCriteria**](exception-access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ViolationContext = Initialize-PSSailpoint.BetaViolationContext  -Policy null `
 -ConflictingAccessCriteria null
```

- Convert the resource to JSON
```powershell
$ViolationContext | ConvertTo-JSON
```


[[Back to top]](#) 

