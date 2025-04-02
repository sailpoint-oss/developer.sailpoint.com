---
id: account-correlated-source
title: AccountCorrelatedSource
pagination_label: AccountCorrelatedSource
sidebar_label: AccountCorrelatedSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountCorrelatedSource', 'AccountCorrelatedSource'] 
slug: /tools/sdk/go//models/account-correlated-source
tags: ['SDK', 'Software Development Kit', 'AccountCorrelatedSource', 'AccountCorrelatedSource']
---

# AccountCorrelatedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The DTO type of the source the accounts are being correlated from. | 
**Id** | **string** | The ID of the source the accounts are being correlated from. | 
**Name** | **string** | Display name of the source the accounts are being correlated from. | 

## Methods

### NewAccountCorrelatedSource

`func NewAccountCorrelatedSource(type_ string, id string, name string, ) *AccountCorrelatedSource`

NewAccountCorrelatedSource instantiates a new AccountCorrelatedSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountCorrelatedSourceWithDefaults

`func NewAccountCorrelatedSourceWithDefaults() *AccountCorrelatedSource`

NewAccountCorrelatedSourceWithDefaults instantiates a new AccountCorrelatedSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountCorrelatedSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountCorrelatedSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountCorrelatedSource) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *AccountCorrelatedSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountCorrelatedSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountCorrelatedSource) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountCorrelatedSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountCorrelatedSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountCorrelatedSource) SetName(v string)`

SetName sets Name field to given value.



