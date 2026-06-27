---
id: approvalconfig-cron-timezone
title: ApprovalconfigCronTimezone
pagination_label: ApprovalconfigCronTimezone
sidebar_label: ApprovalconfigCronTimezone
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalconfigCronTimezone', 'ApprovalconfigCronTimezone'] 
slug: /tools/sdk/powershell/sources/models/approvalconfig-cron-timezone
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigCronTimezone', 'ApprovalconfigCronTimezone']
---


# ApprovalconfigCronTimezone

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Location** | **String** | Timezone location for cron schedules. | [optional] 
**Offset** | **String** | Timezone offset for cron schedules. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalconfigCronTimezone = Initialize-ApprovalconfigCronTimezone  -Location America/New_York `
 -Offset 
```

- Convert the resource to JSON
```powershell
$ApprovalconfigCronTimezone | ConvertTo-JSON
```


[[Back to top]](#) 

