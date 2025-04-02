---
id: update-multi-host-sources-request-inner
title: UpdateMultiHostSourcesRequestInner
pagination_label: UpdateMultiHostSourcesRequestInner
sidebar_label: UpdateMultiHostSourcesRequestInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UpdateMultiHostSourcesRequestInner', 'UpdateMultiHostSourcesRequestInner'] 
slug: /tools/sdk/go//models/update-multi-host-sources-request-inner
tags: ['SDK', 'Software Development Kit', 'UpdateMultiHostSourcesRequestInner', 'UpdateMultiHostSourcesRequestInner']
---

# UpdateMultiHostSourcesRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **string** | The operation to be performed | 
**Path** | **string** | A string JSON Pointer representing the target path to an element to be affected by the operation | 
**Value** | Pointer to [**UpdateMultiHostSourcesRequestInnerValue**](update-multi-host-sources-request-inner-value) |  | [optional] 

## Methods

### NewUpdateMultiHostSourcesRequestInner

`func NewUpdateMultiHostSourcesRequestInner(op string, path string, ) *UpdateMultiHostSourcesRequestInner`

NewUpdateMultiHostSourcesRequestInner instantiates a new UpdateMultiHostSourcesRequestInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateMultiHostSourcesRequestInnerWithDefaults

`func NewUpdateMultiHostSourcesRequestInnerWithDefaults() *UpdateMultiHostSourcesRequestInner`

NewUpdateMultiHostSourcesRequestInnerWithDefaults instantiates a new UpdateMultiHostSourcesRequestInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *UpdateMultiHostSourcesRequestInner) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *UpdateMultiHostSourcesRequestInner) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *UpdateMultiHostSourcesRequestInner) SetOp(v string)`

SetOp sets Op field to given value.


### GetPath

`func (o *UpdateMultiHostSourcesRequestInner) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *UpdateMultiHostSourcesRequestInner) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *UpdateMultiHostSourcesRequestInner) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *UpdateMultiHostSourcesRequestInner) GetValue() UpdateMultiHostSourcesRequestInnerValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *UpdateMultiHostSourcesRequestInner) GetValueOk() (*UpdateMultiHostSourcesRequestInnerValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *UpdateMultiHostSourcesRequestInner) SetValue(v UpdateMultiHostSourcesRequestInnerValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *UpdateMultiHostSourcesRequestInner) HasValue() bool`

HasValue returns a boolean if a field has been set.


