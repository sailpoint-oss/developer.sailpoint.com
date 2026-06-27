---
id: v1-approvalattributesrequest
title: Approvalattributesrequest
pagination_label: Approvalattributesrequest
sidebar_label: Approvalattributesrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalattributesrequest', 'V1Approvalattributesrequest'] 
slug: /tools/sdk/go/approvals/models/approvalattributesrequest
tags: ['SDK', 'Software Development Kit', 'Approvalattributesrequest', 'V1Approvalattributesrequest']
---

# Approvalattributesrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalAttributes** | Pointer to **map[string]string** | Additional attributes as key-value pairs that are not part of the standard schema but can be included for custom data. | [optional] 
**Comment** | Pointer to **string** | Comment associated with the request. | [optional] 
**RemoveAttributeKeys** | Pointer to **[]string** | List of attribute keys to be removed. | [optional] 

## Methods

### NewApprovalattributesrequest

`func NewApprovalattributesrequest() *Approvalattributesrequest`

NewApprovalattributesrequest instantiates a new Approvalattributesrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalattributesrequestWithDefaults

`func NewApprovalattributesrequestWithDefaults() *Approvalattributesrequest`

NewApprovalattributesrequestWithDefaults instantiates a new Approvalattributesrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalAttributes

`func (o *Approvalattributesrequest) GetAdditionalAttributes() map[string]string`

GetAdditionalAttributes returns the AdditionalAttributes field if non-nil, zero value otherwise.

### GetAdditionalAttributesOk

`func (o *Approvalattributesrequest) GetAdditionalAttributesOk() (*map[string]string, bool)`

GetAdditionalAttributesOk returns a tuple with the AdditionalAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalAttributes

`func (o *Approvalattributesrequest) SetAdditionalAttributes(v map[string]string)`

SetAdditionalAttributes sets AdditionalAttributes field to given value.

### HasAdditionalAttributes

`func (o *Approvalattributesrequest) HasAdditionalAttributes() bool`

HasAdditionalAttributes returns a boolean if a field has been set.

### GetComment

`func (o *Approvalattributesrequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Approvalattributesrequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Approvalattributesrequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Approvalattributesrequest) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetRemoveAttributeKeys

`func (o *Approvalattributesrequest) GetRemoveAttributeKeys() []string`

GetRemoveAttributeKeys returns the RemoveAttributeKeys field if non-nil, zero value otherwise.

### GetRemoveAttributeKeysOk

`func (o *Approvalattributesrequest) GetRemoveAttributeKeysOk() (*[]string, bool)`

GetRemoveAttributeKeysOk returns a tuple with the RemoveAttributeKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveAttributeKeys

`func (o *Approvalattributesrequest) SetRemoveAttributeKeys(v []string)`

SetRemoveAttributeKeys sets RemoveAttributeKeys field to given value.

### HasRemoveAttributeKeys

`func (o *Approvalattributesrequest) HasRemoveAttributeKeys() bool`

HasRemoveAttributeKeys returns a boolean if a field has been set.


