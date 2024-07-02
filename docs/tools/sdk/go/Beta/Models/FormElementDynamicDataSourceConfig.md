---
id: form-element-dynamic-data-source-config
title: FormElementDynamicDataSourceConfig
pagination_label: FormElementDynamicDataSourceConfig
sidebar_label: FormElementDynamicDataSourceConfig
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'FormElementDynamicDataSourceConfig'] 
slug: /tools/sdk/go/beta/models/form-element-dynamic-data-source-config
tags: ['SDK', 'Software Development Kit', 'FormElementDynamicDataSourceConfig']
---

# FormElementDynamicDataSourceConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AggregationBucketField** |  Pointer to **string** | AggregationBucketField is the aggregation bucket field name | [optional] 
**Indices** |  Pointer to **[]string** | Indices is a list of indices to use | [optional] 
**ObjectType** |  Pointer to **string** | ObjectType is a PreDefinedSelectOption value IDENTITY PreDefinedSelectOptionIdentity ACCESS_PROFILE PreDefinedSelectOptionAccessProfile SOURCES PreDefinedSelectOptionSources ROLE PreDefinedSelectOptionRole ENTITLEMENT PreDefinedSelectOptionEntitlement | [optional] 
**Query** |  Pointer to **string** | Query is a text | [optional] 

## Methods

### NewFormElementDynamicDataSourceConfig

`func NewFormElementDynamicDataSourceConfig() *FormElementDynamicDataSourceConfig`

NewFormElementDynamicDataSourceConfig instantiates a new FormElementDynamicDataSourceConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormElementDynamicDataSourceConfigWithDefaults

`func NewFormElementDynamicDataSourceConfigWithDefaults() *FormElementDynamicDataSourceConfig`

NewFormElementDynamicDataSourceConfigWithDefaults instantiates a new FormElementDynamicDataSourceConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAggregationBucketField

`func (o *FormElementDynamicDataSourceConfig) GetAggregationBucketField() string`

GetAggregationBucketField returns the AggregationBucketField field if non-nil, zero value otherwise.

### GetAggregationBucketFieldOk

`func (o *FormElementDynamicDataSourceConfig) GetAggregationBucketFieldOk() (*string, bool)`

GetAggregationBucketFieldOk returns a tuple with the AggregationBucketField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationBucketField

`func (o *FormElementDynamicDataSourceConfig) SetAggregationBucketField(v string)`

SetAggregationBucketField sets AggregationBucketField field to given value.

### HasAggregationBucketField

`func (o *FormElementDynamicDataSourceConfig) HasAggregationBucketField() bool`

HasAggregationBucketField returns a boolean if a field has been set.

### GetIndices

`func (o *FormElementDynamicDataSourceConfig) GetIndices() []string`

GetIndices returns the Indices field if non-nil, zero value otherwise.

### GetIndicesOk

`func (o *FormElementDynamicDataSourceConfig) GetIndicesOk() (*[]string, bool)`

GetIndicesOk returns a tuple with the Indices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndices

`func (o *FormElementDynamicDataSourceConfig) SetIndices(v []string)`

SetIndices sets Indices field to given value.

### HasIndices

`func (o *FormElementDynamicDataSourceConfig) HasIndices() bool`

HasIndices returns a boolean if a field has been set.

### GetObjectType

`func (o *FormElementDynamicDataSourceConfig) GetObjectType() string`

GetObjectType returns the ObjectType field if non-nil, zero value otherwise.

### GetObjectTypeOk

`func (o *FormElementDynamicDataSourceConfig) GetObjectTypeOk() (*string, bool)`

GetObjectTypeOk returns a tuple with the ObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectType

`func (o *FormElementDynamicDataSourceConfig) SetObjectType(v string)`

SetObjectType sets ObjectType field to given value.

### HasObjectType

`func (o *FormElementDynamicDataSourceConfig) HasObjectType() bool`

HasObjectType returns a boolean if a field has been set.

### GetQuery

`func (o *FormElementDynamicDataSourceConfig) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *FormElementDynamicDataSourceConfig) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *FormElementDynamicDataSourceConfig) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *FormElementDynamicDataSourceConfig) HasQuery() bool`

HasQuery returns a boolean if a field has been set.


[[Back to top]](#) 


