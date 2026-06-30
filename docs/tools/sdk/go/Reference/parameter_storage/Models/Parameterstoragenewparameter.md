---
id: v1-parameterstoragenewparameter
title: Parameterstoragenewparameter
pagination_label: Parameterstoragenewparameter
sidebar_label: Parameterstoragenewparameter
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Parameterstoragenewparameter', 'V1Parameterstoragenewparameter'] 
slug: /tools/sdk/go/parameterstorage/models/parameterstoragenewparameter
tags: ['SDK', 'Software Development Kit', 'Parameterstoragenewparameter', 'V1Parameterstoragenewparameter']
---

# Parameterstoragenewparameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnerId** | **string** | The UUID of the parameter owner. | 
**Name** | **string** | The human-readable name for the parameter. | 
**Type** | **string** | The type of the parameter. This cannot be changed after being set. Please see the types document for more information. | 
**PublicFields** | Pointer to **map[string]interface{}** | The content must be a JSON object containing the public fields that can be stored with this parameter. | [optional] 
**PrivateFields** | Pointer to **string** | Must be a JWE AES256 encrypted blob. The content of the blob must be a JSON object containing the private fields that can be stored with this parameter.  | [optional] 
**Description** | Pointer to **string** | Describe the parameter | [optional] 

## Methods

### NewParameterstoragenewparameter

`func NewParameterstoragenewparameter(ownerId string, name string, type_ string, ) *Parameterstoragenewparameter`

NewParameterstoragenewparameter instantiates a new Parameterstoragenewparameter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewParameterstoragenewparameterWithDefaults

`func NewParameterstoragenewparameterWithDefaults() *Parameterstoragenewparameter`

NewParameterstoragenewparameterWithDefaults instantiates a new Parameterstoragenewparameter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOwnerId

`func (o *Parameterstoragenewparameter) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *Parameterstoragenewparameter) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *Parameterstoragenewparameter) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.


### GetName

`func (o *Parameterstoragenewparameter) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Parameterstoragenewparameter) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Parameterstoragenewparameter) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *Parameterstoragenewparameter) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Parameterstoragenewparameter) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Parameterstoragenewparameter) SetType(v string)`

SetType sets Type field to given value.


### GetPublicFields

`func (o *Parameterstoragenewparameter) GetPublicFields() map[string]interface{}`

GetPublicFields returns the PublicFields field if non-nil, zero value otherwise.

### GetPublicFieldsOk

`func (o *Parameterstoragenewparameter) GetPublicFieldsOk() (*map[string]interface{}, bool)`

GetPublicFieldsOk returns a tuple with the PublicFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicFields

`func (o *Parameterstoragenewparameter) SetPublicFields(v map[string]interface{})`

SetPublicFields sets PublicFields field to given value.

### HasPublicFields

`func (o *Parameterstoragenewparameter) HasPublicFields() bool`

HasPublicFields returns a boolean if a field has been set.

### GetPrivateFields

`func (o *Parameterstoragenewparameter) GetPrivateFields() string`

GetPrivateFields returns the PrivateFields field if non-nil, zero value otherwise.

### GetPrivateFieldsOk

`func (o *Parameterstoragenewparameter) GetPrivateFieldsOk() (*string, bool)`

GetPrivateFieldsOk returns a tuple with the PrivateFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateFields

`func (o *Parameterstoragenewparameter) SetPrivateFields(v string)`

SetPrivateFields sets PrivateFields field to given value.

### HasPrivateFields

`func (o *Parameterstoragenewparameter) HasPrivateFields() bool`

HasPrivateFields returns a boolean if a field has been set.

### GetDescription

`func (o *Parameterstoragenewparameter) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Parameterstoragenewparameter) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Parameterstoragenewparameter) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Parameterstoragenewparameter) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


