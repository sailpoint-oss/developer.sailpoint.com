---
id: beta-tenant-configuration-details
title: TenantConfigurationDetails
pagination_label: TenantConfigurationDetails
sidebar_label: TenantConfigurationDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TenantConfigurationDetails', 'BetaTenantConfigurationDetails'] 
slug: /tools/sdk/go/beta/models/tenant-configuration-details
tags: ['SDK', 'Software Development Kit', 'TenantConfigurationDetails', 'BetaTenantConfigurationDetails']
---

# TenantConfigurationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Disabled** | Pointer to **NullableBool** | Flag to determine if Reassignment Configuration is enabled or disabled for a tenant.  When this flag is set to true, Reassignment Configuration is disabled. | [optional] [default to false]

## Methods

### NewTenantConfigurationDetails

`func NewTenantConfigurationDetails() *TenantConfigurationDetails`

NewTenantConfigurationDetails instantiates a new TenantConfigurationDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTenantConfigurationDetailsWithDefaults

`func NewTenantConfigurationDetailsWithDefaults() *TenantConfigurationDetails`

NewTenantConfigurationDetailsWithDefaults instantiates a new TenantConfigurationDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDisabled

`func (o *TenantConfigurationDetails) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *TenantConfigurationDetails) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *TenantConfigurationDetails) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *TenantConfigurationDetails) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### SetDisabledNil

`func (o *TenantConfigurationDetails) SetDisabledNil(b bool)`

 SetDisabledNil sets the value for Disabled to be an explicit nil

### UnsetDisabled
`func (o *TenantConfigurationDetails) UnsetDisabled()`

UnsetDisabled ensures that no value is present for Disabled, not even an explicit nil

