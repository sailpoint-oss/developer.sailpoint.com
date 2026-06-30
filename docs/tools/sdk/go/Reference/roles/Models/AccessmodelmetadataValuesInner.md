---
id: v1-accessmodelmetadata-values-inner
title: AccessmodelmetadataValuesInner
pagination_label: AccessmodelmetadataValuesInner
sidebar_label: AccessmodelmetadataValuesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessmodelmetadataValuesInner', 'V1AccessmodelmetadataValuesInner'] 
slug: /tools/sdk/go/roles/models/accessmodelmetadata-values-inner
tags: ['SDK', 'Software Development Kit', 'AccessmodelmetadataValuesInner', 'V1AccessmodelmetadataValuesInner']
---

# AccessmodelmetadataValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | The value to assign to the metdata item | [optional] 
**Name** | Pointer to **string** | Display name of the value | [optional] 
**Status** | Pointer to **string** | The status of the individual value | [optional] 

## Methods

### NewAccessmodelmetadataValuesInner

`func NewAccessmodelmetadataValuesInner() *AccessmodelmetadataValuesInner`

NewAccessmodelmetadataValuesInner instantiates a new AccessmodelmetadataValuesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessmodelmetadataValuesInnerWithDefaults

`func NewAccessmodelmetadataValuesInnerWithDefaults() *AccessmodelmetadataValuesInner`

NewAccessmodelmetadataValuesInnerWithDefaults instantiates a new AccessmodelmetadataValuesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *AccessmodelmetadataValuesInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *AccessmodelmetadataValuesInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *AccessmodelmetadataValuesInner) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *AccessmodelmetadataValuesInner) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetName

`func (o *AccessmodelmetadataValuesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessmodelmetadataValuesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessmodelmetadataValuesInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessmodelmetadataValuesInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStatus

`func (o *AccessmodelmetadataValuesInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AccessmodelmetadataValuesInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AccessmodelmetadataValuesInner) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AccessmodelmetadataValuesInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


