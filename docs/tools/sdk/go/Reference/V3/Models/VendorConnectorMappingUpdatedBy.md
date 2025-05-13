---
id: vendor-connector-mapping-updated-by
title: VendorConnectorMappingUpdatedBy
pagination_label: VendorConnectorMappingUpdatedBy
sidebar_label: VendorConnectorMappingUpdatedBy
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'VendorConnectorMappingUpdatedBy', 'VendorConnectorMappingUpdatedBy'] 
slug: /tools/sdk/go/v3/models/vendor-connector-mapping-updated-by
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingUpdatedBy', 'VendorConnectorMappingUpdatedBy']
---

# VendorConnectorMappingUpdatedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**String** | Pointer to **string** | The identifier of the user who last updated the mapping, if available. | [optional] 
**Valid** | Pointer to **bool** | A flag indicating if the 'String' field is set and valid. | [optional] [default to false]

## Methods

### NewVendorConnectorMappingUpdatedBy

`func NewVendorConnectorMappingUpdatedBy() *VendorConnectorMappingUpdatedBy`

NewVendorConnectorMappingUpdatedBy instantiates a new VendorConnectorMappingUpdatedBy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVendorConnectorMappingUpdatedByWithDefaults

`func NewVendorConnectorMappingUpdatedByWithDefaults() *VendorConnectorMappingUpdatedBy`

NewVendorConnectorMappingUpdatedByWithDefaults instantiates a new VendorConnectorMappingUpdatedBy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetString

`func (o *VendorConnectorMappingUpdatedBy) GetString() string`

GetString returns the String field if non-nil, zero value otherwise.

### GetStringOk

`func (o *VendorConnectorMappingUpdatedBy) GetStringOk() (*string, bool)`

GetStringOk returns a tuple with the String field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetString

`func (o *VendorConnectorMappingUpdatedBy) SetString(v string)`

SetString sets String field to given value.

### HasString

`func (o *VendorConnectorMappingUpdatedBy) HasString() bool`

HasString returns a boolean if a field has been set.

### GetValid

`func (o *VendorConnectorMappingUpdatedBy) GetValid() bool`

GetValid returns the Valid field if non-nil, zero value otherwise.

### GetValidOk

`func (o *VendorConnectorMappingUpdatedBy) GetValidOk() (*bool, bool)`

GetValidOk returns a tuple with the Valid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValid

`func (o *VendorConnectorMappingUpdatedBy) SetValid(v bool)`

SetValid sets Valid field to given value.

### HasValid

`func (o *VendorConnectorMappingUpdatedBy) HasValid() bool`

HasValid returns a boolean if a field has been set.


