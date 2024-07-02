---
id: access-request-pre-approval1
title: AccessRequestPreApproval1
pagination_label: AccessRequestPreApproval1
sidebar_label: AccessRequestPreApproval1
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestPreApproval1'] 
slug: /tools/sdk/go/beta/models/access-request-pre-approval1
tags: ['SDK', 'Software Development Kit', 'AccessRequestPreApproval1']
---

# AccessRequestPreApproval1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** |  **bool** | Whether or not to approve the access request. | 
**Comment** |  **string** | A comment about the decision to approve or deny the request. | 
**Approver** |  **string** | The name of the entity that approved or denied the request. | 

## Methods

### NewAccessRequestPreApproval1

`func NewAccessRequestPreApproval1(approved bool, comment string, approver string, ) *AccessRequestPreApproval1`

NewAccessRequestPreApproval1 instantiates a new AccessRequestPreApproval1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestPreApproval1WithDefaults

`func NewAccessRequestPreApproval1WithDefaults() *AccessRequestPreApproval1`

NewAccessRequestPreApproval1WithDefaults instantiates a new AccessRequestPreApproval1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApproved

`func (o *AccessRequestPreApproval1) GetApproved() bool`

GetApproved returns the Approved field if non-nil, zero value otherwise.

### GetApprovedOk

`func (o *AccessRequestPreApproval1) GetApprovedOk() (*bool, bool)`

GetApprovedOk returns a tuple with the Approved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproved

`func (o *AccessRequestPreApproval1) SetApproved(v bool)`

SetApproved sets Approved field to given value.


### GetComment

`func (o *AccessRequestPreApproval1) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *AccessRequestPreApproval1) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *AccessRequestPreApproval1) SetComment(v string)`

SetComment sets Comment field to given value.


### GetApprover

`func (o *AccessRequestPreApproval1) GetApprover() string`

GetApprover returns the Approver field if non-nil, zero value otherwise.

### GetApproverOk

`func (o *AccessRequestPreApproval1) GetApproverOk() (*string, bool)`

GetApproverOk returns a tuple with the Approver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprover

`func (o *AccessRequestPreApproval1) SetApprover(v string)`

SetApprover sets Approver field to given value.



[[Back to top]](#) 


