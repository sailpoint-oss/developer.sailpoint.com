---
id: v2025-lifecycle-state-dto
title: LifecycleStateDto
pagination_label: LifecycleStateDto
sidebar_label: LifecycleStateDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LifecycleStateDto', 'V2025LifecycleStateDto'] 
slug: /tools/sdk/powershell/v2025/models/lifecycle-state-dto
tags: ['SDK', 'Software Development Kit', 'LifecycleStateDto', 'V2025LifecycleStateDto']
---


# LifecycleStateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StateName** | **String** | The name of the lifecycle state | [required]
**ManuallyUpdated** | **Boolean** | Whether the lifecycle state has been manually or automatically set | [required]

## Examples

- Prepare the resource
```powershell
$LifecycleStateDto = Initialize-PSSailpoint.V2025LifecycleStateDto  -StateName active `
 -ManuallyUpdated true
```

- Convert the resource to JSON
```powershell
$LifecycleStateDto | ConvertTo-JSON
```


[[Back to top]](#) 

