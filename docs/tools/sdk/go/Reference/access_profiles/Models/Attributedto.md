---
id: v1-attributedto
title: Attributedto
pagination_label: Attributedto
sidebar_label: Attributedto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Attributedto', 'V1Attributedto'] 
slug: /tools/sdk/go/accessprofiles/models/attributedto
tags: ['SDK', 'Software Development Kit', 'Attributedto', 'V1Attributedto']
---

# Attributedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | Technical name of the Attribute. This is unique and cannot be changed after creation. | [optional] 
**Name** | Pointer to **string** | The display name of the key. | [optional] 
**Multiselect** | Pointer to **bool** | Indicates whether the attribute can have multiple values. | [optional] [default to false]
**Status** | Pointer to **string** | The status of the Attribute. | [optional] 
**Type** | Pointer to **string** | The type of the Attribute. This can be either \"custom\" or \"governance\". | [optional] 
**ObjectTypes** | Pointer to **[]string** | An array of object types this attributes values can be applied to. Possible values are \"all\" or \"entitlement\". Value \"all\" means this attribute can be used with all object types that are supported. | [optional] 
**Description** | Pointer to **string** | The description of the Attribute. | [optional] 
**Values** | Pointer to [**[]Attributevaluedto**](attributevaluedto) |  | [optional] 

## Methods

### NewAttributedto

`func NewAttributedto() *Attributedto`

NewAttributedto instantiates a new Attributedto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributedtoWithDefaults

`func NewAttributedtoWithDefaults() *Attributedto`

NewAttributedtoWithDefaults instantiates a new Attributedto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Attributedto) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Attributedto) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Attributedto) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *Attributedto) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetName

`func (o *Attributedto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Attributedto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Attributedto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Attributedto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetMultiselect

`func (o *Attributedto) GetMultiselect() bool`

GetMultiselect returns the Multiselect field if non-nil, zero value otherwise.

### GetMultiselectOk

`func (o *Attributedto) GetMultiselectOk() (*bool, bool)`

GetMultiselectOk returns a tuple with the Multiselect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiselect

`func (o *Attributedto) SetMultiselect(v bool)`

SetMultiselect sets Multiselect field to given value.

### HasMultiselect

`func (o *Attributedto) HasMultiselect() bool`

HasMultiselect returns a boolean if a field has been set.

### GetStatus

`func (o *Attributedto) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Attributedto) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Attributedto) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Attributedto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *Attributedto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Attributedto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Attributedto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Attributedto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetObjectTypes

`func (o *Attributedto) GetObjectTypes() []string`

GetObjectTypes returns the ObjectTypes field if non-nil, zero value otherwise.

### GetObjectTypesOk

`func (o *Attributedto) GetObjectTypesOk() (*[]string, bool)`

GetObjectTypesOk returns a tuple with the ObjectTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectTypes

`func (o *Attributedto) SetObjectTypes(v []string)`

SetObjectTypes sets ObjectTypes field to given value.

### HasObjectTypes

`func (o *Attributedto) HasObjectTypes() bool`

HasObjectTypes returns a boolean if a field has been set.

### SetObjectTypesNil

`func (o *Attributedto) SetObjectTypesNil(b bool)`

 SetObjectTypesNil sets the value for ObjectTypes to be an explicit nil

### UnsetObjectTypes
`func (o *Attributedto) UnsetObjectTypes()`

UnsetObjectTypes ensures that no value is present for ObjectTypes, not even an explicit nil
### GetDescription

`func (o *Attributedto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Attributedto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Attributedto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Attributedto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetValues

`func (o *Attributedto) GetValues() []Attributevaluedto`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Attributedto) GetValuesOk() (*[]Attributevaluedto, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Attributedto) SetValues(v []Attributevaluedto)`

SetValues sets Values field to given value.

### HasValues

`func (o *Attributedto) HasValues() bool`

HasValues returns a boolean if a field has been set.

### SetValuesNil

`func (o *Attributedto) SetValuesNil(b bool)`

 SetValuesNil sets the value for Values to be an explicit nil

### UnsetValues
`func (o *Attributedto) UnsetValues()`

UnsetValues ensures that no value is present for Values, not even an explicit nil

