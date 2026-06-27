---
id: v1-approvalrejectrequest
title: Approvalrejectrequest
pagination_label: Approvalrejectrequest
sidebar_label: Approvalrejectrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalrejectrequest', 'V1Approvalrejectrequest'] 
slug: /tools/sdk/go/approvals/models/approvalrejectrequest
tags: ['SDK', 'Software Development Kit', 'Approvalrejectrequest', 'V1Approvalrejectrequest']
---

# Approvalrejectrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment associated with the reject request. | [optional] 

## Methods

### NewApprovalrejectrequest

`func NewApprovalrejectrequest() *Approvalrejectrequest`

NewApprovalrejectrequest instantiates a new Approvalrejectrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalrejectrequestWithDefaults

`func NewApprovalrejectrequestWithDefaults() *Approvalrejectrequest`

NewApprovalrejectrequestWithDefaults instantiates a new Approvalrejectrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *Approvalrejectrequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Approvalrejectrequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Approvalrejectrequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Approvalrejectrequest) HasComment() bool`

HasComment returns a boolean if a field has been set.


