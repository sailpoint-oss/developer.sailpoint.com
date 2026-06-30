---
id: searcharguments
title: Searcharguments
pagination_label: Searcharguments
sidebar_label: Searcharguments
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Searcharguments', 'Searcharguments'] 
slug: /tools/sdk/powershell/savedsearch/models/searcharguments
tags: ['SDK', 'Software Development Kit', 'Searcharguments', 'Searcharguments']
---


# Searcharguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScheduleId** | **String** | The ID of the scheduled search that triggered the saved search execution.  | [optional] 
**Owner** | [**Typedreference**](typedreference) | The owner of the scheduled search being tested.  | [optional] 
**Recipients** | [**[]Typedreference**](typedreference) | The email recipients of the scheduled search being tested.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Searcharguments = Initialize-Searcharguments  -ScheduleId 7a724640-0c17-4ce9-a8c3-4a89738459c8 `
 -Owner null `
 -Recipients null
```

- Convert the resource to JSON
```powershell
$Searcharguments | ConvertTo-JSON
```


[[Back to top]](#) 

