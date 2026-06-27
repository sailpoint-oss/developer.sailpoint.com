---
id: v1-approvalapproverequest
title: Approvalapproverequest
pagination_label: Approvalapproverequest
sidebar_label: Approvalapproverequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalapproverequest', 'V1Approvalapproverequest'] 
slug: /tools/sdk/go/approvals/models/approvalapproverequest
tags: ['SDK', 'Software Development Kit', 'Approvalapproverequest', 'V1Approvalapproverequest']
---

# Approvalapproverequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalAttributes** | Pointer to **map[string]string** | Additional attributes as key-value pairs that are not part of the standard schema but can be included for custom data. | [optional] 
**Comment** | Pointer to **string** | Comment associated with the request. | [optional] 

## Methods

### NewApprovalapproverequest

`func NewApprovalapproverequest() *Approvalapproverequest`

NewApprovalapproverequest instantiates a new Approvalapproverequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalapproverequestWithDefaults

`func NewApprovalapproverequestWithDefaults() *Approvalapproverequest`

NewApprovalapproverequestWithDefaults instantiates a new Approvalapproverequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalAttributes

`func (o *Approvalapproverequest) GetAdditionalAttributes() map[string]string`

GetAdditionalAttributes returns the AdditionalAttributes field if non-nil, zero value otherwise.

### GetAdditionalAttributesOk

`func (o *Approvalapproverequest) GetAdditionalAttributesOk() (*map[string]string, bool)`

GetAdditionalAttributesOk returns a tuple with the AdditionalAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalAttributes

`func (o *Approvalapproverequest) SetAdditionalAttributes(v map[string]string)`

SetAdditionalAttributes sets AdditionalAttributes field to given value.

### HasAdditionalAttributes

`func (o *Approvalapproverequest) HasAdditionalAttributes() bool`

HasAdditionalAttributes returns a boolean if a field has been set.

### GetComment

`func (o *Approvalapproverequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Approvalapproverequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Approvalapproverequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Approvalapproverequest) HasComment() bool`

HasComment returns a boolean if a field has been set.


