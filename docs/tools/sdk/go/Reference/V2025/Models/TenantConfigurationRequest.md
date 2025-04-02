---
id: tenant-configuration-request
title: TenantConfigurationRequest
pagination_label: TenantConfigurationRequest
sidebar_label: TenantConfigurationRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TenantConfigurationRequest', 'TenantConfigurationRequest'] 
slug: /tools/sdk/go//models/tenant-configuration-request
tags: ['SDK', 'Software Development Kit', 'TenantConfigurationRequest', 'TenantConfigurationRequest']
---

# TenantConfigurationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigDetails** | Pointer to [**TenantConfigurationDetails**](tenant-configuration-details) |  | [optional] 

## Methods

### NewTenantConfigurationRequest

`func NewTenantConfigurationRequest() *TenantConfigurationRequest`

NewTenantConfigurationRequest instantiates a new TenantConfigurationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTenantConfigurationRequestWithDefaults

`func NewTenantConfigurationRequestWithDefaults() *TenantConfigurationRequest`

NewTenantConfigurationRequestWithDefaults instantiates a new TenantConfigurationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfigDetails

`func (o *TenantConfigurationRequest) GetConfigDetails() TenantConfigurationDetails`

GetConfigDetails returns the ConfigDetails field if non-nil, zero value otherwise.

### GetConfigDetailsOk

`func (o *TenantConfigurationRequest) GetConfigDetailsOk() (*TenantConfigurationDetails, bool)`

GetConfigDetailsOk returns a tuple with the ConfigDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigDetails

`func (o *TenantConfigurationRequest) SetConfigDetails(v TenantConfigurationDetails)`

SetConfigDetails sets ConfigDetails field to given value.

### HasConfigDetails

`func (o *TenantConfigurationRequest) HasConfigDetails() bool`

HasConfigDetails returns a boolean if a field has been set.


