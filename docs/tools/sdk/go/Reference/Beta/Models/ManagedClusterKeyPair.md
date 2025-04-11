---
id: beta-managed-cluster-key-pair
title: ManagedClusterKeyPair
pagination_label: ManagedClusterKeyPair
sidebar_label: ManagedClusterKeyPair
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClusterKeyPair', 'BetaManagedClusterKeyPair'] 
slug: /tools/sdk/go/beta/models/managed-cluster-key-pair
tags: ['SDK', 'Software Development Kit', 'ManagedClusterKeyPair', 'BetaManagedClusterKeyPair']
---

# ManagedClusterKeyPair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PublicKey** | Pointer to **NullableString** | ManagedCluster publicKey | [optional] 
**PublicKeyThumbprint** | Pointer to **NullableString** | ManagedCluster publicKeyThumbprint | [optional] 
**PublicKeyCertificate** | Pointer to **NullableString** | ManagedCluster publicKeyCertificate | [optional] 

## Methods

### NewManagedClusterKeyPair

`func NewManagedClusterKeyPair() *ManagedClusterKeyPair`

NewManagedClusterKeyPair instantiates a new ManagedClusterKeyPair object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClusterKeyPairWithDefaults

`func NewManagedClusterKeyPairWithDefaults() *ManagedClusterKeyPair`

NewManagedClusterKeyPairWithDefaults instantiates a new ManagedClusterKeyPair object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPublicKey

`func (o *ManagedClusterKeyPair) GetPublicKey() string`

GetPublicKey returns the PublicKey field if non-nil, zero value otherwise.

### GetPublicKeyOk

`func (o *ManagedClusterKeyPair) GetPublicKeyOk() (*string, bool)`

GetPublicKeyOk returns a tuple with the PublicKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKey

`func (o *ManagedClusterKeyPair) SetPublicKey(v string)`

SetPublicKey sets PublicKey field to given value.

### HasPublicKey

`func (o *ManagedClusterKeyPair) HasPublicKey() bool`

HasPublicKey returns a boolean if a field has been set.

### SetPublicKeyNil

`func (o *ManagedClusterKeyPair) SetPublicKeyNil(b bool)`

 SetPublicKeyNil sets the value for PublicKey to be an explicit nil

### UnsetPublicKey
`func (o *ManagedClusterKeyPair) UnsetPublicKey()`

UnsetPublicKey ensures that no value is present for PublicKey, not even an explicit nil
### GetPublicKeyThumbprint

`func (o *ManagedClusterKeyPair) GetPublicKeyThumbprint() string`

GetPublicKeyThumbprint returns the PublicKeyThumbprint field if non-nil, zero value otherwise.

### GetPublicKeyThumbprintOk

`func (o *ManagedClusterKeyPair) GetPublicKeyThumbprintOk() (*string, bool)`

GetPublicKeyThumbprintOk returns a tuple with the PublicKeyThumbprint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKeyThumbprint

`func (o *ManagedClusterKeyPair) SetPublicKeyThumbprint(v string)`

SetPublicKeyThumbprint sets PublicKeyThumbprint field to given value.

### HasPublicKeyThumbprint

`func (o *ManagedClusterKeyPair) HasPublicKeyThumbprint() bool`

HasPublicKeyThumbprint returns a boolean if a field has been set.

### SetPublicKeyThumbprintNil

`func (o *ManagedClusterKeyPair) SetPublicKeyThumbprintNil(b bool)`

 SetPublicKeyThumbprintNil sets the value for PublicKeyThumbprint to be an explicit nil

### UnsetPublicKeyThumbprint
`func (o *ManagedClusterKeyPair) UnsetPublicKeyThumbprint()`

UnsetPublicKeyThumbprint ensures that no value is present for PublicKeyThumbprint, not even an explicit nil
### GetPublicKeyCertificate

`func (o *ManagedClusterKeyPair) GetPublicKeyCertificate() string`

GetPublicKeyCertificate returns the PublicKeyCertificate field if non-nil, zero value otherwise.

### GetPublicKeyCertificateOk

`func (o *ManagedClusterKeyPair) GetPublicKeyCertificateOk() (*string, bool)`

GetPublicKeyCertificateOk returns a tuple with the PublicKeyCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKeyCertificate

`func (o *ManagedClusterKeyPair) SetPublicKeyCertificate(v string)`

SetPublicKeyCertificate sets PublicKeyCertificate field to given value.

### HasPublicKeyCertificate

`func (o *ManagedClusterKeyPair) HasPublicKeyCertificate() bool`

HasPublicKeyCertificate returns a boolean if a field has been set.

### SetPublicKeyCertificateNil

`func (o *ManagedClusterKeyPair) SetPublicKeyCertificateNil(b bool)`

 SetPublicKeyCertificateNil sets the value for PublicKeyCertificate to be an explicit nil

### UnsetPublicKeyCertificate
`func (o *ManagedClusterKeyPair) UnsetPublicKeyCertificate()`

UnsetPublicKeyCertificate ensures that no value is present for PublicKeyCertificate, not even an explicit nil

