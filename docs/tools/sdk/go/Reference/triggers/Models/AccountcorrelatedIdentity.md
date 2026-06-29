---
id: v1-accountcorrelated-identity
title: AccountcorrelatedIdentity
pagination_label: AccountcorrelatedIdentity
sidebar_label: AccountcorrelatedIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountcorrelatedIdentity', 'V1AccountcorrelatedIdentity'] 
slug: /tools/sdk/go/triggers/models/accountcorrelated-identity
tags: ['SDK', 'Software Development Kit', 'AccountcorrelatedIdentity', 'V1AccountcorrelatedIdentity']
---

# AccountcorrelatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | DTO type of the identity the account is correlated with. | 
**Id** | **string** | ID of the identity the account is correlated with. | 
**Name** | **string** | Display name of the identity the account is correlated with. | 

## Methods

### NewAccountcorrelatedIdentity

`func NewAccountcorrelatedIdentity(type_ string, id string, name string, ) *AccountcorrelatedIdentity`

NewAccountcorrelatedIdentity instantiates a new AccountcorrelatedIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountcorrelatedIdentityWithDefaults

`func NewAccountcorrelatedIdentityWithDefaults() *AccountcorrelatedIdentity`

NewAccountcorrelatedIdentityWithDefaults instantiates a new AccountcorrelatedIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountcorrelatedIdentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountcorrelatedIdentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountcorrelatedIdentity) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *AccountcorrelatedIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountcorrelatedIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountcorrelatedIdentity) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountcorrelatedIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountcorrelatedIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountcorrelatedIdentity) SetName(v string)`

SetName sets Name field to given value.



