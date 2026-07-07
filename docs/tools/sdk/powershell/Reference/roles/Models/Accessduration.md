---
id: accessduration
title: Accessduration
pagination_label: Accessduration
sidebar_label: Accessduration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessduration', 'Accessduration'] 
slug: /tools/sdk/powershell/roles/models/accessduration
tags: ['SDK', 'Software Development Kit', 'Accessduration', 'Accessduration']
---


# Accessduration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **Int32** | The numeric value representing the amount of time, which is defined in the **timeUnit**. | [optional] 
**TimeUnit** |  **Enum** [  "HOURS",    "DAYS",    "WEEKS",    "MONTHS" ] | The unit of time that corresponds to the **value**. It defines the scale of the time period. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessduration = Initialize-Accessduration  -Value 6 `
 -TimeUnit MONTHS
```

- Convert the resource to JSON
```powershell
$Accessduration | ConvertTo-JSON
```


[[Back to top]](#) 

