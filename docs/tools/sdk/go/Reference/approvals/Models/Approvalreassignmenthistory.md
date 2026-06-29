---
id: v1-approvalreassignmenthistory
title: Approvalreassignmenthistory
pagination_label: Approvalreassignmenthistory
sidebar_label: Approvalreassignmenthistory
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalreassignmenthistory', 'V1Approvalreassignmenthistory'] 
slug: /tools/sdk/go/approvals/models/approvalreassignmenthistory
tags: ['SDK', 'Software Development Kit', 'Approvalreassignmenthistory', 'V1Approvalreassignmenthistory']
---

# Approvalreassignmenthistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentID** | Pointer to **string** | Unique identifier for the comment associated with the reassignment. | [optional] 
**ReassignedFrom** | Pointer to [**Approvalidentity**](approvalidentity) |  | [optional] 
**ReassignedTo** | Pointer to [**Approvalidentity**](approvalidentity) |  | [optional] 
**Reassigner** | Pointer to [**Approvalidentity**](approvalidentity) |  | [optional] 
**ReassignmentDate** | Pointer to **SailPointTime** | Date and time when the reassignment occurred. | [optional] 
**ReassignmentType** | Pointer to **string** | Type of reassignment, such as escalation or manual reassignment. | [optional] 

## Methods

### NewApprovalreassignmenthistory

`func NewApprovalreassignmenthistory() *Approvalreassignmenthistory`

NewApprovalreassignmenthistory instantiates a new Approvalreassignmenthistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalreassignmenthistoryWithDefaults

`func NewApprovalreassignmenthistoryWithDefaults() *Approvalreassignmenthistory`

NewApprovalreassignmenthistoryWithDefaults instantiates a new Approvalreassignmenthistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommentID

`func (o *Approvalreassignmenthistory) GetCommentID() string`

GetCommentID returns the CommentID field if non-nil, zero value otherwise.

### GetCommentIDOk

`func (o *Approvalreassignmenthistory) GetCommentIDOk() (*string, bool)`

GetCommentIDOk returns a tuple with the CommentID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentID

`func (o *Approvalreassignmenthistory) SetCommentID(v string)`

SetCommentID sets CommentID field to given value.

### HasCommentID

`func (o *Approvalreassignmenthistory) HasCommentID() bool`

HasCommentID returns a boolean if a field has been set.

### GetReassignedFrom

`func (o *Approvalreassignmenthistory) GetReassignedFrom() Approvalidentity`

GetReassignedFrom returns the ReassignedFrom field if non-nil, zero value otherwise.

### GetReassignedFromOk

`func (o *Approvalreassignmenthistory) GetReassignedFromOk() (*Approvalidentity, bool)`

GetReassignedFromOk returns a tuple with the ReassignedFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignedFrom

`func (o *Approvalreassignmenthistory) SetReassignedFrom(v Approvalidentity)`

SetReassignedFrom sets ReassignedFrom field to given value.

### HasReassignedFrom

`func (o *Approvalreassignmenthistory) HasReassignedFrom() bool`

HasReassignedFrom returns a boolean if a field has been set.

### GetReassignedTo

`func (o *Approvalreassignmenthistory) GetReassignedTo() Approvalidentity`

GetReassignedTo returns the ReassignedTo field if non-nil, zero value otherwise.

### GetReassignedToOk

`func (o *Approvalreassignmenthistory) GetReassignedToOk() (*Approvalidentity, bool)`

GetReassignedToOk returns a tuple with the ReassignedTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignedTo

`func (o *Approvalreassignmenthistory) SetReassignedTo(v Approvalidentity)`

SetReassignedTo sets ReassignedTo field to given value.

### HasReassignedTo

`func (o *Approvalreassignmenthistory) HasReassignedTo() bool`

HasReassignedTo returns a boolean if a field has been set.

### GetReassigner

`func (o *Approvalreassignmenthistory) GetReassigner() Approvalidentity`

GetReassigner returns the Reassigner field if non-nil, zero value otherwise.

### GetReassignerOk

`func (o *Approvalreassignmenthistory) GetReassignerOk() (*Approvalidentity, bool)`

GetReassignerOk returns a tuple with the Reassigner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassigner

`func (o *Approvalreassignmenthistory) SetReassigner(v Approvalidentity)`

SetReassigner sets Reassigner field to given value.

### HasReassigner

`func (o *Approvalreassignmenthistory) HasReassigner() bool`

HasReassigner returns a boolean if a field has been set.

### GetReassignmentDate

`func (o *Approvalreassignmenthistory) GetReassignmentDate() SailPointTime`

GetReassignmentDate returns the ReassignmentDate field if non-nil, zero value otherwise.

### GetReassignmentDateOk

`func (o *Approvalreassignmenthistory) GetReassignmentDateOk() (*SailPointTime, bool)`

GetReassignmentDateOk returns a tuple with the ReassignmentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentDate

`func (o *Approvalreassignmenthistory) SetReassignmentDate(v SailPointTime)`

SetReassignmentDate sets ReassignmentDate field to given value.

### HasReassignmentDate

`func (o *Approvalreassignmenthistory) HasReassignmentDate() bool`

HasReassignmentDate returns a boolean if a field has been set.

### GetReassignmentType

`func (o *Approvalreassignmenthistory) GetReassignmentType() string`

GetReassignmentType returns the ReassignmentType field if non-nil, zero value otherwise.

### GetReassignmentTypeOk

`func (o *Approvalreassignmenthistory) GetReassignmentTypeOk() (*string, bool)`

GetReassignmentTypeOk returns a tuple with the ReassignmentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentType

`func (o *Approvalreassignmenthistory) SetReassignmentType(v string)`

SetReassignmentType sets ReassignmentType field to given value.

### HasReassignmentType

`func (o *Approvalreassignmenthistory) HasReassignmentType() bool`

HasReassignmentType returns a boolean if a field has been set.


