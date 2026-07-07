---
id: activityconfigurationsettings
title: Activityconfigurationsettings
pagination_label: Activityconfigurationsettings
sidebar_label: Activityconfigurationsettings
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Activityconfigurationsettings', 'Activityconfigurationsettings'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/activityconfigurationsettings
tags: ['SDK', 'Software Development Kit', 'Activityconfigurationsettings', 'Activityconfigurationsettings']
---


# Activityconfigurationsettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsEnabled** | **Boolean** | Indicates whether the feature or configuration is enabled. | [optional] [default to $false]
**ClusterId** | **String** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 
**RetentionTimePeriod** | **Int32** | The time period for retaining activity logs. | [optional] 
**RetentionTimeType** | **String** | The type of retention period (e.g., days, months, years). | [optional] 
**ExcludeUsers** | **[]String** | List of user identifiers to exclude from activity tracking. | [optional] 
**ExcludeFolders** | **[]String** | List of folder paths to exclude from activity tracking. | [optional] 
**ExcludeFileExtensions** | **[]String** | List of file extensions to exclude from activity tracking. | [optional] 
**ExcludeActions** | **[]String** | List of actions to exclude from activity tracking. | [optional] 

## Examples

- Prepare the resource
```powershell
$Activityconfigurationsettings = Initialize-Activityconfigurationsettings  -IsEnabled true `
 -ClusterId cluster-001 `
 -RetentionTimePeriod 30 `
 -RetentionTimeType days `
 -ExcludeUsers ["user1","user2"] `
 -ExcludeFolders ["/tmp","/archive"] `
 -ExcludeFileExtensions [".log",".bak"] `
 -ExcludeActions ["delete","move"]
```

- Convert the resource to JSON
```powershell
$Activityconfigurationsettings | ConvertTo-JSON
```


[[Back to top]](#) 

