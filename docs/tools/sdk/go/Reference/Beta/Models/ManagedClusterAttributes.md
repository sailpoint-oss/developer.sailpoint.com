---
id: beta-managed-cluster-attributes
title: ManagedClusterAttributes
pagination_label: ManagedClusterAttributes
sidebar_label: ManagedClusterAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClusterAttributes', 'BetaManagedClusterAttributes'] 
slug: /tools/sdk/go/beta/models/managed-cluster-attributes
tags: ['SDK', 'Software Development Kit', 'ManagedClusterAttributes', 'BetaManagedClusterAttributes']
---

# ManagedClusterAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Queue** | Pointer to [**ManagedClusterQueue**](managed-cluster-queue) |  | [optional] 
**Keystore** | Pointer to **NullableString** | ManagedCluster keystore for spConnectCluster type | [optional] 

## Methods

### NewManagedClusterAttributes

`func NewManagedClusterAttributes() *ManagedClusterAttributes`

NewManagedClusterAttributes instantiates a new ManagedClusterAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClusterAttributesWithDefaults

`func NewManagedClusterAttributesWithDefaults() *ManagedClusterAttributes`

NewManagedClusterAttributesWithDefaults instantiates a new ManagedClusterAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQueue

`func (o *ManagedClusterAttributes) GetQueue() ManagedClusterQueue`

GetQueue returns the Queue field if non-nil, zero value otherwise.

### GetQueueOk

`func (o *ManagedClusterAttributes) GetQueueOk() (*ManagedClusterQueue, bool)`

GetQueueOk returns a tuple with the Queue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueue

`func (o *ManagedClusterAttributes) SetQueue(v ManagedClusterQueue)`

SetQueue sets Queue field to given value.

### HasQueue

`func (o *ManagedClusterAttributes) HasQueue() bool`

HasQueue returns a boolean if a field has been set.

### GetKeystore

`func (o *ManagedClusterAttributes) GetKeystore() string`

GetKeystore returns the Keystore field if non-nil, zero value otherwise.

### GetKeystoreOk

`func (o *ManagedClusterAttributes) GetKeystoreOk() (*string, bool)`

GetKeystoreOk returns a tuple with the Keystore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeystore

`func (o *ManagedClusterAttributes) SetKeystore(v string)`

SetKeystore sets Keystore field to given value.

### HasKeystore

`func (o *ManagedClusterAttributes) HasKeystore() bool`

HasKeystore returns a boolean if a field has been set.

### SetKeystoreNil

`func (o *ManagedClusterAttributes) SetKeystoreNil(b bool)`

 SetKeystoreNil sets the value for Keystore to be an explicit nil

### UnsetKeystore
`func (o *ManagedClusterAttributes) UnsetKeystore()`

UnsetKeystore ensures that no value is present for Keystore, not even an explicit nil

