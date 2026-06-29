---
id: v1-dataownermodel
title: Dataownermodel
pagination_label: Dataownermodel
sidebar_label: Dataownermodel
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dataownermodel', 'V1Dataownermodel'] 
slug: /tools/sdk/go/dataaccesssecurity/models/dataownermodel
tags: ['SDK', 'Software Development Kit', 'Dataownermodel', 'V1Dataownermodel']
---

# Dataownermodel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | The unique identifier (UUID) of the identity assigned as the owner of the resource. | [optional] 
**ResourceId** | Pointer to **int64** | The unique identifier of the resource owned by the identity. | [optional] 
**FullPath** | Pointer to **NullableString** | The full path to the resource within the system or application. | [optional] 

## Methods

### NewDataownermodel

`func NewDataownermodel() *Dataownermodel`

NewDataownermodel instantiates a new Dataownermodel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataownermodelWithDefaults

`func NewDataownermodelWithDefaults() *Dataownermodel`

NewDataownermodelWithDefaults instantiates a new Dataownermodel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *Dataownermodel) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Dataownermodel) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Dataownermodel) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Dataownermodel) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetResourceId

`func (o *Dataownermodel) GetResourceId() int64`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *Dataownermodel) GetResourceIdOk() (*int64, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *Dataownermodel) SetResourceId(v int64)`

SetResourceId sets ResourceId field to given value.

### HasResourceId

`func (o *Dataownermodel) HasResourceId() bool`

HasResourceId returns a boolean if a field has been set.

### GetFullPath

`func (o *Dataownermodel) GetFullPath() string`

GetFullPath returns the FullPath field if non-nil, zero value otherwise.

### GetFullPathOk

`func (o *Dataownermodel) GetFullPathOk() (*string, bool)`

GetFullPathOk returns a tuple with the FullPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullPath

`func (o *Dataownermodel) SetFullPath(v string)`

SetFullPath sets FullPath field to given value.

### HasFullPath

`func (o *Dataownermodel) HasFullPath() bool`

HasFullPath returns a boolean if a field has been set.

### SetFullPathNil

`func (o *Dataownermodel) SetFullPathNil(b bool)`

 SetFullPathNil sets the value for FullPath to be an explicit nil

### UnsetFullPath
`func (o *Dataownermodel) UnsetFullPath()`

UnsetFullPath ensures that no value is present for FullPath, not even an explicit nil

