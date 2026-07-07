---
id: v1-parameterstorageparameter
title: Parameterstorageparameter
pagination_label: Parameterstorageparameter
sidebar_label: Parameterstorageparameter
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Parameterstorageparameter', 'V1Parameterstorageparameter'] 
slug: /tools/sdk/go/parameterstorage/models/parameterstorageparameter
tags: ['SDK', 'Software Development Kit', 'Parameterstorageparameter', 'V1Parameterstorageparameter']
---

# Parameterstorageparameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The ID of the reference | 
**OwnerId** | **string** | The ID of the user who owns the parameter. | 
**Type** | Pointer to **string** | The type of the parameter. This cannot be changed after being set. Please see the types document for more information. | [optional] 
**Name** | **string** | The human-readable name of the parameter. | 
**PrimaryField** | Pointer to **string** | The name of the primary field in the public fields. | [optional] 
**PublicFields** | **map[string]interface{}** | The public fields stored for this parameter. See the types document for information about what can be stored. | 
**Description** | Pointer to **string** | Describe the parameter | [optional] 
**LastModifiedAt** | Pointer to **string** | ISO8606 format datetime of the last time any field of the parameter was changed. | [optional] 
**LastModifiedBy** | Pointer to **string** | The ID of the user who last modified the parameter. Empty when identity is not known. | [optional] 
**PrivateFieldsLastModifiedAt** | Pointer to **string** | ISO8606 format datetime of the time the secret fields were changed on the parameter. | [optional] 
**PrivateFieldsLastModifiedBy** | Pointer to **string** | The ID of the user who last modified the private fields. Empty when identity is not known. | [optional] 

## Methods

### NewParameterstorageparameter

`func NewParameterstorageparameter(id string, ownerId string, name string, publicFields map[string]interface{}, ) *Parameterstorageparameter`

NewParameterstorageparameter instantiates a new Parameterstorageparameter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewParameterstorageparameterWithDefaults

`func NewParameterstorageparameterWithDefaults() *Parameterstorageparameter`

NewParameterstorageparameterWithDefaults instantiates a new Parameterstorageparameter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Parameterstorageparameter) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Parameterstorageparameter) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Parameterstorageparameter) SetId(v string)`

SetId sets Id field to given value.


### GetOwnerId

`func (o *Parameterstorageparameter) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *Parameterstorageparameter) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *Parameterstorageparameter) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.


### GetType

`func (o *Parameterstorageparameter) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Parameterstorageparameter) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Parameterstorageparameter) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Parameterstorageparameter) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *Parameterstorageparameter) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Parameterstorageparameter) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Parameterstorageparameter) SetName(v string)`

SetName sets Name field to given value.


### GetPrimaryField

`func (o *Parameterstorageparameter) GetPrimaryField() string`

GetPrimaryField returns the PrimaryField field if non-nil, zero value otherwise.

### GetPrimaryFieldOk

`func (o *Parameterstorageparameter) GetPrimaryFieldOk() (*string, bool)`

GetPrimaryFieldOk returns a tuple with the PrimaryField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryField

`func (o *Parameterstorageparameter) SetPrimaryField(v string)`

SetPrimaryField sets PrimaryField field to given value.

### HasPrimaryField

`func (o *Parameterstorageparameter) HasPrimaryField() bool`

HasPrimaryField returns a boolean if a field has been set.

### GetPublicFields

`func (o *Parameterstorageparameter) GetPublicFields() map[string]interface{}`

GetPublicFields returns the PublicFields field if non-nil, zero value otherwise.

### GetPublicFieldsOk

`func (o *Parameterstorageparameter) GetPublicFieldsOk() (*map[string]interface{}, bool)`

GetPublicFieldsOk returns a tuple with the PublicFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicFields

`func (o *Parameterstorageparameter) SetPublicFields(v map[string]interface{})`

SetPublicFields sets PublicFields field to given value.


### GetDescription

`func (o *Parameterstorageparameter) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Parameterstorageparameter) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Parameterstorageparameter) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Parameterstorageparameter) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLastModifiedAt

`func (o *Parameterstorageparameter) GetLastModifiedAt() string`

GetLastModifiedAt returns the LastModifiedAt field if non-nil, zero value otherwise.

### GetLastModifiedAtOk

`func (o *Parameterstorageparameter) GetLastModifiedAtOk() (*string, bool)`

GetLastModifiedAtOk returns a tuple with the LastModifiedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifiedAt

`func (o *Parameterstorageparameter) SetLastModifiedAt(v string)`

SetLastModifiedAt sets LastModifiedAt field to given value.

### HasLastModifiedAt

`func (o *Parameterstorageparameter) HasLastModifiedAt() bool`

HasLastModifiedAt returns a boolean if a field has been set.

### GetLastModifiedBy

`func (o *Parameterstorageparameter) GetLastModifiedBy() string`

GetLastModifiedBy returns the LastModifiedBy field if non-nil, zero value otherwise.

### GetLastModifiedByOk

`func (o *Parameterstorageparameter) GetLastModifiedByOk() (*string, bool)`

GetLastModifiedByOk returns a tuple with the LastModifiedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifiedBy

`func (o *Parameterstorageparameter) SetLastModifiedBy(v string)`

SetLastModifiedBy sets LastModifiedBy field to given value.

### HasLastModifiedBy

`func (o *Parameterstorageparameter) HasLastModifiedBy() bool`

HasLastModifiedBy returns a boolean if a field has been set.

### GetPrivateFieldsLastModifiedAt

`func (o *Parameterstorageparameter) GetPrivateFieldsLastModifiedAt() string`

GetPrivateFieldsLastModifiedAt returns the PrivateFieldsLastModifiedAt field if non-nil, zero value otherwise.

### GetPrivateFieldsLastModifiedAtOk

`func (o *Parameterstorageparameter) GetPrivateFieldsLastModifiedAtOk() (*string, bool)`

GetPrivateFieldsLastModifiedAtOk returns a tuple with the PrivateFieldsLastModifiedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateFieldsLastModifiedAt

`func (o *Parameterstorageparameter) SetPrivateFieldsLastModifiedAt(v string)`

SetPrivateFieldsLastModifiedAt sets PrivateFieldsLastModifiedAt field to given value.

### HasPrivateFieldsLastModifiedAt

`func (o *Parameterstorageparameter) HasPrivateFieldsLastModifiedAt() bool`

HasPrivateFieldsLastModifiedAt returns a boolean if a field has been set.

### GetPrivateFieldsLastModifiedBy

`func (o *Parameterstorageparameter) GetPrivateFieldsLastModifiedBy() string`

GetPrivateFieldsLastModifiedBy returns the PrivateFieldsLastModifiedBy field if non-nil, zero value otherwise.

### GetPrivateFieldsLastModifiedByOk

`func (o *Parameterstorageparameter) GetPrivateFieldsLastModifiedByOk() (*string, bool)`

GetPrivateFieldsLastModifiedByOk returns a tuple with the PrivateFieldsLastModifiedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateFieldsLastModifiedBy

`func (o *Parameterstorageparameter) SetPrivateFieldsLastModifiedBy(v string)`

SetPrivateFieldsLastModifiedBy sets PrivateFieldsLastModifiedBy field to given value.

### HasPrivateFieldsLastModifiedBy

`func (o *Parameterstorageparameter) HasPrivateFieldsLastModifiedBy() bool`

HasPrivateFieldsLastModifiedBy returns a boolean if a field has been set.


