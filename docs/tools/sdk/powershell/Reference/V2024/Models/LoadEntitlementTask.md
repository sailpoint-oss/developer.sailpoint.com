---
id: v2024-load-entitlement-task
title: LoadEntitlementTask
pagination_label: LoadEntitlementTask
sidebar_label: LoadEntitlementTask
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadEntitlementTask', 'V2024LoadEntitlementTask'] 
slug: /tools/sdk/powershell/v2024/models/load-entitlement-task
tags: ['SDK', 'Software Development Kit', 'LoadEntitlementTask', 'V2024LoadEntitlementTask']
---


# LoadEntitlementTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the task this taskStatus represents | [optional] 
**Type** | **String** | Type of task this task represents | [optional] 
**UniqueName** | **String** | The name of the task | [optional] 
**Description** | **String** | The description of the task | [optional] 
**Launcher** | **String** | The user who initiated the task | [optional] 
**Created** | **System.DateTime** | The creation date of the task | [optional] 
**Returns** | [**[]LoadEntitlementTaskReturnsInner**](load-entitlement-task-returns-inner) | Return values from the task | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadEntitlementTask = Initialize-V2024LoadEntitlementTask  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Type QUARTZ `
 -UniqueName Cloud Group Aggregation `
 -Description Aggregate from the specified application `
 -Launcher John Doe `
 -Created 2020-07-11T21:23:15Z `
 -Returns [{displayLabel=TASK_OUT_ACCOUNT_GROUP_AGGREGATION_APPLICATIONS, attributeName=applications}, {displayLabel=TASK_OUT_ACCOUNT_GROUP_AGGREGATION_TOTAL, attributeName=total}, {displayLabel=TASK_OUT_ACCOUNT_GROUP_AGGREGATION_CREATED, attributeName=groupsCreated}, {displayLabel=TASK_OUT_ACCOUNT_GROUP_AGGREGATION_UPDATED, attributeName=groupsUpdated}, {displayLabel=TASK_OUT_ACCOUNT_GROUP_AGGREGATION_DELETED, attributeName=groupsDeleted}]
```

- Convert the resource to JSON
```powershell
$LoadEntitlementTask | ConvertTo-JSON
```


[[Back to top]](#) 

