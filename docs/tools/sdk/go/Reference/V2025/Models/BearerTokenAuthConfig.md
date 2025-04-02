---
id: bearer-token-auth-config
title: BearerTokenAuthConfig
pagination_label: BearerTokenAuthConfig
sidebar_label: BearerTokenAuthConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BearerTokenAuthConfig', 'BearerTokenAuthConfig'] 
slug: /tools/sdk/go//models/bearer-token-auth-config
tags: ['SDK', 'Software Development Kit', 'BearerTokenAuthConfig', 'BearerTokenAuthConfig']
---

# BearerTokenAuthConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BearerToken** | Pointer to **NullableString** | Bearer token | [optional] 

## Methods

### NewBearerTokenAuthConfig

`func NewBearerTokenAuthConfig() *BearerTokenAuthConfig`

NewBearerTokenAuthConfig instantiates a new BearerTokenAuthConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBearerTokenAuthConfigWithDefaults

`func NewBearerTokenAuthConfigWithDefaults() *BearerTokenAuthConfig`

NewBearerTokenAuthConfigWithDefaults instantiates a new BearerTokenAuthConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBearerToken

`func (o *BearerTokenAuthConfig) GetBearerToken() string`

GetBearerToken returns the BearerToken field if non-nil, zero value otherwise.

### GetBearerTokenOk

`func (o *BearerTokenAuthConfig) GetBearerTokenOk() (*string, bool)`

GetBearerTokenOk returns a tuple with the BearerToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearerToken

`func (o *BearerTokenAuthConfig) SetBearerToken(v string)`

SetBearerToken sets BearerToken field to given value.

### HasBearerToken

`func (o *BearerTokenAuthConfig) HasBearerToken() bool`

HasBearerToken returns a boolean if a field has been set.

### SetBearerTokenNil

`func (o *BearerTokenAuthConfig) SetBearerTokenNil(b bool)`

 SetBearerTokenNil sets the value for BearerToken to be an explicit nil

### UnsetBearerToken
`func (o *BearerTokenAuthConfig) UnsetBearerToken()`

UnsetBearerToken ensures that no value is present for BearerToken, not even an explicit nil

