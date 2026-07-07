---
id: v1-accountuncorrelated-identity
title: AccountuncorrelatedIdentity
pagination_label: AccountuncorrelatedIdentity
sidebar_label: AccountuncorrelatedIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountuncorrelatedIdentity', 'V1AccountuncorrelatedIdentity'] 
slug: /tools/sdk/go/triggers/models/accountuncorrelated-identity
tags: ['SDK', 'Software Development Kit', 'AccountuncorrelatedIdentity', 'V1AccountuncorrelatedIdentity']
---

# AccountuncorrelatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | DTO type of the identity the account is uncorrelated with. | 
**Id** | **string** | ID of the identity the account is uncorrelated with. | 
**Name** | **string** | Display name of the identity the account is uncorrelated with. | 

## Methods

### NewAccountuncorrelatedIdentity

`func NewAccountuncorrelatedIdentity(type_ string, id string, name string, ) *AccountuncorrelatedIdentity`

NewAccountuncorrelatedIdentity instantiates a new AccountuncorrelatedIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountuncorrelatedIdentityWithDefaults

`func NewAccountuncorrelatedIdentityWithDefaults() *AccountuncorrelatedIdentity`

NewAccountuncorrelatedIdentityWithDefaults instantiates a new AccountuncorrelatedIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountuncorrelatedIdentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountuncorrelatedIdentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountuncorrelatedIdentity) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *AccountuncorrelatedIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountuncorrelatedIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountuncorrelatedIdentity) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountuncorrelatedIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountuncorrelatedIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountuncorrelatedIdentity) SetName(v string)`

SetName sets Name field to given value.



