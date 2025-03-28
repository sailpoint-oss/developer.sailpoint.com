---
id: v2024-report-details-arguments
title: ReportDetailsArguments
pagination_label: ReportDetailsArguments
sidebar_label: ReportDetailsArguments
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReportDetailsArguments', 'V2024ReportDetailsArguments'] 
slug: /tools/sdk/go/v2024/models/report-details-arguments
tags: ['SDK', 'Software Development Kit', 'ReportDetailsArguments', 'V2024ReportDetailsArguments']
---

# ReportDetailsArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Application** | **string** | Source ID. | 
**SourceName** | **string** | Source name. | 
**CorrelatedOnly** | **bool** | Flag to specify if only correlated identities are included in report. | [default to false]
**AuthoritativeSource** | **string** | Source ID. | 
**SelectedFormats** | Pointer to **[]string** | Output report file formats. These are formats for calling GET endpoint as query parameter &#39;fileFormat&#39;.  In case report won&#39;t have this argument there will be [&#39;CSV&#39;, &#39;PDF&#39;] as default. | [optional] 
**Indices** | Pointer to [**[]Index**](index) | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [optional] 
**Query** | **string** | The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | 
**Columns** | Pointer to **string** | Comma separated string consisting of technical attribute names of fields to include in report.  Use &#x60;access.spread&#x60;, &#x60;apps.spread&#x60;, &#x60;accounts.spread&#x60; to include respective identity access details.  Use &#x60;accessProfiles.spread&#x60; to unclude access profile details.  Use &#x60;entitlements.spread&#x60; to include entitlement details.  | [optional] 
**Sort** | Pointer to **[]string** | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [optional] 

## Methods

### NewReportDetailsArguments

`func NewReportDetailsArguments(application string, sourceName string, correlatedOnly bool, authoritativeSource string, query string, ) *ReportDetailsArguments`

NewReportDetailsArguments instantiates a new ReportDetailsArguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportDetailsArgumentsWithDefaults

`func NewReportDetailsArgumentsWithDefaults() *ReportDetailsArguments`

NewReportDetailsArgumentsWithDefaults instantiates a new ReportDetailsArguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplication

`func (o *ReportDetailsArguments) GetApplication() string`

GetApplication returns the Application field if non-nil, zero value otherwise.

### GetApplicationOk

`func (o *ReportDetailsArguments) GetApplicationOk() (*string, bool)`

GetApplicationOk returns a tuple with the Application field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplication

`func (o *ReportDetailsArguments) SetApplication(v string)`

SetApplication sets Application field to given value.


### GetSourceName

`func (o *ReportDetailsArguments) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *ReportDetailsArguments) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *ReportDetailsArguments) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.


### GetCorrelatedOnly

`func (o *ReportDetailsArguments) GetCorrelatedOnly() bool`

GetCorrelatedOnly returns the CorrelatedOnly field if non-nil, zero value otherwise.

### GetCorrelatedOnlyOk

`func (o *ReportDetailsArguments) GetCorrelatedOnlyOk() (*bool, bool)`

GetCorrelatedOnlyOk returns a tuple with the CorrelatedOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedOnly

`func (o *ReportDetailsArguments) SetCorrelatedOnly(v bool)`

SetCorrelatedOnly sets CorrelatedOnly field to given value.


### GetAuthoritativeSource

`func (o *ReportDetailsArguments) GetAuthoritativeSource() string`

GetAuthoritativeSource returns the AuthoritativeSource field if non-nil, zero value otherwise.

### GetAuthoritativeSourceOk

`func (o *ReportDetailsArguments) GetAuthoritativeSourceOk() (*string, bool)`

GetAuthoritativeSourceOk returns a tuple with the AuthoritativeSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthoritativeSource

`func (o *ReportDetailsArguments) SetAuthoritativeSource(v string)`

SetAuthoritativeSource sets AuthoritativeSource field to given value.


### GetSelectedFormats

`func (o *ReportDetailsArguments) GetSelectedFormats() []string`

GetSelectedFormats returns the SelectedFormats field if non-nil, zero value otherwise.

### GetSelectedFormatsOk

`func (o *ReportDetailsArguments) GetSelectedFormatsOk() (*[]string, bool)`

GetSelectedFormatsOk returns a tuple with the SelectedFormats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectedFormats

`func (o *ReportDetailsArguments) SetSelectedFormats(v []string)`

SetSelectedFormats sets SelectedFormats field to given value.

### HasSelectedFormats

`func (o *ReportDetailsArguments) HasSelectedFormats() bool`

HasSelectedFormats returns a boolean if a field has been set.

### GetIndices

`func (o *ReportDetailsArguments) GetIndices() []Index`

GetIndices returns the Indices field if non-nil, zero value otherwise.

### GetIndicesOk

`func (o *ReportDetailsArguments) GetIndicesOk() (*[]Index, bool)`

GetIndicesOk returns a tuple with the Indices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndices

`func (o *ReportDetailsArguments) SetIndices(v []Index)`

SetIndices sets Indices field to given value.

### HasIndices

`func (o *ReportDetailsArguments) HasIndices() bool`

HasIndices returns a boolean if a field has been set.

### GetQuery

`func (o *ReportDetailsArguments) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *ReportDetailsArguments) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *ReportDetailsArguments) SetQuery(v string)`

SetQuery sets Query field to given value.


### GetColumns

`func (o *ReportDetailsArguments) GetColumns() string`

GetColumns returns the Columns field if non-nil, zero value otherwise.

### GetColumnsOk

`func (o *ReportDetailsArguments) GetColumnsOk() (*string, bool)`

GetColumnsOk returns a tuple with the Columns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumns

`func (o *ReportDetailsArguments) SetColumns(v string)`

SetColumns sets Columns field to given value.

### HasColumns

`func (o *ReportDetailsArguments) HasColumns() bool`

HasColumns returns a boolean if a field has been set.

### GetSort

`func (o *ReportDetailsArguments) GetSort() []string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *ReportDetailsArguments) GetSortOk() (*[]string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *ReportDetailsArguments) SetSort(v []string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *ReportDetailsArguments) HasSort() bool`

HasSort returns a boolean if a field has been set.


