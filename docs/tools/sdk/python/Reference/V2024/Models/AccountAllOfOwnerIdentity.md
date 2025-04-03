---
id: v2024-account-all-of-owner-identity
title: AccountAllOfOwnerIdentity
pagination_label: AccountAllOfOwnerIdentity
sidebar_label: AccountAllOfOwnerIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountAllOfOwnerIdentity', 'V2024AccountAllOfOwnerIdentity'] 
slug: /tools/sdk/go/v2024/models/account-all-of-owner-identity
tags: ['SDK', 'Software Development Kit', 'AccountAllOfOwnerIdentity', 'V2024AccountAllOfOwnerIdentity']
---

# AccountAllOfOwnerIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewAccountAllOfOwnerIdentity

`func NewAccountAllOfOwnerIdentity() *AccountAllOfOwnerIdentity`

NewAccountAllOfOwnerIdentity instantiates a new AccountAllOfOwnerIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountAllOfOwnerIdentityWithDefaults

`func NewAccountAllOfOwnerIdentityWithDefaults() *AccountAllOfOwnerIdentity`

NewAccountAllOfOwnerIdentityWithDefaults instantiates a new AccountAllOfOwnerIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountAllOfOwnerIdentity) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountAllOfOwnerIdentity) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountAllOfOwnerIdentity) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *AccountAllOfOwnerIdentity) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AccountAllOfOwnerIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountAllOfOwnerIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountAllOfOwnerIdentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountAllOfOwnerIdentity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccountAllOfOwnerIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountAllOfOwnerIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountAllOfOwnerIdentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountAllOfOwnerIdentity) HasName() bool`

HasName returns a boolean if a field has been set.


