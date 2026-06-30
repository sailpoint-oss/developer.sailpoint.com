---
id: v1-accessmodelmetadata
title: Accessmodelmetadata
pagination_label: Accessmodelmetadata
sidebar_label: Accessmodelmetadata
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessmodelmetadata', 'V1Accessmodelmetadata'] 
slug: /tools/sdk/go/roles/models/accessmodelmetadata
tags: ['SDK', 'Software Development Kit', 'Accessmodelmetadata', 'V1Accessmodelmetadata']
---

# Accessmodelmetadata

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
**Values** | Pointer to [**[]AccessmodelmetadataValuesInner**](accessmodelmetadata-values-inner) | The value to assign to the metadata item | [optional] 

## Methods

### NewAccessmodelmetadata

`func NewAccessmodelmetadata() *Accessmodelmetadata`

NewAccessmodelmetadata instantiates a new Accessmodelmetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessmodelmetadataWithDefaults

`func NewAccessmodelmetadataWithDefaults() *Accessmodelmetadata`

NewAccessmodelmetadataWithDefaults instantiates a new Accessmodelmetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Accessmodelmetadata) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Accessmodelmetadata) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Accessmodelmetadata) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *Accessmodelmetadata) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetName

`func (o *Accessmodelmetadata) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accessmodelmetadata) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accessmodelmetadata) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accessmodelmetadata) HasName() bool`

HasName returns a boolean if a field has been set.

### GetMultiselect

`func (o *Accessmodelmetadata) GetMultiselect() bool`

GetMultiselect returns the Multiselect field if non-nil, zero value otherwise.

### GetMultiselectOk

`func (o *Accessmodelmetadata) GetMultiselectOk() (*bool, bool)`

GetMultiselectOk returns a tuple with the Multiselect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiselect

`func (o *Accessmodelmetadata) SetMultiselect(v bool)`

SetMultiselect sets Multiselect field to given value.

### HasMultiselect

`func (o *Accessmodelmetadata) HasMultiselect() bool`

HasMultiselect returns a boolean if a field has been set.

### GetStatus

`func (o *Accessmodelmetadata) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Accessmodelmetadata) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Accessmodelmetadata) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Accessmodelmetadata) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *Accessmodelmetadata) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accessmodelmetadata) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accessmodelmetadata) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Accessmodelmetadata) HasType() bool`

HasType returns a boolean if a field has been set.

### GetObjectTypes

`func (o *Accessmodelmetadata) GetObjectTypes() []string`

GetObjectTypes returns the ObjectTypes field if non-nil, zero value otherwise.

### GetObjectTypesOk

`func (o *Accessmodelmetadata) GetObjectTypesOk() (*[]string, bool)`

GetObjectTypesOk returns a tuple with the ObjectTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectTypes

`func (o *Accessmodelmetadata) SetObjectTypes(v []string)`

SetObjectTypes sets ObjectTypes field to given value.

### HasObjectTypes

`func (o *Accessmodelmetadata) HasObjectTypes() bool`

HasObjectTypes returns a boolean if a field has been set.

### GetDescription

`func (o *Accessmodelmetadata) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Accessmodelmetadata) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Accessmodelmetadata) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Accessmodelmetadata) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetValues

`func (o *Accessmodelmetadata) GetValues() []AccessmodelmetadataValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Accessmodelmetadata) GetValuesOk() (*[]AccessmodelmetadataValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Accessmodelmetadata) SetValues(v []AccessmodelmetadataValuesInner)`

SetValues sets Values field to given value.

### HasValues

`func (o *Accessmodelmetadata) HasValues() bool`

HasValues returns a boolean if a field has been set.


