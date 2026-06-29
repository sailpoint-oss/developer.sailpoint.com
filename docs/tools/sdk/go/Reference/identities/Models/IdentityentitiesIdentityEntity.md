---
id: v1-identityentities-identity-entity
title: IdentityentitiesIdentityEntity
pagination_label: IdentityentitiesIdentityEntity
sidebar_label: IdentityentitiesIdentityEntity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityentitiesIdentityEntity', 'V1IdentityentitiesIdentityEntity'] 
slug: /tools/sdk/go/identities/models/identityentities-identity-entity
tags: ['SDK', 'Software Development Kit', 'IdentityentitiesIdentityEntity', 'V1IdentityentitiesIdentityEntity']
---

# IdentityentitiesIdentityEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | id of the resource to which the identity is associated | [optional] 
**Name** | Pointer to **string** | name of the resource to which the identity is associated | [optional] 
**Type** | Pointer to **string** | type of the resource to which the identity is associated | [optional] 

## Methods

### NewIdentityentitiesIdentityEntity

`func NewIdentityentitiesIdentityEntity() *IdentityentitiesIdentityEntity`

NewIdentityentitiesIdentityEntity instantiates a new IdentityentitiesIdentityEntity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityentitiesIdentityEntityWithDefaults

`func NewIdentityentitiesIdentityEntityWithDefaults() *IdentityentitiesIdentityEntity`

NewIdentityentitiesIdentityEntityWithDefaults instantiates a new IdentityentitiesIdentityEntity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentityentitiesIdentityEntity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityentitiesIdentityEntity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityentitiesIdentityEntity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityentitiesIdentityEntity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IdentityentitiesIdentityEntity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityentitiesIdentityEntity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityentitiesIdentityEntity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IdentityentitiesIdentityEntity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *IdentityentitiesIdentityEntity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentityentitiesIdentityEntity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentityentitiesIdentityEntity) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *IdentityentitiesIdentityEntity) HasType() bool`

HasType returns a boolean if a field has been set.


