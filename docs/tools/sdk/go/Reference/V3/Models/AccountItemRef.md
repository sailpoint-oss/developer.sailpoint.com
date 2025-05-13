---
id: account-item-ref
title: AccountItemRef
pagination_label: AccountItemRef
sidebar_label: AccountItemRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountItemRef', 'AccountItemRef'] 
slug: /tools/sdk/go/v3/models/account-item-ref
tags: ['SDK', 'Software Development Kit', 'AccountItemRef', 'AccountItemRef']
---

# AccountItemRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountUuid** | Pointer to **NullableString** | The uuid for the account, available under the 'objectguid' attribute | [optional] 
**NativeIdentity** | Pointer to **string** | The 'distinguishedName' attribute for the account | [optional] 

## Methods

### NewAccountItemRef

`func NewAccountItemRef() *AccountItemRef`

NewAccountItemRef instantiates a new AccountItemRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountItemRefWithDefaults

`func NewAccountItemRefWithDefaults() *AccountItemRef`

NewAccountItemRefWithDefaults instantiates a new AccountItemRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountUuid

`func (o *AccountItemRef) GetAccountUuid() string`

GetAccountUuid returns the AccountUuid field if non-nil, zero value otherwise.

### GetAccountUuidOk

`func (o *AccountItemRef) GetAccountUuidOk() (*string, bool)`

GetAccountUuidOk returns a tuple with the AccountUuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountUuid

`func (o *AccountItemRef) SetAccountUuid(v string)`

SetAccountUuid sets AccountUuid field to given value.

### HasAccountUuid

`func (o *AccountItemRef) HasAccountUuid() bool`

HasAccountUuid returns a boolean if a field has been set.

### SetAccountUuidNil

`func (o *AccountItemRef) SetAccountUuidNil(b bool)`

 SetAccountUuidNil sets the value for AccountUuid to be an explicit nil

### UnsetAccountUuid
`func (o *AccountItemRef) UnsetAccountUuid()`

UnsetAccountUuid ensures that no value is present for AccountUuid, not even an explicit nil
### GetNativeIdentity

`func (o *AccountItemRef) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AccountItemRef) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AccountItemRef) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *AccountItemRef) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.


