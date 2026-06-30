---
id: v1-rolemembershipidentity
title: Rolemembershipidentity
pagination_label: Rolemembershipidentity
sidebar_label: Rolemembershipidentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Rolemembershipidentity', 'V1Rolemembershipidentity'] 
slug: /tools/sdk/go/roles/models/rolemembershipidentity
tags: ['SDK', 'Software Development Kit', 'Rolemembershipidentity', 'V1Rolemembershipidentity']
---

# Rolemembershipidentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**Dtotype**](dtotype) |  | [optional] 
**Id** | Pointer to **string** | Identity id | [optional] 
**Name** | Pointer to **NullableString** | Human-readable display name of the Identity. | [optional] 
**AliasName** | Pointer to **NullableString** | User name of the Identity | [optional] 

## Methods

### NewRolemembershipidentity

`func NewRolemembershipidentity() *Rolemembershipidentity`

NewRolemembershipidentity instantiates a new Rolemembershipidentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolemembershipidentityWithDefaults

`func NewRolemembershipidentityWithDefaults() *Rolemembershipidentity`

NewRolemembershipidentityWithDefaults instantiates a new Rolemembershipidentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Rolemembershipidentity) GetType() Dtotype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Rolemembershipidentity) GetTypeOk() (*Dtotype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Rolemembershipidentity) SetType(v Dtotype)`

SetType sets Type field to given value.

### HasType

`func (o *Rolemembershipidentity) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Rolemembershipidentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Rolemembershipidentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Rolemembershipidentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Rolemembershipidentity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Rolemembershipidentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Rolemembershipidentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Rolemembershipidentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Rolemembershipidentity) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Rolemembershipidentity) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Rolemembershipidentity) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetAliasName

`func (o *Rolemembershipidentity) GetAliasName() string`

GetAliasName returns the AliasName field if non-nil, zero value otherwise.

### GetAliasNameOk

`func (o *Rolemembershipidentity) GetAliasNameOk() (*string, bool)`

GetAliasNameOk returns a tuple with the AliasName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAliasName

`func (o *Rolemembershipidentity) SetAliasName(v string)`

SetAliasName sets AliasName field to given value.

### HasAliasName

`func (o *Rolemembershipidentity) HasAliasName() bool`

HasAliasName returns a boolean if a field has been set.

### SetAliasNameNil

`func (o *Rolemembershipidentity) SetAliasNameNil(b bool)`

 SetAliasNameNil sets the value for AliasName to be an explicit nil

### UnsetAliasName
`func (o *Rolemembershipidentity) UnsetAliasName()`

UnsetAliasName ensures that no value is present for AliasName, not even an explicit nil

