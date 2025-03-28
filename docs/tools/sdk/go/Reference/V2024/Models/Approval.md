---
id: v2024-approval
title: Approval
pagination_label: Approval
sidebar_label: Approval
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approval', 'V2024Approval'] 
slug: /tools/sdk/go/v2024/models/approval
tags: ['SDK', 'Software Development Kit', 'Approval', 'V2024Approval']
---

# Approval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalId** | Pointer to **string** | The Approval ID | [optional] 
**Approvers** | Pointer to [**[]ApprovalIdentity**](approval-identity) | Object representation of an approver of an approval | [optional] 
**CreatedDate** | Pointer to **string** | Date the approval was created | [optional] 
**Type** | Pointer to **string** | Type of approval | [optional] 
**Name** | Pointer to [**[]ApprovalName**](approval-name) | The name of the approval for a given locale | [optional] 
**BatchRequest** | Pointer to [**ApprovalBatch**](approval-batch) | The name of the approval for a given locale | [optional] 
**Description** | Pointer to [**[]ApprovalDescription**](approval-description) | The description of the approval for a given locale | [optional] 
**Priority** | Pointer to **string** | The priority of the approval | [optional] 
**Requester** | Pointer to [**ApprovalIdentity**](approval-identity) | Object representation of the requester of the approval | [optional] 
**Comments** | Pointer to [**[]ApprovalComment1**](approval-comment1) | Object representation of a comment on the approval | [optional] 
**ApprovedBy** | Pointer to [**[]ApprovalIdentity**](approval-identity) | Array of approvers who have approved the approval | [optional] 
**RejectedBy** | Pointer to [**[]ApprovalIdentity**](approval-identity) | Array of approvers who have rejected the approval | [optional] 
**CompletedDate** | Pointer to **string** | Date the approval was completed | [optional] 
**ApprovalCriteria** | Pointer to **string** | Criteria that needs to be met for an approval to be marked as approved | [optional] 
**Status** | Pointer to **string** | The current status of the approval | [optional] 
**AdditionalAttributes** | Pointer to **string** | Json string representing additional attributes known about the object to be approved. | [optional] 
**ReferenceData** | Pointer to [**[]ApprovalReference**](approval-reference) | Reference data related to the approval | [optional] 

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

### GetApprovalId

`func (o *Approval) GetApprovalId() string`

GetApprovalId returns the ApprovalId field if non-nil, zero value otherwise.

### GetApprovalIdOk

`func (o *Approval) GetApprovalIdOk() (*string, bool)`

GetApprovalIdOk returns a tuple with the ApprovalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalId

`func (o *Approval) SetApprovalId(v string)`

SetApprovalId sets ApprovalId field to given value.

### HasApprovalId

`func (o *Approval) HasApprovalId() bool`

HasApprovalId returns a boolean if a field has been set.

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

`func (o *Approval) GetApprovedBy() []ApprovalIdentity`

GetApprovedBy returns the ApprovedBy field if non-nil, zero value otherwise.

### GetApprovedByOk

`func (o *Approval) GetApprovedByOk() (*[]ApprovalIdentity, bool)`

GetApprovedByOk returns a tuple with the ApprovedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedBy

`func (o *Approval) SetApprovedBy(v []ApprovalIdentity)`

SetApprovedBy sets ApprovedBy field to given value.

### HasApprovedBy

`func (o *Approval) HasApprovedBy() bool`

HasApprovedBy returns a boolean if a field has been set.

### GetRejectedBy

`func (o *Approval) GetRejectedBy() []ApprovalIdentity`

GetRejectedBy returns the RejectedBy field if non-nil, zero value otherwise.

### GetRejectedByOk

`func (o *Approval) GetRejectedByOk() (*[]ApprovalIdentity, bool)`

GetRejectedByOk returns a tuple with the RejectedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRejectedBy

`func (o *Approval) SetRejectedBy(v []ApprovalIdentity)`

SetRejectedBy sets RejectedBy field to given value.

### HasRejectedBy

`func (o *Approval) HasRejectedBy() bool`

HasRejectedBy returns a boolean if a field has been set.

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

`func (o *Approval) GetApprovalCriteria() string`

GetApprovalCriteria returns the ApprovalCriteria field if non-nil, zero value otherwise.

### GetApprovalCriteriaOk

`func (o *Approval) GetApprovalCriteriaOk() (*string, bool)`

GetApprovalCriteriaOk returns a tuple with the ApprovalCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalCriteria

`func (o *Approval) SetApprovalCriteria(v string)`

SetApprovalCriteria sets ApprovalCriteria field to given value.

### HasApprovalCriteria

`func (o *Approval) HasApprovalCriteria() bool`

HasApprovalCriteria returns a boolean if a field has been set.

### GetStatus

`func (o *Approval) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Approval) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Approval) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Approval) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

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


