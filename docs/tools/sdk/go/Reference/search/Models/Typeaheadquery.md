---
id: v1-typeaheadquery
title: Typeaheadquery
pagination_label: Typeaheadquery
sidebar_label: Typeaheadquery
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Typeaheadquery', 'V1Typeaheadquery'] 
slug: /tools/sdk/go/search/models/typeaheadquery
tags: ['SDK', 'Software Development Kit', 'Typeaheadquery', 'V1Typeaheadquery']
---

# Typeaheadquery

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

### NewTypeaheadquery

`func NewTypeaheadquery(query string, field string, ) *Typeaheadquery`

NewTypeaheadquery instantiates a new Typeaheadquery object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTypeaheadqueryWithDefaults

`func NewTypeaheadqueryWithDefaults() *Typeaheadquery`

NewTypeaheadqueryWithDefaults instantiates a new Typeaheadquery object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *Typeaheadquery) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *Typeaheadquery) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *Typeaheadquery) SetQuery(v string)`

SetQuery sets Query field to given value.


### GetField

`func (o *Typeaheadquery) GetField() string`

GetField returns the Field field if non-nil, zero value otherwise.

### GetFieldOk

`func (o *Typeaheadquery) GetFieldOk() (*string, bool)`

GetFieldOk returns a tuple with the Field field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetField

`func (o *Typeaheadquery) SetField(v string)`

SetField sets Field field to given value.


### GetNestedType

`func (o *Typeaheadquery) GetNestedType() string`

GetNestedType returns the NestedType field if non-nil, zero value otherwise.

### GetNestedTypeOk

`func (o *Typeaheadquery) GetNestedTypeOk() (*string, bool)`

GetNestedTypeOk returns a tuple with the NestedType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNestedType

`func (o *Typeaheadquery) SetNestedType(v string)`

SetNestedType sets NestedType field to given value.

### HasNestedType

`func (o *Typeaheadquery) HasNestedType() bool`

HasNestedType returns a boolean if a field has been set.

### GetMaxExpansions

`func (o *Typeaheadquery) GetMaxExpansions() int32`

GetMaxExpansions returns the MaxExpansions field if non-nil, zero value otherwise.

### GetMaxExpansionsOk

`func (o *Typeaheadquery) GetMaxExpansionsOk() (*int32, bool)`

GetMaxExpansionsOk returns a tuple with the MaxExpansions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxExpansions

`func (o *Typeaheadquery) SetMaxExpansions(v int32)`

SetMaxExpansions sets MaxExpansions field to given value.

### HasMaxExpansions

`func (o *Typeaheadquery) HasMaxExpansions() bool`

HasMaxExpansions returns a boolean if a field has been set.

### GetSize

`func (o *Typeaheadquery) GetSize() int32`

GetSize returns the Size field if non-nil, zero value otherwise.

### GetSizeOk

`func (o *Typeaheadquery) GetSizeOk() (*int32, bool)`

GetSizeOk returns a tuple with the Size field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSize

`func (o *Typeaheadquery) SetSize(v int32)`

SetSize sets Size field to given value.

### HasSize

`func (o *Typeaheadquery) HasSize() bool`

HasSize returns a boolean if a field has been set.

### GetSort

`func (o *Typeaheadquery) GetSort() string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *Typeaheadquery) GetSortOk() (*string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *Typeaheadquery) SetSort(v string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *Typeaheadquery) HasSort() bool`

HasSort returns a boolean if a field has been set.

### GetSortByValue

`func (o *Typeaheadquery) GetSortByValue() bool`

GetSortByValue returns the SortByValue field if non-nil, zero value otherwise.

### GetSortByValueOk

`func (o *Typeaheadquery) GetSortByValueOk() (*bool, bool)`

GetSortByValueOk returns a tuple with the SortByValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSortByValue

`func (o *Typeaheadquery) SetSortByValue(v bool)`

SetSortByValue sets SortByValue field to given value.

### HasSortByValue

`func (o *Typeaheadquery) HasSortByValue() bool`

HasSortByValue returns a boolean if a field has been set.


