---
id: v2025-bulk-approve-request-dto
title: BulkApproveRequestDTO
pagination_label: BulkApproveRequestDTO
sidebar_label: BulkApproveRequestDTO
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BulkApproveRequestDTO', 'V2025BulkApproveRequestDTO'] 
slug: /tools/sdk/go/v2025/models/bulk-approve-request-dto
tags: ['SDK', 'Software Development Kit', 'BulkApproveRequestDTO', 'V2025BulkApproveRequestDTO']
---

# BulkApproveRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | Pointer to **[]string** | Array of Approval IDs to be bulk approved | [optional] 
**Comment** | Pointer to **string** | Optional comment to include with the bulk approval request | [optional] 
**AdditionalAttributes** | Pointer to **map[string]map[string]interface{}** | Additional attributes to include with the bulk approval request | [optional] 

## Methods

### NewBulkApproveRequestDTO

`func NewBulkApproveRequestDTO() *BulkApproveRequestDTO`

NewBulkApproveRequestDTO instantiates a new BulkApproveRequestDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkApproveRequestDTOWithDefaults

`func NewBulkApproveRequestDTOWithDefaults() *BulkApproveRequestDTO`

NewBulkApproveRequestDTOWithDefaults instantiates a new BulkApproveRequestDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalIds

`func (o *BulkApproveRequestDTO) GetApprovalIds() []string`

GetApprovalIds returns the ApprovalIds field if non-nil, zero value otherwise.

### GetApprovalIdsOk

`func (o *BulkApproveRequestDTO) GetApprovalIdsOk() (*[]string, bool)`

GetApprovalIdsOk returns a tuple with the ApprovalIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalIds

`func (o *BulkApproveRequestDTO) SetApprovalIds(v []string)`

SetApprovalIds sets ApprovalIds field to given value.

### HasApprovalIds

`func (o *BulkApproveRequestDTO) HasApprovalIds() bool`

HasApprovalIds returns a boolean if a field has been set.

### GetComment

`func (o *BulkApproveRequestDTO) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *BulkApproveRequestDTO) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *BulkApproveRequestDTO) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *BulkApproveRequestDTO) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetAdditionalAttributes

`func (o *BulkApproveRequestDTO) GetAdditionalAttributes() map[string]map[string]interface{}`

GetAdditionalAttributes returns the AdditionalAttributes field if non-nil, zero value otherwise.

### GetAdditionalAttributesOk

`func (o *BulkApproveRequestDTO) GetAdditionalAttributesOk() (*map[string]map[string]interface{}, bool)`

GetAdditionalAttributesOk returns a tuple with the AdditionalAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalAttributes

`func (o *BulkApproveRequestDTO) SetAdditionalAttributes(v map[string]map[string]interface{})`

SetAdditionalAttributes sets AdditionalAttributes field to given value.

### HasAdditionalAttributes

`func (o *BulkApproveRequestDTO) HasAdditionalAttributes() bool`

HasAdditionalAttributes returns a boolean if a field has been set.


