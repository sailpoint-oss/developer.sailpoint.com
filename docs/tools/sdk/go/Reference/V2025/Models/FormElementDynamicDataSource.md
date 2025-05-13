---
id: v2025-form-element-dynamic-data-source
title: FormElementDynamicDataSource
pagination_label: FormElementDynamicDataSource
sidebar_label: FormElementDynamicDataSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormElementDynamicDataSource', 'V2025FormElementDynamicDataSource'] 
slug: /tools/sdk/go/v2025/models/form-element-dynamic-data-source
tags: ['SDK', 'Software Development Kit', 'FormElementDynamicDataSource', 'V2025FormElementDynamicDataSource']
---

# FormElementDynamicDataSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**FormElementDynamicDataSourceConfig**](form-element-dynamic-data-source-config) |  | [optional] 
**DataSourceType** | Pointer to **string** | DataSourceType is a FormElementDataSourceType value STATIC FormElementDataSourceTypeStatic INTERNAL FormElementDataSourceTypeInternal SEARCH FormElementDataSourceTypeSearch FORM_INPUT FormElementDataSourceTypeFormInput | [optional] 

## Methods

### NewFormElementDynamicDataSource

`func NewFormElementDynamicDataSource() *FormElementDynamicDataSource`

NewFormElementDynamicDataSource instantiates a new FormElementDynamicDataSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormElementDynamicDataSourceWithDefaults

`func NewFormElementDynamicDataSourceWithDefaults() *FormElementDynamicDataSource`

NewFormElementDynamicDataSourceWithDefaults instantiates a new FormElementDynamicDataSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *FormElementDynamicDataSource) GetConfig() FormElementDynamicDataSourceConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *FormElementDynamicDataSource) GetConfigOk() (*FormElementDynamicDataSourceConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *FormElementDynamicDataSource) SetConfig(v FormElementDynamicDataSourceConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *FormElementDynamicDataSource) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDataSourceType

`func (o *FormElementDynamicDataSource) GetDataSourceType() string`

GetDataSourceType returns the DataSourceType field if non-nil, zero value otherwise.

### GetDataSourceTypeOk

`func (o *FormElementDynamicDataSource) GetDataSourceTypeOk() (*string, bool)`

GetDataSourceTypeOk returns a tuple with the DataSourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSourceType

`func (o *FormElementDynamicDataSource) SetDataSourceType(v string)`

SetDataSourceType sets DataSourceType field to given value.

### HasDataSourceType

`func (o *FormElementDynamicDataSource) HasDataSourceType() bool`

HasDataSourceType returns a boolean if a field has been set.


