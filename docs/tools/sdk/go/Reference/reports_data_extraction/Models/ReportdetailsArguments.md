---
id: v1-reportdetails-arguments
title: ReportdetailsArguments
pagination_label: ReportdetailsArguments
sidebar_label: ReportdetailsArguments
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReportdetailsArguments', 'V1ReportdetailsArguments'] 
slug: /tools/sdk/go/reportsdataextraction/models/reportdetails-arguments
tags: ['SDK', 'Software Development Kit', 'ReportdetailsArguments', 'V1ReportdetailsArguments']
---

# ReportdetailsArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Application** | **string** | Source ID. | 
**SourceName** | **string** | Source name. | 
**CorrelatedOnly** | **bool** | Flag to specify if only correlated identities are included in report. | [default to false]
**AuthoritativeSource** | **string** | Source ID. | 
**SelectedFormats** | Pointer to **[]string** | Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 
**Indices** | Pointer to **[]Index** | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [optional] 
**Query** | **string** | The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | 
**Columns** | Pointer to **string** | Comma separated string consisting of technical attribute names of fields to include in report.  Use `access.spread`, `apps.spread`, `accounts.spread` to include respective identity access details.  Use `accessProfiles.spread` to unclude access profile details.  Use `entitlements.spread` to include entitlement details.  | [optional] 
**Sort** | Pointer to **[]string** | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [optional] 

## Methods

### NewReportdetailsArguments

`func NewReportdetailsArguments(application string, sourceName string, correlatedOnly bool, authoritativeSource string, query string, ) *ReportdetailsArguments`

NewReportdetailsArguments instantiates a new ReportdetailsArguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportdetailsArgumentsWithDefaults

`func NewReportdetailsArgumentsWithDefaults() *ReportdetailsArguments`

NewReportdetailsArgumentsWithDefaults instantiates a new ReportdetailsArguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplication

`func (o *ReportdetailsArguments) GetApplication() string`

GetApplication returns the Application field if non-nil, zero value otherwise.

### GetApplicationOk

`func (o *ReportdetailsArguments) GetApplicationOk() (*string, bool)`

GetApplicationOk returns a tuple with the Application field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplication

`func (o *ReportdetailsArguments) SetApplication(v string)`

SetApplication sets Application field to given value.


### GetSourceName

`func (o *ReportdetailsArguments) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *ReportdetailsArguments) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *ReportdetailsArguments) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.


### GetCorrelatedOnly

`func (o *ReportdetailsArguments) GetCorrelatedOnly() bool`

GetCorrelatedOnly returns the CorrelatedOnly field if non-nil, zero value otherwise.

### GetCorrelatedOnlyOk

`func (o *ReportdetailsArguments) GetCorrelatedOnlyOk() (*bool, bool)`

GetCorrelatedOnlyOk returns a tuple with the CorrelatedOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedOnly

`func (o *ReportdetailsArguments) SetCorrelatedOnly(v bool)`

SetCorrelatedOnly sets CorrelatedOnly field to given value.


### GetAuthoritativeSource

`func (o *ReportdetailsArguments) GetAuthoritativeSource() string`

GetAuthoritativeSource returns the AuthoritativeSource field if non-nil, zero value otherwise.

### GetAuthoritativeSourceOk

`func (o *ReportdetailsArguments) GetAuthoritativeSourceOk() (*string, bool)`

GetAuthoritativeSourceOk returns a tuple with the AuthoritativeSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthoritativeSource

`func (o *ReportdetailsArguments) SetAuthoritativeSource(v string)`

SetAuthoritativeSource sets AuthoritativeSource field to given value.


### GetSelectedFormats

`func (o *ReportdetailsArguments) GetSelectedFormats() []string`

GetSelectedFormats returns the SelectedFormats field if non-nil, zero value otherwise.

### GetSelectedFormatsOk

`func (o *ReportdetailsArguments) GetSelectedFormatsOk() (*[]string, bool)`

GetSelectedFormatsOk returns a tuple with the SelectedFormats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectedFormats

`func (o *ReportdetailsArguments) SetSelectedFormats(v []string)`

SetSelectedFormats sets SelectedFormats field to given value.

### HasSelectedFormats

`func (o *ReportdetailsArguments) HasSelectedFormats() bool`

HasSelectedFormats returns a boolean if a field has been set.

### GetIndices

`func (o *ReportdetailsArguments) GetIndices() []Index`

GetIndices returns the Indices field if non-nil, zero value otherwise.

### GetIndicesOk

`func (o *ReportdetailsArguments) GetIndicesOk() (*[]Index, bool)`

GetIndicesOk returns a tuple with the Indices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndices

`func (o *ReportdetailsArguments) SetIndices(v []Index)`

SetIndices sets Indices field to given value.

### HasIndices

`func (o *ReportdetailsArguments) HasIndices() bool`

HasIndices returns a boolean if a field has been set.

### GetQuery

`func (o *ReportdetailsArguments) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *ReportdetailsArguments) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *ReportdetailsArguments) SetQuery(v string)`

SetQuery sets Query field to given value.


### GetColumns

`func (o *ReportdetailsArguments) GetColumns() string`

GetColumns returns the Columns field if non-nil, zero value otherwise.

### GetColumnsOk

`func (o *ReportdetailsArguments) GetColumnsOk() (*string, bool)`

GetColumnsOk returns a tuple with the Columns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumns

`func (o *ReportdetailsArguments) SetColumns(v string)`

SetColumns sets Columns field to given value.

### HasColumns

`func (o *ReportdetailsArguments) HasColumns() bool`

HasColumns returns a boolean if a field has been set.

### GetSort

`func (o *ReportdetailsArguments) GetSort() []string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *ReportdetailsArguments) GetSortOk() (*[]string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *ReportdetailsArguments) SetSort(v []string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *ReportdetailsArguments) HasSort() bool`

HasSort returns a boolean if a field has been set.


