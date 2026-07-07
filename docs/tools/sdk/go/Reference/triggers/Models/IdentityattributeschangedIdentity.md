---
id: v1-identityattributeschanged-identity
title: IdentityattributeschangedIdentity
pagination_label: IdentityattributeschangedIdentity
sidebar_label: IdentityattributeschangedIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityattributeschangedIdentity', 'V1IdentityattributeschangedIdentity'] 
slug: /tools/sdk/go/triggers/models/identityattributeschanged-identity
tags: ['SDK', 'Software Development Kit', 'IdentityattributeschangedIdentity', 'V1IdentityattributeschangedIdentity']
---

# IdentityattributeschangedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | DTO type of identity whose attributes changed. | 
**Id** | **string** | ID of identity whose attributes changed. | 
**Name** | **string** | Display name of identity whose attributes changed. | 

## Methods

### NewIdentityattributeschangedIdentity

`func NewIdentityattributeschangedIdentity(type_ string, id string, name string, ) *IdentityattributeschangedIdentity`

NewIdentityattributeschangedIdentity instantiates a new IdentityattributeschangedIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityattributeschangedIdentityWithDefaults

`func NewIdentityattributeschangedIdentityWithDefaults() *IdentityattributeschangedIdentity`

NewIdentityattributeschangedIdentityWithDefaults instantiates a new IdentityattributeschangedIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *IdentityattributeschangedIdentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentityattributeschangedIdentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentityattributeschangedIdentity) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *IdentityattributeschangedIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityattributeschangedIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityattributeschangedIdentity) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *IdentityattributeschangedIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityattributeschangedIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityattributeschangedIdentity) SetName(v string)`

SetName sets Name field to given value.



