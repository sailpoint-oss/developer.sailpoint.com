---
id: v2025-approval
title: Approval
pagination_label: Approval
sidebar_label: Approval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approval', 'V2025Approval'] 
slug: /tools/sdk/powershell/v2025/models/approval
tags: ['SDK', 'Software Development Kit', 'Approval', 'V2025Approval']
---


# Approval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalId** | **String** | The Approval ID | [optional] 
**Approvers** | [**[]ApprovalIdentity**](approval-identity) | Object representation of an approver of an approval | [optional] 
**CreatedDate** | **String** | Date the approval was created | [optional] 
**Type** | **String** | Type of approval | [optional] 
**Name** | [**[]ApprovalName**](approval-name) | The name of the approval for a given locale | [optional] 
**BatchRequest** | [**ApprovalBatch**](approval-batch) | The name of the approval for a given locale | [optional] 
**Description** | [**[]ApprovalDescription**](approval-description) | The description of the approval for a given locale | [optional] 
**Priority** |  **Enum** [  "HIGH",    "MEDIUM",    "LOW" ] | The priority of the approval | [optional] 
**Requester** | [**ApprovalIdentity**](approval-identity) | Object representation of the requester of the approval | [optional] 
**Comments** | [**[]ApprovalComment1**](approval-comment1) | Object representation of a comment on the approval | [optional] 
**ApprovedBy** | [**[]ApprovalIdentity**](approval-identity) | Array of approvers who have approved the approval | [optional] 
**RejectedBy** | [**[]ApprovalIdentity**](approval-identity) | Array of approvers who have rejected the approval | [optional] 
**CompletedDate** | **String** | Date the approval was completed | [optional] 
**ApprovalCriteria** |  **Enum** [  "SINGLE",    "DOUBLE",    "TRIPLE",    "QUARTER",    "HALF",    "ALL" ] | Criteria that needs to be met for an approval to be marked as approved | [optional] 
**Status** |  **Enum** [  "PENDING",    "APPROVED",    "REJECTED" ] | The current status of the approval | [optional] 
**AdditionalAttributes** | **String** | Json string representing additional attributes known about the object to be approved. | [optional] 
**ReferenceData** | [**[]ApprovalReference**](approval-reference) | Reference data related to the approval | [optional] 

## Examples

- Prepare the resource
```powershell
$Approval = Initialize-V2025Approval  -ApprovalId 38453251-6be2-5f8f-df93-5ce19e295837 `
 -Approvers null `
 -CreatedDate 2023-04-12T23:20:50.52Z `
 -Type ENTITLEMENT_DESCRIPTIONS `
 -Name null `
 -BatchRequest {batchId=38453251-6be2-5f8f-df93-5ce19e295837, batchSize=100} `
 -Description null `
 -Priority HIGH `
 -Requester {id=85d173e7d57e496569df763231d6deb6a, type=IDENTITY, name=John Doe} `
 -Comments null `
 -ApprovedBy null `
 -RejectedBy null `
 -CompletedDate 2023-04-12T23:20:50.52Z `
 -ApprovalCriteria SINGLE `
 -Status PENDING `
 -AdditionalAttributes { "llm_description": "generated description" } `
 -ReferenceData null
```

- Convert the resource to JSON
```powershell
$Approval | ConvertTo-JSON
```


[[Back to top]](#) 

