---
id: v2024-identity-created
title: IdentityCreated
pagination_label: IdentityCreated
sidebar_label: IdentityCreated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityCreated', 'V2024IdentityCreated'] 
slug: /tools/sdk/go/v2024/models/identity-created
tags: ['SDK', 'Software Development Kit', 'IdentityCreated', 'V2024IdentityCreated']
---

# IdentityCreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**IdentityCreatedIdentity**](identity-created-identity) |  | 
**Attributes** | **map[string]interface{}** | The attributes assigned to the identity. Attributes are determined by the identity profile. | 

## Methods

### NewIdentityCreated

`func NewIdentityCreated(identity IdentityCreatedIdentity, attributes map[string]interface{}, ) *IdentityCreated`

NewIdentityCreated instantiates a new IdentityCreated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityCreatedWithDefaults

`func NewIdentityCreatedWithDefaults() *IdentityCreated`

NewIdentityCreatedWithDefaults instantiates a new IdentityCreated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *IdentityCreated) GetIdentity() IdentityCreatedIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *IdentityCreated) GetIdentityOk() (*IdentityCreatedIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *IdentityCreated) SetIdentity(v IdentityCreatedIdentity)`

SetIdentity sets Identity field to given value.


### GetAttributes

`func (o *IdentityCreated) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *IdentityCreated) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *IdentityCreated) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.



