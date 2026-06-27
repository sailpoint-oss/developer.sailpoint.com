---
id: v1-accountitemref
title: Accountitemref
pagination_label: Accountitemref
sidebar_label: Accountitemref
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountitemref', 'V1Accountitemref'] 
slug: /tools/sdk/go/accessrequests/models/accountitemref
tags: ['SDK', 'Software Development Kit', 'Accountitemref', 'V1Accountitemref']
---

# Accountitemref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountUuid** | Pointer to **NullableString** | The uuid for the account, available under the 'objectguid' attribute | [optional] 
**NativeIdentity** | Pointer to **string** | The 'distinguishedName' attribute for the account | [optional] 

## Methods

### NewAccountitemref

`func NewAccountitemref() *Accountitemref`

NewAccountitemref instantiates a new Accountitemref object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountitemrefWithDefaults

`func NewAccountitemrefWithDefaults() *Accountitemref`

NewAccountitemrefWithDefaults instantiates a new Accountitemref object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountUuid

`func (o *Accountitemref) GetAccountUuid() string`

GetAccountUuid returns the AccountUuid field if non-nil, zero value otherwise.

### GetAccountUuidOk

`func (o *Accountitemref) GetAccountUuidOk() (*string, bool)`

GetAccountUuidOk returns a tuple with the AccountUuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountUuid

`func (o *Accountitemref) SetAccountUuid(v string)`

SetAccountUuid sets AccountUuid field to given value.

### HasAccountUuid

`func (o *Accountitemref) HasAccountUuid() bool`

HasAccountUuid returns a boolean if a field has been set.

### SetAccountUuidNil

`func (o *Accountitemref) SetAccountUuidNil(b bool)`

 SetAccountUuidNil sets the value for AccountUuid to be an explicit nil

### UnsetAccountUuid
`func (o *Accountitemref) UnsetAccountUuid()`

UnsetAccountUuid ensures that no value is present for AccountUuid, not even an explicit nil
### GetNativeIdentity

`func (o *Accountitemref) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Accountitemref) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Accountitemref) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *Accountitemref) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.


