---
id: v2024-type-ahead-query
title: TypeAheadQuery
pagination_label: TypeAheadQuery
sidebar_label: TypeAheadQuery
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TypeAheadQuery', 'V2024TypeAheadQuery'] 
slug: /tools/sdk/go/v2024/models/type-ahead-query
tags: ['SDK', 'Software Development Kit', 'TypeAheadQuery', 'V2024TypeAheadQuery']
---

# TypeAheadQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **string** | The type ahead query string used to construct a phrase prefix match query. | 
**Field** | **string** | The field on which to perform the type ahead search. | 
**NestedType** | Pointer to **string** | The nested type. | [optional] 
**MaxExpansions** | Pointer to **int32** | The number of suffixes the last term will be expanded into. Influences the performance of the query and the number results returned. Valid values: 1 to 1000. | [optional] [default to 10]
**Size** | Pointer to **int32** | The max amount of records the search will return. | [optional] [default to 100]
**Sort** | Pointer to **string** | The sort order of the returned records. | [optional] [default to "desc"]
**SortByValue** | Pointer to **bool** | The flag that defines the sort type, by count or value. | [optional] [default to false]

## Methods

### NewTypeAheadQuery

`func NewTypeAheadQuery(query string, field string, ) *TypeAheadQuery`

NewTypeAheadQuery instantiates a new TypeAheadQuery object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTypeAheadQueryWithDefaults

`func NewTypeAheadQueryWithDefaults() *TypeAheadQuery`

NewTypeAheadQueryWithDefaults instantiates a new TypeAheadQuery object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *TypeAheadQuery) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *TypeAheadQuery) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *TypeAheadQuery) SetQuery(v string)`

SetQuery sets Query field to given value.


### GetField

`func (o *TypeAheadQuery) GetField() string`

GetField returns the Field field if non-nil, zero value otherwise.

### GetFieldOk

`func (o *TypeAheadQuery) GetFieldOk() (*string, bool)`

GetFieldOk returns a tuple with the Field field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetField

`func (o *TypeAheadQuery) SetField(v string)`

SetField sets Field field to given value.


### GetNestedType

`func (o *TypeAheadQuery) GetNestedType() string`

GetNestedType returns the NestedType field if non-nil, zero value otherwise.

### GetNestedTypeOk

`func (o *TypeAheadQuery) GetNestedTypeOk() (*string, bool)`

GetNestedTypeOk returns a tuple with the NestedType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNestedType

`func (o *TypeAheadQuery) SetNestedType(v string)`

SetNestedType sets NestedType field to given value.

### HasNestedType

`func (o *TypeAheadQuery) HasNestedType() bool`

HasNestedType returns a boolean if a field has been set.

### GetMaxExpansions

`func (o *TypeAheadQuery) GetMaxExpansions() int32`

GetMaxExpansions returns the MaxExpansions field if non-nil, zero value otherwise.

### GetMaxExpansionsOk

`func (o *TypeAheadQuery) GetMaxExpansionsOk() (*int32, bool)`

GetMaxExpansionsOk returns a tuple with the MaxExpansions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxExpansions

`func (o *TypeAheadQuery) SetMaxExpansions(v int32)`

SetMaxExpansions sets MaxExpansions field to given value.

### HasMaxExpansions

`func (o *TypeAheadQuery) HasMaxExpansions() bool`

HasMaxExpansions returns a boolean if a field has been set.

### GetSize

`func (o *TypeAheadQuery) GetSize() int32`

GetSize returns the Size field if non-nil, zero value otherwise.

### GetSizeOk

`func (o *TypeAheadQuery) GetSizeOk() (*int32, bool)`

GetSizeOk returns a tuple with the Size field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSize

`func (o *TypeAheadQuery) SetSize(v int32)`

SetSize sets Size field to given value.

### HasSize

`func (o *TypeAheadQuery) HasSize() bool`

HasSize returns a boolean if a field has been set.

### GetSort

`func (o *TypeAheadQuery) GetSort() string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *TypeAheadQuery) GetSortOk() (*string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *TypeAheadQuery) SetSort(v string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *TypeAheadQuery) HasSort() bool`

HasSort returns a boolean if a field has been set.

### GetSortByValue

`func (o *TypeAheadQuery) GetSortByValue() bool`

GetSortByValue returns the SortByValue field if non-nil, zero value otherwise.

### GetSortByValueOk

`func (o *TypeAheadQuery) GetSortByValueOk() (*bool, bool)`

GetSortByValueOk returns a tuple with the SortByValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSortByValue

`func (o *TypeAheadQuery) SetSortByValue(v bool)`

SetSortByValue sets SortByValue field to given value.

### HasSortByValue

`func (o *TypeAheadQuery) HasSortByValue() bool`

HasSortByValue returns a boolean if a field has been set.


