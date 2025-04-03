---
id: v2024-saved-search-detail
title: SavedSearchDetail
pagination_label: SavedSearchDetail
sidebar_label: SavedSearchDetail
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SavedSearchDetail', 'V2024SavedSearchDetail'] 
slug: /tools/sdk/go/v2024/models/saved-search-detail
tags: ['SDK', 'Software Development Kit', 'SavedSearchDetail', 'V2024SavedSearchDetail']
---

# SavedSearchDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | Pointer to **NullableTime** | A date-time in ISO-8601 format | [optional] 
**Modified** | Pointer to **NullableTime** | A date-time in ISO-8601 format | [optional] 
**Indices** | [**[]Index**](index) | The names of the Elasticsearch indices in which to search.  | 
**Columns** | Pointer to [**map[string][]Column**](https://go.dev/tour/moretypes/6) | The columns to be returned (specifies the order in which they will be presented) for each document type.  The currently supported document types are: _accessprofile_, _accountactivity_, _account_, _aggregation_, _entitlement_, _event_, _identity_, and _role_.  | [optional] 
**Query** | **string** | The search query using Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL.  | 
**Fields** | Pointer to **[]string** | The fields to be searched against in a multi-field query.  | [optional] 
**OrderBy** | Pointer to **map[string][]string** | Sort by index. This takes precedence over the `sort` property.  | [optional] 
**Sort** | Pointer to **[]string** | The fields to be used to sort the search results.  | [optional] 
**Filters** | Pointer to [**NullableSavedSearchDetailFilters**](saved-search-detail-filters) |  | [optional] 

## Methods

### NewSavedSearchDetail

`func NewSavedSearchDetail(indices []Index, query string, ) *SavedSearchDetail`

NewSavedSearchDetail instantiates a new SavedSearchDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSavedSearchDetailWithDefaults

`func NewSavedSearchDetailWithDefaults() *SavedSearchDetail`

NewSavedSearchDetailWithDefaults instantiates a new SavedSearchDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *SavedSearchDetail) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SavedSearchDetail) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SavedSearchDetail) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SavedSearchDetail) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *SavedSearchDetail) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *SavedSearchDetail) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *SavedSearchDetail) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SavedSearchDetail) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SavedSearchDetail) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SavedSearchDetail) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *SavedSearchDetail) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *SavedSearchDetail) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetIndices

`func (o *SavedSearchDetail) GetIndices() []Index`

GetIndices returns the Indices field if non-nil, zero value otherwise.

### GetIndicesOk

`func (o *SavedSearchDetail) GetIndicesOk() (*[]Index, bool)`

GetIndicesOk returns a tuple with the Indices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndices

`func (o *SavedSearchDetail) SetIndices(v []Index)`

SetIndices sets Indices field to given value.


### GetColumns

`func (o *SavedSearchDetail) GetColumns() map[string][]Column`

GetColumns returns the Columns field if non-nil, zero value otherwise.

### GetColumnsOk

`func (o *SavedSearchDetail) GetColumnsOk() (*map[string][]Column, bool)`

GetColumnsOk returns a tuple with the Columns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumns

`func (o *SavedSearchDetail) SetColumns(v map[string][]Column)`

SetColumns sets Columns field to given value.

### HasColumns

`func (o *SavedSearchDetail) HasColumns() bool`

HasColumns returns a boolean if a field has been set.

### GetQuery

`func (o *SavedSearchDetail) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *SavedSearchDetail) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *SavedSearchDetail) SetQuery(v string)`

SetQuery sets Query field to given value.


### GetFields

`func (o *SavedSearchDetail) GetFields() []string`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *SavedSearchDetail) GetFieldsOk() (*[]string, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *SavedSearchDetail) SetFields(v []string)`

SetFields sets Fields field to given value.

### HasFields

`func (o *SavedSearchDetail) HasFields() bool`

HasFields returns a boolean if a field has been set.

### SetFieldsNil

`func (o *SavedSearchDetail) SetFieldsNil(b bool)`

 SetFieldsNil sets the value for Fields to be an explicit nil

### UnsetFields
`func (o *SavedSearchDetail) UnsetFields()`

UnsetFields ensures that no value is present for Fields, not even an explicit nil
### GetOrderBy

`func (o *SavedSearchDetail) GetOrderBy() map[string][]string`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *SavedSearchDetail) GetOrderByOk() (*map[string][]string, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *SavedSearchDetail) SetOrderBy(v map[string][]string)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *SavedSearchDetail) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### SetOrderByNil

`func (o *SavedSearchDetail) SetOrderByNil(b bool)`

 SetOrderByNil sets the value for OrderBy to be an explicit nil

### UnsetOrderBy
`func (o *SavedSearchDetail) UnsetOrderBy()`

UnsetOrderBy ensures that no value is present for OrderBy, not even an explicit nil
### GetSort

`func (o *SavedSearchDetail) GetSort() []string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *SavedSearchDetail) GetSortOk() (*[]string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *SavedSearchDetail) SetSort(v []string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *SavedSearchDetail) HasSort() bool`

HasSort returns a boolean if a field has been set.

### SetSortNil

`func (o *SavedSearchDetail) SetSortNil(b bool)`

 SetSortNil sets the value for Sort to be an explicit nil

### UnsetSort
`func (o *SavedSearchDetail) UnsetSort()`

UnsetSort ensures that no value is present for Sort, not even an explicit nil
### GetFilters

`func (o *SavedSearchDetail) GetFilters() SavedSearchDetailFilters`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *SavedSearchDetail) GetFiltersOk() (*SavedSearchDetailFilters, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *SavedSearchDetail) SetFilters(v SavedSearchDetailFilters)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *SavedSearchDetail) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### SetFiltersNil

`func (o *SavedSearchDetail) SetFiltersNil(b bool)`

 SetFiltersNil sets the value for Filters to be an explicit nil

### UnsetFilters
`func (o *SavedSearchDetail) UnsetFilters()`

UnsetFilters ensures that no value is present for Filters, not even an explicit nil

