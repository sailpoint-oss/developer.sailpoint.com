---
id: v1-searchcriteria
title: Searchcriteria
pagination_label: Searchcriteria
sidebar_label: Searchcriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Searchcriteria', 'V1Searchcriteria'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/searchcriteria
tags: ['SDK', 'Software Development Kit', 'Searchcriteria', 'V1Searchcriteria']
---

# Searchcriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Indices** | **[]string** | A list of indices to search within. Must contain exactly one item, typically \"entitlements\". | 
**Filters** | Pointer to [**map[string]SearchcriteriaFiltersValue**](searchcriteria-filters-value) | A map of filters applied to the search. Keys are filter names, and values are filter definitions. | [optional] 
**Query** | Pointer to [**SearchcriteriaQuery**](searchcriteria-query) |  | [optional] 
**QueryType** | Pointer to **string** | Specifies the type of query. Must be \"TEXT\" if `textQuery` is used. | [optional] 
**TextQuery** | Pointer to [**SearchcriteriaTextQuery**](searchcriteria-text-query) |  | [optional] 
**IncludeNested** | Pointer to **bool** | Whether to include nested objects in the search results. | [optional] [default to false]
**Sort** | Pointer to **[]string** | Specifies the sorting order for the results. | [optional] 
**SearchAfter** | Pointer to **[]string** | Used for pagination to fetch results after a specific point. | [optional] 

## Methods

### NewSearchcriteria

`func NewSearchcriteria(indices []string, ) *Searchcriteria`

NewSearchcriteria instantiates a new Searchcriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchcriteriaWithDefaults

`func NewSearchcriteriaWithDefaults() *Searchcriteria`

NewSearchcriteriaWithDefaults instantiates a new Searchcriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIndices

`func (o *Searchcriteria) GetIndices() []string`

GetIndices returns the Indices field if non-nil, zero value otherwise.

### GetIndicesOk

`func (o *Searchcriteria) GetIndicesOk() (*[]string, bool)`

GetIndicesOk returns a tuple with the Indices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndices

`func (o *Searchcriteria) SetIndices(v []string)`

SetIndices sets Indices field to given value.


### GetFilters

`func (o *Searchcriteria) GetFilters() map[string]SearchcriteriaFiltersValue`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *Searchcriteria) GetFiltersOk() (*map[string]SearchcriteriaFiltersValue, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *Searchcriteria) SetFilters(v map[string]SearchcriteriaFiltersValue)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *Searchcriteria) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetQuery

`func (o *Searchcriteria) GetQuery() SearchcriteriaQuery`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *Searchcriteria) GetQueryOk() (*SearchcriteriaQuery, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *Searchcriteria) SetQuery(v SearchcriteriaQuery)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *Searchcriteria) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetQueryType

`func (o *Searchcriteria) GetQueryType() string`

GetQueryType returns the QueryType field if non-nil, zero value otherwise.

### GetQueryTypeOk

`func (o *Searchcriteria) GetQueryTypeOk() (*string, bool)`

GetQueryTypeOk returns a tuple with the QueryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryType

`func (o *Searchcriteria) SetQueryType(v string)`

SetQueryType sets QueryType field to given value.

### HasQueryType

`func (o *Searchcriteria) HasQueryType() bool`

HasQueryType returns a boolean if a field has been set.

### GetTextQuery

`func (o *Searchcriteria) GetTextQuery() SearchcriteriaTextQuery`

GetTextQuery returns the TextQuery field if non-nil, zero value otherwise.

### GetTextQueryOk

`func (o *Searchcriteria) GetTextQueryOk() (*SearchcriteriaTextQuery, bool)`

GetTextQueryOk returns a tuple with the TextQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextQuery

`func (o *Searchcriteria) SetTextQuery(v SearchcriteriaTextQuery)`

SetTextQuery sets TextQuery field to given value.

### HasTextQuery

`func (o *Searchcriteria) HasTextQuery() bool`

HasTextQuery returns a boolean if a field has been set.

### GetIncludeNested

`func (o *Searchcriteria) GetIncludeNested() bool`

GetIncludeNested returns the IncludeNested field if non-nil, zero value otherwise.

### GetIncludeNestedOk

`func (o *Searchcriteria) GetIncludeNestedOk() (*bool, bool)`

GetIncludeNestedOk returns a tuple with the IncludeNested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeNested

`func (o *Searchcriteria) SetIncludeNested(v bool)`

SetIncludeNested sets IncludeNested field to given value.

### HasIncludeNested

`func (o *Searchcriteria) HasIncludeNested() bool`

HasIncludeNested returns a boolean if a field has been set.

### GetSort

`func (o *Searchcriteria) GetSort() []string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *Searchcriteria) GetSortOk() (*[]string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *Searchcriteria) SetSort(v []string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *Searchcriteria) HasSort() bool`

HasSort returns a boolean if a field has been set.

### GetSearchAfter

`func (o *Searchcriteria) GetSearchAfter() []string`

GetSearchAfter returns the SearchAfter field if non-nil, zero value otherwise.

### GetSearchAfterOk

`func (o *Searchcriteria) GetSearchAfterOk() (*[]string, bool)`

GetSearchAfterOk returns a tuple with the SearchAfter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchAfter

`func (o *Searchcriteria) SetSearchAfter(v []string)`

SetSearchAfter sets SearchAfter field to given value.

### HasSearchAfter

`func (o *Searchcriteria) HasSearchAfter() bool`

HasSearchAfter returns a boolean if a field has been set.


