---
id: dataclassificationsettings
title: Dataclassificationsettings
pagination_label: Dataclassificationsettings
sidebar_label: Dataclassificationsettings
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Dataclassificationsettings', 'Dataclassificationsettings'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/dataclassificationsettings
tags: ['SDK', 'Software Development Kit', 'Dataclassificationsettings', 'Dataclassificationsettings']
---


# Dataclassificationsettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsEnabled** | **Boolean** | Indicates whether the feature or configuration is enabled. | [optional] [default to $false]
**ClusterId** | **String** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 

## Examples

- Prepare the resource
```powershell
$Dataclassificationsettings = Initialize-Dataclassificationsettings  -IsEnabled true `
 -ClusterId cluster-001
```

- Convert the resource to JSON
```powershell
$Dataclassificationsettings | ConvertTo-JSON
```


[[Back to top]](#) 

