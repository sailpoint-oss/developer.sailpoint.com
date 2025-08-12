---
id: v2025-approval-config-cron-timezone
title: ApprovalConfigCronTimezone
pagination_label: ApprovalConfigCronTimezone
sidebar_label: ApprovalConfigCronTimezone
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalConfigCronTimezone', 'V2025ApprovalConfigCronTimezone'] 
slug: /tools/sdk/powershell/v2025/models/approval-config-cron-timezone
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigCronTimezone', 'V2025ApprovalConfigCronTimezone']
---


# ApprovalConfigCronTimezone

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Location** | **String** | Timezone location for cron schedules. | [optional] 
**Offset** | **String** | Timezone offset for cron schedules. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalConfigCronTimezone = Initialize-V2025ApprovalConfigCronTimezone  -Location America/New_York `
 -Offset 
```

- Convert the resource to JSON
```powershell
$ApprovalConfigCronTimezone | ConvertTo-JSON
```


[[Back to top]](#) 

