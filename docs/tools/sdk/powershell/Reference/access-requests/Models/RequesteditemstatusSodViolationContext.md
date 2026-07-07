---
id: requesteditemstatus-sod-violation-context
title: RequesteditemstatusSodViolationContext
pagination_label: RequesteditemstatusSodViolationContext
sidebar_label: RequesteditemstatusSodViolationContext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequesteditemstatusSodViolationContext', 'RequesteditemstatusSodViolationContext'] 
slug: /tools/sdk/powershell/accessrequests/models/requesteditemstatus-sod-violation-context
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusSodViolationContext', 'RequesteditemstatusSodViolationContext']
---


# RequesteditemstatusSodViolationContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |  **Enum** [  "SUCCESS",    "ERROR" ] | The status of SOD violation check | [optional] 
**Uuid** | **String** | The id of the Violation check event | [optional] 
**ViolationCheckResult** | [**Sodviolationcheckresult**](sodviolationcheckresult) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RequesteditemstatusSodViolationContext = Initialize-RequesteditemstatusSodViolationContext  -State SUCCESS `
 -Uuid f73d16e9-a038-46c5-b217-1246e15fdbdd `
 -ViolationCheckResult null
```

- Convert the resource to JSON
```powershell
$RequesteditemstatusSodViolationContext | ConvertTo-JSON
```


[[Back to top]](#) 

