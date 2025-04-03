---
id: access-model-metadata-values-inner
title: AccessModelMetadataValuesInner
pagination_label: AccessModelMetadataValuesInner
sidebar_label: AccessModelMetadataValuesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessModelMetadataValuesInner', 'AccessModelMetadataValuesInner'] 
slug: /tools/sdk/go/v3/models/access-model-metadata-values-inner
tags: ['SDK', 'Software Development Kit', 'AccessModelMetadataValuesInner', 'AccessModelMetadataValuesInner']
---

# AccessModelMetadataValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | The value to assign to the metdata item | [optional] 
**Name** | Pointer to **string** | Display name of the value | [optional] 
**Status** | Pointer to **string** | The status of the individual value | [optional] 

## Methods

### NewAccessModelMetadataValuesInner

`func NewAccessModelMetadataValuesInner() *AccessModelMetadataValuesInner`

NewAccessModelMetadataValuesInner instantiates a new AccessModelMetadataValuesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessModelMetadataValuesInnerWithDefaults

`func NewAccessModelMetadataValuesInnerWithDefaults() *AccessModelMetadataValuesInner`

NewAccessModelMetadataValuesInnerWithDefaults instantiates a new AccessModelMetadataValuesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *AccessModelMetadataValuesInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *AccessModelMetadataValuesInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *AccessModelMetadataValuesInner) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *AccessModelMetadataValuesInner) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetName

`func (o *AccessModelMetadataValuesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessModelMetadataValuesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessModelMetadataValuesInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessModelMetadataValuesInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStatus

`func (o *AccessModelMetadataValuesInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AccessModelMetadataValuesInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AccessModelMetadataValuesInner) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AccessModelMetadataValuesInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


