---
id: account-source
title: AccountSource
pagination_label: AccountSource
sidebar_label: AccountSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountSource', 'AccountSource'] 
slug: /tools/sdk/go//models/account-source
tags: ['SDK', 'Software Development Kit', 'AccountSource', 'AccountSource']
---

# AccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique ID of the referenced object. | [optional] 
**Name** | Pointer to **string** | The human readable name of the referenced object. | [optional] 
**Type** | Pointer to **string** | Type of source returned. | [optional] 

## Methods

### NewAccountSource

`func NewAccountSource() *AccountSource`

NewAccountSource instantiates a new AccountSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountSourceWithDefaults

`func NewAccountSourceWithDefaults() *AccountSource`

NewAccountSourceWithDefaults instantiates a new AccountSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountSource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountSource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccountSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountSource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountSource) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *AccountSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountSource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccountSource) HasType() bool`

HasType returns a boolean if a field has been set.


