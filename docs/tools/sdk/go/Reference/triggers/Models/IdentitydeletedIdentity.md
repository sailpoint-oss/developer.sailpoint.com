---
id: v1-identitydeleted-identity
title: IdentitydeletedIdentity
pagination_label: IdentitydeletedIdentity
sidebar_label: IdentitydeletedIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentitydeletedIdentity', 'V1IdentitydeletedIdentity'] 
slug: /tools/sdk/go/triggers/models/identitydeleted-identity
tags: ['SDK', 'Software Development Kit', 'IdentitydeletedIdentity', 'V1IdentitydeletedIdentity']
---

# IdentitydeletedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Deleted identity's DTO type. | 
**Id** | **string** | Deleted identity ID. | 
**Name** | **string** | Deleted identity's display name. | 

## Methods

### NewIdentitydeletedIdentity

`func NewIdentitydeletedIdentity(type_ string, id string, name string, ) *IdentitydeletedIdentity`

NewIdentitydeletedIdentity instantiates a new IdentitydeletedIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitydeletedIdentityWithDefaults

`func NewIdentitydeletedIdentityWithDefaults() *IdentitydeletedIdentity`

NewIdentitydeletedIdentityWithDefaults instantiates a new IdentitydeletedIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *IdentitydeletedIdentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentitydeletedIdentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentitydeletedIdentity) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *IdentitydeletedIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentitydeletedIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentitydeletedIdentity) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *IdentitydeletedIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentitydeletedIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentitydeletedIdentity) SetName(v string)`

SetName sets Name field to given value.



