---
id: v2024-search
title: Search
pagination_label: Search
sidebar_label: Search
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Search', 'V2024Search'] 
slug: /tools/sdk/go/v2024/models/search
tags: ['SDK', 'Software Development Kit', 'Search', 'V2024Search']
---

# Search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Indices** | Pointer to [**[]Index**](index) | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [optional] 
**QueryType** | Pointer to [**QueryType**](query-type) |  | [optional] [default to QUERYTYPE_SAILPOINT]
**QueryVersion** | Pointer to **string** |  | [optional] 
**Query** | Pointer to [**Query**](query) |  | [optional] 
**QueryDsl** | Pointer to **map[string]interface{}** | The search query using the Elasticsearch [Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl.html) syntax. | [optional] 
**TextQuery** | Pointer to [**TextQuery**](text-query) |  | [optional] 
**TypeAheadQuery** | Pointer to [**TypeAheadQuery**](type-ahead-query) |  | [optional] 
**IncludeNested** | Pointer to **bool** | Indicates whether nested objects from returned search results should be included. | [optional] [default to true]
**QueryResultFilter** | Pointer to [**QueryResultFilter**](query-result-filter) |  | [optional] 
**AggregationType** | Pointer to [**AggregationType**](aggregation-type) |  | [optional] [default to AGGREGATIONTYPE_DSL]
**AggregationsVersion** | Pointer to **string** |  | [optional] 
**AggregationsDsl** | Pointer to **map[string]interface{}** | The aggregation search query using Elasticsearch [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-aggregations.html) syntax. | [optional] 
**Aggregations** | Pointer to [**SearchAggregationSpecification**](search-aggregation-specification) |  | [optional] 
**Sort** | Pointer to **[]string** | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [optional] 
**SearchAfter** | Pointer to **[]string** | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set. This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value. It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging. For example, when searching for identities, if you are sorting by displayName you will also want to include ID, for example [\"displayName\", \"id\"].  If the last identity ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last displayName is \"John Doe\", then using that displayName and ID will start a new search after this identity. The searchAfter value will look like [\"John Doe\",\"2c91808375d8e80a0175e1f88a575221\"] | [optional] 
**Filters** | Pointer to [**map[string]Filter**](filter) | The filters to be applied for each filtered field name. | [optional] 

## Methods

### NewSearch

`func NewSearch() *Search`

NewSearch instantiates a new Search object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchWithDefaults

`func NewSearchWithDefaults() *Search`

NewSearchWithDefaults instantiates a new Search object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIndices

`func (o *Search) GetIndices() []Index`

GetIndices returns the Indices field if non-nil, zero value otherwise.

### GetIndicesOk

`func (o *Search) GetIndicesOk() (*[]Index, bool)`

GetIndicesOk returns a tuple with the Indices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndices

`func (o *Search) SetIndices(v []Index)`

SetIndices sets Indices field to given value.

### HasIndices

`func (o *Search) HasIndices() bool`

HasIndices returns a boolean if a field has been set.

### GetQueryType

`func (o *Search) GetQueryType() QueryType`

GetQueryType returns the QueryType field if non-nil, zero value otherwise.

### GetQueryTypeOk

`func (o *Search) GetQueryTypeOk() (*QueryType, bool)`

GetQueryTypeOk returns a tuple with the QueryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryType

`func (o *Search) SetQueryType(v QueryType)`

SetQueryType sets QueryType field to given value.

### HasQueryType

`func (o *Search) HasQueryType() bool`

HasQueryType returns a boolean if a field has been set.

### GetQueryVersion

`func (o *Search) GetQueryVersion() string`

GetQueryVersion returns the QueryVersion field if non-nil, zero value otherwise.

### GetQueryVersionOk

`func (o *Search) GetQueryVersionOk() (*string, bool)`

GetQueryVersionOk returns a tuple with the QueryVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryVersion

`func (o *Search) SetQueryVersion(v string)`

SetQueryVersion sets QueryVersion field to given value.

### HasQueryVersion

`func (o *Search) HasQueryVersion() bool`

HasQueryVersion returns a boolean if a field has been set.

### GetQuery

`func (o *Search) GetQuery() Query`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *Search) GetQueryOk() (*Query, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *Search) SetQuery(v Query)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *Search) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetQueryDsl

`func (o *Search) GetQueryDsl() map[string]interface{}`

GetQueryDsl returns the QueryDsl field if non-nil, zero value otherwise.

### GetQueryDslOk

`func (o *Search) GetQueryDslOk() (*map[string]interface{}, bool)`

GetQueryDslOk returns a tuple with the QueryDsl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryDsl

`func (o *Search) SetQueryDsl(v map[string]interface{})`

SetQueryDsl sets QueryDsl field to given value.

### HasQueryDsl

`func (o *Search) HasQueryDsl() bool`

HasQueryDsl returns a boolean if a field has been set.

### GetTextQuery

`func (o *Search) GetTextQuery() TextQuery`

GetTextQuery returns the TextQuery field if non-nil, zero value otherwise.

### GetTextQueryOk

`func (o *Search) GetTextQueryOk() (*TextQuery, bool)`

GetTextQueryOk returns a tuple with the TextQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextQuery

`func (o *Search) SetTextQuery(v TextQuery)`

SetTextQuery sets TextQuery field to given value.

### HasTextQuery

`func (o *Search) HasTextQuery() bool`

HasTextQuery returns a boolean if a field has been set.

### GetTypeAheadQuery

`func (o *Search) GetTypeAheadQuery() TypeAheadQuery`

GetTypeAheadQuery returns the TypeAheadQuery field if non-nil, zero value otherwise.

### GetTypeAheadQueryOk

`func (o *Search) GetTypeAheadQueryOk() (*TypeAheadQuery, bool)`

GetTypeAheadQueryOk returns a tuple with the TypeAheadQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeAheadQuery

`func (o *Search) SetTypeAheadQuery(v TypeAheadQuery)`

SetTypeAheadQuery sets TypeAheadQuery field to given value.

### HasTypeAheadQuery

`func (o *Search) HasTypeAheadQuery() bool`

HasTypeAheadQuery returns a boolean if a field has been set.

### GetIncludeNested

`func (o *Search) GetIncludeNested() bool`

GetIncludeNested returns the IncludeNested field if non-nil, zero value otherwise.

### GetIncludeNestedOk

`func (o *Search) GetIncludeNestedOk() (*bool, bool)`

GetIncludeNestedOk returns a tuple with the IncludeNested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeNested

`func (o *Search) SetIncludeNested(v bool)`

SetIncludeNested sets IncludeNested field to given value.

### HasIncludeNested

`func (o *Search) HasIncludeNested() bool`

HasIncludeNested returns a boolean if a field has been set.

### GetQueryResultFilter

`func (o *Search) GetQueryResultFilter() QueryResultFilter`

GetQueryResultFilter returns the QueryResultFilter field if non-nil, zero value otherwise.

### GetQueryResultFilterOk

`func (o *Search) GetQueryResultFilterOk() (*QueryResultFilter, bool)`

GetQueryResultFilterOk returns a tuple with the QueryResultFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryResultFilter

`func (o *Search) SetQueryResultFilter(v QueryResultFilter)`

SetQueryResultFilter sets QueryResultFilter field to given value.

### HasQueryResultFilter

`func (o *Search) HasQueryResultFilter() bool`

HasQueryResultFilter returns a boolean if a field has been set.

### GetAggregationType

`func (o *Search) GetAggregationType() AggregationType`

GetAggregationType returns the AggregationType field if non-nil, zero value otherwise.

### GetAggregationTypeOk

`func (o *Search) GetAggregationTypeOk() (*AggregationType, bool)`

GetAggregationTypeOk returns a tuple with the AggregationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationType

`func (o *Search) SetAggregationType(v AggregationType)`

SetAggregationType sets AggregationType field to given value.

### HasAggregationType

`func (o *Search) HasAggregationType() bool`

HasAggregationType returns a boolean if a field has been set.

### GetAggregationsVersion

`func (o *Search) GetAggregationsVersion() string`

GetAggregationsVersion returns the AggregationsVersion field if non-nil, zero value otherwise.

### GetAggregationsVersionOk

`func (o *Search) GetAggregationsVersionOk() (*string, bool)`

GetAggregationsVersionOk returns a tuple with the AggregationsVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationsVersion

`func (o *Search) SetAggregationsVersion(v string)`

SetAggregationsVersion sets AggregationsVersion field to given value.

### HasAggregationsVersion

`func (o *Search) HasAggregationsVersion() bool`

HasAggregationsVersion returns a boolean if a field has been set.

### GetAggregationsDsl

`func (o *Search) GetAggregationsDsl() map[string]interface{}`

GetAggregationsDsl returns the AggregationsDsl field if non-nil, zero value otherwise.

### GetAggregationsDslOk

`func (o *Search) GetAggregationsDslOk() (*map[string]interface{}, bool)`

GetAggregationsDslOk returns a tuple with the AggregationsDsl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationsDsl

`func (o *Search) SetAggregationsDsl(v map[string]interface{})`

SetAggregationsDsl sets AggregationsDsl field to given value.

### HasAggregationsDsl

`func (o *Search) HasAggregationsDsl() bool`

HasAggregationsDsl returns a boolean if a field has been set.

### GetAggregations

`func (o *Search) GetAggregations() SearchAggregationSpecification`

GetAggregations returns the Aggregations field if non-nil, zero value otherwise.

### GetAggregationsOk

`func (o *Search) GetAggregationsOk() (*SearchAggregationSpecification, bool)`

GetAggregationsOk returns a tuple with the Aggregations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregations

`func (o *Search) SetAggregations(v SearchAggregationSpecification)`

SetAggregations sets Aggregations field to given value.

### HasAggregations

`func (o *Search) HasAggregations() bool`

HasAggregations returns a boolean if a field has been set.

### GetSort

`func (o *Search) GetSort() []string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *Search) GetSortOk() (*[]string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *Search) SetSort(v []string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *Search) HasSort() bool`

HasSort returns a boolean if a field has been set.

### GetSearchAfter

`func (o *Search) GetSearchAfter() []string`

GetSearchAfter returns the SearchAfter field if non-nil, zero value otherwise.

### GetSearchAfterOk

`func (o *Search) GetSearchAfterOk() (*[]string, bool)`

GetSearchAfterOk returns a tuple with the SearchAfter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchAfter

`func (o *Search) SetSearchAfter(v []string)`

SetSearchAfter sets SearchAfter field to given value.

### HasSearchAfter

`func (o *Search) HasSearchAfter() bool`

HasSearchAfter returns a boolean if a field has been set.

### GetFilters

`func (o *Search) GetFilters() map[string]Filter`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *Search) GetFiltersOk() (*map[string]Filter, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *Search) SetFilters(v map[string]Filter)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *Search) HasFilters() bool`

HasFilters returns a boolean if a field has been set.


