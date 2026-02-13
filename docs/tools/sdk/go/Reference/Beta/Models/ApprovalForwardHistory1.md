---
id: beta-approval-forward-history1
title: ApprovalForwardHistory1
pagination_label: ApprovalForwardHistory1
sidebar_label: ApprovalForwardHistory1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalForwardHistory1', 'BetaApprovalForwardHistory1'] 
slug: /tools/sdk/go/beta/models/approval-forward-history1
tags: ['SDK', 'Software Development Kit', 'ApprovalForwardHistory1', 'BetaApprovalForwardHistory1']
---

# ApprovalForwardHistory1

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

### NewApprovalForwardHistory1

`func NewApprovalForwardHistory1() *ApprovalForwardHistory1`

NewApprovalForwardHistory1 instantiates a new ApprovalForwardHistory1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalForwardHistory1WithDefaults

`func NewApprovalForwardHistory1WithDefaults() *ApprovalForwardHistory1`

NewApprovalForwardHistory1WithDefaults instantiates a new ApprovalForwardHistory1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOldApproverName

`func (o *ApprovalForwardHistory1) GetOldApproverName() string`

GetOldApproverName returns the OldApproverName field if non-nil, zero value otherwise.

### GetOldApproverNameOk

`func (o *ApprovalForwardHistory1) GetOldApproverNameOk() (*string, bool)`

GetOldApproverNameOk returns a tuple with the OldApproverName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldApproverName

`func (o *ApprovalForwardHistory1) SetOldApproverName(v string)`

SetOldApproverName sets OldApproverName field to given value.

### HasOldApproverName

`func (o *ApprovalForwardHistory1) HasOldApproverName() bool`

HasOldApproverName returns a boolean if a field has been set.

### GetNewApproverName

`func (o *ApprovalForwardHistory1) GetNewApproverName() string`

GetNewApproverName returns the NewApproverName field if non-nil, zero value otherwise.

### GetNewApproverNameOk

`func (o *ApprovalForwardHistory1) GetNewApproverNameOk() (*string, bool)`

GetNewApproverNameOk returns a tuple with the NewApproverName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewApproverName

`func (o *ApprovalForwardHistory1) SetNewApproverName(v string)`

SetNewApproverName sets NewApproverName field to given value.

### HasNewApproverName

`func (o *ApprovalForwardHistory1) HasNewApproverName() bool`

HasNewApproverName returns a boolean if a field has been set.

### GetComment

`func (o *ApprovalForwardHistory1) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ApprovalForwardHistory1) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ApprovalForwardHistory1) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ApprovalForwardHistory1) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *ApprovalForwardHistory1) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *ApprovalForwardHistory1) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetModified

`func (o *ApprovalForwardHistory1) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *ApprovalForwardHistory1) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *ApprovalForwardHistory1) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *ApprovalForwardHistory1) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetForwarderName

`func (o *ApprovalForwardHistory1) GetForwarderName() string`

GetForwarderName returns the ForwarderName field if non-nil, zero value otherwise.

### GetForwarderNameOk

`func (o *ApprovalForwardHistory1) GetForwarderNameOk() (*string, bool)`

GetForwarderNameOk returns a tuple with the ForwarderName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForwarderName

`func (o *ApprovalForwardHistory1) SetForwarderName(v string)`

SetForwarderName sets ForwarderName field to given value.

### HasForwarderName

`func (o *ApprovalForwardHistory1) HasForwarderName() bool`

HasForwarderName returns a boolean if a field has been set.

### SetForwarderNameNil

`func (o *ApprovalForwardHistory1) SetForwarderNameNil(b bool)`

 SetForwarderNameNil sets the value for ForwarderName to be an explicit nil

### UnsetForwarderName
`func (o *ApprovalForwardHistory1) UnsetForwarderName()`

UnsetForwarderName ensures that no value is present for ForwarderName, not even an explicit nil
### GetReassignmentType

`func (o *ApprovalForwardHistory1) GetReassignmentType() ReassignmentType`

GetReassignmentType returns the ReassignmentType field if non-nil, zero value otherwise.

### GetReassignmentTypeOk

`func (o *ApprovalForwardHistory1) GetReassignmentTypeOk() (*ReassignmentType, bool)`

GetReassignmentTypeOk returns a tuple with the ReassignmentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentType

`func (o *ApprovalForwardHistory1) SetReassignmentType(v ReassignmentType)`

SetReassignmentType sets ReassignmentType field to given value.

### HasReassignmentType

`func (o *ApprovalForwardHistory1) HasReassignmentType() bool`

HasReassignmentType returns a boolean if a field has been set.


