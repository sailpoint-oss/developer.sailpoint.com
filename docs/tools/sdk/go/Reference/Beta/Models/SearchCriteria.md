---
id: beta-search-criteria
title: SearchCriteria
pagination_label: SearchCriteria
sidebar_label: SearchCriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchCriteria', 'BetaSearchCriteria'] 
slug: /tools/sdk/go/beta/models/search-criteria
tags: ['SDK', 'Software Development Kit', 'SearchCriteria', 'BetaSearchCriteria']
---

# SearchCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Indices** | **[]string** | A list of indices to search within. Must contain exactly one item, typically \"entitlements\". | 
**Filters** | Pointer to [**map[string]SearchCriteriaFiltersValue**](search-criteria-filters-value) | A map of filters applied to the search. Keys are filter names, and values are filter definitions. | [optional] 
**Query** | Pointer to [**SearchCriteriaQuery**](search-criteria-query) |  | [optional] 
**QueryType** | Pointer to **string** | Specifies the type of query. Must be \"TEXT\" if `textQuery` is used. | [optional] 
**TextQuery** | Pointer to [**SearchCriteriaTextQuery**](search-criteria-text-query) |  | [optional] 
**IncludeNested** | Pointer to **bool** | Whether to include nested objects in the search results. | [optional] [default to false]
**Sort** | Pointer to **[]string** | Specifies the sorting order for the results. | [optional] 
**SearchAfter** | Pointer to **[]string** | Used for pagination to fetch results after a specific point. | [optional] 

## Methods

### NewSearchCriteria

`func NewSearchCriteria(indices []string, ) *SearchCriteria`

NewSearchCriteria instantiates a new SearchCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchCriteriaWithDefaults

`func NewSearchCriteriaWithDefaults() *SearchCriteria`

NewSearchCriteriaWithDefaults instantiates a new SearchCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIndices

`func (o *SearchCriteria) GetIndices() []string`

GetIndices returns the Indices field if non-nil, zero value otherwise.

### GetIndicesOk

`func (o *SearchCriteria) GetIndicesOk() (*[]string, bool)`

GetIndicesOk returns a tuple with the Indices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndices

`func (o *SearchCriteria) SetIndices(v []string)`

SetIndices sets Indices field to given value.


### GetFilters

`func (o *SearchCriteria) GetFilters() map[string]SearchCriteriaFiltersValue`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *SearchCriteria) GetFiltersOk() (*map[string]SearchCriteriaFiltersValue, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *SearchCriteria) SetFilters(v map[string]SearchCriteriaFiltersValue)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *SearchCriteria) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetQuery

`func (o *SearchCriteria) GetQuery() SearchCriteriaQuery`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *SearchCriteria) GetQueryOk() (*SearchCriteriaQuery, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *SearchCriteria) SetQuery(v SearchCriteriaQuery)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *SearchCriteria) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetQueryType

`func (o *SearchCriteria) GetQueryType() string`

GetQueryType returns the QueryType field if non-nil, zero value otherwise.

### GetQueryTypeOk

`func (o *SearchCriteria) GetQueryTypeOk() (*string, bool)`

GetQueryTypeOk returns a tuple with the QueryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryType

`func (o *SearchCriteria) SetQueryType(v string)`

SetQueryType sets QueryType field to given value.

### HasQueryType

`func (o *SearchCriteria) HasQueryType() bool`

HasQueryType returns a boolean if a field has been set.

### GetTextQuery

`func (o *SearchCriteria) GetTextQuery() SearchCriteriaTextQuery`

GetTextQuery returns the TextQuery field if non-nil, zero value otherwise.

### GetTextQueryOk

`func (o *SearchCriteria) GetTextQueryOk() (*SearchCriteriaTextQuery, bool)`

GetTextQueryOk returns a tuple with the TextQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextQuery

`func (o *SearchCriteria) SetTextQuery(v SearchCriteriaTextQuery)`

SetTextQuery sets TextQuery field to given value.

### HasTextQuery

`func (o *SearchCriteria) HasTextQuery() bool`

HasTextQuery returns a boolean if a field has been set.

### GetIncludeNested

`func (o *SearchCriteria) GetIncludeNested() bool`

GetIncludeNested returns the IncludeNested field if non-nil, zero value otherwise.

### GetIncludeNestedOk

`func (o *SearchCriteria) GetIncludeNestedOk() (*bool, bool)`

GetIncludeNestedOk returns a tuple with the IncludeNested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeNested

`func (o *SearchCriteria) SetIncludeNested(v bool)`

SetIncludeNested sets IncludeNested field to given value.

### HasIncludeNested

`func (o *SearchCriteria) HasIncludeNested() bool`

HasIncludeNested returns a boolean if a field has been set.

### GetSort

`func (o *SearchCriteria) GetSort() []string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *SearchCriteria) GetSortOk() (*[]string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *SearchCriteria) SetSort(v []string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *SearchCriteria) HasSort() bool`

HasSort returns a boolean if a field has been set.

### GetSearchAfter

`func (o *SearchCriteria) GetSearchAfter() []string`

GetSearchAfter returns the SearchAfter field if non-nil, zero value otherwise.

### GetSearchAfterOk

`func (o *SearchCriteria) GetSearchAfterOk() (*[]string, bool)`

GetSearchAfterOk returns a tuple with the SearchAfter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchAfter

`func (o *SearchCriteria) SetSearchAfter(v []string)`

SetSearchAfter sets SearchAfter field to given value.

### HasSearchAfter

`func (o *SearchCriteria) HasSearchAfter() bool`

HasSearchAfter returns a boolean if a field has been set.


