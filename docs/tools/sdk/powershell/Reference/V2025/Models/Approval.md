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
**Id** | **String** | The Approval ID | [optional] 
**TenantId** | **String** | The Tenant ID of the Approval | [optional] 
**Type** | **String** | The type of the approval, such as ENTITLEMENT_DESCRIPTIONS, CUSTOM_ACCESS_REQUEST_APPROVAL, GENERIC_APPROVAL | [optional] 
**Approvers** | [**[]ApprovalIdentity**](approval-identity) | Object representation of an approver of an approval | [optional] 
**CreatedDate** | **String** | Date the approval was created | [optional] 
**DueDate** | **String** | Date the approval is due | [optional] 
**EscalationStep** | **String** | Step in the escalation process. If set to 0, the approval is not escalated. If set to 1, the approval is escalated to the first approver in the escalation chain. | [optional] 
**SerialStep** | **Int64** | The serial step of the approval in the approval chain. For example, serialStep 1 is the first approval to action in an approval request chain. Parallel approvals are set to 0. | [optional] 
**IsEscalated** | **Boolean** | Whether or not the approval has been escalated. Will reset to false when the approval is actioned on. | [optional] [default to $false]
**Name** | [**[]ApprovalName**](approval-name) | The name of the approval for a given locale | [optional] 
**BatchRequest** | [**ApprovalBatch**](approval-batch) | The name of the approval for a given locale | [optional] 
**ApprovalConfig** | [**ApprovalConfig**](approval-config) | The configuration of the approval, such as the approval criteria and whether it is a parallel or serial approval | [optional] 
**Description** | [**[]ApprovalDescription**](approval-description) | The description of the approval for a given locale | [optional] 
**Medium** |  **Enum** [  "EMAIL",    "SLACK",    "TEAMS" ] | Signifies what medium to use when sending notifications (currently only email is utilized) | [optional] 
**Priority** |  **Enum** [  "HIGH",    "MEDIUM",    "LOW" ] | The priority of the approval | [optional] 
**Requester** | [**ApprovalIdentity**](approval-identity) | Object representation of the requester of the approval | [optional] 
**Requestee** | [**ApprovalIdentity**](approval-identity) | Object representation of the requestee of the approval | [optional] 
**Comments** | [**[]ApprovalComment1**](approval-comment1) | Object representation of a comment on the approval | [optional] 
**ApprovedBy** | [**[]ApprovalIdentityRecord**](approval-identity-record) | Array of approvers who have approved the approval | [optional] 
**RejectedBy** | [**[]ApprovalIdentityRecord**](approval-identity-record) | Array of approvers who have rejected the approval | [optional] 
**AssignedTo** | [**[]ApprovalIdentity**](approval-identity) | Array of identities that the approval request is currently assigned to/waiting on. For parallel approvals, this is set to all approvers left to approve. | [optional] 
**CompletedDate** | **String** | Date the approval was completed | [optional] 
**ApprovalCriteria** | [**ApprovalApprovalCriteria**](approval-approval-criteria) |  | [optional] 
**AdditionalAttributes** | **String** | Json string representing additional attributes known about the object to be approved. | [optional] 
**ReferenceData** | [**[]ApprovalReference**](approval-reference) | Reference data related to the approval | [optional] 
**ReassignmentHistory** | [**[]ApprovalReassignmentHistory**](approval-reassignment-history) | History of whom the approval request was assigned to | [optional] 
**StaticAttributes** | [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Field that can include any static additional info that may be needed by the service that the approval request originated from | [optional] 
**ModifiedDate** | **System.DateTime** | Date/time that the approval request was last updated | [optional] 
**RequestedTarget** | [**[]ApprovalRequestedTarget**](approval-requested-target) | RequestedTarget used to specify the actual object or target the approval request is for | [optional] 

## Examples

- Prepare the resource
```powershell
$Approval = Initialize-V2025Approval  -Id 38453251-6be2-5f8f-df93-5ce19e295837 `
 -TenantId 38453251-6be2-5f8f-df93-5ce19e295837 `
 -Type ENTITLEMENT_DESCRIPTIONS `
 -Approvers null `
 -CreatedDate 2023-04-12T23:20:50.52Z `
 -DueDate 2024-05-12T23:10:50.11Z `
 -EscalationStep 0 `
 -SerialStep 0 `
 -IsEscalated true `
 -Name null `
 -BatchRequest {batchId=38453251-6be2-5f8f-df93-5ce19e295837, batchSize=100} `
 -ApprovalConfig null `
 -Description null `
 -Medium EMAIL `
 -Priority HIGH `
 -Requester null `
 -Requestee null `
 -Comments null `
 -ApprovedBy null `
 -RejectedBy null `
 -AssignedTo null `
 -CompletedDate 2023-04-12T23:20:50.52Z `
 -ApprovalCriteria null `
 -AdditionalAttributes { "llm_description": "generated description" } `
 -ReferenceData null `
 -ReassignmentHistory null `
 -StaticAttributes {serviceName=ApprovalService, requestType=AccessRequest, metadata={environment=production, region=us-east-1}} `
 -ModifiedDate 2023-10-01T12:34:56.789Z `
 -RequestedTarget null
```

- Convert the resource to JSON
```powershell
$Approval | ConvertTo-JSON
```


[[Back to top]](#) 

