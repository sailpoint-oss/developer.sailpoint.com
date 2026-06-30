---
id: v1-passwordinfo
title: Passwordinfo
pagination_label: Passwordinfo
sidebar_label: Passwordinfo
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Passwordinfo', 'V1Passwordinfo'] 
slug: /tools/sdk/go/passwordmanagement/models/passwordinfo
tags: ['SDK', 'Software Development Kit', 'Passwordinfo', 'V1Passwordinfo']
---

# Passwordinfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | Identity ID | [optional] 
**SourceId** | Pointer to **string** | source ID | [optional] 
**PublicKeyId** | Pointer to **string** | public key ID | [optional] 
**PublicKey** | Pointer to **string** | User's public key with Base64 encoding | [optional] 
**Accounts** | Pointer to [**[]Passwordinfoaccount**](passwordinfoaccount) | Account info related to queried identity and source | [optional] 
**Policies** | Pointer to **[]string** | Password constraints | [optional] 

## Methods

### NewPasswordinfo

`func NewPasswordinfo() *Passwordinfo`

NewPasswordinfo instantiates a new Passwordinfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordinfoWithDefaults

`func NewPasswordinfoWithDefaults() *Passwordinfo`

NewPasswordinfoWithDefaults instantiates a new Passwordinfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *Passwordinfo) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Passwordinfo) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Passwordinfo) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Passwordinfo) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetSourceId

`func (o *Passwordinfo) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Passwordinfo) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Passwordinfo) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Passwordinfo) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetPublicKeyId

`func (o *Passwordinfo) GetPublicKeyId() string`

GetPublicKeyId returns the PublicKeyId field if non-nil, zero value otherwise.

### GetPublicKeyIdOk

`func (o *Passwordinfo) GetPublicKeyIdOk() (*string, bool)`

GetPublicKeyIdOk returns a tuple with the PublicKeyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKeyId

`func (o *Passwordinfo) SetPublicKeyId(v string)`

SetPublicKeyId sets PublicKeyId field to given value.

### HasPublicKeyId

`func (o *Passwordinfo) HasPublicKeyId() bool`

HasPublicKeyId returns a boolean if a field has been set.

### GetPublicKey

`func (o *Passwordinfo) GetPublicKey() string`

GetPublicKey returns the PublicKey field if non-nil, zero value otherwise.

### GetPublicKeyOk

`func (o *Passwordinfo) GetPublicKeyOk() (*string, bool)`

GetPublicKeyOk returns a tuple with the PublicKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKey

`func (o *Passwordinfo) SetPublicKey(v string)`

SetPublicKey sets PublicKey field to given value.

### HasPublicKey

`func (o *Passwordinfo) HasPublicKey() bool`

HasPublicKey returns a boolean if a field has been set.

### GetAccounts

`func (o *Passwordinfo) GetAccounts() []Passwordinfoaccount`

GetAccounts returns the Accounts field if non-nil, zero value otherwise.

### GetAccountsOk

`func (o *Passwordinfo) GetAccountsOk() (*[]Passwordinfoaccount, bool)`

GetAccountsOk returns a tuple with the Accounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccounts

`func (o *Passwordinfo) SetAccounts(v []Passwordinfoaccount)`

SetAccounts sets Accounts field to given value.

### HasAccounts

`func (o *Passwordinfo) HasAccounts() bool`

HasAccounts returns a boolean if a field has been set.

### GetPolicies

`func (o *Passwordinfo) GetPolicies() []string`

GetPolicies returns the Policies field if non-nil, zero value otherwise.

### GetPoliciesOk

`func (o *Passwordinfo) GetPoliciesOk() (*[]string, bool)`

GetPoliciesOk returns a tuple with the Policies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicies

`func (o *Passwordinfo) SetPolicies(v []string)`

SetPolicies sets Policies field to given value.

### HasPolicies

`func (o *Passwordinfo) HasPolicies() bool`

HasPolicies returns a boolean if a field has been set.


