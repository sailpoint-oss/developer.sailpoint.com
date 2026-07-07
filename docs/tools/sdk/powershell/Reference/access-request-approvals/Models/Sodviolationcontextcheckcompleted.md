---
id: sodviolationcontextcheckcompleted
title: Sodviolationcontextcheckcompleted
pagination_label: Sodviolationcontextcheckcompleted
sidebar_label: Sodviolationcontextcheckcompleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sodviolationcontextcheckcompleted', 'Sodviolationcontextcheckcompleted'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/sodviolationcontextcheckcompleted
tags: ['SDK', 'Software Development Kit', 'Sodviolationcontextcheckcompleted', 'Sodviolationcontextcheckcompleted']
---


# Sodviolationcontextcheckcompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |  **Enum** [  "SUCCESS",    "ERROR" ] | The status of SOD violation check | [optional] 
**Uuid** | **String** | The id of the Violation check event | [optional] 
**ViolationCheckResult** | [**Sodviolationcheckresult**](sodviolationcheckresult) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Sodviolationcontextcheckcompleted = Initialize-Sodviolationcontextcheckcompleted  -State SUCCESS `
 -Uuid f73d16e9-a038-46c5-b217-1246e15fdbdd `
 -ViolationCheckResult null
```

- Convert the resource to JSON
```powershell
$Sodviolationcontextcheckcompleted | ConvertTo-JSON
```


[[Back to top]](#) 

