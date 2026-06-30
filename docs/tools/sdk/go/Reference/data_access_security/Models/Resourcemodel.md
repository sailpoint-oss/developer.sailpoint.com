---
id: v1-resourcemodel
title: Resourcemodel
pagination_label: Resourcemodel
sidebar_label: Resourcemodel
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Resourcemodel', 'V1Resourcemodel'] 
slug: /tools/sdk/go/dataaccesssecurity/models/resourcemodel
tags: ['SDK', 'Software Development Kit', 'Resourcemodel', 'V1Resourcemodel']
---

# Resourcemodel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** | The unique identifier for the resource. | [optional] 
**Name** | Pointer to **NullableString** | The display name or label for the resource. | [optional] 
**FullPath** | Pointer to **NullableString** | The full path to the resource within the system or application. | [optional] 
**ApplicationId** | Pointer to **int64** | The unique identifier of the application to which this resource belongs. | [optional] 
**Type** | Pointer to [**Businessservicetype**](businessservicetype) |  | [optional] 
**Owners** | Pointer to **[]string** | A list of UUIDs representing the owners of the resource. | [optional] 

## Methods

### NewResourcemodel

`func NewResourcemodel() *Resourcemodel`

NewResourcemodel instantiates a new Resourcemodel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResourcemodelWithDefaults

`func NewResourcemodelWithDefaults() *Resourcemodel`

NewResourcemodelWithDefaults instantiates a new Resourcemodel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Resourcemodel) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Resourcemodel) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Resourcemodel) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *Resourcemodel) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Resourcemodel) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Resourcemodel) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Resourcemodel) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Resourcemodel) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Resourcemodel) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Resourcemodel) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetFullPath

`func (o *Resourcemodel) GetFullPath() string`

GetFullPath returns the FullPath field if non-nil, zero value otherwise.

### GetFullPathOk

`func (o *Resourcemodel) GetFullPathOk() (*string, bool)`

GetFullPathOk returns a tuple with the FullPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullPath

`func (o *Resourcemodel) SetFullPath(v string)`

SetFullPath sets FullPath field to given value.

### HasFullPath

`func (o *Resourcemodel) HasFullPath() bool`

HasFullPath returns a boolean if a field has been set.

### SetFullPathNil

`func (o *Resourcemodel) SetFullPathNil(b bool)`

 SetFullPathNil sets the value for FullPath to be an explicit nil

### UnsetFullPath
`func (o *Resourcemodel) UnsetFullPath()`

UnsetFullPath ensures that no value is present for FullPath, not even an explicit nil
### GetApplicationId

`func (o *Resourcemodel) GetApplicationId() int64`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *Resourcemodel) GetApplicationIdOk() (*int64, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *Resourcemodel) SetApplicationId(v int64)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *Resourcemodel) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### GetType

`func (o *Resourcemodel) GetType() Businessservicetype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Resourcemodel) GetTypeOk() (*Businessservicetype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Resourcemodel) SetType(v Businessservicetype)`

SetType sets Type field to given value.

### HasType

`func (o *Resourcemodel) HasType() bool`

HasType returns a boolean if a field has been set.

### GetOwners

`func (o *Resourcemodel) GetOwners() []string`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *Resourcemodel) GetOwnersOk() (*[]string, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *Resourcemodel) SetOwners(v []string)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *Resourcemodel) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### SetOwnersNil

`func (o *Resourcemodel) SetOwnersNil(b bool)`

 SetOwnersNil sets the value for Owners to be an explicit nil

### UnsetOwners
`func (o *Resourcemodel) UnsetOwners()`

UnsetOwners ensures that no value is present for Owners, not even an explicit nil

