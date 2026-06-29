---
id: v1-entitlementv2-source
title: Entitlementv2Source
pagination_label: Entitlementv2Source
sidebar_label: Entitlementv2Source
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementv2Source', 'V1Entitlementv2Source'] 
slug: /tools/sdk/go/entitlements/models/entitlementv2-source
tags: ['SDK', 'Software Development Kit', 'Entitlementv2Source', 'V1Entitlementv2Source']
---

# Entitlementv2Source

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The source ID | [optional] 
**Type** | Pointer to **string** | The source type, will always be \"SOURCE\" | [optional] 
**Name** | Pointer to **string** | The source name | [optional] 

## Methods

### NewEntitlementv2Source

`func NewEntitlementv2Source() *Entitlementv2Source`

NewEntitlementv2Source instantiates a new Entitlementv2Source object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementv2SourceWithDefaults

`func NewEntitlementv2SourceWithDefaults() *Entitlementv2Source`

NewEntitlementv2SourceWithDefaults instantiates a new Entitlementv2Source object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Entitlementv2Source) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Entitlementv2Source) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Entitlementv2Source) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Entitlementv2Source) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Entitlementv2Source) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Entitlementv2Source) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Entitlementv2Source) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Entitlementv2Source) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *Entitlementv2Source) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Entitlementv2Source) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Entitlementv2Source) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Entitlementv2Source) HasName() bool`

HasName returns a boolean if a field has been set.


