---
id: beta-form-item
title: FormItem
pagination_label: FormItem
sidebar_label: FormItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormItem', 'BetaFormItem'] 
slug: /tools/sdk/go/beta/models/form-item
tags: ['SDK', 'Software Development Kit', 'FormItem', 'BetaFormItem']
---

# FormItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the FormItem | [optional] 

## Methods

### NewFormItem

`func NewFormItem() *FormItem`

NewFormItem instantiates a new FormItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormItemWithDefaults

`func NewFormItemWithDefaults() *FormItem`

NewFormItemWithDefaults instantiates a new FormItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *FormItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FormItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FormItem) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *FormItem) HasName() bool`

HasName returns a boolean if a field has been set.


