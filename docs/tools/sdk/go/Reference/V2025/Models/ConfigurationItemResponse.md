---
id: configuration-item-response
title: ConfigurationItemResponse
pagination_label: ConfigurationItemResponse
sidebar_label: ConfigurationItemResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConfigurationItemResponse', 'ConfigurationItemResponse'] 
slug: /tools/sdk/go//models/configuration-item-response
tags: ['SDK', 'Software Development Kit', 'ConfigurationItemResponse', 'ConfigurationItemResponse']
---

# ConfigurationItemResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | Pointer to [**Identity1**](identity1) |  | [optional] 
**ConfigDetails** | Pointer to [**[]ConfigurationDetailsResponse**](configuration-details-response) | Details of how work should be reassigned for an Identity | [optional] 

## Methods

### NewConfigurationItemResponse

`func NewConfigurationItemResponse() *ConfigurationItemResponse`

NewConfigurationItemResponse instantiates a new ConfigurationItemResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigurationItemResponseWithDefaults

`func NewConfigurationItemResponseWithDefaults() *ConfigurationItemResponse`

NewConfigurationItemResponseWithDefaults instantiates a new ConfigurationItemResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *ConfigurationItemResponse) GetIdentity() Identity1`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *ConfigurationItemResponse) GetIdentityOk() (*Identity1, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *ConfigurationItemResponse) SetIdentity(v Identity1)`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *ConfigurationItemResponse) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### GetConfigDetails

`func (o *ConfigurationItemResponse) GetConfigDetails() []ConfigurationDetailsResponse`

GetConfigDetails returns the ConfigDetails field if non-nil, zero value otherwise.

### GetConfigDetailsOk

`func (o *ConfigurationItemResponse) GetConfigDetailsOk() (*[]ConfigurationDetailsResponse, bool)`

GetConfigDetailsOk returns a tuple with the ConfigDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigDetails

`func (o *ConfigurationItemResponse) SetConfigDetails(v []ConfigurationDetailsResponse)`

SetConfigDetails sets ConfigDetails field to given value.

### HasConfigDetails

`func (o *ConfigurationItemResponse) HasConfigDetails() bool`

HasConfigDetails returns a boolean if a field has been set.


