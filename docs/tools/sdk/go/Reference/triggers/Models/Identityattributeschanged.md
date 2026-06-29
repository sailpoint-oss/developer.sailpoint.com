---
id: v1-identityattributeschanged
title: Identityattributeschanged
pagination_label: Identityattributeschanged
sidebar_label: Identityattributeschanged
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityattributeschanged', 'V1Identityattributeschanged'] 
slug: /tools/sdk/go/triggers/models/identityattributeschanged
tags: ['SDK', 'Software Development Kit', 'Identityattributeschanged', 'V1Identityattributeschanged']
---

# Identityattributeschanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**IdentityattributeschangedIdentity**](identityattributeschanged-identity) |  | 
**Changes** | [**[]IdentityattributeschangedChangesInner**](identityattributeschanged-changes-inner) | A list of one or more identity attributes that changed on the identity. | 

## Methods

### NewIdentityattributeschanged

`func NewIdentityattributeschanged(identity IdentityattributeschangedIdentity, changes []IdentityattributeschangedChangesInner, ) *Identityattributeschanged`

NewIdentityattributeschanged instantiates a new Identityattributeschanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityattributeschangedWithDefaults

`func NewIdentityattributeschangedWithDefaults() *Identityattributeschanged`

NewIdentityattributeschangedWithDefaults instantiates a new Identityattributeschanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *Identityattributeschanged) GetIdentity() IdentityattributeschangedIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *Identityattributeschanged) GetIdentityOk() (*IdentityattributeschangedIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *Identityattributeschanged) SetIdentity(v IdentityattributeschangedIdentity)`

SetIdentity sets Identity field to given value.


### GetChanges

`func (o *Identityattributeschanged) GetChanges() []IdentityattributeschangedChangesInner`

GetChanges returns the Changes field if non-nil, zero value otherwise.

### GetChangesOk

`func (o *Identityattributeschanged) GetChangesOk() (*[]IdentityattributeschangedChangesInner, bool)`

GetChangesOk returns a tuple with the Changes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChanges

`func (o *Identityattributeschanged) SetChanges(v []IdentityattributeschangedChangesInner)`

SetChanges sets Changes field to given value.



