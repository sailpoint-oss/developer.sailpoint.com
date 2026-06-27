---
id: v1-entitlementv2-owner
title: Entitlementv2Owner
pagination_label: Entitlementv2Owner
sidebar_label: Entitlementv2Owner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementv2Owner', 'V1Entitlementv2Owner'] 
slug: /tools/sdk/go/entitlements/models/entitlementv2-owner
tags: ['SDK', 'Software Development Kit', 'Entitlementv2Owner', 'V1Entitlementv2Owner']
---

# Entitlementv2Owner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The identity ID | [optional] 
**Type** | Pointer to **string** | The type of object | [optional] 
**Name** | Pointer to **string** | The display name of the identity | [optional] 

## Methods

### NewEntitlementv2Owner

`func NewEntitlementv2Owner() *Entitlementv2Owner`

NewEntitlementv2Owner instantiates a new Entitlementv2Owner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementv2OwnerWithDefaults

`func NewEntitlementv2OwnerWithDefaults() *Entitlementv2Owner`

NewEntitlementv2OwnerWithDefaults instantiates a new Entitlementv2Owner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Entitlementv2Owner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Entitlementv2Owner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Entitlementv2Owner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Entitlementv2Owner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Entitlementv2Owner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Entitlementv2Owner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Entitlementv2Owner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Entitlementv2Owner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *Entitlementv2Owner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Entitlementv2Owner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Entitlementv2Owner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Entitlementv2Owner) HasName() bool`

HasName returns a boolean if a field has been set.


