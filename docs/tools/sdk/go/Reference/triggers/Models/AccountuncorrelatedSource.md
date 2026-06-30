---
id: v1-accountuncorrelated-source
title: AccountuncorrelatedSource
pagination_label: AccountuncorrelatedSource
sidebar_label: AccountuncorrelatedSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountuncorrelatedSource', 'V1AccountuncorrelatedSource'] 
slug: /tools/sdk/go/triggers/models/accountuncorrelated-source
tags: ['SDK', 'Software Development Kit', 'AccountuncorrelatedSource', 'V1AccountuncorrelatedSource']
---

# AccountuncorrelatedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The DTO type of the source the accounts are uncorrelated from. | 
**Id** | **string** | The ID of the source the accounts are uncorrelated from. | 
**Name** | **string** | Display name of the source the accounts are uncorrelated from. | 

## Methods

### NewAccountuncorrelatedSource

`func NewAccountuncorrelatedSource(type_ string, id string, name string, ) *AccountuncorrelatedSource`

NewAccountuncorrelatedSource instantiates a new AccountuncorrelatedSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountuncorrelatedSourceWithDefaults

`func NewAccountuncorrelatedSourceWithDefaults() *AccountuncorrelatedSource`

NewAccountuncorrelatedSourceWithDefaults instantiates a new AccountuncorrelatedSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountuncorrelatedSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountuncorrelatedSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountuncorrelatedSource) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *AccountuncorrelatedSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountuncorrelatedSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountuncorrelatedSource) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountuncorrelatedSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountuncorrelatedSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountuncorrelatedSource) SetName(v string)`

SetName sets Name field to given value.



