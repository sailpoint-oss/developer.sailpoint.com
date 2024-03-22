---
id: manager-correlation-mapping
title: ManagerCorrelationMapping
pagination_label: ManagerCorrelationMapping
sidebar_label: ManagerCorrelationMapping
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ManagerCorrelationMapping'] 
slug: /tools/sdk/go/beta/models/manager-correlation-mapping
tags: ['SDK', 'Software Development Kit', 'ManagerCorrelationMapping']
---

# ManagerCorrelationMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountAttribute** |  Pointer to **string** | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager&#39;s identity. | [optional] 
**IdentityAttribute** |  Pointer to **string** | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [optional] 

## Methods

### NewManagerCorrelationMapping

`func NewManagerCorrelationMapping() *ManagerCorrelationMapping`

NewManagerCorrelationMapping instantiates a new ManagerCorrelationMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagerCorrelationMappingWithDefaults

`func NewManagerCorrelationMappingWithDefaults() *ManagerCorrelationMapping`

NewManagerCorrelationMappingWithDefaults instantiates a new ManagerCorrelationMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountAttribute

`func (o *ManagerCorrelationMapping) GetAccountAttribute() string`

GetAccountAttribute returns the AccountAttribute field if non-nil, zero value otherwise.

### GetAccountAttributeOk

`func (o *ManagerCorrelationMapping) GetAccountAttributeOk() (*string, bool)`

GetAccountAttributeOk returns a tuple with the AccountAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountAttribute

`func (o *ManagerCorrelationMapping) SetAccountAttribute(v string)`

SetAccountAttribute sets AccountAttribute field to given value.

### HasAccountAttribute

`func (o *ManagerCorrelationMapping) HasAccountAttribute() bool`

HasAccountAttribute returns a boolean if a field has been set.

### GetIdentityAttribute

`func (o *ManagerCorrelationMapping) GetIdentityAttribute() string`

GetIdentityAttribute returns the IdentityAttribute field if non-nil, zero value otherwise.

### GetIdentityAttributeOk

`func (o *ManagerCorrelationMapping) GetIdentityAttributeOk() (*string, bool)`

GetIdentityAttributeOk returns a tuple with the IdentityAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttribute

`func (o *ManagerCorrelationMapping) SetIdentityAttribute(v string)`

SetIdentityAttribute sets IdentityAttribute field to given value.

### HasIdentityAttribute

`func (o *ManagerCorrelationMapping) HasIdentityAttribute() bool`

HasIdentityAttribute returns a boolean if a field has been set.


[[Back to top]](#) 


