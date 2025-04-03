---
id: v2025-account-attributes-changed-identity
title: AccountAttributesChangedIdentity
pagination_label: AccountAttributesChangedIdentity
sidebar_label: AccountAttributesChangedIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountAttributesChangedIdentity', 'V2025AccountAttributesChangedIdentity'] 
slug: /tools/sdk/go/v2025/models/account-attributes-changed-identity
tags: ['SDK', 'Software Development Kit', 'AccountAttributesChangedIdentity', 'V2025AccountAttributesChangedIdentity']
---

# AccountAttributesChangedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | DTO type of the identity whose account attributes were updated. | 
**Id** | **string** | ID of the identity whose account attributes were updated. | 
**Name** | **string** | Display name of the identity whose account attributes were updated. | 

## Methods

### NewAccountAttributesChangedIdentity

`func NewAccountAttributesChangedIdentity(type_ string, id string, name string, ) *AccountAttributesChangedIdentity`

NewAccountAttributesChangedIdentity instantiates a new AccountAttributesChangedIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountAttributesChangedIdentityWithDefaults

`func NewAccountAttributesChangedIdentityWithDefaults() *AccountAttributesChangedIdentity`

NewAccountAttributesChangedIdentityWithDefaults instantiates a new AccountAttributesChangedIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountAttributesChangedIdentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountAttributesChangedIdentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountAttributesChangedIdentity) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *AccountAttributesChangedIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountAttributesChangedIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountAttributesChangedIdentity) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountAttributesChangedIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountAttributesChangedIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountAttributesChangedIdentity) SetName(v string)`

SetName sets Name field to given value.



