---
id: v2025-approval
title: Approval
pagination_label: Approval
sidebar_label: Approval
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approval', 'V2025Approval'] 
slug: /tools/sdk/go/v2025/models/approval
tags: ['SDK', 'Software Development Kit', 'Approval', 'V2025Approval']
---

# Approval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The Approval ID | [optional] 
**TenantId** | Pointer to **string** | The Tenant ID of the Approval | [optional] 
**Type** | Pointer to **string** | The type of the approval, such as ENTITLEMENT_DESCRIPTIONS, CUSTOM_ACCESS_REQUEST_APPROVAL, GENERIC_APPROVAL | [optional] 
**Approvers** | Pointer to [**[]ApprovalIdentity**](approval-identity) | Object representation of an approver of an approval | [optional] 
**CreatedDate** | Pointer to **string** | Date the approval was created | [optional] 
**DueDate** | Pointer to **string** | Date the approval is due | [optional] 
**EscalationStep** | Pointer to **string** | Step in the escalation process. If set to 0, the approval is not escalated. If set to 1, the approval is escalated to the first approver in the escalation chain. | [optional] 
**SerialStep** | Pointer to **int64** | The serial step of the approval in the approval chain. For example, serialStep 1 is the first approval to action in an approval request chain. Parallel approvals are set to 0. | [optional] 
**IsEscalated** | Pointer to **bool** | Whether or not the approval has been escalated. Will reset to false when the approval is actioned on. | [optional] [default to false]
**Name** | Pointer to [**[]ApprovalName**](approval-name) | The name of the approval for a given locale | [optional] 
**BatchRequest** | Pointer to [**ApprovalBatch**](approval-batch) | The name of the approval for a given locale | [optional] 
**ApprovalConfig** | Pointer to [**ApprovalConfig**](approval-config) | The configuration of the approval, such as the approval criteria and whether it is a parallel or serial approval | [optional] 
**Description** | Pointer to [**[]ApprovalDescription**](approval-description) | The description of the approval for a given locale | [optional] 
**Medium** | Pointer to **string** | Signifies what medium to use when sending notifications (currently only email is utilized) | [optional] 
**Priority** | Pointer to **string** | The priority of the approval | [optional] 
**Requester** | Pointer to [**ApprovalIdentity**](approval-identity) | Object representation of the requester of the approval | [optional] 
**Requestee** | Pointer to [**ApprovalIdentity**](approval-identity) | Object representation of the requestee of the approval | [optional] 
**Comments** | Pointer to [**[]ApprovalComment1**](approval-comment1) | Object representation of a comment on the approval | [optional] 
**ApprovedBy** | Pointer to [**[]ApprovalIdentityRecord**](approval-identity-record) | Array of approvers who have approved the approval | [optional] 
**RejectedBy** | Pointer to [**[]ApprovalIdentityRecord**](approval-identity-record) | Array of approvers who have rejected the approval | [optional] 
**AssignedTo** | Pointer to [**[]ApprovalIdentity**](approval-identity) | Array of identities that the approval request is currently assigned to/waiting on. For parallel approvals, this is set to all approvers left to approve. | [optional] 
**CompletedDate** | Pointer to **string** | Date the approval was completed | [optional] 
**ApprovalCriteria** | Pointer to [**ApprovalApprovalCriteria**](approval-approval-criteria) |  | [optional] 
**AdditionalAttributes** | Pointer to **string** | Json string representing additional attributes known about the object to be approved. | [optional] 
**ReferenceData** | Pointer to [**[]ApprovalReference**](approval-reference) | Reference data related to the approval | [optional] 
**ReassignmentHistory** | Pointer to [**[]ApprovalReassignmentHistory**](approval-reassignment-history) | History of whom the approval request was assigned to | [optional] 
**StaticAttributes** | Pointer to **map[string]map[string]interface{}** | Field that can include any static additional info that may be needed by the service that the approval request originated from | [optional] 
**ModifiedDate** | Pointer to **SailPointTime** | Date/time that the approval request was last updated | [optional] 
**RequestedTarget** | Pointer to [**[]ApprovalRequestedTarget**](approval-requested-target) | RequestedTarget used to specify the actual object or target the approval request is for | [optional] 

## Methods

### NewApproval

`func NewApproval() *Approval`

NewApproval instantiates a new Approval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalWithDefaults

`func NewApprovalWithDefaults() *Approval`

NewApprovalWithDefaults instantiates a new Approval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Approval) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Approval) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Approval) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Approval) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTenantId

`func (o *Approval) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *Approval) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *Approval) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *Approval) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetType

`func (o *Approval) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Approval) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Approval) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Approval) HasType() bool`

HasType returns a boolean if a field has been set.

### GetApprovers

`func (o *Approval) GetApprovers() []ApprovalIdentity`

GetApprovers returns the Approvers field if non-nil, zero value otherwise.

### GetApproversOk

`func (o *Approval) GetApproversOk() (*[]ApprovalIdentity, bool)`

GetApproversOk returns a tuple with the Approvers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovers

`func (o *Approval) SetApprovers(v []ApprovalIdentity)`

SetApprovers sets Approvers field to given value.

### HasApprovers

`func (o *Approval) HasApprovers() bool`

HasApprovers returns a boolean if a field has been set.

### GetCreatedDate

`func (o *Approval) GetCreatedDate() string`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *Approval) GetCreatedDateOk() (*string, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *Approval) SetCreatedDate(v string)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *Approval) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetDueDate

`func (o *Approval) GetDueDate() string`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *Approval) GetDueDateOk() (*string, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *Approval) SetDueDate(v string)`

SetDueDate sets DueDate field to given value.

### HasDueDate

`func (o *Approval) HasDueDate() bool`

HasDueDate returns a boolean if a field has been set.

### GetEscalationStep

`func (o *Approval) GetEscalationStep() string`

GetEscalationStep returns the EscalationStep field if non-nil, zero value otherwise.

### GetEscalationStepOk

`func (o *Approval) GetEscalationStepOk() (*string, bool)`

GetEscalationStepOk returns a tuple with the EscalationStep field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEscalationStep

`func (o *Approval) SetEscalationStep(v string)`

SetEscalationStep sets EscalationStep field to given value.

### HasEscalationStep

`func (o *Approval) HasEscalationStep() bool`

HasEscalationStep returns a boolean if a field has been set.

### GetSerialStep

`func (o *Approval) GetSerialStep() int64`

GetSerialStep returns the SerialStep field if non-nil, zero value otherwise.

### GetSerialStepOk

`func (o *Approval) GetSerialStepOk() (*int64, bool)`

GetSerialStepOk returns a tuple with the SerialStep field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialStep

`func (o *Approval) SetSerialStep(v int64)`

SetSerialStep sets SerialStep field to given value.

### HasSerialStep

`func (o *Approval) HasSerialStep() bool`

HasSerialStep returns a boolean if a field has been set.

### GetIsEscalated

`func (o *Approval) GetIsEscalated() bool`

GetIsEscalated returns the IsEscalated field if non-nil, zero value otherwise.

### GetIsEscalatedOk

`func (o *Approval) GetIsEscalatedOk() (*bool, bool)`

GetIsEscalatedOk returns a tuple with the IsEscalated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEscalated

`func (o *Approval) SetIsEscalated(v bool)`

SetIsEscalated sets IsEscalated field to given value.

### HasIsEscalated

`func (o *Approval) HasIsEscalated() bool`

HasIsEscalated returns a boolean if a field has been set.

### GetName

`func (o *Approval) GetName() []ApprovalName`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Approval) GetNameOk() (*[]ApprovalName, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Approval) SetName(v []ApprovalName)`

SetName sets Name field to given value.

### HasName

`func (o *Approval) HasName() bool`

HasName returns a boolean if a field has been set.

### GetBatchRequest

`func (o *Approval) GetBatchRequest() ApprovalBatch`

GetBatchRequest returns the BatchRequest field if non-nil, zero value otherwise.

### GetBatchRequestOk

`func (o *Approval) GetBatchRequestOk() (*ApprovalBatch, bool)`

GetBatchRequestOk returns a tuple with the BatchRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchRequest

`func (o *Approval) SetBatchRequest(v ApprovalBatch)`

SetBatchRequest sets BatchRequest field to given value.

### HasBatchRequest

`func (o *Approval) HasBatchRequest() bool`

HasBatchRequest returns a boolean if a field has been set.

### GetApprovalConfig

`func (o *Approval) GetApprovalConfig() ApprovalConfig`

GetApprovalConfig returns the ApprovalConfig field if non-nil, zero value otherwise.

### GetApprovalConfigOk

`func (o *Approval) GetApprovalConfigOk() (*ApprovalConfig, bool)`

GetApprovalConfigOk returns a tuple with the ApprovalConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalConfig

`func (o *Approval) SetApprovalConfig(v ApprovalConfig)`

SetApprovalConfig sets ApprovalConfig field to given value.

### HasApprovalConfig

`func (o *Approval) HasApprovalConfig() bool`

HasApprovalConfig returns a boolean if a field has been set.

### GetDescription

`func (o *Approval) GetDescription() []ApprovalDescription`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Approval) GetDescriptionOk() (*[]ApprovalDescription, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Approval) SetDescription(v []ApprovalDescription)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Approval) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetMedium

`func (o *Approval) GetMedium() string`

GetMedium returns the Medium field if non-nil, zero value otherwise.

### GetMediumOk

`func (o *Approval) GetMediumOk() (*string, bool)`

GetMediumOk returns a tuple with the Medium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedium

`func (o *Approval) SetMedium(v string)`

SetMedium sets Medium field to given value.

### HasMedium

`func (o *Approval) HasMedium() bool`

HasMedium returns a boolean if a field has been set.

### GetPriority

`func (o *Approval) GetPriority() string`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *Approval) GetPriorityOk() (*string, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *Approval) SetPriority(v string)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *Approval) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetRequester

`func (o *Approval) GetRequester() ApprovalIdentity`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *Approval) GetRequesterOk() (*ApprovalIdentity, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *Approval) SetRequester(v ApprovalIdentity)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *Approval) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetRequestee

`func (o *Approval) GetRequestee() ApprovalIdentity`

GetRequestee returns the Requestee field if non-nil, zero value otherwise.

### GetRequesteeOk

`func (o *Approval) GetRequesteeOk() (*ApprovalIdentity, bool)`

GetRequesteeOk returns a tuple with the Requestee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestee

`func (o *Approval) SetRequestee(v ApprovalIdentity)`

SetRequestee sets Requestee field to given value.

### HasRequestee

`func (o *Approval) HasRequestee() bool`

HasRequestee returns a boolean if a field has been set.

### GetComments

`func (o *Approval) GetComments() []ApprovalComment1`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *Approval) GetCommentsOk() (*[]ApprovalComment1, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *Approval) SetComments(v []ApprovalComment1)`

SetComments sets Comments field to given value.

### HasComments

`func (o *Approval) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetApprovedBy

`func (o *Approval) GetApprovedBy() []ApprovalIdentityRecord`

GetApprovedBy returns the ApprovedBy field if non-nil, zero value otherwise.

### GetApprovedByOk

`func (o *Approval) GetApprovedByOk() (*[]ApprovalIdentityRecord, bool)`

GetApprovedByOk returns a tuple with the ApprovedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedBy

`func (o *Approval) SetApprovedBy(v []ApprovalIdentityRecord)`

SetApprovedBy sets ApprovedBy field to given value.

### HasApprovedBy

`func (o *Approval) HasApprovedBy() bool`

HasApprovedBy returns a boolean if a field has been set.

### GetRejectedBy

`func (o *Approval) GetRejectedBy() []ApprovalIdentityRecord`

GetRejectedBy returns the RejectedBy field if non-nil, zero value otherwise.

### GetRejectedByOk

`func (o *Approval) GetRejectedByOk() (*[]ApprovalIdentityRecord, bool)`

GetRejectedByOk returns a tuple with the RejectedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRejectedBy

`func (o *Approval) SetRejectedBy(v []ApprovalIdentityRecord)`

SetRejectedBy sets RejectedBy field to given value.

### HasRejectedBy

`func (o *Approval) HasRejectedBy() bool`

HasRejectedBy returns a boolean if a field has been set.

### GetAssignedTo

`func (o *Approval) GetAssignedTo() []ApprovalIdentity`

GetAssignedTo returns the AssignedTo field if non-nil, zero value otherwise.

### GetAssignedToOk

`func (o *Approval) GetAssignedToOk() (*[]ApprovalIdentity, bool)`

GetAssignedToOk returns a tuple with the AssignedTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedTo

`func (o *Approval) SetAssignedTo(v []ApprovalIdentity)`

SetAssignedTo sets AssignedTo field to given value.

### HasAssignedTo

`func (o *Approval) HasAssignedTo() bool`

HasAssignedTo returns a boolean if a field has been set.

### GetCompletedDate

`func (o *Approval) GetCompletedDate() string`

GetCompletedDate returns the CompletedDate field if non-nil, zero value otherwise.

### GetCompletedDateOk

`func (o *Approval) GetCompletedDateOk() (*string, bool)`

GetCompletedDateOk returns a tuple with the CompletedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedDate

`func (o *Approval) SetCompletedDate(v string)`

SetCompletedDate sets CompletedDate field to given value.

### HasCompletedDate

`func (o *Approval) HasCompletedDate() bool`

HasCompletedDate returns a boolean if a field has been set.

### GetApprovalCriteria

`func (o *Approval) GetApprovalCriteria() ApprovalApprovalCriteria`

GetApprovalCriteria returns the ApprovalCriteria field if non-nil, zero value otherwise.

### GetApprovalCriteriaOk

`func (o *Approval) GetApprovalCriteriaOk() (*ApprovalApprovalCriteria, bool)`

GetApprovalCriteriaOk returns a tuple with the ApprovalCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalCriteria

`func (o *Approval) SetApprovalCriteria(v ApprovalApprovalCriteria)`

SetApprovalCriteria sets ApprovalCriteria field to given value.

### HasApprovalCriteria

`func (o *Approval) HasApprovalCriteria() bool`

HasApprovalCriteria returns a boolean if a field has been set.

### GetAdditionalAttributes

`func (o *Approval) GetAdditionalAttributes() string`

GetAdditionalAttributes returns the AdditionalAttributes field if non-nil, zero value otherwise.

### GetAdditionalAttributesOk

`func (o *Approval) GetAdditionalAttributesOk() (*string, bool)`

GetAdditionalAttributesOk returns a tuple with the AdditionalAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalAttributes

`func (o *Approval) SetAdditionalAttributes(v string)`

SetAdditionalAttributes sets AdditionalAttributes field to given value.

### HasAdditionalAttributes

`func (o *Approval) HasAdditionalAttributes() bool`

HasAdditionalAttributes returns a boolean if a field has been set.

### GetReferenceData

`func (o *Approval) GetReferenceData() []ApprovalReference`

GetReferenceData returns the ReferenceData field if non-nil, zero value otherwise.

### GetReferenceDataOk

`func (o *Approval) GetReferenceDataOk() (*[]ApprovalReference, bool)`

GetReferenceDataOk returns a tuple with the ReferenceData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceData

`func (o *Approval) SetReferenceData(v []ApprovalReference)`

SetReferenceData sets ReferenceData field to given value.

### HasReferenceData

`func (o *Approval) HasReferenceData() bool`

HasReferenceData returns a boolean if a field has been set.

### GetReassignmentHistory

`func (o *Approval) GetReassignmentHistory() []ApprovalReassignmentHistory`

GetReassignmentHistory returns the ReassignmentHistory field if non-nil, zero value otherwise.

### GetReassignmentHistoryOk

`func (o *Approval) GetReassignmentHistoryOk() (*[]ApprovalReassignmentHistory, bool)`

GetReassignmentHistoryOk returns a tuple with the ReassignmentHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentHistory

`func (o *Approval) SetReassignmentHistory(v []ApprovalReassignmentHistory)`

SetReassignmentHistory sets ReassignmentHistory field to given value.

### HasReassignmentHistory

`func (o *Approval) HasReassignmentHistory() bool`

HasReassignmentHistory returns a boolean if a field has been set.

### GetStaticAttributes

`func (o *Approval) GetStaticAttributes() map[string]map[string]interface{}`

GetStaticAttributes returns the StaticAttributes field if non-nil, zero value otherwise.

### GetStaticAttributesOk

`func (o *Approval) GetStaticAttributesOk() (*map[string]map[string]interface{}, bool)`

GetStaticAttributesOk returns a tuple with the StaticAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStaticAttributes

`func (o *Approval) SetStaticAttributes(v map[string]map[string]interface{})`

SetStaticAttributes sets StaticAttributes field to given value.

### HasStaticAttributes

`func (o *Approval) HasStaticAttributes() bool`

HasStaticAttributes returns a boolean if a field has been set.

### GetModifiedDate

`func (o *Approval) GetModifiedDate() SailPointTime`

GetModifiedDate returns the ModifiedDate field if non-nil, zero value otherwise.

### GetModifiedDateOk

`func (o *Approval) GetModifiedDateOk() (*SailPointTime, bool)`

GetModifiedDateOk returns a tuple with the ModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedDate

`func (o *Approval) SetModifiedDate(v SailPointTime)`

SetModifiedDate sets ModifiedDate field to given value.

### HasModifiedDate

`func (o *Approval) HasModifiedDate() bool`

HasModifiedDate returns a boolean if a field has been set.

### GetRequestedTarget

`func (o *Approval) GetRequestedTarget() []ApprovalRequestedTarget`

GetRequestedTarget returns the RequestedTarget field if non-nil, zero value otherwise.

### GetRequestedTargetOk

`func (o *Approval) GetRequestedTargetOk() (*[]ApprovalRequestedTarget, bool)`

GetRequestedTargetOk returns a tuple with the RequestedTarget field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedTarget

`func (o *Approval) SetRequestedTarget(v []ApprovalRequestedTarget)`

SetRequestedTarget sets RequestedTarget field to given value.

### HasRequestedTarget

`func (o *Approval) HasRequestedTarget() bool`

HasRequestedTarget returns a boolean if a field has been set.


