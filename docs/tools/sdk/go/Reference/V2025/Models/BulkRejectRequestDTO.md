---
id: v2025-bulk-reject-request-dto
title: BulkRejectRequestDTO
pagination_label: BulkRejectRequestDTO
sidebar_label: BulkRejectRequestDTO
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BulkRejectRequestDTO', 'V2025BulkRejectRequestDTO'] 
slug: /tools/sdk/go/v2025/models/bulk-reject-request-dto
tags: ['SDK', 'Software Development Kit', 'BulkRejectRequestDTO', 'V2025BulkRejectRequestDTO']
---

# BulkRejectRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | Pointer to **[]string** | Array of Approval IDs to be bulk rejected | [optional] 
**Comment** | Pointer to **string** | Optional comment to include with the bulk reject request | [optional] 

## Methods

### NewBulkRejectRequestDTO

`func NewBulkRejectRequestDTO() *BulkRejectRequestDTO`

NewBulkRejectRequestDTO instantiates a new BulkRejectRequestDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkRejectRequestDTOWithDefaults

`func NewBulkRejectRequestDTOWithDefaults() *BulkRejectRequestDTO`

NewBulkRejectRequestDTOWithDefaults instantiates a new BulkRejectRequestDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalIds

`func (o *BulkRejectRequestDTO) GetApprovalIds() []string`

GetApprovalIds returns the ApprovalIds field if non-nil, zero value otherwise.

### GetApprovalIdsOk

`func (o *BulkRejectRequestDTO) GetApprovalIdsOk() (*[]string, bool)`

GetApprovalIdsOk returns a tuple with the ApprovalIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalIds

`func (o *BulkRejectRequestDTO) SetApprovalIds(v []string)`

SetApprovalIds sets ApprovalIds field to given value.

### HasApprovalIds

`func (o *BulkRejectRequestDTO) HasApprovalIds() bool`

HasApprovalIds returns a boolean if a field has been set.

### GetComment

`func (o *BulkRejectRequestDTO) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *BulkRejectRequestDTO) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *BulkRejectRequestDTO) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *BulkRejectRequestDTO) HasComment() bool`

HasComment returns a boolean if a field has been set.


