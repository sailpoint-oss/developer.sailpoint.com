---
id: beta-attribute-change
title: AttributeChange
pagination_label: AttributeChange
sidebar_label: AttributeChange
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttributeChange', 'BetaAttributeChange'] 
slug: /tools/sdk/go/beta/models/attribute-change
tags: ['SDK', 'Software Development Kit', 'AttributeChange', 'BetaAttributeChange']
---

# AttributeChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | the attribute name | [optional] 
**PreviousValue** | Pointer to **string** | the old value of attribute | [optional] 
**NewValue** | Pointer to **string** | the new value of attribute | [optional] 

## Methods

### NewAttributeChange

`func NewAttributeChange() *AttributeChange`

NewAttributeChange instantiates a new AttributeChange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributeChangeWithDefaults

`func NewAttributeChangeWithDefaults() *AttributeChange`

NewAttributeChangeWithDefaults instantiates a new AttributeChange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AttributeChange) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AttributeChange) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AttributeChange) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AttributeChange) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPreviousValue

`func (o *AttributeChange) GetPreviousValue() string`

GetPreviousValue returns the PreviousValue field if non-nil, zero value otherwise.

### GetPreviousValueOk

`func (o *AttributeChange) GetPreviousValueOk() (*string, bool)`

GetPreviousValueOk returns a tuple with the PreviousValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousValue

`func (o *AttributeChange) SetPreviousValue(v string)`

SetPreviousValue sets PreviousValue field to given value.

### HasPreviousValue

`func (o *AttributeChange) HasPreviousValue() bool`

HasPreviousValue returns a boolean if a field has been set.

### GetNewValue

`func (o *AttributeChange) GetNewValue() string`

GetNewValue returns the NewValue field if non-nil, zero value otherwise.

### GetNewValueOk

`func (o *AttributeChange) GetNewValueOk() (*string, bool)`

GetNewValueOk returns a tuple with the NewValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewValue

`func (o *AttributeChange) SetNewValue(v string)`

SetNewValue sets NewValue field to given value.

### HasNewValue

`func (o *AttributeChange) HasNewValue() bool`

HasNewValue returns a boolean if a field has been set.


