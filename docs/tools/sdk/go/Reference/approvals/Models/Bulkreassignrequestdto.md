---
id: v1-bulkreassignrequestdto
title: Bulkreassignrequestdto
pagination_label: Bulkreassignrequestdto
sidebar_label: Bulkreassignrequestdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bulkreassignrequestdto', 'V1Bulkreassignrequestdto'] 
slug: /tools/sdk/go/approvals/models/bulkreassignrequestdto
tags: ['SDK', 'Software Development Kit', 'Bulkreassignrequestdto', 'V1Bulkreassignrequestdto']
---

# Bulkreassignrequestdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | Pointer to **[]string** | Array of Approval IDs to be bulk reassigned | [optional] 
**Comment** | Pointer to **string** | Optional comment to include with the bulk reassignment request | [optional] 
**ReassignFrom** | Pointer to **string** | Identity ID from which the approval requests are being reassigned | [optional] 
**ReassignTo** | Pointer to **string** | ReassignTo signifies the Identity ID that the approval request is being reassigned to | [optional] 

## Methods

### NewBulkreassignrequestdto

`func NewBulkreassignrequestdto() *Bulkreassignrequestdto`

NewBulkreassignrequestdto instantiates a new Bulkreassignrequestdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkreassignrequestdtoWithDefaults

`func NewBulkreassignrequestdtoWithDefaults() *Bulkreassignrequestdto`

NewBulkreassignrequestdtoWithDefaults instantiates a new Bulkreassignrequestdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalIds

`func (o *Bulkreassignrequestdto) GetApprovalIds() []string`

GetApprovalIds returns the ApprovalIds field if non-nil, zero value otherwise.

### GetApprovalIdsOk

`func (o *Bulkreassignrequestdto) GetApprovalIdsOk() (*[]string, bool)`

GetApprovalIdsOk returns a tuple with the ApprovalIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalIds

`func (o *Bulkreassignrequestdto) SetApprovalIds(v []string)`

SetApprovalIds sets ApprovalIds field to given value.

### HasApprovalIds

`func (o *Bulkreassignrequestdto) HasApprovalIds() bool`

HasApprovalIds returns a boolean if a field has been set.

### GetComment

`func (o *Bulkreassignrequestdto) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Bulkreassignrequestdto) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Bulkreassignrequestdto) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Bulkreassignrequestdto) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetReassignFrom

`func (o *Bulkreassignrequestdto) GetReassignFrom() string`

GetReassignFrom returns the ReassignFrom field if non-nil, zero value otherwise.

### GetReassignFromOk

`func (o *Bulkreassignrequestdto) GetReassignFromOk() (*string, bool)`

GetReassignFromOk returns a tuple with the ReassignFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignFrom

`func (o *Bulkreassignrequestdto) SetReassignFrom(v string)`

SetReassignFrom sets ReassignFrom field to given value.

### HasReassignFrom

`func (o *Bulkreassignrequestdto) HasReassignFrom() bool`

HasReassignFrom returns a boolean if a field has been set.

### GetReassignTo

`func (o *Bulkreassignrequestdto) GetReassignTo() string`

GetReassignTo returns the ReassignTo field if non-nil, zero value otherwise.

### GetReassignToOk

`func (o *Bulkreassignrequestdto) GetReassignToOk() (*string, bool)`

GetReassignToOk returns a tuple with the ReassignTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignTo

`func (o *Bulkreassignrequestdto) SetReassignTo(v string)`

SetReassignTo sets ReassignTo field to given value.

### HasReassignTo

`func (o *Bulkreassignrequestdto) HasReassignTo() bool`

HasReassignTo returns a boolean if a field has been set.


