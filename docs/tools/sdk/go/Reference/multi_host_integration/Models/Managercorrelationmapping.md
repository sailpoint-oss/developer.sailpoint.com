---
id: v1-managercorrelationmapping
title: Managercorrelationmapping
pagination_label: Managercorrelationmapping
sidebar_label: Managercorrelationmapping
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Managercorrelationmapping', 'V1Managercorrelationmapping'] 
slug: /tools/sdk/go/multihostintegration/models/managercorrelationmapping
tags: ['SDK', 'Software Development Kit', 'Managercorrelationmapping', 'V1Managercorrelationmapping']
---

# Managercorrelationmapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountAttributeName** | Pointer to **string** | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager's identity. | [optional] 
**IdentityAttributeName** | Pointer to **string** | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [optional] 

## Methods

### NewManagercorrelationmapping

`func NewManagercorrelationmapping() *Managercorrelationmapping`

NewManagercorrelationmapping instantiates a new Managercorrelationmapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagercorrelationmappingWithDefaults

`func NewManagercorrelationmappingWithDefaults() *Managercorrelationmapping`

NewManagercorrelationmappingWithDefaults instantiates a new Managercorrelationmapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountAttributeName

`func (o *Managercorrelationmapping) GetAccountAttributeName() string`

GetAccountAttributeName returns the AccountAttributeName field if non-nil, zero value otherwise.

### GetAccountAttributeNameOk

`func (o *Managercorrelationmapping) GetAccountAttributeNameOk() (*string, bool)`

GetAccountAttributeNameOk returns a tuple with the AccountAttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountAttributeName

`func (o *Managercorrelationmapping) SetAccountAttributeName(v string)`

SetAccountAttributeName sets AccountAttributeName field to given value.

### HasAccountAttributeName

`func (o *Managercorrelationmapping) HasAccountAttributeName() bool`

HasAccountAttributeName returns a boolean if a field has been set.

### GetIdentityAttributeName

`func (o *Managercorrelationmapping) GetIdentityAttributeName() string`

GetIdentityAttributeName returns the IdentityAttributeName field if non-nil, zero value otherwise.

### GetIdentityAttributeNameOk

`func (o *Managercorrelationmapping) GetIdentityAttributeNameOk() (*string, bool)`

GetIdentityAttributeNameOk returns a tuple with the IdentityAttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttributeName

`func (o *Managercorrelationmapping) SetIdentityAttributeName(v string)`

SetIdentityAttributeName sets IdentityAttributeName field to given value.

### HasIdentityAttributeName

`func (o *Managercorrelationmapping) HasIdentityAttributeName() bool`

HasIdentityAttributeName returns a boolean if a field has been set.


