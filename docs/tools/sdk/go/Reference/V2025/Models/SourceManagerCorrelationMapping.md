---
id: source-manager-correlation-mapping
title: SourceManagerCorrelationMapping
pagination_label: SourceManagerCorrelationMapping
sidebar_label: SourceManagerCorrelationMapping
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceManagerCorrelationMapping', 'SourceManagerCorrelationMapping'] 
slug: /tools/sdk/go//models/source-manager-correlation-mapping
tags: ['SDK', 'Software Development Kit', 'SourceManagerCorrelationMapping', 'SourceManagerCorrelationMapping']
---

# SourceManagerCorrelationMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountAttributeName** | Pointer to **string** | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager's identity. | [optional] 
**IdentityAttributeName** | Pointer to **string** | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [optional] 

## Methods

### NewSourceManagerCorrelationMapping

`func NewSourceManagerCorrelationMapping() *SourceManagerCorrelationMapping`

NewSourceManagerCorrelationMapping instantiates a new SourceManagerCorrelationMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceManagerCorrelationMappingWithDefaults

`func NewSourceManagerCorrelationMappingWithDefaults() *SourceManagerCorrelationMapping`

NewSourceManagerCorrelationMappingWithDefaults instantiates a new SourceManagerCorrelationMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountAttributeName

`func (o *SourceManagerCorrelationMapping) GetAccountAttributeName() string`

GetAccountAttributeName returns the AccountAttributeName field if non-nil, zero value otherwise.

### GetAccountAttributeNameOk

`func (o *SourceManagerCorrelationMapping) GetAccountAttributeNameOk() (*string, bool)`

GetAccountAttributeNameOk returns a tuple with the AccountAttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountAttributeName

`func (o *SourceManagerCorrelationMapping) SetAccountAttributeName(v string)`

SetAccountAttributeName sets AccountAttributeName field to given value.

### HasAccountAttributeName

`func (o *SourceManagerCorrelationMapping) HasAccountAttributeName() bool`

HasAccountAttributeName returns a boolean if a field has been set.

### GetIdentityAttributeName

`func (o *SourceManagerCorrelationMapping) GetIdentityAttributeName() string`

GetIdentityAttributeName returns the IdentityAttributeName field if non-nil, zero value otherwise.

### GetIdentityAttributeNameOk

`func (o *SourceManagerCorrelationMapping) GetIdentityAttributeNameOk() (*string, bool)`

GetIdentityAttributeNameOk returns a tuple with the IdentityAttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttributeName

`func (o *SourceManagerCorrelationMapping) SetIdentityAttributeName(v string)`

SetIdentityAttributeName sets IdentityAttributeName field to given value.

### HasIdentityAttributeName

`func (o *SourceManagerCorrelationMapping) HasIdentityAttributeName() bool`

HasIdentityAttributeName returns a boolean if a field has been set.


