---
id: v1-accountcorrelated-source
title: AccountcorrelatedSource
pagination_label: AccountcorrelatedSource
sidebar_label: AccountcorrelatedSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountcorrelatedSource', 'V1AccountcorrelatedSource'] 
slug: /tools/sdk/go/triggers/models/accountcorrelated-source
tags: ['SDK', 'Software Development Kit', 'AccountcorrelatedSource', 'V1AccountcorrelatedSource']
---

# AccountcorrelatedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The DTO type of the source the accounts are being correlated from. | 
**Id** | **string** | The ID of the source the accounts are being correlated from. | 
**Name** | **string** | Display name of the source the accounts are being correlated from. | 

## Methods

### NewAccountcorrelatedSource

`func NewAccountcorrelatedSource(type_ string, id string, name string, ) *AccountcorrelatedSource`

NewAccountcorrelatedSource instantiates a new AccountcorrelatedSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountcorrelatedSourceWithDefaults

`func NewAccountcorrelatedSourceWithDefaults() *AccountcorrelatedSource`

NewAccountcorrelatedSourceWithDefaults instantiates a new AccountcorrelatedSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountcorrelatedSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountcorrelatedSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountcorrelatedSource) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *AccountcorrelatedSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountcorrelatedSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountcorrelatedSource) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountcorrelatedSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountcorrelatedSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountcorrelatedSource) SetName(v string)`

SetName sets Name field to given value.



