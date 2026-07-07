---
id: v1-attributechange
title: Attributechange
pagination_label: Attributechange
sidebar_label: Attributechange
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Attributechange', 'V1Attributechange'] 
slug: /tools/sdk/go/identityhistory/models/attributechange
tags: ['SDK', 'Software Development Kit', 'Attributechange', 'V1Attributechange']
---

# Attributechange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | the attribute name | [optional] 
**PreviousValue** | Pointer to **string** | the old value of attribute | [optional] 
**NewValue** | Pointer to **string** | the new value of attribute | [optional] 

## Methods

### NewAttributechange

`func NewAttributechange() *Attributechange`

NewAttributechange instantiates a new Attributechange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributechangeWithDefaults

`func NewAttributechangeWithDefaults() *Attributechange`

NewAttributechangeWithDefaults instantiates a new Attributechange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Attributechange) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Attributechange) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Attributechange) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Attributechange) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPreviousValue

`func (o *Attributechange) GetPreviousValue() string`

GetPreviousValue returns the PreviousValue field if non-nil, zero value otherwise.

### GetPreviousValueOk

`func (o *Attributechange) GetPreviousValueOk() (*string, bool)`

GetPreviousValueOk returns a tuple with the PreviousValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousValue

`func (o *Attributechange) SetPreviousValue(v string)`

SetPreviousValue sets PreviousValue field to given value.

### HasPreviousValue

`func (o *Attributechange) HasPreviousValue() bool`

HasPreviousValue returns a boolean if a field has been set.

### GetNewValue

`func (o *Attributechange) GetNewValue() string`

GetNewValue returns the NewValue field if non-nil, zero value otherwise.

### GetNewValueOk

`func (o *Attributechange) GetNewValueOk() (*string, bool)`

GetNewValueOk returns a tuple with the NewValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewValue

`func (o *Attributechange) SetNewValue(v string)`

SetNewValue sets NewValue field to given value.

### HasNewValue

`func (o *Attributechange) HasNewValue() bool`

HasNewValue returns a boolean if a field has been set.


