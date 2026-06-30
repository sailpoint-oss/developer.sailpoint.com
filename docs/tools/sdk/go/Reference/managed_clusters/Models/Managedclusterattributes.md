---
id: v1-managedclusterattributes
title: Managedclusterattributes
pagination_label: Managedclusterattributes
sidebar_label: Managedclusterattributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Managedclusterattributes', 'V1Managedclusterattributes'] 
slug: /tools/sdk/go/managedclusters/models/managedclusterattributes
tags: ['SDK', 'Software Development Kit', 'Managedclusterattributes', 'V1Managedclusterattributes']
---

# Managedclusterattributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Queue** | Pointer to [**Managedclusterqueue**](managedclusterqueue) |  | [optional] 
**Keystore** | Pointer to **NullableString** | ManagedCluster keystore for spConnectCluster type | [optional] 

## Methods

### NewManagedclusterattributes

`func NewManagedclusterattributes() *Managedclusterattributes`

NewManagedclusterattributes instantiates a new Managedclusterattributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedclusterattributesWithDefaults

`func NewManagedclusterattributesWithDefaults() *Managedclusterattributes`

NewManagedclusterattributesWithDefaults instantiates a new Managedclusterattributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQueue

`func (o *Managedclusterattributes) GetQueue() Managedclusterqueue`

GetQueue returns the Queue field if non-nil, zero value otherwise.

### GetQueueOk

`func (o *Managedclusterattributes) GetQueueOk() (*Managedclusterqueue, bool)`

GetQueueOk returns a tuple with the Queue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueue

`func (o *Managedclusterattributes) SetQueue(v Managedclusterqueue)`

SetQueue sets Queue field to given value.

### HasQueue

`func (o *Managedclusterattributes) HasQueue() bool`

HasQueue returns a boolean if a field has been set.

### GetKeystore

`func (o *Managedclusterattributes) GetKeystore() string`

GetKeystore returns the Keystore field if non-nil, zero value otherwise.

### GetKeystoreOk

`func (o *Managedclusterattributes) GetKeystoreOk() (*string, bool)`

GetKeystoreOk returns a tuple with the Keystore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeystore

`func (o *Managedclusterattributes) SetKeystore(v string)`

SetKeystore sets Keystore field to given value.

### HasKeystore

`func (o *Managedclusterattributes) HasKeystore() bool`

HasKeystore returns a boolean if a field has been set.

### SetKeystoreNil

`func (o *Managedclusterattributes) SetKeystoreNil(b bool)`

 SetKeystoreNil sets the value for Keystore to be an explicit nil

### UnsetKeystore
`func (o *Managedclusterattributes) UnsetKeystore()`

UnsetKeystore ensures that no value is present for Keystore, not even an explicit nil

