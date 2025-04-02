---
id: identity-entities-identity-entity
title: IdentityEntitiesIdentityEntity
pagination_label: IdentityEntitiesIdentityEntity
sidebar_label: IdentityEntitiesIdentityEntity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityEntitiesIdentityEntity', 'IdentityEntitiesIdentityEntity'] 
slug: /tools/sdk/go//models/identity-entities-identity-entity
tags: ['SDK', 'Software Development Kit', 'IdentityEntitiesIdentityEntity', 'IdentityEntitiesIdentityEntity']
---

# IdentityEntitiesIdentityEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | id of the resource to which the identity is associated | [optional] 
**Name** | Pointer to **string** | name of the resource to which the identity is associated | [optional] 
**Type** | Pointer to **string** | type of the resource to which the identity is associated | [optional] 

## Methods

### NewIdentityEntitiesIdentityEntity

`func NewIdentityEntitiesIdentityEntity() *IdentityEntitiesIdentityEntity`

NewIdentityEntitiesIdentityEntity instantiates a new IdentityEntitiesIdentityEntity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityEntitiesIdentityEntityWithDefaults

`func NewIdentityEntitiesIdentityEntityWithDefaults() *IdentityEntitiesIdentityEntity`

NewIdentityEntitiesIdentityEntityWithDefaults instantiates a new IdentityEntitiesIdentityEntity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentityEntitiesIdentityEntity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityEntitiesIdentityEntity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityEntitiesIdentityEntity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityEntitiesIdentityEntity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IdentityEntitiesIdentityEntity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityEntitiesIdentityEntity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityEntitiesIdentityEntity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IdentityEntitiesIdentityEntity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *IdentityEntitiesIdentityEntity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentityEntitiesIdentityEntity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentityEntitiesIdentityEntity) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *IdentityEntitiesIdentityEntity) HasType() bool`

HasType returns a boolean if a field has been set.


