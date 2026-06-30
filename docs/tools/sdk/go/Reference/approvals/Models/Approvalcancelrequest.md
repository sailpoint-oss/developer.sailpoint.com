---
id: v1-approvalcancelrequest
title: Approvalcancelrequest
pagination_label: Approvalcancelrequest
sidebar_label: Approvalcancelrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalcancelrequest', 'V1Approvalcancelrequest'] 
slug: /tools/sdk/go/approvals/models/approvalcancelrequest
tags: ['SDK', 'Software Development Kit', 'Approvalcancelrequest', 'V1Approvalcancelrequest']
---

# Approvalcancelrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Optional comment associated with the cancel request. | [optional] 

## Methods

### NewApprovalcancelrequest

`func NewApprovalcancelrequest() *Approvalcancelrequest`

NewApprovalcancelrequest instantiates a new Approvalcancelrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalcancelrequestWithDefaults

`func NewApprovalcancelrequestWithDefaults() *Approvalcancelrequest`

NewApprovalcancelrequestWithDefaults instantiates a new Approvalcancelrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *Approvalcancelrequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Approvalcancelrequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Approvalcancelrequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Approvalcancelrequest) HasComment() bool`

HasComment returns a boolean if a field has been set.


