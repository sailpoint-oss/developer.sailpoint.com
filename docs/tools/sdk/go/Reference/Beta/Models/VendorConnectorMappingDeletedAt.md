---
id: beta-vendor-connector-mapping-deleted-at
title: VendorConnectorMappingDeletedAt
pagination_label: VendorConnectorMappingDeletedAt
sidebar_label: VendorConnectorMappingDeletedAt
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'VendorConnectorMappingDeletedAt', 'BetaVendorConnectorMappingDeletedAt'] 
slug: /tools/sdk/go/beta/models/vendor-connector-mapping-deleted-at
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingDeletedAt', 'BetaVendorConnectorMappingDeletedAt']
---

# VendorConnectorMappingDeletedAt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Time** | Pointer to **time.Time** | The timestamp when the mapping was deleted, represented in ISO 8601 format, if applicable. | [optional] 
**Valid** | Pointer to **bool** | A flag indicating if the 'Time' field is set and valid, i.e., if the mapping has been deleted. | [optional] [default to false]

## Methods

### NewVendorConnectorMappingDeletedAt

`func NewVendorConnectorMappingDeletedAt() *VendorConnectorMappingDeletedAt`

NewVendorConnectorMappingDeletedAt instantiates a new VendorConnectorMappingDeletedAt object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVendorConnectorMappingDeletedAtWithDefaults

`func NewVendorConnectorMappingDeletedAtWithDefaults() *VendorConnectorMappingDeletedAt`

NewVendorConnectorMappingDeletedAtWithDefaults instantiates a new VendorConnectorMappingDeletedAt object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTime

`func (o *VendorConnectorMappingDeletedAt) GetTime() time.Time`

GetTime returns the Time field if non-nil, zero value otherwise.

### GetTimeOk

`func (o *VendorConnectorMappingDeletedAt) GetTimeOk() (*time.Time, bool)`

GetTimeOk returns a tuple with the Time field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTime

`func (o *VendorConnectorMappingDeletedAt) SetTime(v time.Time)`

SetTime sets Time field to given value.

### HasTime

`func (o *VendorConnectorMappingDeletedAt) HasTime() bool`

HasTime returns a boolean if a field has been set.

### GetValid

`func (o *VendorConnectorMappingDeletedAt) GetValid() bool`

GetValid returns the Valid field if non-nil, zero value otherwise.

### GetValidOk

`func (o *VendorConnectorMappingDeletedAt) GetValidOk() (*bool, bool)`

GetValidOk returns a tuple with the Valid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValid

`func (o *VendorConnectorMappingDeletedAt) SetValid(v bool)`

SetValid sets Valid field to given value.

### HasValid

`func (o *VendorConnectorMappingDeletedAt) HasValid() bool`

HasValid returns a boolean if a field has been set.


