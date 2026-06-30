---
id: v1-identitycreated
title: Identitycreated
pagination_label: Identitycreated
sidebar_label: Identitycreated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitycreated', 'V1Identitycreated'] 
slug: /tools/sdk/go/triggers/models/identitycreated
tags: ['SDK', 'Software Development Kit', 'Identitycreated', 'V1Identitycreated']
---

# Identitycreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**IdentitycreatedIdentity**](identitycreated-identity) |  | 
**Attributes** | **map[string]interface{}** | The attributes assigned to the identity. Attributes are determined by the identity profile. | 

## Methods

### NewIdentitycreated

`func NewIdentitycreated(identity IdentitycreatedIdentity, attributes map[string]interface{}, ) *Identitycreated`

NewIdentitycreated instantiates a new Identitycreated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitycreatedWithDefaults

`func NewIdentitycreatedWithDefaults() *Identitycreated`

NewIdentitycreatedWithDefaults instantiates a new Identitycreated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *Identitycreated) GetIdentity() IdentitycreatedIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *Identitycreated) GetIdentityOk() (*IdentitycreatedIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *Identitycreated) SetIdentity(v IdentitycreatedIdentity)`

SetIdentity sets Identity field to given value.


### GetAttributes

`func (o *Identitycreated) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Identitycreated) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Identitycreated) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.



