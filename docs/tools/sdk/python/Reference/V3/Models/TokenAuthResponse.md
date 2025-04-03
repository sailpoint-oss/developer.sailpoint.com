---
id: token-auth-response
title: TokenAuthResponse
pagination_label: TokenAuthResponse
sidebar_label: TokenAuthResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TokenAuthResponse', 'TokenAuthResponse'] 
slug: /tools/sdk/go/v3/models/token-auth-response
tags: ['SDK', 'Software Development Kit', 'TokenAuthResponse', 'TokenAuthResponse']
---

# TokenAuthResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** | MFA Authentication status | [optional] 

## Methods

### NewTokenAuthResponse

`func NewTokenAuthResponse() *TokenAuthResponse`

NewTokenAuthResponse instantiates a new TokenAuthResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTokenAuthResponseWithDefaults

`func NewTokenAuthResponseWithDefaults() *TokenAuthResponse`

NewTokenAuthResponseWithDefaults instantiates a new TokenAuthResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *TokenAuthResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TokenAuthResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TokenAuthResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *TokenAuthResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


