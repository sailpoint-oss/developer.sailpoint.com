---
id: approvalidentity-owner-of-inner
title: ApprovalidentityOwnerOfInner
pagination_label: ApprovalidentityOwnerOfInner
sidebar_label: ApprovalidentityOwnerOfInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalidentityOwnerOfInner', 'ApprovalidentityOwnerOfInner'] 
slug: /tools/sdk/powershell/approvals/models/approvalidentity-owner-of-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalidentityOwnerOfInner', 'ApprovalidentityOwnerOfInner']
---


# ApprovalidentityOwnerOfInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the object that is owned. | [optional] 
**Name** | **String** | Name of the object that is owned. | [optional] 
**Type** | **String** | Type of the object that is owned. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalidentityOwnerOfInner = Initialize-ApprovalidentityOwnerOfInner  -Id string `
 -Name Access Request App `
 -Type APPLICATION
```

- Convert the resource to JSON
```powershell
$ApprovalidentityOwnerOfInner | ConvertTo-JSON
```


[[Back to top]](#) 

