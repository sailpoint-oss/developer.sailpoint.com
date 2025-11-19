---
id: v2025-source-item-ref
title: SourceItemRef
pagination_label: SourceItemRef
sidebar_label: SourceItemRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceItemRef', 'V2025SourceItemRef'] 
slug: /tools/sdk/go/v2025/models/source-item-ref
tags: ['SDK', 'Software Development Kit', 'SourceItemRef', 'V2025SourceItemRef']
---

# SourceItemRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | Pointer to **NullableString** | The id for the source on which account selections are made | [optional] 
**Accounts** | Pointer to [**[]AccountItemRef**](account-item-ref) | A list of account selections on the source. Currently, only one selection per source is supported. | [optional] 

## Methods

### NewSourceItemRef

`func NewSourceItemRef() *SourceItemRef`

NewSourceItemRef instantiates a new SourceItemRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceItemRefWithDefaults

`func NewSourceItemRefWithDefaults() *SourceItemRef`

NewSourceItemRefWithDefaults instantiates a new SourceItemRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *SourceItemRef) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *SourceItemRef) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *SourceItemRef) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *SourceItemRef) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### SetSourceIdNil

`func (o *SourceItemRef) SetSourceIdNil(b bool)`

 SetSourceIdNil sets the value for SourceId to be an explicit nil

### UnsetSourceId
`func (o *SourceItemRef) UnsetSourceId()`

UnsetSourceId ensures that no value is present for SourceId, not even an explicit nil
### GetAccounts

`func (o *SourceItemRef) GetAccounts() []AccountItemRef`

GetAccounts returns the Accounts field if non-nil, zero value otherwise.

### GetAccountsOk

`func (o *SourceItemRef) GetAccountsOk() (*[]AccountItemRef, bool)`

GetAccountsOk returns a tuple with the Accounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccounts

`func (o *SourceItemRef) SetAccounts(v []AccountItemRef)`

SetAccounts sets Accounts field to given value.

### HasAccounts

`func (o *SourceItemRef) HasAccounts() bool`

HasAccounts returns a boolean if a field has been set.

### SetAccountsNil

`func (o *SourceItemRef) SetAccountsNil(b bool)`

 SetAccountsNil sets the value for Accounts to be an explicit nil

### UnsetAccounts
`func (o *SourceItemRef) UnsetAccounts()`

UnsetAccounts ensures that no value is present for Accounts, not even an explicit nil

