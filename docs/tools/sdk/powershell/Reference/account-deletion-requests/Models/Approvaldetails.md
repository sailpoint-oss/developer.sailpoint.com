---
id: approvaldetails
title: Approvaldetails
pagination_label: Approvaldetails
sidebar_label: Approvaldetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvaldetails', 'Approvaldetails'] 
slug: /tools/sdk/powershell/accountdeletionrequests/models/approvaldetails
tags: ['SDK', 'Software Development Kit', 'Approvaldetails', 'Approvaldetails']
---


# Approvaldetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approver** | [**Approverdto**](approverdto) |  | [optional] 
**ApproverComments** | **String** | Comments added by approver while rejecting or approving the account deletion request. | [optional] 
**DecisionDate** | **System.DateTime** | Decision date of approval rejected or approved. | [optional] [readonly] 
**SerialOrder** | **Int64** | SerialOrder of approval details. | [optional] 
**Status** | [**Accountrequestphasestate**](accountrequestphasestate) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvaldetails = Initialize-Approvaldetails  -Approver null `
 -ApproverComments Approving account deletion request due to long term inactivity of account. `
 -DecisionDate 2026-01-21T11:43:22.432Z `
 -SerialOrder 12345 `
 -Status null
```

- Convert the resource to JSON
```powershell
$Approvaldetails | ConvertTo-JSON
```


[[Back to top]](#) 

