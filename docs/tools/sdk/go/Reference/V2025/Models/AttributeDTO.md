---
id: attribute-dto
title: AttributeDTO
pagination_label: AttributeDTO
sidebar_label: AttributeDTO
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttributeDTO', 'AttributeDTO'] 
slug: /tools/sdk/go//models/attribute-dto
tags: ['SDK', 'Software Development Kit', 'AttributeDTO', 'AttributeDTO']
---

# AttributeDTO

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
**Values** | Pointer to [**[]AttributeValueDTO**](attribute-value-dto) |  | [optional] 

## Methods

### NewAttributeDTO

`func NewAttributeDTO() *AttributeDTO`

NewAttributeDTO instantiates a new AttributeDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributeDTOWithDefaults

`func NewAttributeDTOWithDefaults() *AttributeDTO`

NewAttributeDTOWithDefaults instantiates a new AttributeDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *AttributeDTO) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *AttributeDTO) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *AttributeDTO) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *AttributeDTO) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetName

`func (o *AttributeDTO) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AttributeDTO) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AttributeDTO) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AttributeDTO) HasName() bool`

HasName returns a boolean if a field has been set.

### GetMultiselect

`func (o *AttributeDTO) GetMultiselect() bool`

GetMultiselect returns the Multiselect field if non-nil, zero value otherwise.

### GetMultiselectOk

`func (o *AttributeDTO) GetMultiselectOk() (*bool, bool)`

GetMultiselectOk returns a tuple with the Multiselect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiselect

`func (o *AttributeDTO) SetMultiselect(v bool)`

SetMultiselect sets Multiselect field to given value.

### HasMultiselect

`func (o *AttributeDTO) HasMultiselect() bool`

HasMultiselect returns a boolean if a field has been set.

### GetStatus

`func (o *AttributeDTO) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AttributeDTO) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AttributeDTO) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AttributeDTO) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *AttributeDTO) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttributeDTO) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttributeDTO) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AttributeDTO) HasType() bool`

HasType returns a boolean if a field has been set.

### GetObjectTypes

`func (o *AttributeDTO) GetObjectTypes() []string`

GetObjectTypes returns the ObjectTypes field if non-nil, zero value otherwise.

### GetObjectTypesOk

`func (o *AttributeDTO) GetObjectTypesOk() (*[]string, bool)`

GetObjectTypesOk returns a tuple with the ObjectTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectTypes

`func (o *AttributeDTO) SetObjectTypes(v []string)`

SetObjectTypes sets ObjectTypes field to given value.

### HasObjectTypes

`func (o *AttributeDTO) HasObjectTypes() bool`

HasObjectTypes returns a boolean if a field has been set.

### SetObjectTypesNil

`func (o *AttributeDTO) SetObjectTypesNil(b bool)`

 SetObjectTypesNil sets the value for ObjectTypes to be an explicit nil

### UnsetObjectTypes
`func (o *AttributeDTO) UnsetObjectTypes()`

UnsetObjectTypes ensures that no value is present for ObjectTypes, not even an explicit nil
### GetDescription

`func (o *AttributeDTO) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AttributeDTO) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AttributeDTO) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AttributeDTO) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetValues

`func (o *AttributeDTO) GetValues() []AttributeValueDTO`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *AttributeDTO) GetValuesOk() (*[]AttributeValueDTO, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *AttributeDTO) SetValues(v []AttributeValueDTO)`

SetValues sets Values field to given value.

### HasValues

`func (o *AttributeDTO) HasValues() bool`

HasValues returns a boolean if a field has been set.

### SetValuesNil

`func (o *AttributeDTO) SetValuesNil(b bool)`

 SetValuesNil sets the value for Values to be an explicit nil

### UnsetValues
`func (o *AttributeDTO) UnsetValues()`

UnsetValues ensures that no value is present for Values, not even an explicit nil

