---
id: identity-attributes-changed
title: IdentityAttributesChanged
pagination_label: IdentityAttributesChanged
sidebar_label: IdentityAttributesChanged
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'IdentityAttributesChanged'] 
slug: /tools/sdk/go/beta/models/identity-attributes-changed
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesChanged']
---

# IdentityAttributesChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** |  [**IdentityAttributesChangedIdentity**](identity-attributes-changed-identity) |  | 
**Changes** |  [**[]IdentityAttributesChangedChangesInner**](identity-attributes-changed-changes-inner) | A list of one or more identity attributes that changed on the identity. | 

## Methods

### NewIdentityAttributesChanged

`func NewIdentityAttributesChanged(identity IdentityAttributesChangedIdentity, changes []IdentityAttributesChangedChangesInner, ) *IdentityAttributesChanged`

NewIdentityAttributesChanged instantiates a new IdentityAttributesChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityAttributesChangedWithDefaults

`func NewIdentityAttributesChangedWithDefaults() *IdentityAttributesChanged`

NewIdentityAttributesChangedWithDefaults instantiates a new IdentityAttributesChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *IdentityAttributesChanged) GetIdentity() IdentityAttributesChangedIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *IdentityAttributesChanged) GetIdentityOk() (*IdentityAttributesChangedIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *IdentityAttributesChanged) SetIdentity(v IdentityAttributesChangedIdentity)`

SetIdentity sets Identity field to given value.


### GetChanges

`func (o *IdentityAttributesChanged) GetChanges() []IdentityAttributesChangedChangesInner`

GetChanges returns the Changes field if non-nil, zero value otherwise.

### GetChangesOk

`func (o *IdentityAttributesChanged) GetChangesOk() (*[]IdentityAttributesChangedChangesInner, bool)`

GetChangesOk returns a tuple with the Changes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChanges

`func (o *IdentityAttributesChanged) SetChanges(v []IdentityAttributesChangedChangesInner)`

SetChanges sets Changes field to given value.



[[Back to top]](#) 


