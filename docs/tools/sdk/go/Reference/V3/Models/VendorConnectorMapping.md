---
id: vendor-connector-mapping
title: VendorConnectorMapping
pagination_label: VendorConnectorMapping
sidebar_label: VendorConnectorMapping
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'VendorConnectorMapping', 'VendorConnectorMapping'] 
slug: /tools/sdk/go/v3/models/vendor-connector-mapping
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMapping', 'VendorConnectorMapping']
---

# VendorConnectorMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique identifier for the vendor-connector mapping. | [optional] 
**Vendor** | Pointer to **string** | The name of the vendor. | [optional] 
**Connector** | Pointer to **string** | The name of the connector. | [optional] 
**CreatedAt** | Pointer to **time.Time** | The creation timestamp of the mapping. | [optional] 
**CreatedBy** | Pointer to **string** | The identifier of the user who created the mapping. | [optional] 
**UpdatedAt** | Pointer to [**NullableVendorConnectorMappingUpdatedAt**](vendor-connector-mapping-updated-at) |  | [optional] 
**UpdatedBy** | Pointer to [**NullableVendorConnectorMappingUpdatedBy**](vendor-connector-mapping-updated-by) |  | [optional] 
**DeletedAt** | Pointer to [**NullableVendorConnectorMappingDeletedAt**](vendor-connector-mapping-deleted-at) |  | [optional] 
**DeletedBy** | Pointer to [**NullableVendorConnectorMappingDeletedBy**](vendor-connector-mapping-deleted-by) |  | [optional] 

## Methods

### NewVendorConnectorMapping

`func NewVendorConnectorMapping() *VendorConnectorMapping`

NewVendorConnectorMapping instantiates a new VendorConnectorMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVendorConnectorMappingWithDefaults

`func NewVendorConnectorMappingWithDefaults() *VendorConnectorMapping`

NewVendorConnectorMappingWithDefaults instantiates a new VendorConnectorMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *VendorConnectorMapping) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *VendorConnectorMapping) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *VendorConnectorMapping) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *VendorConnectorMapping) HasId() bool`

HasId returns a boolean if a field has been set.

### GetVendor

`func (o *VendorConnectorMapping) GetVendor() string`

GetVendor returns the Vendor field if non-nil, zero value otherwise.

### GetVendorOk

`func (o *VendorConnectorMapping) GetVendorOk() (*string, bool)`

GetVendorOk returns a tuple with the Vendor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendor

`func (o *VendorConnectorMapping) SetVendor(v string)`

SetVendor sets Vendor field to given value.

### HasVendor

`func (o *VendorConnectorMapping) HasVendor() bool`

HasVendor returns a boolean if a field has been set.

### GetConnector

`func (o *VendorConnectorMapping) GetConnector() string`

GetConnector returns the Connector field if non-nil, zero value otherwise.

### GetConnectorOk

`func (o *VendorConnectorMapping) GetConnectorOk() (*string, bool)`

GetConnectorOk returns a tuple with the Connector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnector

`func (o *VendorConnectorMapping) SetConnector(v string)`

SetConnector sets Connector field to given value.

### HasConnector

`func (o *VendorConnectorMapping) HasConnector() bool`

HasConnector returns a boolean if a field has been set.

### GetCreatedAt

`func (o *VendorConnectorMapping) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *VendorConnectorMapping) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *VendorConnectorMapping) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *VendorConnectorMapping) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetCreatedBy

`func (o *VendorConnectorMapping) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *VendorConnectorMapping) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *VendorConnectorMapping) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *VendorConnectorMapping) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *VendorConnectorMapping) GetUpdatedAt() VendorConnectorMappingUpdatedAt`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *VendorConnectorMapping) GetUpdatedAtOk() (*VendorConnectorMappingUpdatedAt, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *VendorConnectorMapping) SetUpdatedAt(v VendorConnectorMappingUpdatedAt)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *VendorConnectorMapping) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### SetUpdatedAtNil

`func (o *VendorConnectorMapping) SetUpdatedAtNil(b bool)`

 SetUpdatedAtNil sets the value for UpdatedAt to be an explicit nil

### UnsetUpdatedAt
`func (o *VendorConnectorMapping) UnsetUpdatedAt()`

UnsetUpdatedAt ensures that no value is present for UpdatedAt, not even an explicit nil
### GetUpdatedBy

`func (o *VendorConnectorMapping) GetUpdatedBy() VendorConnectorMappingUpdatedBy`

GetUpdatedBy returns the UpdatedBy field if non-nil, zero value otherwise.

### GetUpdatedByOk

`func (o *VendorConnectorMapping) GetUpdatedByOk() (*VendorConnectorMappingUpdatedBy, bool)`

GetUpdatedByOk returns a tuple with the UpdatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedBy

`func (o *VendorConnectorMapping) SetUpdatedBy(v VendorConnectorMappingUpdatedBy)`

SetUpdatedBy sets UpdatedBy field to given value.

### HasUpdatedBy

`func (o *VendorConnectorMapping) HasUpdatedBy() bool`

HasUpdatedBy returns a boolean if a field has been set.

### SetUpdatedByNil

`func (o *VendorConnectorMapping) SetUpdatedByNil(b bool)`

 SetUpdatedByNil sets the value for UpdatedBy to be an explicit nil

### UnsetUpdatedBy
`func (o *VendorConnectorMapping) UnsetUpdatedBy()`

UnsetUpdatedBy ensures that no value is present for UpdatedBy, not even an explicit nil
### GetDeletedAt

`func (o *VendorConnectorMapping) GetDeletedAt() VendorConnectorMappingDeletedAt`

GetDeletedAt returns the DeletedAt field if non-nil, zero value otherwise.

### GetDeletedAtOk

`func (o *VendorConnectorMapping) GetDeletedAtOk() (*VendorConnectorMappingDeletedAt, bool)`

GetDeletedAtOk returns a tuple with the DeletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedAt

`func (o *VendorConnectorMapping) SetDeletedAt(v VendorConnectorMappingDeletedAt)`

SetDeletedAt sets DeletedAt field to given value.

### HasDeletedAt

`func (o *VendorConnectorMapping) HasDeletedAt() bool`

HasDeletedAt returns a boolean if a field has been set.

### SetDeletedAtNil

`func (o *VendorConnectorMapping) SetDeletedAtNil(b bool)`

 SetDeletedAtNil sets the value for DeletedAt to be an explicit nil

### UnsetDeletedAt
`func (o *VendorConnectorMapping) UnsetDeletedAt()`

UnsetDeletedAt ensures that no value is present for DeletedAt, not even an explicit nil
### GetDeletedBy

`func (o *VendorConnectorMapping) GetDeletedBy() VendorConnectorMappingDeletedBy`

GetDeletedBy returns the DeletedBy field if non-nil, zero value otherwise.

### GetDeletedByOk

`func (o *VendorConnectorMapping) GetDeletedByOk() (*VendorConnectorMappingDeletedBy, bool)`

GetDeletedByOk returns a tuple with the DeletedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedBy

`func (o *VendorConnectorMapping) SetDeletedBy(v VendorConnectorMappingDeletedBy)`

SetDeletedBy sets DeletedBy field to given value.

### HasDeletedBy

`func (o *VendorConnectorMapping) HasDeletedBy() bool`

HasDeletedBy returns a boolean if a field has been set.

### SetDeletedByNil

`func (o *VendorConnectorMapping) SetDeletedByNil(b bool)`

 SetDeletedByNil sets the value for DeletedBy to be an explicit nil

### UnsetDeletedBy
`func (o *VendorConnectorMapping) UnsetDeletedBy()`

UnsetDeletedBy ensures that no value is present for DeletedBy, not even an explicit nil

