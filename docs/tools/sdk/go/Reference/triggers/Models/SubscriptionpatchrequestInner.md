---
id: v1-subscriptionpatchrequest-inner
title: SubscriptionpatchrequestInner
pagination_label: SubscriptionpatchrequestInner
sidebar_label: SubscriptionpatchrequestInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SubscriptionpatchrequestInner', 'V1SubscriptionpatchrequestInner'] 
slug: /tools/sdk/go/triggers/models/subscriptionpatchrequest-inner
tags: ['SDK', 'Software Development Kit', 'SubscriptionpatchrequestInner', 'V1SubscriptionpatchrequestInner']
---

# SubscriptionpatchrequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **string** | The operation to be performed | 
**Path** | **string** | A string JSON Pointer representing the target path to an element to be affected by the operation | 
**Value** | Pointer to [**SubscriptionpatchrequestInnerValue**](subscriptionpatchrequest-inner-value) |  | [optional] 

## Methods

### NewSubscriptionpatchrequestInner

`func NewSubscriptionpatchrequestInner(op string, path string, ) *SubscriptionpatchrequestInner`

NewSubscriptionpatchrequestInner instantiates a new SubscriptionpatchrequestInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionpatchrequestInnerWithDefaults

`func NewSubscriptionpatchrequestInnerWithDefaults() *SubscriptionpatchrequestInner`

NewSubscriptionpatchrequestInnerWithDefaults instantiates a new SubscriptionpatchrequestInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *SubscriptionpatchrequestInner) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *SubscriptionpatchrequestInner) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *SubscriptionpatchrequestInner) SetOp(v string)`

SetOp sets Op field to given value.


### GetPath

`func (o *SubscriptionpatchrequestInner) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *SubscriptionpatchrequestInner) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *SubscriptionpatchrequestInner) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *SubscriptionpatchrequestInner) GetValue() SubscriptionpatchrequestInnerValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *SubscriptionpatchrequestInner) GetValueOk() (*SubscriptionpatchrequestInnerValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *SubscriptionpatchrequestInner) SetValue(v SubscriptionpatchrequestInnerValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *SubscriptionpatchrequestInner) HasValue() bool`

HasValue returns a boolean if a field has been set.


