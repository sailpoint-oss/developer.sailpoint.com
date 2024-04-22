---
id: scheduled-search-all-of-owner
title: ScheduledSearchAllOfOwner
pagination_label: ScheduledSearchAllOfOwner
sidebar_label: ScheduledSearchAllOfOwner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ScheduledSearchAllOfOwner'] 
slug: /tools/sdk/powershell/v3/models/scheduled-search-all-of-owner
tags: ['SDK', 'Software Development Kit', 'ScheduledSearchAllOfOwner']
---


# ScheduledSearchAllOfOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY" ] | The type of object being referenced | 
**Id** |  **String** | The ID of the referenced object | 

## Examples

- Prepare the resource
```powershell
$ScheduledSearchAllOfOwner = Initialize-ScheduledSearchAllOfOwner  -Type IDENTITY `
 -Id 2c9180867624cbd7017642d8c8c81f67
```

- Convert the resource to JSON
```powershell
$ScheduledSearchAllOfOwner | ConvertTo-JSON
```


[[Back to top]](#) 

