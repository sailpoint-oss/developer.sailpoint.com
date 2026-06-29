---
id: v1-authorizationscheme
title: Authorizationscheme
pagination_label: Authorizationscheme
sidebar_label: Authorizationscheme
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Authorizationscheme', 'V1Authorizationscheme'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/authorizationscheme
tags: ['SDK', 'Software Development Kit', 'Authorizationscheme', 'V1Authorizationscheme']
---

# Authorizationscheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SpecUrn** | Pointer to **string** | URN describing the authorization specification. OAuth 2.0: `urn:ietf:rfc:6749`; Bearer token: `urn:ietf:rfc:6750`.  | [optional] 

## Methods

### NewAuthorizationscheme

`func NewAuthorizationscheme() *Authorizationscheme`

NewAuthorizationscheme instantiates a new Authorizationscheme object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizationschemeWithDefaults

`func NewAuthorizationschemeWithDefaults() *Authorizationscheme`

NewAuthorizationschemeWithDefaults instantiates a new Authorizationscheme object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSpecUrn

`func (o *Authorizationscheme) GetSpecUrn() string`

GetSpecUrn returns the SpecUrn field if non-nil, zero value otherwise.

### GetSpecUrnOk

`func (o *Authorizationscheme) GetSpecUrnOk() (*string, bool)`

GetSpecUrnOk returns a tuple with the SpecUrn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecUrn

`func (o *Authorizationscheme) SetSpecUrn(v string)`

SetSpecUrn sets SpecUrn field to given value.

### HasSpecUrn

`func (o *Authorizationscheme) HasSpecUrn() bool`

HasSpecUrn returns a boolean if a field has been set.


