---
id: v1-update-multi-host-sources-v1-request-inner
title: UpdateMultiHostSourcesV1RequestInner
pagination_label: UpdateMultiHostSourcesV1RequestInner
sidebar_label: UpdateMultiHostSourcesV1RequestInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UpdateMultiHostSourcesV1RequestInner', 'V1UpdateMultiHostSourcesV1RequestInner'] 
slug: /tools/sdk/go/multihostintegration/models/update-multi-host-sources-v1-request-inner
tags: ['SDK', 'Software Development Kit', 'UpdateMultiHostSourcesV1RequestInner', 'V1UpdateMultiHostSourcesV1RequestInner']
---

# UpdateMultiHostSourcesV1RequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **string** | The operation to be performed | 
**Path** | **string** | A string JSON Pointer representing the target path to an element to be affected by the operation | 
**Value** | Pointer to [**UpdateMultiHostSourcesV1RequestInnerValue**](update-multi-host-sources-v1-request-inner-value) |  | [optional] 

## Methods

### NewUpdateMultiHostSourcesV1RequestInner

`func NewUpdateMultiHostSourcesV1RequestInner(op string, path string, ) *UpdateMultiHostSourcesV1RequestInner`

NewUpdateMultiHostSourcesV1RequestInner instantiates a new UpdateMultiHostSourcesV1RequestInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateMultiHostSourcesV1RequestInnerWithDefaults

`func NewUpdateMultiHostSourcesV1RequestInnerWithDefaults() *UpdateMultiHostSourcesV1RequestInner`

NewUpdateMultiHostSourcesV1RequestInnerWithDefaults instantiates a new UpdateMultiHostSourcesV1RequestInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *UpdateMultiHostSourcesV1RequestInner) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *UpdateMultiHostSourcesV1RequestInner) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *UpdateMultiHostSourcesV1RequestInner) SetOp(v string)`

SetOp sets Op field to given value.


### GetPath

`func (o *UpdateMultiHostSourcesV1RequestInner) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *UpdateMultiHostSourcesV1RequestInner) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *UpdateMultiHostSourcesV1RequestInner) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *UpdateMultiHostSourcesV1RequestInner) GetValue() UpdateMultiHostSourcesV1RequestInnerValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *UpdateMultiHostSourcesV1RequestInner) GetValueOk() (*UpdateMultiHostSourcesV1RequestInnerValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *UpdateMultiHostSourcesV1RequestInner) SetValue(v UpdateMultiHostSourcesV1RequestInnerValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *UpdateMultiHostSourcesV1RequestInner) HasValue() bool`

HasValue returns a boolean if a field has been set.


