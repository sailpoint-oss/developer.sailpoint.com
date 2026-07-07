---
id: v1-create-saved-search-v1-request
title: CreateSavedSearchV1Request
pagination_label: CreateSavedSearchV1Request
sidebar_label: CreateSavedSearchV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateSavedSearchV1Request', 'V1CreateSavedSearchV1Request'] 
slug: /tools/sdk/go/savedsearch/models/create-saved-search-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateSavedSearchV1Request', 'V1CreateSavedSearchV1Request']
---

# CreateSavedSearchV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the saved search.  | [optional] 
**Description** | Pointer to **NullableString** | The description of the saved search.  | [optional] 
**Created** | Pointer to **NullableTime** | A date-time in ISO-8601 format | [optional] 
**Modified** | Pointer to **NullableTime** | A date-time in ISO-8601 format | [optional] 
**Indices** | **[]Index** | The names of the Elasticsearch indices in which to search.  | 
**Columns** | Pointer to [**map[string][]Column**](https://go.dev/tour/moretypes/6) | The columns to be returned (specifies the order in which they will be presented) for each document type.  The currently supported document types are: _accessprofile_, _accountactivity_, _account_, _aggregation_, _entitlement_, _event_, _identity_, and _role_.  | [optional] 
**Query** | **string** | The search query using Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL.  | 
**Fields** | Pointer to **[]string** | The fields to be searched against in a multi-field query.  | [optional] 
**OrderBy** | Pointer to **map[string][]string** | Sort by index. This takes precedence over the `sort` property.  | [optional] 
**Sort** | Pointer to **[]string** | The fields to be used to sort the search results.  | [optional] 
**Filters** | Pointer to [**NullableSavedsearchdetailFilters**](savedsearchdetail-filters) |  | [optional] 

## Methods

### NewCreateSavedSearchV1Request

`func NewCreateSavedSearchV1Request(indices []Index, query string, ) *CreateSavedSearchV1Request`

NewCreateSavedSearchV1Request instantiates a new CreateSavedSearchV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateSavedSearchV1RequestWithDefaults

`func NewCreateSavedSearchV1RequestWithDefaults() *CreateSavedSearchV1Request`

NewCreateSavedSearchV1RequestWithDefaults instantiates a new CreateSavedSearchV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateSavedSearchV1Request) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateSavedSearchV1Request) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateSavedSearchV1Request) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CreateSavedSearchV1Request) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *CreateSavedSearchV1Request) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateSavedSearchV1Request) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateSavedSearchV1Request) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateSavedSearchV1Request) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *CreateSavedSearchV1Request) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *CreateSavedSearchV1Request) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetCreated

`func (o *CreateSavedSearchV1Request) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CreateSavedSearchV1Request) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CreateSavedSearchV1Request) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *CreateSavedSearchV1Request) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *CreateSavedSearchV1Request) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *CreateSavedSearchV1Request) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *CreateSavedSearchV1Request) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CreateSavedSearchV1Request) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CreateSavedSearchV1Request) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CreateSavedSearchV1Request) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *CreateSavedSearchV1Request) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *CreateSavedSearchV1Request) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetIndices

`func (o *CreateSavedSearchV1Request) GetIndices() []Index`

GetIndices returns the Indices field if non-nil, zero value otherwise.

### GetIndicesOk

`func (o *CreateSavedSearchV1Request) GetIndicesOk() (*[]Index, bool)`

GetIndicesOk returns a tuple with the Indices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndices

`func (o *CreateSavedSearchV1Request) SetIndices(v []Index)`

SetIndices sets Indices field to given value.


### GetColumns

`func (o *CreateSavedSearchV1Request) GetColumns() map[string][]Column`

GetColumns returns the Columns field if non-nil, zero value otherwise.

### GetColumnsOk

`func (o *CreateSavedSearchV1Request) GetColumnsOk() (*map[string][]Column, bool)`

GetColumnsOk returns a tuple with the Columns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumns

`func (o *CreateSavedSearchV1Request) SetColumns(v map[string][]Column)`

SetColumns sets Columns field to given value.

### HasColumns

`func (o *CreateSavedSearchV1Request) HasColumns() bool`

HasColumns returns a boolean if a field has been set.

### GetQuery

`func (o *CreateSavedSearchV1Request) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *CreateSavedSearchV1Request) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *CreateSavedSearchV1Request) SetQuery(v string)`

SetQuery sets Query field to given value.


### GetFields

`func (o *CreateSavedSearchV1Request) GetFields() []string`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *CreateSavedSearchV1Request) GetFieldsOk() (*[]string, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *CreateSavedSearchV1Request) SetFields(v []string)`

SetFields sets Fields field to given value.

### HasFields

`func (o *CreateSavedSearchV1Request) HasFields() bool`

HasFields returns a boolean if a field has been set.

### SetFieldsNil

`func (o *CreateSavedSearchV1Request) SetFieldsNil(b bool)`

 SetFieldsNil sets the value for Fields to be an explicit nil

### UnsetFields
`func (o *CreateSavedSearchV1Request) UnsetFields()`

UnsetFields ensures that no value is present for Fields, not even an explicit nil
### GetOrderBy

`func (o *CreateSavedSearchV1Request) GetOrderBy() map[string][]string`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *CreateSavedSearchV1Request) GetOrderByOk() (*map[string][]string, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *CreateSavedSearchV1Request) SetOrderBy(v map[string][]string)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *CreateSavedSearchV1Request) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### SetOrderByNil

`func (o *CreateSavedSearchV1Request) SetOrderByNil(b bool)`

 SetOrderByNil sets the value for OrderBy to be an explicit nil

### UnsetOrderBy
`func (o *CreateSavedSearchV1Request) UnsetOrderBy()`

UnsetOrderBy ensures that no value is present for OrderBy, not even an explicit nil
### GetSort

`func (o *CreateSavedSearchV1Request) GetSort() []string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *CreateSavedSearchV1Request) GetSortOk() (*[]string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *CreateSavedSearchV1Request) SetSort(v []string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *CreateSavedSearchV1Request) HasSort() bool`

HasSort returns a boolean if a field has been set.

### SetSortNil

`func (o *CreateSavedSearchV1Request) SetSortNil(b bool)`

 SetSortNil sets the value for Sort to be an explicit nil

### UnsetSort
`func (o *CreateSavedSearchV1Request) UnsetSort()`

UnsetSort ensures that no value is present for Sort, not even an explicit nil
### GetFilters

`func (o *CreateSavedSearchV1Request) GetFilters() SavedsearchdetailFilters`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *CreateSavedSearchV1Request) GetFiltersOk() (*SavedsearchdetailFilters, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *CreateSavedSearchV1Request) SetFilters(v SavedsearchdetailFilters)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *CreateSavedSearchV1Request) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### SetFiltersNil

`func (o *CreateSavedSearchV1Request) SetFiltersNil(b bool)`

 SetFiltersNil sets the value for Filters to be an explicit nil

### UnsetFilters
`func (o *CreateSavedSearchV1Request) UnsetFilters()`

UnsetFilters ensures that no value is present for Filters, not even an explicit nil

