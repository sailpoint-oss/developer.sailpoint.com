---
id: approval
title: Approval
pagination_label: Approval
sidebar_label: Approval
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approval', 'Approval'] 
slug: /tools/sdk/go/v3/models/approval
tags: ['SDK', 'Software Development Kit', 'Approval', 'Approval']
---

# Approval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comments** | Pointer to [**[]ApprovalComment**](approval-comment) |  | [optional] 
**Modified** | Pointer to **NullableTime** | A date-time in ISO-8601 format | [optional] 
**Owner** | Pointer to [**ActivityIdentity**](activity-identity) |  | [optional] 
**Result** | Pointer to **string** | The result of the approval | [optional] 
**AttributeRequest** | Pointer to [**AttributeRequest**](attribute-request) |  | [optional] 
**Source** | Pointer to [**AccountSource**](account-source) |  | [optional] 

## Methods

### NewApproval

`func NewApproval() *Approval`

NewApproval instantiates a new Approval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalWithDefaults

`func NewApprovalWithDefaults() *Approval`

NewApprovalWithDefaults instantiates a new Approval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComments

`func (o *Approval) GetComments() []ApprovalComment`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *Approval) GetCommentsOk() (*[]ApprovalComment, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *Approval) SetComments(v []ApprovalComment)`

SetComments sets Comments field to given value.

### HasComments

`func (o *Approval) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetModified

`func (o *Approval) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Approval) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Approval) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Approval) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Approval) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Approval) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetOwner

`func (o *Approval) GetOwner() ActivityIdentity`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Approval) GetOwnerOk() (*ActivityIdentity, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Approval) SetOwner(v ActivityIdentity)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Approval) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetResult

`func (o *Approval) GetResult() string`

GetResult returns the Result field if non-nil, zero value otherwise.

### GetResultOk

`func (o *Approval) GetResultOk() (*string, bool)`

GetResultOk returns a tuple with the Result field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResult

`func (o *Approval) SetResult(v string)`

SetResult sets Result field to given value.

### HasResult

`func (o *Approval) HasResult() bool`

HasResult returns a boolean if a field has been set.

### GetAttributeRequest

`func (o *Approval) GetAttributeRequest() AttributeRequest`

GetAttributeRequest returns the AttributeRequest field if non-nil, zero value otherwise.

### GetAttributeRequestOk

`func (o *Approval) GetAttributeRequestOk() (*AttributeRequest, bool)`

GetAttributeRequestOk returns a tuple with the AttributeRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeRequest

`func (o *Approval) SetAttributeRequest(v AttributeRequest)`

SetAttributeRequest sets AttributeRequest field to given value.

### HasAttributeRequest

`func (o *Approval) HasAttributeRequest() bool`

HasAttributeRequest returns a boolean if a field has been set.

### GetSource

`func (o *Approval) GetSource() AccountSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Approval) GetSourceOk() (*AccountSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Approval) SetSource(v AccountSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *Approval) HasSource() bool`

HasSource returns a boolean if a field has been set.


