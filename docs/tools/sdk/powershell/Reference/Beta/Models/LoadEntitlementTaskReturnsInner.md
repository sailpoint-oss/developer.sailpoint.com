---
id: beta-load-entitlement-task-returns-inner
title: LoadEntitlementTaskReturnsInner
pagination_label: LoadEntitlementTaskReturnsInner
sidebar_label: LoadEntitlementTaskReturnsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadEntitlementTaskReturnsInner', 'BetaLoadEntitlementTaskReturnsInner'] 
slug: /tools/sdk/powershell/beta/models/load-entitlement-task-returns-inner
tags: ['SDK', 'Software Development Kit', 'LoadEntitlementTaskReturnsInner', 'BetaLoadEntitlementTaskReturnsInner']
---


# LoadEntitlementTaskReturnsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayLabel** | **String** | The display label for the return value | [optional] 
**AttributeName** | **String** | The attribute name for the return value | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadEntitlementTaskReturnsInner = Initialize-BetaLoadEntitlementTaskReturnsInner  -DisplayLabel TASK_OUT_ACCOUNT_GROUP_AGGREGATION_APPLICATIONS `
 -AttributeName applications
```

- Convert the resource to JSON
```powershell
$LoadEntitlementTaskReturnsInner | ConvertTo-JSON
```


[[Back to top]](#) 

