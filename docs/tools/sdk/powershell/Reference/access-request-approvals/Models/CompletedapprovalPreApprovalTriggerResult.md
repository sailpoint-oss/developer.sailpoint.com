---
id: completedapproval-pre-approval-trigger-result
title: CompletedapprovalPreApprovalTriggerResult
pagination_label: CompletedapprovalPreApprovalTriggerResult
sidebar_label: CompletedapprovalPreApprovalTriggerResult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompletedapprovalPreApprovalTriggerResult', 'CompletedapprovalPreApprovalTriggerResult'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/completedapproval-pre-approval-trigger-result
tags: ['SDK', 'Software Development Kit', 'CompletedapprovalPreApprovalTriggerResult', 'CompletedapprovalPreApprovalTriggerResult']
---


# CompletedapprovalPreApprovalTriggerResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | The comment from the trigger | [optional] 
**Decision** | [**Completedapprovalstate**](completedapprovalstate) |  | [optional] 
**Reviewer** | **String** | The name of the approver | [optional] 
**Date** | **System.DateTime** | The date and time the trigger decided on the request | [optional] 

## Examples

- Prepare the resource
```powershell
$CompletedapprovalPreApprovalTriggerResult = Initialize-CompletedapprovalPreApprovalTriggerResult  -Comment This request was autoapproved by our automated ETS subscriber `
 -Decision null `
 -Reviewer Automated AR Approval `
 -Date 2022-06-07T19:18:40.748Z
```

- Convert the resource to JSON
```powershell
$CompletedapprovalPreApprovalTriggerResult | ConvertTo-JSON
```


[[Back to top]](#) 

