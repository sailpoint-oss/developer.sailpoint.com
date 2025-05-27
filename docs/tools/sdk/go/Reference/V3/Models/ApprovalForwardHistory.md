---
id: approval-forward-history
title: ApprovalForwardHistory
pagination_label: ApprovalForwardHistory
sidebar_label: ApprovalForwardHistory
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalForwardHistory', 'ApprovalForwardHistory'] 
slug: /tools/sdk/go/v3/models/approval-forward-history
tags: ['SDK', 'Software Development Kit', 'ApprovalForwardHistory', 'ApprovalForwardHistory']
---

# ApprovalForwardHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OldApproverName** | Pointer to **string** | Display name of approver from whom the approval was forwarded. | [optional] 
**NewApproverName** | Pointer to **string** | Display name of approver to whom the approval was forwarded. | [optional] 
**Comment** | Pointer to **NullableString** | Comment made while forwarding. | [optional] 
**Modified** | Pointer to **SailPointTime** | Time at which approval was forwarded. | [optional] 
**ForwarderName** | Pointer to **NullableString** | Display name of forwarder who forwarded the approval. | [optional] 
**ReassignmentType** | Pointer to [**ReassignmentType**](reassignment-type) |  | [optional] 

## Methods

### NewApprovalForwardHistory

`func NewApprovalForwardHistory() *ApprovalForwardHistory`

NewApprovalForwardHistory instantiates a new ApprovalForwardHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalForwardHistoryWithDefaults

`func NewApprovalForwardHistoryWithDefaults() *ApprovalForwardHistory`

NewApprovalForwardHistoryWithDefaults instantiates a new ApprovalForwardHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOldApproverName

`func (o *ApprovalForwardHistory) GetOldApproverName() string`

GetOldApproverName returns the OldApproverName field if non-nil, zero value otherwise.

### GetOldApproverNameOk

`func (o *ApprovalForwardHistory) GetOldApproverNameOk() (*string, bool)`

GetOldApproverNameOk returns a tuple with the OldApproverName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldApproverName

`func (o *ApprovalForwardHistory) SetOldApproverName(v string)`

SetOldApproverName sets OldApproverName field to given value.

### HasOldApproverName

`func (o *ApprovalForwardHistory) HasOldApproverName() bool`

HasOldApproverName returns a boolean if a field has been set.

### GetNewApproverName

`func (o *ApprovalForwardHistory) GetNewApproverName() string`

GetNewApproverName returns the NewApproverName field if non-nil, zero value otherwise.

### GetNewApproverNameOk

`func (o *ApprovalForwardHistory) GetNewApproverNameOk() (*string, bool)`

GetNewApproverNameOk returns a tuple with the NewApproverName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewApproverName

`func (o *ApprovalForwardHistory) SetNewApproverName(v string)`

SetNewApproverName sets NewApproverName field to given value.

### HasNewApproverName

`func (o *ApprovalForwardHistory) HasNewApproverName() bool`

HasNewApproverName returns a boolean if a field has been set.

### GetComment

`func (o *ApprovalForwardHistory) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ApprovalForwardHistory) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ApprovalForwardHistory) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ApprovalForwardHistory) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *ApprovalForwardHistory) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *ApprovalForwardHistory) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetModified

`func (o *ApprovalForwardHistory) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *ApprovalForwardHistory) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *ApprovalForwardHistory) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *ApprovalForwardHistory) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetForwarderName

`func (o *ApprovalForwardHistory) GetForwarderName() string`

GetForwarderName returns the ForwarderName field if non-nil, zero value otherwise.

### GetForwarderNameOk

`func (o *ApprovalForwardHistory) GetForwarderNameOk() (*string, bool)`

GetForwarderNameOk returns a tuple with the ForwarderName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForwarderName

`func (o *ApprovalForwardHistory) SetForwarderName(v string)`

SetForwarderName sets ForwarderName field to given value.

### HasForwarderName

`func (o *ApprovalForwardHistory) HasForwarderName() bool`

HasForwarderName returns a boolean if a field has been set.

### SetForwarderNameNil

`func (o *ApprovalForwardHistory) SetForwarderNameNil(b bool)`

 SetForwarderNameNil sets the value for ForwarderName to be an explicit nil

### UnsetForwarderName
`func (o *ApprovalForwardHistory) UnsetForwarderName()`

UnsetForwarderName ensures that no value is present for ForwarderName, not even an explicit nil
### GetReassignmentType

`func (o *ApprovalForwardHistory) GetReassignmentType() ReassignmentType`

GetReassignmentType returns the ReassignmentType field if non-nil, zero value otherwise.

### GetReassignmentTypeOk

`func (o *ApprovalForwardHistory) GetReassignmentTypeOk() (*ReassignmentType, bool)`

GetReassignmentTypeOk returns a tuple with the ReassignmentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentType

`func (o *ApprovalForwardHistory) SetReassignmentType(v ReassignmentType)`

SetReassignmentType sets ReassignmentType field to given value.

### HasReassignmentType

`func (o *ApprovalForwardHistory) HasReassignmentType() bool`

HasReassignmentType returns a boolean if a field has been set.


