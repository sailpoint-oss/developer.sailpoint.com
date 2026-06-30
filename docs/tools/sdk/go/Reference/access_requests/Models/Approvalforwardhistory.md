---
id: v1-approvalforwardhistory
title: Approvalforwardhistory
pagination_label: Approvalforwardhistory
sidebar_label: Approvalforwardhistory
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalforwardhistory', 'V1Approvalforwardhistory'] 
slug: /tools/sdk/go/accessrequests/models/approvalforwardhistory
tags: ['SDK', 'Software Development Kit', 'Approvalforwardhistory', 'V1Approvalforwardhistory']
---

# Approvalforwardhistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OldApproverName** | Pointer to **string** | Display name of approver from whom the approval was forwarded. | [optional] 
**NewApproverName** | Pointer to **string** | Display name of approver to whom the approval was forwarded. | [optional] 
**Comment** | Pointer to **NullableString** | Comment made while forwarding. | [optional] 
**Modified** | Pointer to **SailPointTime** | Time at which approval was forwarded. | [optional] 
**ForwarderName** | Pointer to **NullableString** | Display name of forwarder who forwarded the approval. | [optional] 
**ReassignmentType** | Pointer to [**Reassignmenttype**](reassignmenttype) |  | [optional] 

## Methods

### NewApprovalforwardhistory

`func NewApprovalforwardhistory() *Approvalforwardhistory`

NewApprovalforwardhistory instantiates a new Approvalforwardhistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalforwardhistoryWithDefaults

`func NewApprovalforwardhistoryWithDefaults() *Approvalforwardhistory`

NewApprovalforwardhistoryWithDefaults instantiates a new Approvalforwardhistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOldApproverName

`func (o *Approvalforwardhistory) GetOldApproverName() string`

GetOldApproverName returns the OldApproverName field if non-nil, zero value otherwise.

### GetOldApproverNameOk

`func (o *Approvalforwardhistory) GetOldApproverNameOk() (*string, bool)`

GetOldApproverNameOk returns a tuple with the OldApproverName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldApproverName

`func (o *Approvalforwardhistory) SetOldApproverName(v string)`

SetOldApproverName sets OldApproverName field to given value.

### HasOldApproverName

`func (o *Approvalforwardhistory) HasOldApproverName() bool`

HasOldApproverName returns a boolean if a field has been set.

### GetNewApproverName

`func (o *Approvalforwardhistory) GetNewApproverName() string`

GetNewApproverName returns the NewApproverName field if non-nil, zero value otherwise.

### GetNewApproverNameOk

`func (o *Approvalforwardhistory) GetNewApproverNameOk() (*string, bool)`

GetNewApproverNameOk returns a tuple with the NewApproverName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewApproverName

`func (o *Approvalforwardhistory) SetNewApproverName(v string)`

SetNewApproverName sets NewApproverName field to given value.

### HasNewApproverName

`func (o *Approvalforwardhistory) HasNewApproverName() bool`

HasNewApproverName returns a boolean if a field has been set.

### GetComment

`func (o *Approvalforwardhistory) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Approvalforwardhistory) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Approvalforwardhistory) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Approvalforwardhistory) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *Approvalforwardhistory) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *Approvalforwardhistory) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetModified

`func (o *Approvalforwardhistory) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Approvalforwardhistory) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Approvalforwardhistory) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Approvalforwardhistory) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetForwarderName

`func (o *Approvalforwardhistory) GetForwarderName() string`

GetForwarderName returns the ForwarderName field if non-nil, zero value otherwise.

### GetForwarderNameOk

`func (o *Approvalforwardhistory) GetForwarderNameOk() (*string, bool)`

GetForwarderNameOk returns a tuple with the ForwarderName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForwarderName

`func (o *Approvalforwardhistory) SetForwarderName(v string)`

SetForwarderName sets ForwarderName field to given value.

### HasForwarderName

`func (o *Approvalforwardhistory) HasForwarderName() bool`

HasForwarderName returns a boolean if a field has been set.

### SetForwarderNameNil

`func (o *Approvalforwardhistory) SetForwarderNameNil(b bool)`

 SetForwarderNameNil sets the value for ForwarderName to be an explicit nil

### UnsetForwarderName
`func (o *Approvalforwardhistory) UnsetForwarderName()`

UnsetForwarderName ensures that no value is present for ForwarderName, not even an explicit nil
### GetReassignmentType

`func (o *Approvalforwardhistory) GetReassignmentType() Reassignmenttype`

GetReassignmentType returns the ReassignmentType field if non-nil, zero value otherwise.

### GetReassignmentTypeOk

`func (o *Approvalforwardhistory) GetReassignmentTypeOk() (*Reassignmenttype, bool)`

GetReassignmentTypeOk returns a tuple with the ReassignmentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentType

`func (o *Approvalforwardhistory) SetReassignmentType(v Reassignmenttype)`

SetReassignmentType sets ReassignmentType field to given value.

### HasReassignmentType

`func (o *Approvalforwardhistory) HasReassignmentType() bool`

HasReassignmentType returns a boolean if a field has been set.


