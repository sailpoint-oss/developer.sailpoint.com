---
id: v2025-column
title: Column
pagination_label: Column
sidebar_label: Column
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Column', 'V2025Column'] 
slug: /tools/sdk/go/v2025/models/column
tags: ['SDK', 'Software Development Kit', 'Column', 'V2025Column']
---

# Column

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Field** | **string** | The name of the field.  | 
**Header** | Pointer to **string** | The value of the header.  | [optional] 

## Methods

### NewColumn

`func NewColumn(field string, ) *Column`

NewColumn instantiates a new Column object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewColumnWithDefaults

`func NewColumnWithDefaults() *Column`

NewColumnWithDefaults instantiates a new Column object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetField

`func (o *Column) GetField() string`

GetField returns the Field field if non-nil, zero value otherwise.

### GetFieldOk

`func (o *Column) GetFieldOk() (*string, bool)`

GetFieldOk returns a tuple with the Field field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetField

`func (o *Column) SetField(v string)`

SetField sets Field field to given value.


### GetHeader

`func (o *Column) GetHeader() string`

GetHeader returns the Header field if non-nil, zero value otherwise.

### GetHeaderOk

`func (o *Column) GetHeaderOk() (*string, bool)`

GetHeaderOk returns a tuple with the Header field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeader

`func (o *Column) SetHeader(v string)`

SetHeader sets Header field to given value.

### HasHeader

`func (o *Column) HasHeader() bool`

HasHeader returns a boolean if a field has been set.


