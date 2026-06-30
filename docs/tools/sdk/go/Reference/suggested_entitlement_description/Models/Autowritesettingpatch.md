---
id: v1-autowritesettingpatch
title: Autowritesettingpatch
pagination_label: Autowritesettingpatch
sidebar_label: Autowritesettingpatch
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Autowritesettingpatch', 'V1Autowritesettingpatch'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/autowritesettingpatch
tags: ['SDK', 'Software Development Kit', 'Autowritesettingpatch', 'V1Autowritesettingpatch']
---

# Autowritesettingpatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **string** | The operation to perform. Only \"replace\" is supported. | 
**Path** | **string** | The field to update. Allowed values: /enabled, /includedSourceIds, /excludedSourceIds | 
**Value** | [**AutowritesettingpatchValue**](autowritesettingpatch-value) |  | 

## Methods

### NewAutowritesettingpatch

`func NewAutowritesettingpatch(op string, path string, value AutowritesettingpatchValue, ) *Autowritesettingpatch`

NewAutowritesettingpatch instantiates a new Autowritesettingpatch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutowritesettingpatchWithDefaults

`func NewAutowritesettingpatchWithDefaults() *Autowritesettingpatch`

NewAutowritesettingpatchWithDefaults instantiates a new Autowritesettingpatch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *Autowritesettingpatch) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *Autowritesettingpatch) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *Autowritesettingpatch) SetOp(v string)`

SetOp sets Op field to given value.


### GetPath

`func (o *Autowritesettingpatch) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *Autowritesettingpatch) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *Autowritesettingpatch) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *Autowritesettingpatch) GetValue() AutowritesettingpatchValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Autowritesettingpatch) GetValueOk() (*AutowritesettingpatchValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Autowritesettingpatch) SetValue(v AutowritesettingpatchValue)`

SetValue sets Value field to given value.



