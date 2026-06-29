---
id: v1-jwks
title: Jwks
pagination_label: Jwks
sidebar_label: Jwks
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Jwks', 'V1Jwks'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/jwks
tags: ['SDK', 'Software Development Kit', 'Jwks', 'V1Jwks']
---

# Jwks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Keys** | [**[]Jwk**](jwk) | Array of JSON Web Keys. | 

## Methods

### NewJwks

`func NewJwks(keys []Jwk, ) *Jwks`

NewJwks instantiates a new Jwks object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJwksWithDefaults

`func NewJwksWithDefaults() *Jwks`

NewJwksWithDefaults instantiates a new Jwks object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKeys

`func (o *Jwks) GetKeys() []Jwk`

GetKeys returns the Keys field if non-nil, zero value otherwise.

### GetKeysOk

`func (o *Jwks) GetKeysOk() (*[]Jwk, bool)`

GetKeysOk returns a tuple with the Keys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeys

`func (o *Jwks) SetKeys(v []Jwk)`

SetKeys sets Keys field to given value.



