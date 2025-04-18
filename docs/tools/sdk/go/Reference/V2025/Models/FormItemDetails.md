---
id: v2025-form-item-details
title: FormItemDetails
pagination_label: FormItemDetails
sidebar_label: FormItemDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormItemDetails', 'V2025FormItemDetails'] 
slug: /tools/sdk/go/v2025/models/form-item-details
tags: ['SDK', 'Software Development Kit', 'FormItemDetails', 'V2025FormItemDetails']
---

# FormItemDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **NullableString** | Name of the FormItem | [optional] 

## Methods

### NewFormItemDetails

`func NewFormItemDetails() *FormItemDetails`

NewFormItemDetails instantiates a new FormItemDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormItemDetailsWithDefaults

`func NewFormItemDetailsWithDefaults() *FormItemDetails`

NewFormItemDetailsWithDefaults instantiates a new FormItemDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *FormItemDetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FormItemDetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FormItemDetails) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *FormItemDetails) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *FormItemDetails) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *FormItemDetails) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

