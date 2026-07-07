---
id: v1-userapp-owner
title: UserappOwner
pagination_label: UserappOwner
sidebar_label: UserappOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UserappOwner', 'V1UserappOwner'] 
slug: /tools/sdk/go/apps/models/userapp-owner
tags: ['SDK', 'Software Development Kit', 'UserappOwner', 'V1UserappOwner']
---

# UserappOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The identity ID | [optional] 
**Type** | Pointer to **string** | It will always be \"IDENTITY\" | [optional] 
**Name** | Pointer to **string** | The identity name | [optional] 
**Alias** | Pointer to **string** | The identity alias | [optional] 

## Methods

### NewUserappOwner

`func NewUserappOwner() *UserappOwner`

NewUserappOwner instantiates a new UserappOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserappOwnerWithDefaults

`func NewUserappOwnerWithDefaults() *UserappOwner`

NewUserappOwnerWithDefaults instantiates a new UserappOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *UserappOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UserappOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UserappOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *UserappOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *UserappOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *UserappOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *UserappOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *UserappOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *UserappOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UserappOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UserappOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UserappOwner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAlias

`func (o *UserappOwner) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *UserappOwner) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *UserappOwner) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *UserappOwner) HasAlias() bool`

HasAlias returns a boolean if a field has been set.


