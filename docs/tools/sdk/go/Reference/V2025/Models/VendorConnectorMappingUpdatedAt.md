---
id: v2025-vendor-connector-mapping-updated-at
title: VendorConnectorMappingUpdatedAt
pagination_label: VendorConnectorMappingUpdatedAt
sidebar_label: VendorConnectorMappingUpdatedAt
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'VendorConnectorMappingUpdatedAt', 'V2025VendorConnectorMappingUpdatedAt'] 
slug: /tools/sdk/go/v2025/models/vendor-connector-mapping-updated-at
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingUpdatedAt', 'V2025VendorConnectorMappingUpdatedAt']
---

# VendorConnectorMappingUpdatedAt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Time** | Pointer to **SailPointTime** | The timestamp when the mapping was last updated, represented in ISO 8601 format. | [optional] 
**Valid** | Pointer to **bool** | A flag indicating if the 'Time' field is set and valid. | [optional] [default to false]

## Methods

### NewVendorConnectorMappingUpdatedAt

`func NewVendorConnectorMappingUpdatedAt() *VendorConnectorMappingUpdatedAt`

NewVendorConnectorMappingUpdatedAt instantiates a new VendorConnectorMappingUpdatedAt object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVendorConnectorMappingUpdatedAtWithDefaults

`func NewVendorConnectorMappingUpdatedAtWithDefaults() *VendorConnectorMappingUpdatedAt`

NewVendorConnectorMappingUpdatedAtWithDefaults instantiates a new VendorConnectorMappingUpdatedAt object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTime

`func (o *VendorConnectorMappingUpdatedAt) GetTime() SailPointTime`

GetTime returns the Time field if non-nil, zero value otherwise.

### GetTimeOk

`func (o *VendorConnectorMappingUpdatedAt) GetTimeOk() (*SailPointTime, bool)`

GetTimeOk returns a tuple with the Time field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTime

`func (o *VendorConnectorMappingUpdatedAt) SetTime(v SailPointTime)`

SetTime sets Time field to given value.

### HasTime

`func (o *VendorConnectorMappingUpdatedAt) HasTime() bool`

HasTime returns a boolean if a field has been set.

### GetValid

`func (o *VendorConnectorMappingUpdatedAt) GetValid() bool`

GetValid returns the Valid field if non-nil, zero value otherwise.

### GetValidOk

`func (o *VendorConnectorMappingUpdatedAt) GetValidOk() (*bool, bool)`

GetValidOk returns a tuple with the Valid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValid

`func (o *VendorConnectorMappingUpdatedAt) SetValid(v bool)`

SetValid sets Valid field to given value.

### HasValid

`func (o *VendorConnectorMappingUpdatedAt) HasValid() bool`

HasValid returns a boolean if a field has been set.


