---
id: v2025-search-arguments
title: SearchArguments
pagination_label: SearchArguments
sidebar_label: SearchArguments
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchArguments', 'V2025SearchArguments'] 
slug: /tools/sdk/powershell/v2025/models/search-arguments
tags: ['SDK', 'Software Development Kit', 'SearchArguments', 'V2025SearchArguments']
---


# SearchArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScheduleId** | **String** | The ID of the scheduled search that triggered the saved search execution.  | [optional] 
**Owner** | [**TypedReference**](typed-reference) | The owner of the scheduled search being tested.  | [optional] 
**Recipients** | [**[]TypedReference**](typed-reference) | The email recipients of the scheduled search being tested.  | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchArguments = Initialize-V2025SearchArguments  -ScheduleId 7a724640-0c17-4ce9-a8c3-4a89738459c8 `
 -Owner null `
 -Recipients null
```

- Convert the resource to JSON
```powershell
$SearchArguments | ConvertTo-JSON
```


[[Back to top]](#) 

