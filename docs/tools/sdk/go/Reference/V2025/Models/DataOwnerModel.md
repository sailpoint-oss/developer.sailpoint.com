---
id: v2025-data-owner-model
title: DataOwnerModel
pagination_label: DataOwnerModel
sidebar_label: DataOwnerModel
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DataOwnerModel', 'V2025DataOwnerModel'] 
slug: /tools/sdk/go/v2025/models/data-owner-model
tags: ['SDK', 'Software Development Kit', 'DataOwnerModel', 'V2025DataOwnerModel']
---

# DataOwnerModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | The unique identifier (UUID) of the identity assigned as the owner of the resource. | [optional] 
**ResourceId** | Pointer to **int64** | The unique identifier of the resource owned by the identity. | [optional] 
**FullPath** | Pointer to **NullableString** | The full path to the resource within the system or application. | [optional] 

## Methods

### NewDataOwnerModel

`func NewDataOwnerModel() *DataOwnerModel`

NewDataOwnerModel instantiates a new DataOwnerModel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataOwnerModelWithDefaults

`func NewDataOwnerModelWithDefaults() *DataOwnerModel`

NewDataOwnerModelWithDefaults instantiates a new DataOwnerModel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *DataOwnerModel) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *DataOwnerModel) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *DataOwnerModel) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *DataOwnerModel) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetResourceId

`func (o *DataOwnerModel) GetResourceId() int64`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *DataOwnerModel) GetResourceIdOk() (*int64, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *DataOwnerModel) SetResourceId(v int64)`

SetResourceId sets ResourceId field to given value.

### HasResourceId

`func (o *DataOwnerModel) HasResourceId() bool`

HasResourceId returns a boolean if a field has been set.

### GetFullPath

`func (o *DataOwnerModel) GetFullPath() string`

GetFullPath returns the FullPath field if non-nil, zero value otherwise.

### GetFullPathOk

`func (o *DataOwnerModel) GetFullPathOk() (*string, bool)`

GetFullPathOk returns a tuple with the FullPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullPath

`func (o *DataOwnerModel) SetFullPath(v string)`

SetFullPath sets FullPath field to given value.

### HasFullPath

`func (o *DataOwnerModel) HasFullPath() bool`

HasFullPath returns a boolean if a field has been set.

### SetFullPathNil

`func (o *DataOwnerModel) SetFullPathNil(b bool)`

 SetFullPathNil sets the value for FullPath to be an explicit nil

### UnsetFullPath
`func (o *DataOwnerModel) UnsetFullPath()`

UnsetFullPath ensures that no value is present for FullPath, not even an explicit nil

