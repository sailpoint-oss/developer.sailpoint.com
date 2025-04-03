---
id: v2024-configuration-response
title: ConfigurationResponse
pagination_label: ConfigurationResponse
sidebar_label: ConfigurationResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConfigurationResponse', 'V2024ConfigurationResponse'] 
slug: /tools/sdk/go/v2024/models/configuration-response
tags: ['SDK', 'Software Development Kit', 'ConfigurationResponse', 'V2024ConfigurationResponse']
---

# ConfigurationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | Pointer to [**Identity1**](identity1) |  | [optional] 
**ConfigDetails** | Pointer to [**[]ConfigurationDetailsResponse**](configuration-details-response) | Details of how work should be reassigned for an Identity | [optional] 

## Methods

### NewConfigurationResponse

`func NewConfigurationResponse() *ConfigurationResponse`

NewConfigurationResponse instantiates a new ConfigurationResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigurationResponseWithDefaults

`func NewConfigurationResponseWithDefaults() *ConfigurationResponse`

NewConfigurationResponseWithDefaults instantiates a new ConfigurationResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *ConfigurationResponse) GetIdentity() Identity1`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *ConfigurationResponse) GetIdentityOk() (*Identity1, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *ConfigurationResponse) SetIdentity(v Identity1)`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *ConfigurationResponse) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### GetConfigDetails

`func (o *ConfigurationResponse) GetConfigDetails() []ConfigurationDetailsResponse`

GetConfigDetails returns the ConfigDetails field if non-nil, zero value otherwise.

### GetConfigDetailsOk

`func (o *ConfigurationResponse) GetConfigDetailsOk() (*[]ConfigurationDetailsResponse, bool)`

GetConfigDetailsOk returns a tuple with the ConfigDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigDetails

`func (o *ConfigurationResponse) SetConfigDetails(v []ConfigurationDetailsResponse)`

SetConfigDetails sets ConfigDetails field to given value.

### HasConfigDetails

`func (o *ConfigurationResponse) HasConfigDetails() bool`

HasConfigDetails returns a boolean if a field has been set.


