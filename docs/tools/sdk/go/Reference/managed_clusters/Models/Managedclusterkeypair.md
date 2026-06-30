---
id: v1-managedclusterkeypair
title: Managedclusterkeypair
pagination_label: Managedclusterkeypair
sidebar_label: Managedclusterkeypair
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Managedclusterkeypair', 'V1Managedclusterkeypair'] 
slug: /tools/sdk/go/managedclusters/models/managedclusterkeypair
tags: ['SDK', 'Software Development Kit', 'Managedclusterkeypair', 'V1Managedclusterkeypair']
---

# Managedclusterkeypair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PublicKey** | Pointer to **NullableString** | ManagedCluster publicKey | [optional] 
**PublicKeyThumbprint** | Pointer to **NullableString** | ManagedCluster publicKeyThumbprint | [optional] 
**PublicKeyCertificate** | Pointer to **NullableString** | ManagedCluster publicKeyCertificate | [optional] 

## Methods

### NewManagedclusterkeypair

`func NewManagedclusterkeypair() *Managedclusterkeypair`

NewManagedclusterkeypair instantiates a new Managedclusterkeypair object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedclusterkeypairWithDefaults

`func NewManagedclusterkeypairWithDefaults() *Managedclusterkeypair`

NewManagedclusterkeypairWithDefaults instantiates a new Managedclusterkeypair object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPublicKey

`func (o *Managedclusterkeypair) GetPublicKey() string`

GetPublicKey returns the PublicKey field if non-nil, zero value otherwise.

### GetPublicKeyOk

`func (o *Managedclusterkeypair) GetPublicKeyOk() (*string, bool)`

GetPublicKeyOk returns a tuple with the PublicKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKey

`func (o *Managedclusterkeypair) SetPublicKey(v string)`

SetPublicKey sets PublicKey field to given value.

### HasPublicKey

`func (o *Managedclusterkeypair) HasPublicKey() bool`

HasPublicKey returns a boolean if a field has been set.

### SetPublicKeyNil

`func (o *Managedclusterkeypair) SetPublicKeyNil(b bool)`

 SetPublicKeyNil sets the value for PublicKey to be an explicit nil

### UnsetPublicKey
`func (o *Managedclusterkeypair) UnsetPublicKey()`

UnsetPublicKey ensures that no value is present for PublicKey, not even an explicit nil
### GetPublicKeyThumbprint

`func (o *Managedclusterkeypair) GetPublicKeyThumbprint() string`

GetPublicKeyThumbprint returns the PublicKeyThumbprint field if non-nil, zero value otherwise.

### GetPublicKeyThumbprintOk

`func (o *Managedclusterkeypair) GetPublicKeyThumbprintOk() (*string, bool)`

GetPublicKeyThumbprintOk returns a tuple with the PublicKeyThumbprint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKeyThumbprint

`func (o *Managedclusterkeypair) SetPublicKeyThumbprint(v string)`

SetPublicKeyThumbprint sets PublicKeyThumbprint field to given value.

### HasPublicKeyThumbprint

`func (o *Managedclusterkeypair) HasPublicKeyThumbprint() bool`

HasPublicKeyThumbprint returns a boolean if a field has been set.

### SetPublicKeyThumbprintNil

`func (o *Managedclusterkeypair) SetPublicKeyThumbprintNil(b bool)`

 SetPublicKeyThumbprintNil sets the value for PublicKeyThumbprint to be an explicit nil

### UnsetPublicKeyThumbprint
`func (o *Managedclusterkeypair) UnsetPublicKeyThumbprint()`

UnsetPublicKeyThumbprint ensures that no value is present for PublicKeyThumbprint, not even an explicit nil
### GetPublicKeyCertificate

`func (o *Managedclusterkeypair) GetPublicKeyCertificate() string`

GetPublicKeyCertificate returns the PublicKeyCertificate field if non-nil, zero value otherwise.

### GetPublicKeyCertificateOk

`func (o *Managedclusterkeypair) GetPublicKeyCertificateOk() (*string, bool)`

GetPublicKeyCertificateOk returns a tuple with the PublicKeyCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKeyCertificate

`func (o *Managedclusterkeypair) SetPublicKeyCertificate(v string)`

SetPublicKeyCertificate sets PublicKeyCertificate field to given value.

### HasPublicKeyCertificate

`func (o *Managedclusterkeypair) HasPublicKeyCertificate() bool`

HasPublicKeyCertificate returns a boolean if a field has been set.

### SetPublicKeyCertificateNil

`func (o *Managedclusterkeypair) SetPublicKeyCertificateNil(b bool)`

 SetPublicKeyCertificateNil sets the value for PublicKeyCertificate to be an explicit nil

### UnsetPublicKeyCertificate
`func (o *Managedclusterkeypair) UnsetPublicKeyCertificate()`

UnsetPublicKeyCertificate ensures that no value is present for PublicKeyCertificate, not even an explicit nil

