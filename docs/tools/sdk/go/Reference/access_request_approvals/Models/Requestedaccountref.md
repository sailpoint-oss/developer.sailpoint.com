---
id: v1-requestedaccountref
title: Requestedaccountref
pagination_label: Requestedaccountref
sidebar_label: Requestedaccountref
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Requestedaccountref', 'V1Requestedaccountref'] 
slug: /tools/sdk/go/accessrequestapprovals/models/requestedaccountref
tags: ['SDK', 'Software Development Kit', 'Requestedaccountref', 'V1Requestedaccountref']
---

# Requestedaccountref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Display name of the account for the user | [optional] 
**Type** | Pointer to [**Dtotype**](dtotype) |  | [optional] 
**AccountUuid** | Pointer to **NullableString** | The uuid for the account | [optional] 
**AccountId** | Pointer to **NullableString** | The native identity for the account | [optional] 
**SourceName** | Pointer to **string** | Display name of the source for the account | [optional] 

## Methods

### NewRequestedaccountref

`func NewRequestedaccountref() *Requestedaccountref`

NewRequestedaccountref instantiates a new Requestedaccountref object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestedaccountrefWithDefaults

`func NewRequestedaccountrefWithDefaults() *Requestedaccountref`

NewRequestedaccountrefWithDefaults instantiates a new Requestedaccountref object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Requestedaccountref) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Requestedaccountref) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Requestedaccountref) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Requestedaccountref) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *Requestedaccountref) GetType() Dtotype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Requestedaccountref) GetTypeOk() (*Dtotype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Requestedaccountref) SetType(v Dtotype)`

SetType sets Type field to given value.

### HasType

`func (o *Requestedaccountref) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAccountUuid

`func (o *Requestedaccountref) GetAccountUuid() string`

GetAccountUuid returns the AccountUuid field if non-nil, zero value otherwise.

### GetAccountUuidOk

`func (o *Requestedaccountref) GetAccountUuidOk() (*string, bool)`

GetAccountUuidOk returns a tuple with the AccountUuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountUuid

`func (o *Requestedaccountref) SetAccountUuid(v string)`

SetAccountUuid sets AccountUuid field to given value.

### HasAccountUuid

`func (o *Requestedaccountref) HasAccountUuid() bool`

HasAccountUuid returns a boolean if a field has been set.

### SetAccountUuidNil

`func (o *Requestedaccountref) SetAccountUuidNil(b bool)`

 SetAccountUuidNil sets the value for AccountUuid to be an explicit nil

### UnsetAccountUuid
`func (o *Requestedaccountref) UnsetAccountUuid()`

UnsetAccountUuid ensures that no value is present for AccountUuid, not even an explicit nil
### GetAccountId

`func (o *Requestedaccountref) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *Requestedaccountref) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *Requestedaccountref) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *Requestedaccountref) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### SetAccountIdNil

`func (o *Requestedaccountref) SetAccountIdNil(b bool)`

 SetAccountIdNil sets the value for AccountId to be an explicit nil

### UnsetAccountId
`func (o *Requestedaccountref) UnsetAccountId()`

UnsetAccountId ensures that no value is present for AccountId, not even an explicit nil
### GetSourceName

`func (o *Requestedaccountref) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Requestedaccountref) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Requestedaccountref) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Requestedaccountref) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.


