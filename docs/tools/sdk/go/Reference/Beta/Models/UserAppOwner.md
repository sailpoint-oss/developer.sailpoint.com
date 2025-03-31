---
id: beta-user-app-owner
title: UserAppOwner
pagination_label: UserAppOwner
sidebar_label: UserAppOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UserAppOwner', 'BetaUserAppOwner'] 
slug: /tools/sdk/go/beta/models/user-app-owner
tags: ['SDK', 'Software Development Kit', 'UserAppOwner', 'BetaUserAppOwner']
---

# UserAppOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The identity ID | [optional] 
**Type** | Pointer to **string** | It will always be \&quot;IDENTITY\&quot; | [optional] 
**Name** | Pointer to **string** | The identity name | [optional] 
**Alias** | Pointer to **string** | The identity alias | [optional] 

## Methods

### NewUserAppOwner

`func NewUserAppOwner() *UserAppOwner`

NewUserAppOwner instantiates a new UserAppOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserAppOwnerWithDefaults

`func NewUserAppOwnerWithDefaults() *UserAppOwner`

NewUserAppOwnerWithDefaults instantiates a new UserAppOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *UserAppOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UserAppOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UserAppOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *UserAppOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *UserAppOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *UserAppOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *UserAppOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *UserAppOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *UserAppOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UserAppOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UserAppOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UserAppOwner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAlias

`func (o *UserAppOwner) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *UserAppOwner) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *UserAppOwner) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *UserAppOwner) HasAlias() bool`

HasAlias returns a boolean if a field has been set.


