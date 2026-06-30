---
id: v1-identitycreated-identity
title: IdentitycreatedIdentity
pagination_label: IdentitycreatedIdentity
sidebar_label: IdentitycreatedIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentitycreatedIdentity', 'V1IdentitycreatedIdentity'] 
slug: /tools/sdk/go/triggers/models/identitycreated-identity
tags: ['SDK', 'Software Development Kit', 'IdentitycreatedIdentity', 'V1IdentitycreatedIdentity']
---

# IdentitycreatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Created identity's DTO type. | 
**Id** | **string** | Created identity ID. | 
**Name** | **string** | Created identity's display name. | 

## Methods

### NewIdentitycreatedIdentity

`func NewIdentitycreatedIdentity(type_ string, id string, name string, ) *IdentitycreatedIdentity`

NewIdentitycreatedIdentity instantiates a new IdentitycreatedIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitycreatedIdentityWithDefaults

`func NewIdentitycreatedIdentityWithDefaults() *IdentitycreatedIdentity`

NewIdentitycreatedIdentityWithDefaults instantiates a new IdentitycreatedIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *IdentitycreatedIdentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentitycreatedIdentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentitycreatedIdentity) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *IdentitycreatedIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentitycreatedIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentitycreatedIdentity) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *IdentitycreatedIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentitycreatedIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentitycreatedIdentity) SetName(v string)`

SetName sets Name field to given value.



