---
id: v1-accessrequestpreapproval2
title: Accessrequestpreapproval2
pagination_label: Accessrequestpreapproval2
sidebar_label: Accessrequestpreapproval2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestpreapproval2', 'V1Accessrequestpreapproval2'] 
slug: /tools/sdk/go/triggers/models/accessrequestpreapproval2
tags: ['SDK', 'Software Development Kit', 'Accessrequestpreapproval2', 'V1Accessrequestpreapproval2']
---

# Accessrequestpreapproval2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** | **bool** | Whether or not to approve the access request. | 
**Comment** | **string** | A comment about the decision to approve or deny the request. | 
**Approver** | **string** | The name of the entity that approved or denied the request. | 

## Methods

### NewAccessrequestpreapproval2

`func NewAccessrequestpreapproval2(approved bool, comment string, approver string, ) *Accessrequestpreapproval2`

NewAccessrequestpreapproval2 instantiates a new Accessrequestpreapproval2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestpreapproval2WithDefaults

`func NewAccessrequestpreapproval2WithDefaults() *Accessrequestpreapproval2`

NewAccessrequestpreapproval2WithDefaults instantiates a new Accessrequestpreapproval2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApproved

`func (o *Accessrequestpreapproval2) GetApproved() bool`

GetApproved returns the Approved field if non-nil, zero value otherwise.

### GetApprovedOk

`func (o *Accessrequestpreapproval2) GetApprovedOk() (*bool, bool)`

GetApprovedOk returns a tuple with the Approved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproved

`func (o *Accessrequestpreapproval2) SetApproved(v bool)`

SetApproved sets Approved field to given value.


### GetComment

`func (o *Accessrequestpreapproval2) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Accessrequestpreapproval2) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Accessrequestpreapproval2) SetComment(v string)`

SetComment sets Comment field to given value.


### GetApprover

`func (o *Accessrequestpreapproval2) GetApprover() string`

GetApprover returns the Approver field if non-nil, zero value otherwise.

### GetApproverOk

`func (o *Accessrequestpreapproval2) GetApproverOk() (*string, bool)`

GetApproverOk returns a tuple with the Approver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprover

`func (o *Accessrequestpreapproval2) SetApprover(v string)`

SetApprover sets Approver field to given value.



