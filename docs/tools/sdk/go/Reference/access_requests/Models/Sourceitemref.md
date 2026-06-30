---
id: v1-sourceitemref
title: Sourceitemref
pagination_label: Sourceitemref
sidebar_label: Sourceitemref
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourceitemref', 'V1Sourceitemref'] 
slug: /tools/sdk/go/accessrequests/models/sourceitemref
tags: ['SDK', 'Software Development Kit', 'Sourceitemref', 'V1Sourceitemref']
---

# Sourceitemref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | Pointer to **NullableString** | The id for the source on which account selections are made | [optional] 
**Accounts** | Pointer to [**[]Accountitemref**](accountitemref) | A list of account selections on the source. Currently, only one selection per source is supported. | [optional] 

## Methods

### NewSourceitemref

`func NewSourceitemref() *Sourceitemref`

NewSourceitemref instantiates a new Sourceitemref object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceitemrefWithDefaults

`func NewSourceitemrefWithDefaults() *Sourceitemref`

NewSourceitemrefWithDefaults instantiates a new Sourceitemref object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *Sourceitemref) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Sourceitemref) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Sourceitemref) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Sourceitemref) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### SetSourceIdNil

`func (o *Sourceitemref) SetSourceIdNil(b bool)`

 SetSourceIdNil sets the value for SourceId to be an explicit nil

### UnsetSourceId
`func (o *Sourceitemref) UnsetSourceId()`

UnsetSourceId ensures that no value is present for SourceId, not even an explicit nil
### GetAccounts

`func (o *Sourceitemref) GetAccounts() []Accountitemref`

GetAccounts returns the Accounts field if non-nil, zero value otherwise.

### GetAccountsOk

`func (o *Sourceitemref) GetAccountsOk() (*[]Accountitemref, bool)`

GetAccountsOk returns a tuple with the Accounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccounts

`func (o *Sourceitemref) SetAccounts(v []Accountitemref)`

SetAccounts sets Accounts field to given value.

### HasAccounts

`func (o *Sourceitemref) HasAccounts() bool`

HasAccounts returns a boolean if a field has been set.

### SetAccountsNil

`func (o *Sourceitemref) SetAccountsNil(b bool)`

 SetAccountsNil sets the value for Accounts to be an explicit nil

### UnsetAccounts
`func (o *Sourceitemref) UnsetAccounts()`

UnsetAccounts ensures that no value is present for Accounts, not even an explicit nil

