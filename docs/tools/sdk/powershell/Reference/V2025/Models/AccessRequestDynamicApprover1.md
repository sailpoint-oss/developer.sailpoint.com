---
id: v2025-access-request-dynamic-approver1
title: AccessRequestDynamicApprover1
pagination_label: AccessRequestDynamicApprover1
sidebar_label: AccessRequestDynamicApprover1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestDynamicApprover1', 'V2025AccessRequestDynamicApprover1'] 
slug: /tools/sdk/powershell/v2025/models/access-request-dynamic-approver1
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApprover1', 'V2025AccessRequestDynamicApprover1']
---


# AccessRequestDynamicApprover1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the identity to add to the approver list for the access request. | [required]
**Name** | **String** | The name of the identity to add to the approver list for the access request. | [required]
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | The type of object being referenced. | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequestDynamicApprover1 = Initialize-V2025AccessRequestDynamicApprover1  -Id 2c91808b6ef1d43e016efba0ce470906 `
 -Name Adam Adams `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$AccessRequestDynamicApprover1 | ConvertTo-JSON
```


[[Back to top]](#) 

