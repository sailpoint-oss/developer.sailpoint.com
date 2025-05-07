---
id: v2024-managed-cluster-update-preferences
title: ManagedClusterUpdatePreferences
pagination_label: ManagedClusterUpdatePreferences
sidebar_label: ManagedClusterUpdatePreferences
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusterUpdatePreferences', 'V2024ManagedClusterUpdatePreferences'] 
slug: /tools/sdk/powershell/v2024/models/managed-cluster-update-preferences
tags: ['SDK', 'Software Development Kit', 'ManagedClusterUpdatePreferences', 'V2024ManagedClusterUpdatePreferences']
---


# ManagedClusterUpdatePreferences

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProcessGroups** | **String** | The processGroups for updatePreferences | [optional] 
**UpdateState** |  **Enum** [  "AUTO",    "DISABLED" ] | The current updateState for the cluster | [optional] 
**NotificationEmail** | **String** | The mail id to which new releases will be notified | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterUpdatePreferences = Initialize-V2024ManagedClusterUpdatePreferences  -ProcessGroups null `
 -UpdateState DISABLED `
 -NotificationEmail test@mail.com
```

- Convert the resource to JSON
```powershell
$ManagedClusterUpdatePreferences | ConvertTo-JSON
```


[[Back to top]](#) 

