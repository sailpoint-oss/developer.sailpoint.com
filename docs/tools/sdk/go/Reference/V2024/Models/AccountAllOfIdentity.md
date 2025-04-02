---
id: v2024-account-all-of-identity
title: AccountAllOfIdentity
pagination_label: AccountAllOfIdentity
sidebar_label: AccountAllOfIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountAllOfIdentity', 'V2024AccountAllOfIdentity'] 
slug: /tools/sdk/go/v2024/models/account-all-of-identity
tags: ['SDK', 'Software Development Kit', 'AccountAllOfIdentity', 'V2024AccountAllOfIdentity']
---

# AccountAllOfIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the identity | [optional] 
**Type** | Pointer to **string** | The type of object being referenced | [optional] 
**Name** | Pointer to **string** | display name of identity | [optional] 

## Methods

### NewAccountAllOfIdentity

`func NewAccountAllOfIdentity() *AccountAllOfIdentity`

NewAccountAllOfIdentity instantiates a new AccountAllOfIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountAllOfIdentityWithDefaults

`func NewAccountAllOfIdentityWithDefaults() *AccountAllOfIdentity`

NewAccountAllOfIdentityWithDefaults instantiates a new AccountAllOfIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountAllOfIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountAllOfIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountAllOfIdentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountAllOfIdentity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *AccountAllOfIdentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountAllOfIdentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountAllOfIdentity) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccountAllOfIdentity) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *AccountAllOfIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountAllOfIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountAllOfIdentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountAllOfIdentity) HasName() bool`

HasName returns a boolean if a field has been set.


