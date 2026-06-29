---
id: v1-approvalcommentsrequest
title: Approvalcommentsrequest
pagination_label: Approvalcommentsrequest
sidebar_label: Approvalcommentsrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalcommentsrequest', 'V1Approvalcommentsrequest'] 
slug: /tools/sdk/go/approvals/models/approvalcommentsrequest
tags: ['SDK', 'Software Development Kit', 'Approvalcommentsrequest', 'V1Approvalcommentsrequest']
---

# Approvalcommentsrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment associated with the request. | [optional] 

## Methods

### NewApprovalcommentsrequest

`func NewApprovalcommentsrequest() *Approvalcommentsrequest`

NewApprovalcommentsrequest instantiates a new Approvalcommentsrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalcommentsrequestWithDefaults

`func NewApprovalcommentsrequestWithDefaults() *Approvalcommentsrequest`

NewApprovalcommentsrequestWithDefaults instantiates a new Approvalcommentsrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *Approvalcommentsrequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Approvalcommentsrequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Approvalcommentsrequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Approvalcommentsrequest) HasComment() bool`

HasComment returns a boolean if a field has been set.


