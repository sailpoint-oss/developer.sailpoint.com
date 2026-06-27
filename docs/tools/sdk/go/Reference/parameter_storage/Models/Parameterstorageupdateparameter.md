---
id: v1-parameterstorageupdateparameter
title: Parameterstorageupdateparameter
pagination_label: Parameterstorageupdateparameter
sidebar_label: Parameterstorageupdateparameter
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Parameterstorageupdateparameter', 'V1Parameterstorageupdateparameter'] 
slug: /tools/sdk/go/parameterstorage/models/parameterstorageupdateparameter
tags: ['SDK', 'Software Development Kit', 'Parameterstorageupdateparameter', 'V1Parameterstorageupdateparameter']
---

# Parameterstorageupdateparameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnerId** | Pointer to **string** | The UUID of the parameter owner. | [optional] 
**Name** | Pointer to **string** | The human-readable name for the parameter. | [optional] 
**PublicFields** | Pointer to **map[string]interface{}** | The public fields that can be stored with this parameter. | [optional] 
**PrivateFields** | Pointer to **string** | The private fields that can be stored with this parameter. | [optional] 
**Description** | Pointer to **string** | Describe the parameter | [optional] 

## Methods

### NewParameterstorageupdateparameter

`func NewParameterstorageupdateparameter() *Parameterstorageupdateparameter`

NewParameterstorageupdateparameter instantiates a new Parameterstorageupdateparameter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewParameterstorageupdateparameterWithDefaults

`func NewParameterstorageupdateparameterWithDefaults() *Parameterstorageupdateparameter`

NewParameterstorageupdateparameterWithDefaults instantiates a new Parameterstorageupdateparameter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOwnerId

`func (o *Parameterstorageupdateparameter) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *Parameterstorageupdateparameter) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *Parameterstorageupdateparameter) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *Parameterstorageupdateparameter) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### GetName

`func (o *Parameterstorageupdateparameter) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Parameterstorageupdateparameter) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Parameterstorageupdateparameter) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Parameterstorageupdateparameter) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPublicFields

`func (o *Parameterstorageupdateparameter) GetPublicFields() map[string]interface{}`

GetPublicFields returns the PublicFields field if non-nil, zero value otherwise.

### GetPublicFieldsOk

`func (o *Parameterstorageupdateparameter) GetPublicFieldsOk() (*map[string]interface{}, bool)`

GetPublicFieldsOk returns a tuple with the PublicFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicFields

`func (o *Parameterstorageupdateparameter) SetPublicFields(v map[string]interface{})`

SetPublicFields sets PublicFields field to given value.

### HasPublicFields

`func (o *Parameterstorageupdateparameter) HasPublicFields() bool`

HasPublicFields returns a boolean if a field has been set.

### GetPrivateFields

`func (o *Parameterstorageupdateparameter) GetPrivateFields() string`

GetPrivateFields returns the PrivateFields field if non-nil, zero value otherwise.

### GetPrivateFieldsOk

`func (o *Parameterstorageupdateparameter) GetPrivateFieldsOk() (*string, bool)`

GetPrivateFieldsOk returns a tuple with the PrivateFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateFields

`func (o *Parameterstorageupdateparameter) SetPrivateFields(v string)`

SetPrivateFields sets PrivateFields field to given value.

### HasPrivateFields

`func (o *Parameterstorageupdateparameter) HasPrivateFields() bool`

HasPrivateFields returns a boolean if a field has been set.

### GetDescription

`func (o *Parameterstorageupdateparameter) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Parameterstorageupdateparameter) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Parameterstorageupdateparameter) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Parameterstorageupdateparameter) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


