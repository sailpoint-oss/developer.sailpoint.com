---
id: v2025-bulk-reassign-request-dto
title: BulkReassignRequestDTO
pagination_label: BulkReassignRequestDTO
sidebar_label: BulkReassignRequestDTO
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BulkReassignRequestDTO', 'V2025BulkReassignRequestDTO'] 
slug: /tools/sdk/go/v2025/models/bulk-reassign-request-dto
tags: ['SDK', 'Software Development Kit', 'BulkReassignRequestDTO', 'V2025BulkReassignRequestDTO']
---

# BulkReassignRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | Pointer to **[]string** | Array of Approval IDs to be bulk reassigned | [optional] 
**Comment** | Pointer to **string** | Optional comment to include with the bulk reassignment request | [optional] 
**ReassignFrom** | Pointer to **string** | Identity ID from which the approval requests are being reassigned | [optional] 
**ReassignTo** | Pointer to **string** | ReassignTo signifies the Identity ID that the approval request is being reassigned to | [optional] 

## Methods

### NewBulkReassignRequestDTO

`func NewBulkReassignRequestDTO() *BulkReassignRequestDTO`

NewBulkReassignRequestDTO instantiates a new BulkReassignRequestDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkReassignRequestDTOWithDefaults

`func NewBulkReassignRequestDTOWithDefaults() *BulkReassignRequestDTO`

NewBulkReassignRequestDTOWithDefaults instantiates a new BulkReassignRequestDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalIds

`func (o *BulkReassignRequestDTO) GetApprovalIds() []string`

GetApprovalIds returns the ApprovalIds field if non-nil, zero value otherwise.

### GetApprovalIdsOk

`func (o *BulkReassignRequestDTO) GetApprovalIdsOk() (*[]string, bool)`

GetApprovalIdsOk returns a tuple with the ApprovalIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalIds

`func (o *BulkReassignRequestDTO) SetApprovalIds(v []string)`

SetApprovalIds sets ApprovalIds field to given value.

### HasApprovalIds

`func (o *BulkReassignRequestDTO) HasApprovalIds() bool`

HasApprovalIds returns a boolean if a field has been set.

### GetComment

`func (o *BulkReassignRequestDTO) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *BulkReassignRequestDTO) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *BulkReassignRequestDTO) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *BulkReassignRequestDTO) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetReassignFrom

`func (o *BulkReassignRequestDTO) GetReassignFrom() string`

GetReassignFrom returns the ReassignFrom field if non-nil, zero value otherwise.

### GetReassignFromOk

`func (o *BulkReassignRequestDTO) GetReassignFromOk() (*string, bool)`

GetReassignFromOk returns a tuple with the ReassignFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignFrom

`func (o *BulkReassignRequestDTO) SetReassignFrom(v string)`

SetReassignFrom sets ReassignFrom field to given value.

### HasReassignFrom

`func (o *BulkReassignRequestDTO) HasReassignFrom() bool`

HasReassignFrom returns a boolean if a field has been set.

### GetReassignTo

`func (o *BulkReassignRequestDTO) GetReassignTo() string`

GetReassignTo returns the ReassignTo field if non-nil, zero value otherwise.

### GetReassignToOk

`func (o *BulkReassignRequestDTO) GetReassignToOk() (*string, bool)`

GetReassignToOk returns a tuple with the ReassignTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignTo

`func (o *BulkReassignRequestDTO) SetReassignTo(v string)`

SetReassignTo sets ReassignTo field to given value.

### HasReassignTo

`func (o *BulkReassignRequestDTO) HasReassignTo() bool`

HasReassignTo returns a boolean if a field has been set.


