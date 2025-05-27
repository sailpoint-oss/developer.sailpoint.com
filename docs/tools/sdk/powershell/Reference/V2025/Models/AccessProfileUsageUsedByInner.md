---
id: v2025-access-profile-usage-used-by-inner
title: AccessProfileUsageUsedByInner
pagination_label: AccessProfileUsageUsedByInner
sidebar_label: AccessProfileUsageUsedByInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileUsageUsedByInner', 'V2025AccessProfileUsageUsedByInner'] 
slug: /tools/sdk/powershell/v2025/models/access-profile-usage-used-by-inner
tags: ['SDK', 'Software Development Kit', 'AccessProfileUsageUsedByInner', 'V2025AccessProfileUsageUsedByInner']
---


# AccessProfileUsageUsedByInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ROLE" ] | DTO type of role using the access profile. | [optional] 
**Id** | **String** | ID of role using the access profile. | [optional] 
**Name** | **String** | Display name of role using the access profile. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileUsageUsedByInner = Initialize-V2025AccessProfileUsageUsedByInner  -Type ROLE `
 -Id 2c8180857a9b3da0017aa03418480f9d `
 -Name Manager Role
```

- Convert the resource to JSON
```powershell
$AccessProfileUsageUsedByInner | ConvertTo-JSON
```


[[Back to top]](#) 

