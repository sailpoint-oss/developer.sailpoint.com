---
id: v2025-bulk-cancel-request-dto
title: BulkCancelRequestDTO
pagination_label: BulkCancelRequestDTO
sidebar_label: BulkCancelRequestDTO
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BulkCancelRequestDTO', 'V2025BulkCancelRequestDTO'] 
slug: /tools/sdk/go/v2025/models/bulk-cancel-request-dto
tags: ['SDK', 'Software Development Kit', 'BulkCancelRequestDTO', 'V2025BulkCancelRequestDTO']
---

# BulkCancelRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | Pointer to **[]string** | Array of Approval IDs to be bulk cancelled | [optional] 
**Comment** | Pointer to **string** | Optional comment to include with the bulk cancellation request | [optional] 

## Methods

### NewBulkCancelRequestDTO

`func NewBulkCancelRequestDTO() *BulkCancelRequestDTO`

NewBulkCancelRequestDTO instantiates a new BulkCancelRequestDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkCancelRequestDTOWithDefaults

`func NewBulkCancelRequestDTOWithDefaults() *BulkCancelRequestDTO`

NewBulkCancelRequestDTOWithDefaults instantiates a new BulkCancelRequestDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalIds

`func (o *BulkCancelRequestDTO) GetApprovalIds() []string`

GetApprovalIds returns the ApprovalIds field if non-nil, zero value otherwise.

### GetApprovalIdsOk

`func (o *BulkCancelRequestDTO) GetApprovalIdsOk() (*[]string, bool)`

GetApprovalIdsOk returns a tuple with the ApprovalIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalIds

`func (o *BulkCancelRequestDTO) SetApprovalIds(v []string)`

SetApprovalIds sets ApprovalIds field to given value.

### HasApprovalIds

`func (o *BulkCancelRequestDTO) HasApprovalIds() bool`

HasApprovalIds returns a boolean if a field has been set.

### GetComment

`func (o *BulkCancelRequestDTO) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *BulkCancelRequestDTO) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *BulkCancelRequestDTO) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *BulkCancelRequestDTO) HasComment() bool`

HasComment returns a boolean if a field has been set.


