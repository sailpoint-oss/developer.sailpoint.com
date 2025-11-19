---
id: v2025-parameter-storage-update-parameter
title: ParameterStorageUpdateParameter
pagination_label: ParameterStorageUpdateParameter
sidebar_label: ParameterStorageUpdateParameter
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ParameterStorageUpdateParameter', 'V2025ParameterStorageUpdateParameter'] 
slug: /tools/sdk/go/v2025/models/parameter-storage-update-parameter
tags: ['SDK', 'Software Development Kit', 'ParameterStorageUpdateParameter', 'V2025ParameterStorageUpdateParameter']
---

# ParameterStorageUpdateParameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnerId** | Pointer to **string** | The UUID of the parameter owner. | [optional] 
**Name** | Pointer to **string** | The human-readable name for the parameter. | [optional] 
**PublicFields** | Pointer to **map[string]interface{}** | The public fields that can be stored with this parameter. | [optional] 
**PrivateFields** | Pointer to **string** | The private fields that can be stored with this parameter. | [optional] 
**Description** | Pointer to **string** | Describe the parameter | [optional] 

## Methods

### NewParameterStorageUpdateParameter

`func NewParameterStorageUpdateParameter() *ParameterStorageUpdateParameter`

NewParameterStorageUpdateParameter instantiates a new ParameterStorageUpdateParameter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewParameterStorageUpdateParameterWithDefaults

`func NewParameterStorageUpdateParameterWithDefaults() *ParameterStorageUpdateParameter`

NewParameterStorageUpdateParameterWithDefaults instantiates a new ParameterStorageUpdateParameter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOwnerId

`func (o *ParameterStorageUpdateParameter) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *ParameterStorageUpdateParameter) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *ParameterStorageUpdateParameter) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *ParameterStorageUpdateParameter) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### GetName

`func (o *ParameterStorageUpdateParameter) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ParameterStorageUpdateParameter) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ParameterStorageUpdateParameter) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ParameterStorageUpdateParameter) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPublicFields

`func (o *ParameterStorageUpdateParameter) GetPublicFields() map[string]interface{}`

GetPublicFields returns the PublicFields field if non-nil, zero value otherwise.

### GetPublicFieldsOk

`func (o *ParameterStorageUpdateParameter) GetPublicFieldsOk() (*map[string]interface{}, bool)`

GetPublicFieldsOk returns a tuple with the PublicFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicFields

`func (o *ParameterStorageUpdateParameter) SetPublicFields(v map[string]interface{})`

SetPublicFields sets PublicFields field to given value.

### HasPublicFields

`func (o *ParameterStorageUpdateParameter) HasPublicFields() bool`

HasPublicFields returns a boolean if a field has been set.

### GetPrivateFields

`func (o *ParameterStorageUpdateParameter) GetPrivateFields() string`

GetPrivateFields returns the PrivateFields field if non-nil, zero value otherwise.

### GetPrivateFieldsOk

`func (o *ParameterStorageUpdateParameter) GetPrivateFieldsOk() (*string, bool)`

GetPrivateFieldsOk returns a tuple with the PrivateFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateFields

`func (o *ParameterStorageUpdateParameter) SetPrivateFields(v string)`

SetPrivateFields sets PrivateFields field to given value.

### HasPrivateFields

`func (o *ParameterStorageUpdateParameter) HasPrivateFields() bool`

HasPrivateFields returns a boolean if a field has been set.

### GetDescription

`func (o *ParameterStorageUpdateParameter) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ParameterStorageUpdateParameter) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ParameterStorageUpdateParameter) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ParameterStorageUpdateParameter) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


