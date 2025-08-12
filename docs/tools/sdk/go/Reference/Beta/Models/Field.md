---
id: beta-field
title: Field
pagination_label: Field
sidebar_label: Field
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Field', 'BetaField'] 
slug: /tools/sdk/go/beta/models/field
tags: ['SDK', 'Software Development Kit', 'Field', 'BetaField']
---

# Field

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the FormItem | [optional] 
**DisplayName** | Pointer to **string** | Display name of the field | [optional] 
**DisplayType** | Pointer to **string** | Type of the field to display | [optional] 
**Required** | Pointer to **bool** | True if the field is required | [optional] 
**AllowedValuesList** | Pointer to **[]map[string]interface{}** | List of allowed values for the field | [optional] 
**Value** | Pointer to **map[string]interface{}** | Value of the field | [optional] 

## Methods

### NewField

`func NewField() *Field`

NewField instantiates a new Field object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFieldWithDefaults

`func NewFieldWithDefaults() *Field`

NewFieldWithDefaults instantiates a new Field object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Field) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Field) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Field) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Field) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *Field) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Field) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Field) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Field) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDisplayType

`func (o *Field) GetDisplayType() string`

GetDisplayType returns the DisplayType field if non-nil, zero value otherwise.

### GetDisplayTypeOk

`func (o *Field) GetDisplayTypeOk() (*string, bool)`

GetDisplayTypeOk returns a tuple with the DisplayType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayType

`func (o *Field) SetDisplayType(v string)`

SetDisplayType sets DisplayType field to given value.

### HasDisplayType

`func (o *Field) HasDisplayType() bool`

HasDisplayType returns a boolean if a field has been set.

### GetRequired

`func (o *Field) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *Field) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *Field) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *Field) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetAllowedValuesList

`func (o *Field) GetAllowedValuesList() []map[string]interface{}`

GetAllowedValuesList returns the AllowedValuesList field if non-nil, zero value otherwise.

### GetAllowedValuesListOk

`func (o *Field) GetAllowedValuesListOk() (*[]map[string]interface{}, bool)`

GetAllowedValuesListOk returns a tuple with the AllowedValuesList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedValuesList

`func (o *Field) SetAllowedValuesList(v []map[string]interface{})`

SetAllowedValuesList sets AllowedValuesList field to given value.

### HasAllowedValuesList

`func (o *Field) HasAllowedValuesList() bool`

HasAllowedValuesList returns a boolean if a field has been set.

### GetValue

`func (o *Field) GetValue() map[string]interface{}`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Field) GetValueOk() (*map[string]interface{}, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Field) SetValue(v map[string]interface{})`

SetValue sets Value field to given value.

### HasValue

`func (o *Field) HasValue() bool`

HasValue returns a boolean if a field has been set.


