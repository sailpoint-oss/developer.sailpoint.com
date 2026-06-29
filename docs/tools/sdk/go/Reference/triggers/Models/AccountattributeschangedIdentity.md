---
id: v1-accountattributeschanged-identity
title: AccountattributeschangedIdentity
pagination_label: AccountattributeschangedIdentity
sidebar_label: AccountattributeschangedIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountattributeschangedIdentity', 'V1AccountattributeschangedIdentity'] 
slug: /tools/sdk/go/triggers/models/accountattributeschanged-identity
tags: ['SDK', 'Software Development Kit', 'AccountattributeschangedIdentity', 'V1AccountattributeschangedIdentity']
---

# AccountattributeschangedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | DTO type of the identity whose account attributes were updated. | 
**Id** | **string** | ID of the identity whose account attributes were updated. | 
**Name** | **string** | Display name of the identity whose account attributes were updated. | 

## Methods

### NewAccountattributeschangedIdentity

`func NewAccountattributeschangedIdentity(type_ string, id string, name string, ) *AccountattributeschangedIdentity`

NewAccountattributeschangedIdentity instantiates a new AccountattributeschangedIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountattributeschangedIdentityWithDefaults

`func NewAccountattributeschangedIdentityWithDefaults() *AccountattributeschangedIdentity`

NewAccountattributeschangedIdentityWithDefaults instantiates a new AccountattributeschangedIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountattributeschangedIdentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountattributeschangedIdentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountattributeschangedIdentity) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *AccountattributeschangedIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountattributeschangedIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountattributeschangedIdentity) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountattributeschangedIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountattributeschangedIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountattributeschangedIdentity) SetName(v string)`

SetName sets Name field to given value.



