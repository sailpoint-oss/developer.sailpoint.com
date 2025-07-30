---
id: v2025-approval-identity-owner-of-inner
title: ApprovalIdentityOwnerOfInner
pagination_label: ApprovalIdentityOwnerOfInner
sidebar_label: ApprovalIdentityOwnerOfInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalIdentityOwnerOfInner', 'V2025ApprovalIdentityOwnerOfInner'] 
slug: /tools/sdk/powershell/v2025/models/approval-identity-owner-of-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalIdentityOwnerOfInner', 'V2025ApprovalIdentityOwnerOfInner']
---


# ApprovalIdentityOwnerOfInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the object that is owned. | [optional] 
**Name** | **String** | Name of the object that is owned. | [optional] 
**Type** | **String** | Type of the object that is owned. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalIdentityOwnerOfInner = Initialize-V2025ApprovalIdentityOwnerOfInner  -Id string `
 -Name Access Request App `
 -Type APPLICATION
```

- Convert the resource to JSON
```powershell
$ApprovalIdentityOwnerOfInner | ConvertTo-JSON
```


[[Back to top]](#) 

