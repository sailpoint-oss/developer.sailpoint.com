---
id: v1-identitydeleted
title: Identitydeleted
pagination_label: Identitydeleted
sidebar_label: Identitydeleted
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitydeleted', 'V1Identitydeleted'] 
slug: /tools/sdk/go/triggers/models/identitydeleted
tags: ['SDK', 'Software Development Kit', 'Identitydeleted', 'V1Identitydeleted']
---

# Identitydeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**IdentitydeletedIdentity**](identitydeleted-identity) |  | 
**Attributes** | **map[string]interface{}** | The attributes assigned to the identity. Attributes are determined by the identity profile. | 

## Methods

### NewIdentitydeleted

`func NewIdentitydeleted(identity IdentitydeletedIdentity, attributes map[string]interface{}, ) *Identitydeleted`

NewIdentitydeleted instantiates a new Identitydeleted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitydeletedWithDefaults

`func NewIdentitydeletedWithDefaults() *Identitydeleted`

NewIdentitydeletedWithDefaults instantiates a new Identitydeleted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *Identitydeleted) GetIdentity() IdentitydeletedIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *Identitydeleted) GetIdentityOk() (*IdentitydeletedIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *Identitydeleted) SetIdentity(v IdentitydeletedIdentity)`

SetIdentity sets Identity field to given value.


### GetAttributes

`func (o *Identitydeleted) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Identitydeleted) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Identitydeleted) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.



