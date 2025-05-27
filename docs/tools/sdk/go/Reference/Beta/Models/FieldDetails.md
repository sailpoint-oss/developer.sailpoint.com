---
id: beta-field-details
title: FieldDetails
pagination_label: FieldDetails
sidebar_label: FieldDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FieldDetails', 'BetaFieldDetails'] 
slug: /tools/sdk/go/beta/models/field-details
tags: ['SDK', 'Software Development Kit', 'FieldDetails', 'BetaFieldDetails']
---

# FieldDetails

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

### NewFieldDetails

`func NewFieldDetails() *FieldDetails`

NewFieldDetails instantiates a new FieldDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFieldDetailsWithDefaults

`func NewFieldDetailsWithDefaults() *FieldDetails`

NewFieldDetailsWithDefaults instantiates a new FieldDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *FieldDetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FieldDetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FieldDetails) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *FieldDetails) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *FieldDetails) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *FieldDetails) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *FieldDetails) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *FieldDetails) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDisplayType

`func (o *FieldDetails) GetDisplayType() string`

GetDisplayType returns the DisplayType field if non-nil, zero value otherwise.

### GetDisplayTypeOk

`func (o *FieldDetails) GetDisplayTypeOk() (*string, bool)`

GetDisplayTypeOk returns a tuple with the DisplayType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayType

`func (o *FieldDetails) SetDisplayType(v string)`

SetDisplayType sets DisplayType field to given value.

### HasDisplayType

`func (o *FieldDetails) HasDisplayType() bool`

HasDisplayType returns a boolean if a field has been set.

### GetRequired

`func (o *FieldDetails) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *FieldDetails) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *FieldDetails) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *FieldDetails) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetAllowedValuesList

`func (o *FieldDetails) GetAllowedValuesList() []map[string]interface{}`

GetAllowedValuesList returns the AllowedValuesList field if non-nil, zero value otherwise.

### GetAllowedValuesListOk

`func (o *FieldDetails) GetAllowedValuesListOk() (*[]map[string]interface{}, bool)`

GetAllowedValuesListOk returns a tuple with the AllowedValuesList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedValuesList

`func (o *FieldDetails) SetAllowedValuesList(v []map[string]interface{})`

SetAllowedValuesList sets AllowedValuesList field to given value.

### HasAllowedValuesList

`func (o *FieldDetails) HasAllowedValuesList() bool`

HasAllowedValuesList returns a boolean if a field has been set.

### GetValue

`func (o *FieldDetails) GetValue() map[string]interface{}`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *FieldDetails) GetValueOk() (*map[string]interface{}, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *FieldDetails) SetValue(v map[string]interface{})`

SetValue sets Value field to given value.

### HasValue

`func (o *FieldDetails) HasValue() bool`

HasValue returns a boolean if a field has been set.


