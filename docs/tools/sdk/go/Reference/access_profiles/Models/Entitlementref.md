---
id: v1-entitlementref
title: Entitlementref
pagination_label: Entitlementref
sidebar_label: Entitlementref
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementref', 'V1Entitlementref'] 
slug: /tools/sdk/go/accessprofiles/models/entitlementref
tags: ['SDK', 'Software Development Kit', 'Entitlementref', 'V1Entitlementref']
---

# Entitlementref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Entitlement's DTO type. | [optional] 
**Id** | Pointer to **string** | Entitlement's ID. | [optional] 
**Name** | Pointer to **NullableString** | Entitlement's display name. | [optional] 

## Methods

### NewEntitlementref

`func NewEntitlementref() *Entitlementref`

NewEntitlementref instantiates a new Entitlementref object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementrefWithDefaults

`func NewEntitlementrefWithDefaults() *Entitlementref`

NewEntitlementrefWithDefaults instantiates a new Entitlementref object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Entitlementref) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Entitlementref) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Entitlementref) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Entitlementref) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Entitlementref) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Entitlementref) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Entitlementref) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Entitlementref) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Entitlementref) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Entitlementref) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Entitlementref) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Entitlementref) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Entitlementref) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Entitlementref) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

