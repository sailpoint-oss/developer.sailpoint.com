---
id: password-info
title: PasswordInfo
pagination_label: PasswordInfo
sidebar_label: PasswordInfo
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'PasswordInfo'] 
slug: /tools/sdk/go/beta/models/password-info
tags: ['SDK', 'Software Development Kit', 'PasswordInfo']
---

# PasswordInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** |  Pointer to **string** |  | [optional] 
**SourceId** |  Pointer to **string** |  | [optional] 
**PublicKeyId** |  Pointer to **string** |  | [optional] 
**PublicKey** |  Pointer to **string** | User&#39;s public key with Base64 encoding | [optional] 
**Accounts** |  Pointer to [**[]PasswordInfoAccount**](password-info-account) | Account info related to queried identity and source | [optional] 
**Policies** |  Pointer to **[]string** | Password constraints | [optional] 

## Methods

### NewPasswordInfo

`func NewPasswordInfo() *PasswordInfo`

NewPasswordInfo instantiates a new PasswordInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordInfoWithDefaults

`func NewPasswordInfoWithDefaults() *PasswordInfo`

NewPasswordInfoWithDefaults instantiates a new PasswordInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *PasswordInfo) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *PasswordInfo) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *PasswordInfo) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *PasswordInfo) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetSourceId

`func (o *PasswordInfo) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *PasswordInfo) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *PasswordInfo) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *PasswordInfo) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetPublicKeyId

`func (o *PasswordInfo) GetPublicKeyId() string`

GetPublicKeyId returns the PublicKeyId field if non-nil, zero value otherwise.

### GetPublicKeyIdOk

`func (o *PasswordInfo) GetPublicKeyIdOk() (*string, bool)`

GetPublicKeyIdOk returns a tuple with the PublicKeyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKeyId

`func (o *PasswordInfo) SetPublicKeyId(v string)`

SetPublicKeyId sets PublicKeyId field to given value.

### HasPublicKeyId

`func (o *PasswordInfo) HasPublicKeyId() bool`

HasPublicKeyId returns a boolean if a field has been set.

### GetPublicKey

`func (o *PasswordInfo) GetPublicKey() string`

GetPublicKey returns the PublicKey field if non-nil, zero value otherwise.

### GetPublicKeyOk

`func (o *PasswordInfo) GetPublicKeyOk() (*string, bool)`

GetPublicKeyOk returns a tuple with the PublicKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKey

`func (o *PasswordInfo) SetPublicKey(v string)`

SetPublicKey sets PublicKey field to given value.

### HasPublicKey

`func (o *PasswordInfo) HasPublicKey() bool`

HasPublicKey returns a boolean if a field has been set.

### GetAccounts

`func (o *PasswordInfo) GetAccounts() []PasswordInfoAccount`

GetAccounts returns the Accounts field if non-nil, zero value otherwise.

### GetAccountsOk

`func (o *PasswordInfo) GetAccountsOk() (*[]PasswordInfoAccount, bool)`

GetAccountsOk returns a tuple with the Accounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccounts

`func (o *PasswordInfo) SetAccounts(v []PasswordInfoAccount)`

SetAccounts sets Accounts field to given value.

### HasAccounts

`func (o *PasswordInfo) HasAccounts() bool`

HasAccounts returns a boolean if a field has been set.

### GetPolicies

`func (o *PasswordInfo) GetPolicies() []string`

GetPolicies returns the Policies field if non-nil, zero value otherwise.

### GetPoliciesOk

`func (o *PasswordInfo) GetPoliciesOk() (*[]string, bool)`

GetPoliciesOk returns a tuple with the Policies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicies

`func (o *PasswordInfo) SetPolicies(v []string)`

SetPolicies sets Policies field to given value.

### HasPolicies

`func (o *PasswordInfo) HasPolicies() bool`

HasPolicies returns a boolean if a field has been set.


[[Back to top]](#) 


