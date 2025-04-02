---
id: entitlement-owner
title: EntitlementOwner
pagination_label: EntitlementOwner
sidebar_label: EntitlementOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementOwner', 'EntitlementOwner'] 
slug: /tools/sdk/go//models/entitlement-owner
tags: ['SDK', 'Software Development Kit', 'EntitlementOwner', 'EntitlementOwner']
---

# EntitlementOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The identity ID | [optional] 
**Type** | Pointer to **string** | The type of object | [optional] 
**Name** | Pointer to **string** | The display name of the identity | [optional] 

## Methods

### NewEntitlementOwner

`func NewEntitlementOwner() *EntitlementOwner`

NewEntitlementOwner instantiates a new EntitlementOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementOwnerWithDefaults

`func NewEntitlementOwnerWithDefaults() *EntitlementOwner`

NewEntitlementOwnerWithDefaults instantiates a new EntitlementOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EntitlementOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EntitlementOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EntitlementOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EntitlementOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *EntitlementOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntitlementOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntitlementOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntitlementOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *EntitlementOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntitlementOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntitlementOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntitlementOwner) HasName() bool`

HasName returns a boolean if a field has been set.


