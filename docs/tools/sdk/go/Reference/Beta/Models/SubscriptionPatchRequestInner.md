---
id: beta-subscription-patch-request-inner
title: SubscriptionPatchRequestInner
pagination_label: SubscriptionPatchRequestInner
sidebar_label: SubscriptionPatchRequestInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SubscriptionPatchRequestInner', 'BetaSubscriptionPatchRequestInner'] 
slug: /tools/sdk/go/beta/models/subscription-patch-request-inner
tags: ['SDK', 'Software Development Kit', 'SubscriptionPatchRequestInner', 'BetaSubscriptionPatchRequestInner']
---

# SubscriptionPatchRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **string** | The operation to be performed | 
**Path** | **string** | A string JSON Pointer representing the target path to an element to be affected by the operation | 
**Value** | Pointer to [**SubscriptionPatchRequestInnerValue**](subscription-patch-request-inner-value) |  | [optional] 

## Methods

### NewSubscriptionPatchRequestInner

`func NewSubscriptionPatchRequestInner(op string, path string, ) *SubscriptionPatchRequestInner`

NewSubscriptionPatchRequestInner instantiates a new SubscriptionPatchRequestInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionPatchRequestInnerWithDefaults

`func NewSubscriptionPatchRequestInnerWithDefaults() *SubscriptionPatchRequestInner`

NewSubscriptionPatchRequestInnerWithDefaults instantiates a new SubscriptionPatchRequestInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *SubscriptionPatchRequestInner) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *SubscriptionPatchRequestInner) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *SubscriptionPatchRequestInner) SetOp(v string)`

SetOp sets Op field to given value.


### GetPath

`func (o *SubscriptionPatchRequestInner) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *SubscriptionPatchRequestInner) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *SubscriptionPatchRequestInner) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *SubscriptionPatchRequestInner) GetValue() SubscriptionPatchRequestInnerValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *SubscriptionPatchRequestInner) GetValueOk() (*SubscriptionPatchRequestInnerValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *SubscriptionPatchRequestInner) SetValue(v SubscriptionPatchRequestInnerValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *SubscriptionPatchRequestInner) HasValue() bool`

HasValue returns a boolean if a field has been set.


