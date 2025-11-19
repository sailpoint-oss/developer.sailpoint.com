---
id: v2024-access-model-metadata
title: AccessModelMetadata
pagination_label: AccessModelMetadata
sidebar_label: AccessModelMetadata
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessModelMetadata', 'V2024AccessModelMetadata'] 
slug: /tools/sdk/go/v2024/models/access-model-metadata
tags: ['SDK', 'Software Development Kit', 'AccessModelMetadata', 'V2024AccessModelMetadata']
---

# AccessModelMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | Unique identifier for the metadata type | [optional] 
**Name** | Pointer to **string** | Human readable name of the metadata type | [optional] 
**Multiselect** | Pointer to **bool** | Allows selecting multiple values | [optional] [default to false]
**Status** | Pointer to **string** | The state of the metadata item | [optional] 
**Type** | Pointer to **string** | The type of the metadata item | [optional] 
**ObjectTypes** | Pointer to **[]string** | The types of objects | [optional] 
**Description** | Pointer to **string** | Describes the metadata item | [optional] 
**Values** | Pointer to [**[]AccessModelMetadataValuesInner**](access-model-metadata-values-inner) | The value to assign to the metadata item | [optional] 

## Methods

### NewAccessModelMetadata

`func NewAccessModelMetadata() *AccessModelMetadata`

NewAccessModelMetadata instantiates a new AccessModelMetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessModelMetadataWithDefaults

`func NewAccessModelMetadataWithDefaults() *AccessModelMetadata`

NewAccessModelMetadataWithDefaults instantiates a new AccessModelMetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *AccessModelMetadata) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *AccessModelMetadata) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *AccessModelMetadata) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *AccessModelMetadata) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetName

`func (o *AccessModelMetadata) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessModelMetadata) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessModelMetadata) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessModelMetadata) HasName() bool`

HasName returns a boolean if a field has been set.

### GetMultiselect

`func (o *AccessModelMetadata) GetMultiselect() bool`

GetMultiselect returns the Multiselect field if non-nil, zero value otherwise.

### GetMultiselectOk

`func (o *AccessModelMetadata) GetMultiselectOk() (*bool, bool)`

GetMultiselectOk returns a tuple with the Multiselect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiselect

`func (o *AccessModelMetadata) SetMultiselect(v bool)`

SetMultiselect sets Multiselect field to given value.

### HasMultiselect

`func (o *AccessModelMetadata) HasMultiselect() bool`

HasMultiselect returns a boolean if a field has been set.

### GetStatus

`func (o *AccessModelMetadata) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AccessModelMetadata) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AccessModelMetadata) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AccessModelMetadata) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *AccessModelMetadata) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessModelMetadata) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessModelMetadata) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessModelMetadata) HasType() bool`

HasType returns a boolean if a field has been set.

### GetObjectTypes

`func (o *AccessModelMetadata) GetObjectTypes() []string`

GetObjectTypes returns the ObjectTypes field if non-nil, zero value otherwise.

### GetObjectTypesOk

`func (o *AccessModelMetadata) GetObjectTypesOk() (*[]string, bool)`

GetObjectTypesOk returns a tuple with the ObjectTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectTypes

`func (o *AccessModelMetadata) SetObjectTypes(v []string)`

SetObjectTypes sets ObjectTypes field to given value.

### HasObjectTypes

`func (o *AccessModelMetadata) HasObjectTypes() bool`

HasObjectTypes returns a boolean if a field has been set.

### GetDescription

`func (o *AccessModelMetadata) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessModelMetadata) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessModelMetadata) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessModelMetadata) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetValues

`func (o *AccessModelMetadata) GetValues() []AccessModelMetadataValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *AccessModelMetadata) GetValuesOk() (*[]AccessModelMetadataValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *AccessModelMetadata) SetValues(v []AccessModelMetadataValuesInner)`

SetValues sets Values field to given value.

### HasValues

`func (o *AccessModelMetadata) HasValues() bool`

HasValues returns a boolean if a field has been set.


