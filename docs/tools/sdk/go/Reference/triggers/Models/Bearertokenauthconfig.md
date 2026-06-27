---
id: v1-bearertokenauthconfig
title: Bearertokenauthconfig
pagination_label: Bearertokenauthconfig
sidebar_label: Bearertokenauthconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bearertokenauthconfig', 'V1Bearertokenauthconfig'] 
slug: /tools/sdk/go/triggers/models/bearertokenauthconfig
tags: ['SDK', 'Software Development Kit', 'Bearertokenauthconfig', 'V1Bearertokenauthconfig']
---

# Bearertokenauthconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BearerToken** | Pointer to **NullableString** | Bearer token | [optional] 

## Methods

### NewBearertokenauthconfig

`func NewBearertokenauthconfig() *Bearertokenauthconfig`

NewBearertokenauthconfig instantiates a new Bearertokenauthconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBearertokenauthconfigWithDefaults

`func NewBearertokenauthconfigWithDefaults() *Bearertokenauthconfig`

NewBearertokenauthconfigWithDefaults instantiates a new Bearertokenauthconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBearerToken

`func (o *Bearertokenauthconfig) GetBearerToken() string`

GetBearerToken returns the BearerToken field if non-nil, zero value otherwise.

### GetBearerTokenOk

`func (o *Bearertokenauthconfig) GetBearerTokenOk() (*string, bool)`

GetBearerTokenOk returns a tuple with the BearerToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearerToken

`func (o *Bearertokenauthconfig) SetBearerToken(v string)`

SetBearerToken sets BearerToken field to given value.

### HasBearerToken

`func (o *Bearertokenauthconfig) HasBearerToken() bool`

HasBearerToken returns a boolean if a field has been set.

### SetBearerTokenNil

`func (o *Bearertokenauthconfig) SetBearerTokenNil(b bool)`

 SetBearerTokenNil sets the value for BearerToken to be an explicit nil

### UnsetBearerToken
`func (o *Bearertokenauthconfig) UnsetBearerToken()`

UnsetBearerToken ensures that no value is present for BearerToken, not even an explicit nil

