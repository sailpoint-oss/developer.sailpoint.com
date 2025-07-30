---
id: v2025-approval-approve-request
title: ApprovalApproveRequest
pagination_label: ApprovalApproveRequest
sidebar_label: ApprovalApproveRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalApproveRequest', 'V2025ApprovalApproveRequest'] 
slug: /tools/sdk/go/v2025/models/approval-approve-request
tags: ['SDK', 'Software Development Kit', 'ApprovalApproveRequest', 'V2025ApprovalApproveRequest']
---

# ApprovalApproveRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalAttributes** | Pointer to **map[string]string** | Additional attributes as key-value pairs that are not part of the standard schema but can be included for custom data. | [optional] 
**Comment** | Pointer to **string** | Comment associated with the request. | [optional] 

## Methods

### NewApprovalApproveRequest

`func NewApprovalApproveRequest() *ApprovalApproveRequest`

NewApprovalApproveRequest instantiates a new ApprovalApproveRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalApproveRequestWithDefaults

`func NewApprovalApproveRequestWithDefaults() *ApprovalApproveRequest`

NewApprovalApproveRequestWithDefaults instantiates a new ApprovalApproveRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalAttributes

`func (o *ApprovalApproveRequest) GetAdditionalAttributes() map[string]string`

GetAdditionalAttributes returns the AdditionalAttributes field if non-nil, zero value otherwise.

### GetAdditionalAttributesOk

`func (o *ApprovalApproveRequest) GetAdditionalAttributesOk() (*map[string]string, bool)`

GetAdditionalAttributesOk returns a tuple with the AdditionalAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalAttributes

`func (o *ApprovalApproveRequest) SetAdditionalAttributes(v map[string]string)`

SetAdditionalAttributes sets AdditionalAttributes field to given value.

### HasAdditionalAttributes

`func (o *ApprovalApproveRequest) HasAdditionalAttributes() bool`

HasAdditionalAttributes returns a boolean if a field has been set.

### GetComment

`func (o *ApprovalApproveRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ApprovalApproveRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ApprovalApproveRequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ApprovalApproveRequest) HasComment() bool`

HasComment returns a boolean if a field has been set.


