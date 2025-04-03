---
id: v2024-tenant-configuration-response
title: TenantConfigurationResponse
pagination_label: TenantConfigurationResponse
sidebar_label: TenantConfigurationResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TenantConfigurationResponse', 'V2024TenantConfigurationResponse'] 
slug: /tools/sdk/go/v2024/models/tenant-configuration-response
tags: ['SDK', 'Software Development Kit', 'TenantConfigurationResponse', 'V2024TenantConfigurationResponse']
---

# TenantConfigurationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuditDetails** | Pointer to [**AuditDetails**](audit-details) |  | [optional] 
**ConfigDetails** | Pointer to [**TenantConfigurationDetails**](tenant-configuration-details) |  | [optional] 

## Methods

### NewTenantConfigurationResponse

`func NewTenantConfigurationResponse() *TenantConfigurationResponse`

NewTenantConfigurationResponse instantiates a new TenantConfigurationResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTenantConfigurationResponseWithDefaults

`func NewTenantConfigurationResponseWithDefaults() *TenantConfigurationResponse`

NewTenantConfigurationResponseWithDefaults instantiates a new TenantConfigurationResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuditDetails

`func (o *TenantConfigurationResponse) GetAuditDetails() AuditDetails`

GetAuditDetails returns the AuditDetails field if non-nil, zero value otherwise.

### GetAuditDetailsOk

`func (o *TenantConfigurationResponse) GetAuditDetailsOk() (*AuditDetails, bool)`

GetAuditDetailsOk returns a tuple with the AuditDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuditDetails

`func (o *TenantConfigurationResponse) SetAuditDetails(v AuditDetails)`

SetAuditDetails sets AuditDetails field to given value.

### HasAuditDetails

`func (o *TenantConfigurationResponse) HasAuditDetails() bool`

HasAuditDetails returns a boolean if a field has been set.

### GetConfigDetails

`func (o *TenantConfigurationResponse) GetConfigDetails() TenantConfigurationDetails`

GetConfigDetails returns the ConfigDetails field if non-nil, zero value otherwise.

### GetConfigDetailsOk

`func (o *TenantConfigurationResponse) GetConfigDetailsOk() (*TenantConfigurationDetails, bool)`

GetConfigDetailsOk returns a tuple with the ConfigDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigDetails

`func (o *TenantConfigurationResponse) SetConfigDetails(v TenantConfigurationDetails)`

SetConfigDetails sets ConfigDetails field to given value.

### HasConfigDetails

`func (o *TenantConfigurationResponse) HasConfigDetails() bool`

HasConfigDetails returns a boolean if a field has been set.


