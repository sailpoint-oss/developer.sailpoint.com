---
id: beta-load-entitlement-task
title: LoadEntitlementTask
pagination_label: LoadEntitlementTask
sidebar_label: LoadEntitlementTask
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadEntitlementTask'] 
slug: /tools/sdk/powershell/beta/models/load-entitlement-task
tags: ['SDK', 'Software Development Kit', 'LoadEntitlementTask']
---


# LoadEntitlementTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | System-generated unique ID of the task this taskStatus represents | [optional] 
**Type** |  Pointer to **String** | Type of task this task represents | [optional] 
**UniqueName** |  Pointer to **String** | The name of the task | [optional] 
**Description** |  Pointer to **String** | The description of the task | [optional] 
**Launcher** |  Pointer to **String** | The user who initiated the task | [optional] 
**Created** |  Pointer to **System.DateTime** | The creation date of the task | [optional] 
**Returns** |  Pointer to [**[]LoadEntitlementTaskReturnsInner**](load-entitlement-task-returns-inner) | Return values from the task | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadEntitlementTask = Initialize-PSSailpoint.BetaLoadEntitlementTask  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Type QUARTZ `
 -UniqueName Cloud Group Aggregation `
 -Description Aggregate from the specified application `
 -Launcher John Doe `
 -Created 2020-07-11T21:23:15Z `
 -Returns [{displayLabel&#x3D;TASK_OUT_ACCOUNT_GROUP_AGGREGATION_APPLICATIONS, attributeName&#x3D;applications}, {displayLabel&#x3D;TASK_OUT_ACCOUNT_GROUP_AGGREGATION_TOTAL, attributeName&#x3D;total}, {displayLabel&#x3D;TASK_OUT_ACCOUNT_GROUP_AGGREGATION_CREATED, attributeName&#x3D;groupsCreated}, {displayLabel&#x3D;TASK_OUT_ACCOUNT_GROUP_AGGREGATION_UPDATED, attributeName&#x3D;groupsUpdated}, {displayLabel&#x3D;TASK_OUT_ACCOUNT_GROUP_AGGREGATION_DELETED, attributeName&#x3D;groupsDeleted}]
```

- Convert the resource to JSON
```powershell
$LoadEntitlementTask | ConvertTo-JSON
```


[[Back to top]](#) 

