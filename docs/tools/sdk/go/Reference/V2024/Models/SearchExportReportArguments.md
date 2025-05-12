---
id: v2024-search-export-report-arguments
title: SearchExportReportArguments
pagination_label: SearchExportReportArguments
sidebar_label: SearchExportReportArguments
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchExportReportArguments', 'V2024SearchExportReportArguments'] 
slug: /tools/sdk/go/v2024/models/search-export-report-arguments
tags: ['SDK', 'Software Development Kit', 'SearchExportReportArguments', 'V2024SearchExportReportArguments']
---

# SearchExportReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Indices** | Pointer to [**[]Index**](index) | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [optional] 
**Query** | **string** | The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | 
**Columns** | Pointer to **string** | Comma separated string consisting of technical attribute names of fields to include in report.  Use `access.spread`, `apps.spread`, `accounts.spread` to include respective identity access details.  Use `accessProfiles.spread` to unclude access profile details.  Use `entitlements.spread` to include entitlement details.  | [optional] 
**Sort** | Pointer to **[]string** | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [optional] 

## Methods

### NewSearchExportReportArguments

`func NewSearchExportReportArguments(query string, ) *SearchExportReportArguments`

NewSearchExportReportArguments instantiates a new SearchExportReportArguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchExportReportArgumentsWithDefaults

`func NewSearchExportReportArgumentsWithDefaults() *SearchExportReportArguments`

NewSearchExportReportArgumentsWithDefaults instantiates a new SearchExportReportArguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIndices

`func (o *SearchExportReportArguments) GetIndices() []Index`

GetIndices returns the Indices field if non-nil, zero value otherwise.

### GetIndicesOk

`func (o *SearchExportReportArguments) GetIndicesOk() (*[]Index, bool)`

GetIndicesOk returns a tuple with the Indices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndices

`func (o *SearchExportReportArguments) SetIndices(v []Index)`

SetIndices sets Indices field to given value.

### HasIndices

`func (o *SearchExportReportArguments) HasIndices() bool`

HasIndices returns a boolean if a field has been set.

### GetQuery

`func (o *SearchExportReportArguments) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *SearchExportReportArguments) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *SearchExportReportArguments) SetQuery(v string)`

SetQuery sets Query field to given value.


### GetColumns

`func (o *SearchExportReportArguments) GetColumns() string`

GetColumns returns the Columns field if non-nil, zero value otherwise.

### GetColumnsOk

`func (o *SearchExportReportArguments) GetColumnsOk() (*string, bool)`

GetColumnsOk returns a tuple with the Columns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumns

`func (o *SearchExportReportArguments) SetColumns(v string)`

SetColumns sets Columns field to given value.

### HasColumns

`func (o *SearchExportReportArguments) HasColumns() bool`

HasColumns returns a boolean if a field has been set.

### GetSort

`func (o *SearchExportReportArguments) GetSort() []string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *SearchExportReportArguments) GetSortOk() (*[]string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *SearchExportReportArguments) SetSort(v []string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *SearchExportReportArguments) HasSort() bool`

HasSort returns a boolean if a field has been set.


