---
id: managedcluster-update-preferences
title: ManagedclusterUpdatePreferences
pagination_label: ManagedclusterUpdatePreferences
sidebar_label: ManagedclusterUpdatePreferences
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedclusterUpdatePreferences', 'ManagedclusterUpdatePreferences'] 
slug: /tools/sdk/powershell/managedclusters/models/managedcluster-update-preferences
tags: ['SDK', 'Software Development Kit', 'ManagedclusterUpdatePreferences', 'ManagedclusterUpdatePreferences']
---


# ManagedclusterUpdatePreferences

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProcessGroups** | **String** | The processGroups for updatePreferences | [optional] 
**UpdateState** |  **Enum** [  "AUTO",    "DISABLED" ] | The current updateState for the cluster | [optional] 
**NotificationEmail** | **String** | The mail id to which new releases will be notified | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedclusterUpdatePreferences = Initialize-ManagedclusterUpdatePreferences  -ProcessGroups processGroup1 `
 -UpdateState DISABLED `
 -NotificationEmail test@mail.com
```

- Convert the resource to JSON
```powershell
$ManagedclusterUpdatePreferences | ConvertTo-JSON
```


[[Back to top]](#) 

