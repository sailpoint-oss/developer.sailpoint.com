---
id: basesettings
title: Basesettings
pagination_label: Basesettings
sidebar_label: Basesettings
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Basesettings', 'Basesettings'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/basesettings
tags: ['SDK', 'Software Development Kit', 'Basesettings', 'Basesettings']
---


# Basesettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsEnabled** | **Boolean** | Indicates whether the feature or configuration is enabled. | [optional] [default to $false]
**ClusterId** | **String** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 

## Examples

- Prepare the resource
```powershell
$Basesettings = Initialize-Basesettings  -IsEnabled true `
 -ClusterId cluster-001
```

- Convert the resource to JSON
```powershell
$Basesettings | ConvertTo-JSON
```


[[Back to top]](#) 

