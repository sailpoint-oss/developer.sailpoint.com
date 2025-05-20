---
id: v2024-identity-deleted-identity
title: IdentityDeletedIdentity
pagination_label: IdentityDeletedIdentity
sidebar_label: IdentityDeletedIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityDeletedIdentity', 'V2024IdentityDeletedIdentity'] 
slug: /tools/sdk/go/v2024/models/identity-deleted-identity
tags: ['SDK', 'Software Development Kit', 'IdentityDeletedIdentity', 'V2024IdentityDeletedIdentity']
---

# IdentityDeletedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Deleted identity's DTO type. | 
**Id** | **string** | Deleted identity ID. | 
**Name** | **string** | Deleted identity's display name. | 

## Methods

### NewIdentityDeletedIdentity

`func NewIdentityDeletedIdentity(type_ string, id string, name string, ) *IdentityDeletedIdentity`

NewIdentityDeletedIdentity instantiates a new IdentityDeletedIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityDeletedIdentityWithDefaults

`func NewIdentityDeletedIdentityWithDefaults() *IdentityDeletedIdentity`

NewIdentityDeletedIdentityWithDefaults instantiates a new IdentityDeletedIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *IdentityDeletedIdentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentityDeletedIdentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentityDeletedIdentity) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *IdentityDeletedIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityDeletedIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityDeletedIdentity) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *IdentityDeletedIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityDeletedIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityDeletedIdentity) SetName(v string)`

SetName sets Name field to given value.



