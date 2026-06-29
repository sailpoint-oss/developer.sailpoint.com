---
id: v1-passwordchangerequest
title: Passwordchangerequest
pagination_label: Passwordchangerequest
sidebar_label: Passwordchangerequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Passwordchangerequest', 'V1Passwordchangerequest'] 
slug: /tools/sdk/go/passwordmanagement/models/passwordchangerequest
tags: ['SDK', 'Software Development Kit', 'Passwordchangerequest', 'V1Passwordchangerequest']
---

# Passwordchangerequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | The identity ID that requested the password change | [optional] 
**EncryptedPassword** | Pointer to **string** | The RSA encrypted password | [optional] 
**PublicKeyId** | Pointer to **string** | The encryption key ID | [optional] 
**AccountId** | Pointer to **string** | Account ID of the account This is specified per account schema in the source configuration. It is used to distinguish accounts. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-ID-for-a/ta-p/80350 | [optional] 
**SourceId** | Pointer to **string** | The ID of the source for which identity is requesting the password change | [optional] 

## Methods

### NewPasswordchangerequest

`func NewPasswordchangerequest() *Passwordchangerequest`

NewPasswordchangerequest instantiates a new Passwordchangerequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordchangerequestWithDefaults

`func NewPasswordchangerequestWithDefaults() *Passwordchangerequest`

NewPasswordchangerequestWithDefaults instantiates a new Passwordchangerequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *Passwordchangerequest) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Passwordchangerequest) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Passwordchangerequest) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Passwordchangerequest) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetEncryptedPassword

`func (o *Passwordchangerequest) GetEncryptedPassword() string`

GetEncryptedPassword returns the EncryptedPassword field if non-nil, zero value otherwise.

### GetEncryptedPasswordOk

`func (o *Passwordchangerequest) GetEncryptedPasswordOk() (*string, bool)`

GetEncryptedPasswordOk returns a tuple with the EncryptedPassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncryptedPassword

`func (o *Passwordchangerequest) SetEncryptedPassword(v string)`

SetEncryptedPassword sets EncryptedPassword field to given value.

### HasEncryptedPassword

`func (o *Passwordchangerequest) HasEncryptedPassword() bool`

HasEncryptedPassword returns a boolean if a field has been set.

### GetPublicKeyId

`func (o *Passwordchangerequest) GetPublicKeyId() string`

GetPublicKeyId returns the PublicKeyId field if non-nil, zero value otherwise.

### GetPublicKeyIdOk

`func (o *Passwordchangerequest) GetPublicKeyIdOk() (*string, bool)`

GetPublicKeyIdOk returns a tuple with the PublicKeyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKeyId

`func (o *Passwordchangerequest) SetPublicKeyId(v string)`

SetPublicKeyId sets PublicKeyId field to given value.

### HasPublicKeyId

`func (o *Passwordchangerequest) HasPublicKeyId() bool`

HasPublicKeyId returns a boolean if a field has been set.

### GetAccountId

`func (o *Passwordchangerequest) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *Passwordchangerequest) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *Passwordchangerequest) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *Passwordchangerequest) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetSourceId

`func (o *Passwordchangerequest) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Passwordchangerequest) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Passwordchangerequest) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Passwordchangerequest) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.


