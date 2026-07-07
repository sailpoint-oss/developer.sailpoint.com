---
id: v1-approval2
title: Approval2
pagination_label: Approval2
sidebar_label: Approval2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approval2', 'V1Approval2'] 
slug: /tools/sdk/go/approvals/models/approval2
tags: ['SDK', 'Software Development Kit', 'Approval2', 'V1Approval2']
---

# Approval2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The Approval ID | [optional] 
**TenantId** | Pointer to **string** | The Tenant ID of the Approval | [optional] 
**Type** | Pointer to **string** | The type of the approval, such as ENTITLEMENT_DESCRIPTIONS, CUSTOM_ACCESS_REQUEST_APPROVAL, GENERIC_APPROVAL | [optional] 
**Approvers** | Pointer to [**[]Approvalidentity**](approvalidentity) | Object representation of an approver of an approval | [optional] 
**CreatedDate** | Pointer to **string** | Date the approval was created | [optional] 
**DueDate** | Pointer to **string** | Date the approval is due | [optional] 
**EscalationStep** | Pointer to **string** | Step in the escalation process. If set to 0, the approval is not escalated. If set to 1, the approval is escalated to the first approver in the escalation chain. | [optional] 
**SerialStep** | Pointer to **int64** | The serial step of the approval in the approval chain. For example, serialStep 1 is the first approval to action in an approval request chain. Parallel approvals are set to 0. | [optional] 
**IsEscalated** | Pointer to **bool** | Whether or not the approval has been escalated. Will reset to false when the approval is actioned on. | [optional] [default to false]
**Name** | Pointer to [**[]Approvalname**](approvalname) | The name of the approval for a given locale | [optional] 
**BatchRequest** | Pointer to [**Approvalbatch**](approvalbatch) |  | [optional] 
**ApprovalConfig** | Pointer to [**Approvalconfig**](approvalconfig) |  | [optional] 
**Description** | Pointer to [**[]Approvaldescription**](approvaldescription) | The description of the approval for a given locale | [optional] 
**Medium** | Pointer to **string** | Signifies what medium to use when sending notifications (currently only email is utilized) | [optional] 
**Priority** | Pointer to **string** | The priority of the approval | [optional] 
**Requester** | Pointer to [**Approvalidentity**](approvalidentity) |  | [optional] 
**Requestee** | Pointer to [**Approvalidentity**](approvalidentity) |  | [optional] 
**Comments** | Pointer to [**[]Approvalcomment3**](approvalcomment3) | Object representation of a comment on the approval | [optional] 
**ApprovedBy** | Pointer to [**[]Approvalidentityrecord**](approvalidentityrecord) | Array of approvers who have approved the approval | [optional] 
**RejectedBy** | Pointer to [**[]Approvalidentityrecord**](approvalidentityrecord) | Array of approvers who have rejected the approval | [optional] 
**AssignedTo** | Pointer to [**[]Approvalidentity**](approvalidentity) | Array of identities that the approval request is currently assigned to/waiting on. For parallel approvals, this is set to all approvers left to approve. | [optional] 
**CompletedDate** | Pointer to **string** | Date the approval was completed | [optional] 
**ApprovalCriteria** | Pointer to [**Approval2ApprovalCriteria**](approval2-approval-criteria) |  | [optional] 
**AdditionalAttributes** | Pointer to **string** | Json string representing additional attributes known about the object to be approved. | [optional] 
**ReferenceData** | Pointer to [**[]Approvalreference**](approvalreference) | Reference data related to the approval | [optional] 
**ReassignmentHistory** | Pointer to [**[]Approvalreassignmenthistory**](approvalreassignmenthistory) | History of whom the approval request was assigned to | [optional] 
**StaticAttributes** | Pointer to **map[string]interface{}** | Field that can include any static additional info that may be needed by the service that the approval request originated from | [optional] 
**ModifiedDate** | Pointer to **SailPointTime** | Date/time that the approval request was last updated | [optional] 
**RequestedTarget** | Pointer to [**[]Approvalrequestedtarget**](approvalrequestedtarget) | RequestedTarget used to specify the actual object or target the approval request is for | [optional] 

## Methods

### NewApproval2

`func NewApproval2() *Approval2`

NewApproval2 instantiates a new Approval2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApproval2WithDefaults

`func NewApproval2WithDefaults() *Approval2`

NewApproval2WithDefaults instantiates a new Approval2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Approval2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Approval2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Approval2) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Approval2) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTenantId

`func (o *Approval2) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *Approval2) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *Approval2) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *Approval2) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetType

`func (o *Approval2) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Approval2) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Approval2) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Approval2) HasType() bool`

HasType returns a boolean if a field has been set.

### GetApprovers

`func (o *Approval2) GetApprovers() []Approvalidentity`

GetApprovers returns the Approvers field if non-nil, zero value otherwise.

### GetApproversOk

`func (o *Approval2) GetApproversOk() (*[]Approvalidentity, bool)`

GetApproversOk returns a tuple with the Approvers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovers

`func (o *Approval2) SetApprovers(v []Approvalidentity)`

SetApprovers sets Approvers field to given value.

### HasApprovers

`func (o *Approval2) HasApprovers() bool`

HasApprovers returns a boolean if a field has been set.

### GetCreatedDate

`func (o *Approval2) GetCreatedDate() string`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *Approval2) GetCreatedDateOk() (*string, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *Approval2) SetCreatedDate(v string)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *Approval2) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetDueDate

`func (o *Approval2) GetDueDate() string`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *Approval2) GetDueDateOk() (*string, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *Approval2) SetDueDate(v string)`

SetDueDate sets DueDate field to given value.

### HasDueDate

`func (o *Approval2) HasDueDate() bool`

HasDueDate returns a boolean if a field has been set.

### GetEscalationStep

`func (o *Approval2) GetEscalationStep() string`

GetEscalationStep returns the EscalationStep field if non-nil, zero value otherwise.

### GetEscalationStepOk

`func (o *Approval2) GetEscalationStepOk() (*string, bool)`

GetEscalationStepOk returns a tuple with the EscalationStep field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEscalationStep

`func (o *Approval2) SetEscalationStep(v string)`

SetEscalationStep sets EscalationStep field to given value.

### HasEscalationStep

`func (o *Approval2) HasEscalationStep() bool`

HasEscalationStep returns a boolean if a field has been set.

### GetSerialStep

`func (o *Approval2) GetSerialStep() int64`

GetSerialStep returns the SerialStep field if non-nil, zero value otherwise.

### GetSerialStepOk

`func (o *Approval2) GetSerialStepOk() (*int64, bool)`

GetSerialStepOk returns a tuple with the SerialStep field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialStep

`func (o *Approval2) SetSerialStep(v int64)`

SetSerialStep sets SerialStep field to given value.

### HasSerialStep

`func (o *Approval2) HasSerialStep() bool`

HasSerialStep returns a boolean if a field has been set.

### GetIsEscalated

`func (o *Approval2) GetIsEscalated() bool`

GetIsEscalated returns the IsEscalated field if non-nil, zero value otherwise.

### GetIsEscalatedOk

`func (o *Approval2) GetIsEscalatedOk() (*bool, bool)`

GetIsEscalatedOk returns a tuple with the IsEscalated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEscalated

`func (o *Approval2) SetIsEscalated(v bool)`

SetIsEscalated sets IsEscalated field to given value.

### HasIsEscalated

`func (o *Approval2) HasIsEscalated() bool`

HasIsEscalated returns a boolean if a field has been set.

### GetName

`func (o *Approval2) GetName() []Approvalname`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Approval2) GetNameOk() (*[]Approvalname, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Approval2) SetName(v []Approvalname)`

SetName sets Name field to given value.

### HasName

`func (o *Approval2) HasName() bool`

HasName returns a boolean if a field has been set.

### GetBatchRequest

`func (o *Approval2) GetBatchRequest() Approvalbatch`

GetBatchRequest returns the BatchRequest field if non-nil, zero value otherwise.

### GetBatchRequestOk

`func (o *Approval2) GetBatchRequestOk() (*Approvalbatch, bool)`

GetBatchRequestOk returns a tuple with the BatchRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchRequest

`func (o *Approval2) SetBatchRequest(v Approvalbatch)`

SetBatchRequest sets BatchRequest field to given value.

### HasBatchRequest

`func (o *Approval2) HasBatchRequest() bool`

HasBatchRequest returns a boolean if a field has been set.

### GetApprovalConfig

`func (o *Approval2) GetApprovalConfig() Approvalconfig`

GetApprovalConfig returns the ApprovalConfig field if non-nil, zero value otherwise.

### GetApprovalConfigOk

`func (o *Approval2) GetApprovalConfigOk() (*Approvalconfig, bool)`

GetApprovalConfigOk returns a tuple with the ApprovalConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalConfig

`func (o *Approval2) SetApprovalConfig(v Approvalconfig)`

SetApprovalConfig sets ApprovalConfig field to given value.

### HasApprovalConfig

`func (o *Approval2) HasApprovalConfig() bool`

HasApprovalConfig returns a boolean if a field has been set.

### GetDescription

`func (o *Approval2) GetDescription() []Approvaldescription`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Approval2) GetDescriptionOk() (*[]Approvaldescription, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Approval2) SetDescription(v []Approvaldescription)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Approval2) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetMedium

`func (o *Approval2) GetMedium() string`

GetMedium returns the Medium field if non-nil, zero value otherwise.

### GetMediumOk

`func (o *Approval2) GetMediumOk() (*string, bool)`

GetMediumOk returns a tuple with the Medium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedium

`func (o *Approval2) SetMedium(v string)`

SetMedium sets Medium field to given value.

### HasMedium

`func (o *Approval2) HasMedium() bool`

HasMedium returns a boolean if a field has been set.

### GetPriority

`func (o *Approval2) GetPriority() string`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *Approval2) GetPriorityOk() (*string, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *Approval2) SetPriority(v string)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *Approval2) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetRequester

`func (o *Approval2) GetRequester() Approvalidentity`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *Approval2) GetRequesterOk() (*Approvalidentity, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *Approval2) SetRequester(v Approvalidentity)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *Approval2) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetRequestee

`func (o *Approval2) GetRequestee() Approvalidentity`

GetRequestee returns the Requestee field if non-nil, zero value otherwise.

### GetRequesteeOk

`func (o *Approval2) GetRequesteeOk() (*Approvalidentity, bool)`

GetRequesteeOk returns a tuple with the Requestee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestee

`func (o *Approval2) SetRequestee(v Approvalidentity)`

SetRequestee sets Requestee field to given value.

### HasRequestee

`func (o *Approval2) HasRequestee() bool`

HasRequestee returns a boolean if a field has been set.

### GetComments

`func (o *Approval2) GetComments() []Approvalcomment3`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *Approval2) GetCommentsOk() (*[]Approvalcomment3, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *Approval2) SetComments(v []Approvalcomment3)`

SetComments sets Comments field to given value.

### HasComments

`func (o *Approval2) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetApprovedBy

`func (o *Approval2) GetApprovedBy() []Approvalidentityrecord`

GetApprovedBy returns the ApprovedBy field if non-nil, zero value otherwise.

### GetApprovedByOk

`func (o *Approval2) GetApprovedByOk() (*[]Approvalidentityrecord, bool)`

GetApprovedByOk returns a tuple with the ApprovedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedBy

`func (o *Approval2) SetApprovedBy(v []Approvalidentityrecord)`

SetApprovedBy sets ApprovedBy field to given value.

### HasApprovedBy

`func (o *Approval2) HasApprovedBy() bool`

HasApprovedBy returns a boolean if a field has been set.

### GetRejectedBy

`func (o *Approval2) GetRejectedBy() []Approvalidentityrecord`

GetRejectedBy returns the RejectedBy field if non-nil, zero value otherwise.

### GetRejectedByOk

`func (o *Approval2) GetRejectedByOk() (*[]Approvalidentityrecord, bool)`

GetRejectedByOk returns a tuple with the RejectedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRejectedBy

`func (o *Approval2) SetRejectedBy(v []Approvalidentityrecord)`

SetRejectedBy sets RejectedBy field to given value.

### HasRejectedBy

`func (o *Approval2) HasRejectedBy() bool`

HasRejectedBy returns a boolean if a field has been set.

### GetAssignedTo

`func (o *Approval2) GetAssignedTo() []Approvalidentity`

GetAssignedTo returns the AssignedTo field if non-nil, zero value otherwise.

### GetAssignedToOk

`func (o *Approval2) GetAssignedToOk() (*[]Approvalidentity, bool)`

GetAssignedToOk returns a tuple with the AssignedTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedTo

`func (o *Approval2) SetAssignedTo(v []Approvalidentity)`

SetAssignedTo sets AssignedTo field to given value.

### HasAssignedTo

`func (o *Approval2) HasAssignedTo() bool`

HasAssignedTo returns a boolean if a field has been set.

### GetCompletedDate

`func (o *Approval2) GetCompletedDate() string`

GetCompletedDate returns the CompletedDate field if non-nil, zero value otherwise.

### GetCompletedDateOk

`func (o *Approval2) GetCompletedDateOk() (*string, bool)`

GetCompletedDateOk returns a tuple with the CompletedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedDate

`func (o *Approval2) SetCompletedDate(v string)`

SetCompletedDate sets CompletedDate field to given value.

### HasCompletedDate

`func (o *Approval2) HasCompletedDate() bool`

HasCompletedDate returns a boolean if a field has been set.

### GetApprovalCriteria

`func (o *Approval2) GetApprovalCriteria() Approval2ApprovalCriteria`

GetApprovalCriteria returns the ApprovalCriteria field if non-nil, zero value otherwise.

### GetApprovalCriteriaOk

`func (o *Approval2) GetApprovalCriteriaOk() (*Approval2ApprovalCriteria, bool)`

GetApprovalCriteriaOk returns a tuple with the ApprovalCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalCriteria

`func (o *Approval2) SetApprovalCriteria(v Approval2ApprovalCriteria)`

SetApprovalCriteria sets ApprovalCriteria field to given value.

### HasApprovalCriteria

`func (o *Approval2) HasApprovalCriteria() bool`

HasApprovalCriteria returns a boolean if a field has been set.

### GetAdditionalAttributes

`func (o *Approval2) GetAdditionalAttributes() string`

GetAdditionalAttributes returns the AdditionalAttributes field if non-nil, zero value otherwise.

### GetAdditionalAttributesOk

`func (o *Approval2) GetAdditionalAttributesOk() (*string, bool)`

GetAdditionalAttributesOk returns a tuple with the AdditionalAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalAttributes

`func (o *Approval2) SetAdditionalAttributes(v string)`

SetAdditionalAttributes sets AdditionalAttributes field to given value.

### HasAdditionalAttributes

`func (o *Approval2) HasAdditionalAttributes() bool`

HasAdditionalAttributes returns a boolean if a field has been set.

### GetReferenceData

`func (o *Approval2) GetReferenceData() []Approvalreference`

GetReferenceData returns the ReferenceData field if non-nil, zero value otherwise.

### GetReferenceDataOk

`func (o *Approval2) GetReferenceDataOk() (*[]Approvalreference, bool)`

GetReferenceDataOk returns a tuple with the ReferenceData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceData

`func (o *Approval2) SetReferenceData(v []Approvalreference)`

SetReferenceData sets ReferenceData field to given value.

### HasReferenceData

`func (o *Approval2) HasReferenceData() bool`

HasReferenceData returns a boolean if a field has been set.

### GetReassignmentHistory

`func (o *Approval2) GetReassignmentHistory() []Approvalreassignmenthistory`

GetReassignmentHistory returns the ReassignmentHistory field if non-nil, zero value otherwise.

### GetReassignmentHistoryOk

`func (o *Approval2) GetReassignmentHistoryOk() (*[]Approvalreassignmenthistory, bool)`

GetReassignmentHistoryOk returns a tuple with the ReassignmentHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentHistory

`func (o *Approval2) SetReassignmentHistory(v []Approvalreassignmenthistory)`

SetReassignmentHistory sets ReassignmentHistory field to given value.

### HasReassignmentHistory

`func (o *Approval2) HasReassignmentHistory() bool`

HasReassignmentHistory returns a boolean if a field has been set.

### GetStaticAttributes

`func (o *Approval2) GetStaticAttributes() map[string]interface{}`

GetStaticAttributes returns the StaticAttributes field if non-nil, zero value otherwise.

### GetStaticAttributesOk

`func (o *Approval2) GetStaticAttributesOk() (*map[string]interface{}, bool)`

GetStaticAttributesOk returns a tuple with the StaticAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStaticAttributes

`func (o *Approval2) SetStaticAttributes(v map[string]interface{})`

SetStaticAttributes sets StaticAttributes field to given value.

### HasStaticAttributes

`func (o *Approval2) HasStaticAttributes() bool`

HasStaticAttributes returns a boolean if a field has been set.

### GetModifiedDate

`func (o *Approval2) GetModifiedDate() SailPointTime`

GetModifiedDate returns the ModifiedDate field if non-nil, zero value otherwise.

### GetModifiedDateOk

`func (o *Approval2) GetModifiedDateOk() (*SailPointTime, bool)`

GetModifiedDateOk returns a tuple with the ModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedDate

`func (o *Approval2) SetModifiedDate(v SailPointTime)`

SetModifiedDate sets ModifiedDate field to given value.

### HasModifiedDate

`func (o *Approval2) HasModifiedDate() bool`

HasModifiedDate returns a boolean if a field has been set.

### GetRequestedTarget

`func (o *Approval2) GetRequestedTarget() []Approvalrequestedtarget`

GetRequestedTarget returns the RequestedTarget field if non-nil, zero value otherwise.

### GetRequestedTargetOk

`func (o *Approval2) GetRequestedTargetOk() (*[]Approvalrequestedtarget, bool)`

GetRequestedTargetOk returns a tuple with the RequestedTarget field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedTarget

`func (o *Approval2) SetRequestedTarget(v []Approvalrequestedtarget)`

SetRequestedTarget sets RequestedTarget field to given value.

### HasRequestedTarget

`func (o *Approval2) HasRequestedTarget() bool`

HasRequestedTarget returns a boolean if a field has been set.


