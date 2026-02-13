---
id: beta-cancelled-request-details1
title: CancelledRequestDetails1
pagination_label: CancelledRequestDetails1
sidebar_label: CancelledRequestDetails1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CancelledRequestDetails1', 'BetaCancelledRequestDetails1'] 
slug: /tools/sdk/go/beta/models/cancelled-request-details1
tags: ['SDK', 'Software Development Kit', 'CancelledRequestDetails1', 'BetaCancelledRequestDetails1']
---

# CancelledRequestDetails1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment made by the owner when cancelling the associated request. | [optional] 
**Owner** | Pointer to [**OwnerDto**](owner-dto) |  | [optional] 
**Modified** | Pointer to **SailPointTime** | Date comment was added by the owner when cancelling the associated request. | [optional] 

## Methods

### NewCancelledRequestDetails1

`func NewCancelledRequestDetails1() *CancelledRequestDetails1`

NewCancelledRequestDetails1 instantiates a new CancelledRequestDetails1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelledRequestDetails1WithDefaults

`func NewCancelledRequestDetails1WithDefaults() *CancelledRequestDetails1`

NewCancelledRequestDetails1WithDefaults instantiates a new CancelledRequestDetails1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *CancelledRequestDetails1) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *CancelledRequestDetails1) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *CancelledRequestDetails1) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *CancelledRequestDetails1) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetOwner

`func (o *CancelledRequestDetails1) GetOwner() OwnerDto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *CancelledRequestDetails1) GetOwnerOk() (*OwnerDto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *CancelledRequestDetails1) SetOwner(v OwnerDto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *CancelledRequestDetails1) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetModified

`func (o *CancelledRequestDetails1) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CancelledRequestDetails1) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CancelledRequestDetails1) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CancelledRequestDetails1) HasModified() bool`

HasModified returns a boolean if a field has been set.


