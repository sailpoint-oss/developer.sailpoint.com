---
id: identity-created-identity
title: IdentityCreatedIdentity
pagination_label: IdentityCreatedIdentity
sidebar_label: IdentityCreatedIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityCreatedIdentity', 'IdentityCreatedIdentity'] 
slug: /tools/sdk/go//models/identity-created-identity
tags: ['SDK', 'Software Development Kit', 'IdentityCreatedIdentity', 'IdentityCreatedIdentity']
---

# IdentityCreatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Created identity's DTO type. | 
**Id** | **string** | Created identity ID. | 
**Name** | **string** | Created identity's display name. | 

## Methods

### NewIdentityCreatedIdentity

`func NewIdentityCreatedIdentity(type_ string, id string, name string, ) *IdentityCreatedIdentity`

NewIdentityCreatedIdentity instantiates a new IdentityCreatedIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityCreatedIdentityWithDefaults

`func NewIdentityCreatedIdentityWithDefaults() *IdentityCreatedIdentity`

NewIdentityCreatedIdentityWithDefaults instantiates a new IdentityCreatedIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *IdentityCreatedIdentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentityCreatedIdentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentityCreatedIdentity) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *IdentityCreatedIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityCreatedIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityCreatedIdentity) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *IdentityCreatedIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityCreatedIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityCreatedIdentity) SetName(v string)`

SetName sets Name field to given value.



