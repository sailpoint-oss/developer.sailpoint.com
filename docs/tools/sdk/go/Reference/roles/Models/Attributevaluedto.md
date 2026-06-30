---
id: v1-attributevaluedto
title: Attributevaluedto
pagination_label: Attributevaluedto
sidebar_label: Attributevaluedto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Attributevaluedto', 'V1Attributevaluedto'] 
slug: /tools/sdk/go/roles/models/attributevaluedto
tags: ['SDK', 'Software Development Kit', 'Attributevaluedto', 'V1Attributevaluedto']
---

# Attributevaluedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | Technical name of the Attribute value. This is unique and cannot be changed after creation. | [optional] 
**Name** | Pointer to **string** | The display name of the Attribute value. | [optional] 
**Status** | Pointer to **string** | The status of the Attribute value. | [optional] 

## Methods

### NewAttributevaluedto

`func NewAttributevaluedto() *Attributevaluedto`

NewAttributevaluedto instantiates a new Attributevaluedto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributevaluedtoWithDefaults

`func NewAttributevaluedtoWithDefaults() *Attributevaluedto`

NewAttributevaluedtoWithDefaults instantiates a new Attributevaluedto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *Attributevaluedto) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Attributevaluedto) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Attributevaluedto) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Attributevaluedto) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetName

`func (o *Attributevaluedto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Attributevaluedto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Attributevaluedto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Attributevaluedto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStatus

`func (o *Attributevaluedto) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Attributevaluedto) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Attributevaluedto) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Attributevaluedto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


