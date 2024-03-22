---
id: form-element-data-source-config-options
title: FormElementDataSourceConfigOptions
pagination_label: FormElementDataSourceConfigOptions
sidebar_label: FormElementDataSourceConfigOptions
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'FormElementDataSourceConfigOptions'] 
slug: /tools/sdk/go/beta/models/form-element-data-source-config-options
tags: ['SDK', 'Software Development Kit', 'FormElementDataSourceConfigOptions']
---

# FormElementDataSourceConfigOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Label** |  Pointer to **string** | Label is the main label to display to the user when selecting this option | [optional] 
**SubLabel** |  Pointer to **string** | SubLabel is the sub label to display below the label in diminutive styling to help describe or identify this option | [optional] 
**Value** |  Pointer to **string** | Value is the value to save as an entry when the user selects this option | [optional] 

## Methods

### NewFormElementDataSourceConfigOptions

`func NewFormElementDataSourceConfigOptions() *FormElementDataSourceConfigOptions`

NewFormElementDataSourceConfigOptions instantiates a new FormElementDataSourceConfigOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormElementDataSourceConfigOptionsWithDefaults

`func NewFormElementDataSourceConfigOptionsWithDefaults() *FormElementDataSourceConfigOptions`

NewFormElementDataSourceConfigOptionsWithDefaults instantiates a new FormElementDataSourceConfigOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLabel

`func (o *FormElementDataSourceConfigOptions) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *FormElementDataSourceConfigOptions) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *FormElementDataSourceConfigOptions) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *FormElementDataSourceConfigOptions) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetSubLabel

`func (o *FormElementDataSourceConfigOptions) GetSubLabel() string`

GetSubLabel returns the SubLabel field if non-nil, zero value otherwise.

### GetSubLabelOk

`func (o *FormElementDataSourceConfigOptions) GetSubLabelOk() (*string, bool)`

GetSubLabelOk returns a tuple with the SubLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubLabel

`func (o *FormElementDataSourceConfigOptions) SetSubLabel(v string)`

SetSubLabel sets SubLabel field to given value.

### HasSubLabel

`func (o *FormElementDataSourceConfigOptions) HasSubLabel() bool`

HasSubLabel returns a boolean if a field has been set.

### GetValue

`func (o *FormElementDataSourceConfigOptions) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *FormElementDataSourceConfigOptions) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *FormElementDataSourceConfigOptions) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *FormElementDataSourceConfigOptions) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to top]](#) 


