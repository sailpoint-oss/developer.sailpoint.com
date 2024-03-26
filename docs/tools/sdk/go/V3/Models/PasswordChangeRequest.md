---
id: password-change-request
title: PasswordChangeRequest
pagination_label: PasswordChangeRequest
sidebar_label: PasswordChangeRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'PasswordChangeRequest'] 
slug: /tools/sdk/go/v3/models/password-change-request
tags: ['SDK', 'Software Development Kit', 'PasswordChangeRequest']
---

# PasswordChangeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** |  Pointer to **string** | The identity ID that requested the password change | [optional] 
**EncryptedPassword** |  Pointer to **string** | The RSA encrypted password | [optional] 
**PublicKeyId** |  Pointer to **string** | The encryption key ID | [optional] 
**AccountId** |  Pointer to **string** | Account ID of the account This is specified per account schema in the source configuration. It is used to distinguish accounts. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-ID-for-a/ta-p/80350 | [optional] 
**SourceId** |  Pointer to **string** | The ID of the source for which identity is requesting the password change | [optional] 

## Methods

### NewPasswordChangeRequest

`func NewPasswordChangeRequest() *PasswordChangeRequest`

NewPasswordChangeRequest instantiates a new PasswordChangeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordChangeRequestWithDefaults

`func NewPasswordChangeRequestWithDefaults() *PasswordChangeRequest`

NewPasswordChangeRequestWithDefaults instantiates a new PasswordChangeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *PasswordChangeRequest) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *PasswordChangeRequest) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *PasswordChangeRequest) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *PasswordChangeRequest) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetEncryptedPassword

`func (o *PasswordChangeRequest) GetEncryptedPassword() string`

GetEncryptedPassword returns the EncryptedPassword field if non-nil, zero value otherwise.

### GetEncryptedPasswordOk

`func (o *PasswordChangeRequest) GetEncryptedPasswordOk() (*string, bool)`

GetEncryptedPasswordOk returns a tuple with the EncryptedPassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncryptedPassword

`func (o *PasswordChangeRequest) SetEncryptedPassword(v string)`

SetEncryptedPassword sets EncryptedPassword field to given value.

### HasEncryptedPassword

`func (o *PasswordChangeRequest) HasEncryptedPassword() bool`

HasEncryptedPassword returns a boolean if a field has been set.

### GetPublicKeyId

`func (o *PasswordChangeRequest) GetPublicKeyId() string`

GetPublicKeyId returns the PublicKeyId field if non-nil, zero value otherwise.

### GetPublicKeyIdOk

`func (o *PasswordChangeRequest) GetPublicKeyIdOk() (*string, bool)`

GetPublicKeyIdOk returns a tuple with the PublicKeyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKeyId

`func (o *PasswordChangeRequest) SetPublicKeyId(v string)`

SetPublicKeyId sets PublicKeyId field to given value.

### HasPublicKeyId

`func (o *PasswordChangeRequest) HasPublicKeyId() bool`

HasPublicKeyId returns a boolean if a field has been set.

### GetAccountId

`func (o *PasswordChangeRequest) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *PasswordChangeRequest) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *PasswordChangeRequest) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *PasswordChangeRequest) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetSourceId

`func (o *PasswordChangeRequest) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *PasswordChangeRequest) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *PasswordChangeRequest) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *PasswordChangeRequest) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.


[[Back to top]](#) 


