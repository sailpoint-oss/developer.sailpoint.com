---
id: v2025-approval-attributes-request
title: ApprovalAttributesRequest
pagination_label: ApprovalAttributesRequest
sidebar_label: ApprovalAttributesRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalAttributesRequest', 'V2025ApprovalAttributesRequest'] 
slug: /tools/sdk/go/v2025/models/approval-attributes-request
tags: ['SDK', 'Software Development Kit', 'ApprovalAttributesRequest', 'V2025ApprovalAttributesRequest']
---

# ApprovalAttributesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalAttributes** | Pointer to **map[string]string** | Additional attributes as key-value pairs that are not part of the standard schema but can be included for custom data. | [optional] 
**Comment** | Pointer to **string** | Comment associated with the request. | [optional] 
**RemoveAttributeKeys** | Pointer to **[]string** | List of attribute keys to be removed. | [optional] 

## Methods

### NewApprovalAttributesRequest

`func NewApprovalAttributesRequest() *ApprovalAttributesRequest`

NewApprovalAttributesRequest instantiates a new ApprovalAttributesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalAttributesRequestWithDefaults

`func NewApprovalAttributesRequestWithDefaults() *ApprovalAttributesRequest`

NewApprovalAttributesRequestWithDefaults instantiates a new ApprovalAttributesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalAttributes

`func (o *ApprovalAttributesRequest) GetAdditionalAttributes() map[string]string`

GetAdditionalAttributes returns the AdditionalAttributes field if non-nil, zero value otherwise.

### GetAdditionalAttributesOk

`func (o *ApprovalAttributesRequest) GetAdditionalAttributesOk() (*map[string]string, bool)`

GetAdditionalAttributesOk returns a tuple with the AdditionalAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalAttributes

`func (o *ApprovalAttributesRequest) SetAdditionalAttributes(v map[string]string)`

SetAdditionalAttributes sets AdditionalAttributes field to given value.

### HasAdditionalAttributes

`func (o *ApprovalAttributesRequest) HasAdditionalAttributes() bool`

HasAdditionalAttributes returns a boolean if a field has been set.

### GetComment

`func (o *ApprovalAttributesRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ApprovalAttributesRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ApprovalAttributesRequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ApprovalAttributesRequest) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetRemoveAttributeKeys

`func (o *ApprovalAttributesRequest) GetRemoveAttributeKeys() []string`

GetRemoveAttributeKeys returns the RemoveAttributeKeys field if non-nil, zero value otherwise.

### GetRemoveAttributeKeysOk

`func (o *ApprovalAttributesRequest) GetRemoveAttributeKeysOk() (*[]string, bool)`

GetRemoveAttributeKeysOk returns a tuple with the RemoveAttributeKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveAttributeKeys

`func (o *ApprovalAttributesRequest) SetRemoveAttributeKeys(v []string)`

SetRemoveAttributeKeys sets RemoveAttributeKeys field to given value.

### HasRemoveAttributeKeys

`func (o *ApprovalAttributesRequest) HasRemoveAttributeKeys() bool`

HasRemoveAttributeKeys returns a boolean if a field has been set.


