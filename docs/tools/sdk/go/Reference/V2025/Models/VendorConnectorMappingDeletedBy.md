---
id: vendor-connector-mapping-deleted-by
title: VendorConnectorMappingDeletedBy
pagination_label: VendorConnectorMappingDeletedBy
sidebar_label: VendorConnectorMappingDeletedBy
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'VendorConnectorMappingDeletedBy', 'VendorConnectorMappingDeletedBy'] 
slug: /tools/sdk/go//models/vendor-connector-mapping-deleted-by
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingDeletedBy', 'VendorConnectorMappingDeletedBy']
---

# VendorConnectorMappingDeletedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**String** | Pointer to **string** | The identifier of the user who deleted the mapping, if applicable. | [optional] 
**Valid** | Pointer to **bool** | A flag indicating if the 'String' field is set and valid, i.e., if the mapping has been deleted. | [optional] [default to false]

## Methods

### NewVendorConnectorMappingDeletedBy

`func NewVendorConnectorMappingDeletedBy() *VendorConnectorMappingDeletedBy`

NewVendorConnectorMappingDeletedBy instantiates a new VendorConnectorMappingDeletedBy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVendorConnectorMappingDeletedByWithDefaults

`func NewVendorConnectorMappingDeletedByWithDefaults() *VendorConnectorMappingDeletedBy`

NewVendorConnectorMappingDeletedByWithDefaults instantiates a new VendorConnectorMappingDeletedBy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetString

`func (o *VendorConnectorMappingDeletedBy) GetString() string`

GetString returns the String field if non-nil, zero value otherwise.

### GetStringOk

`func (o *VendorConnectorMappingDeletedBy) GetStringOk() (*string, bool)`

GetStringOk returns a tuple with the String field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetString

`func (o *VendorConnectorMappingDeletedBy) SetString(v string)`

SetString sets String field to given value.

### HasString

`func (o *VendorConnectorMappingDeletedBy) HasString() bool`

HasString returns a boolean if a field has been set.

### GetValid

`func (o *VendorConnectorMappingDeletedBy) GetValid() bool`

GetValid returns the Valid field if non-nil, zero value otherwise.

### GetValidOk

`func (o *VendorConnectorMappingDeletedBy) GetValidOk() (*bool, bool)`

GetValidOk returns a tuple with the Valid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValid

`func (o *VendorConnectorMappingDeletedBy) SetValid(v bool)`

SetValid sets Valid field to given value.

### HasValid

`func (o *VendorConnectorMappingDeletedBy) HasValid() bool`

HasValid returns a boolean if a field has been set.


