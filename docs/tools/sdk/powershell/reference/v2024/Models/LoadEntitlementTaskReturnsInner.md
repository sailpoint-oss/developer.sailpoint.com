---
id: v2024-load-entitlement-task-returns-inner
title: LoadEntitlementTaskReturnsInner
pagination_label: LoadEntitlementTaskReturnsInner
sidebar_label: LoadEntitlementTaskReturnsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadEntitlementTaskReturnsInner'] 
slug: /tools/sdk/powershell/v2024/models/load-entitlement-task-returns-inner
tags: ['SDK', 'Software Development Kit', 'LoadEntitlementTaskReturnsInner']
---


# LoadEntitlementTaskReturnsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayLabel** |  Pointer to **String** | The display label for the return value | [optional] 
**AttributeName** |  Pointer to **String** | The attribute name for the return value | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadEntitlementTaskReturnsInner = Initialize-PSSailpoint.V2024LoadEntitlementTaskReturnsInner  -DisplayLabel TASK_OUT_ACCOUNT_GROUP_AGGREGATION_APPLICATIONS `
 -AttributeName applications
```

- Convert the resource to JSON
```powershell
$LoadEntitlementTaskReturnsInner | ConvertTo-JSON
```


[[Back to top]](#) 

