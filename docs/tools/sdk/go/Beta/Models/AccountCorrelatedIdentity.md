---
id: account-correlated-identity
title: AccountCorrelatedIdentity
pagination_label: AccountCorrelatedIdentity
sidebar_label: AccountCorrelatedIdentity
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccountCorrelatedIdentity'] 
slug: /tools/sdk/go/beta/models/account-correlated-identity
tags: ['SDK', 'Software Development Kit', 'AccountCorrelatedIdentity']
---

# AccountCorrelatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **string** | DTO type of the identity the account is correlated with. | 
**Id** |  **string** | ID of the identity the account is correlated with. | 
**Name** |  **string** | Display name of the identity the account is correlated with. | 

## Methods

### NewAccountCorrelatedIdentity

`func NewAccountCorrelatedIdentity(type_ string, id string, name string, ) *AccountCorrelatedIdentity`

NewAccountCorrelatedIdentity instantiates a new AccountCorrelatedIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountCorrelatedIdentityWithDefaults

`func NewAccountCorrelatedIdentityWithDefaults() *AccountCorrelatedIdentity`

NewAccountCorrelatedIdentityWithDefaults instantiates a new AccountCorrelatedIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountCorrelatedIdentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountCorrelatedIdentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountCorrelatedIdentity) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *AccountCorrelatedIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountCorrelatedIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountCorrelatedIdentity) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountCorrelatedIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountCorrelatedIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountCorrelatedIdentity) SetName(v string)`

SetName sets Name field to given value.



[[Back to top]](#) 


