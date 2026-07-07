---
id: v1-formelementdynamicdatasource
title: Formelementdynamicdatasource
pagination_label: Formelementdynamicdatasource
sidebar_label: Formelementdynamicdatasource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Formelementdynamicdatasource', 'V1Formelementdynamicdatasource'] 
slug: /tools/sdk/go/customforms/models/formelementdynamicdatasource
tags: ['SDK', 'Software Development Kit', 'Formelementdynamicdatasource', 'V1Formelementdynamicdatasource']
---

# Formelementdynamicdatasource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**Formelementdynamicdatasourceconfig**](formelementdynamicdatasourceconfig) |  | [optional] 
**DataSourceType** | Pointer to **string** | DataSourceType is a FormElementDataSourceType value STATIC FormElementDataSourceTypeStatic INTERNAL FormElementDataSourceTypeInternal SEARCH FormElementDataSourceTypeSearch FORM_INPUT FormElementDataSourceTypeFormInput | [optional] 

## Methods

### NewFormelementdynamicdatasource

`func NewFormelementdynamicdatasource() *Formelementdynamicdatasource`

NewFormelementdynamicdatasource instantiates a new Formelementdynamicdatasource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormelementdynamicdatasourceWithDefaults

`func NewFormelementdynamicdatasourceWithDefaults() *Formelementdynamicdatasource`

NewFormelementdynamicdatasourceWithDefaults instantiates a new Formelementdynamicdatasource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *Formelementdynamicdatasource) GetConfig() Formelementdynamicdatasourceconfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *Formelementdynamicdatasource) GetConfigOk() (*Formelementdynamicdatasourceconfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *Formelementdynamicdatasource) SetConfig(v Formelementdynamicdatasourceconfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *Formelementdynamicdatasource) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDataSourceType

`func (o *Formelementdynamicdatasource) GetDataSourceType() string`

GetDataSourceType returns the DataSourceType field if non-nil, zero value otherwise.

### GetDataSourceTypeOk

`func (o *Formelementdynamicdatasource) GetDataSourceTypeOk() (*string, bool)`

GetDataSourceTypeOk returns a tuple with the DataSourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSourceType

`func (o *Formelementdynamicdatasource) SetDataSourceType(v string)`

SetDataSourceType sets DataSourceType field to given value.

### HasDataSourceType

`func (o *Formelementdynamicdatasource) HasDataSourceType() bool`

HasDataSourceType returns a boolean if a field has been set.


