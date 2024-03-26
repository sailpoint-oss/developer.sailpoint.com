---
id: report-details-arguments
title: ReportDetailsArguments
pagination_label: ReportDetailsArguments
sidebar_label: ReportDetailsArguments
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ReportDetailsArguments'] 
slug: /tools/sdk/go/v3/models/report-details-arguments
tags: ['SDK', 'Software Development Kit', 'ReportDetailsArguments']
---

# ReportDetailsArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Application** |  **string** | Id of the authoritative source to export related accounts e.g. identities | 
**SourceName** |  **string** | Name of the authoritative source for accounts export | 
**DefaultS3Bucket** |  **bool** | Use it to set default s3 bucket where generated report will be saved.  In case this argument is false and &#39;s3Bucket&#39; argument is null or absent there will be default s3Bucket assigned to the report. | 
**S3Bucket** |  Pointer to **string** | If you want to be specific you could use this argument with defaultS3Bucket &#x3D; false. | [optional] 
**CorrelatedOnly** |  **bool** | Boolean FLAG to specify if only correlated identities should be used in report processing | [default to false]
**AuthoritativeSource** |  **string** | Source Id to be checked on errors of identity profiles aggregation | 
**SelectedFormats** |  Pointer to **[]string** | Output report file formats. This are formats for calling get endpoint as a query parameter &#39;fileFormat&#39;.  In case report won&#39;t have this argument there will be [&#39;CSV&#39;, &#39;PDF&#39;] as default. | [optional] 
**Indices** |  Pointer to [**[]Index**](index) | The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched. | [optional] 
**Filters** |  Pointer to [**map[string]Filter**](filter) | The filters to be applied for each filtered field name. | [optional] 
**Query** |  [**Query**](query) |  | 
**IncludeNested** |  Pointer to **bool** | Indicates whether nested objects from returned search results should be included. | [optional] [default to true]
**Sort** |  Pointer to **[]string** | The fields to be used to sort the search results. Use + or - to specify the sort direction. | [optional] 

## Methods

### NewReportDetailsArguments

`func NewReportDetailsArguments(application string, sourceName string, defaultS3Bucket bool, correlatedOnly bool, authoritativeSource string, query Query, ) *ReportDetailsArguments`

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


### GetDefaultS3Bucket

`func (o *ReportDetailsArguments) GetDefaultS3Bucket() bool`

GetDefaultS3Bucket returns the DefaultS3Bucket field if non-nil, zero value otherwise.

### GetDefaultS3BucketOk

`func (o *ReportDetailsArguments) GetDefaultS3BucketOk() (*bool, bool)`

GetDefaultS3BucketOk returns a tuple with the DefaultS3Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultS3Bucket

`func (o *ReportDetailsArguments) SetDefaultS3Bucket(v bool)`

SetDefaultS3Bucket sets DefaultS3Bucket field to given value.


### GetS3Bucket

`func (o *ReportDetailsArguments) GetS3Bucket() string`

GetS3Bucket returns the S3Bucket field if non-nil, zero value otherwise.

### GetS3BucketOk

`func (o *ReportDetailsArguments) GetS3BucketOk() (*string, bool)`

GetS3BucketOk returns a tuple with the S3Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetS3Bucket

`func (o *ReportDetailsArguments) SetS3Bucket(v string)`

SetS3Bucket sets S3Bucket field to given value.

### HasS3Bucket

`func (o *ReportDetailsArguments) HasS3Bucket() bool`

HasS3Bucket returns a boolean if a field has been set.

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

### GetFilters

`func (o *ReportDetailsArguments) GetFilters() map[string]Filter`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *ReportDetailsArguments) GetFiltersOk() (*map[string]Filter, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *ReportDetailsArguments) SetFilters(v map[string]Filter)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *ReportDetailsArguments) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetQuery

`func (o *ReportDetailsArguments) GetQuery() Query`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *ReportDetailsArguments) GetQueryOk() (*Query, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *ReportDetailsArguments) SetQuery(v Query)`

SetQuery sets Query field to given value.


### GetIncludeNested

`func (o *ReportDetailsArguments) GetIncludeNested() bool`

GetIncludeNested returns the IncludeNested field if non-nil, zero value otherwise.

### GetIncludeNestedOk

`func (o *ReportDetailsArguments) GetIncludeNestedOk() (*bool, bool)`

GetIncludeNestedOk returns a tuple with the IncludeNested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeNested

`func (o *ReportDetailsArguments) SetIncludeNested(v bool)`

SetIncludeNested sets IncludeNested field to given value.

### HasIncludeNested

`func (o *ReportDetailsArguments) HasIncludeNested() bool`

HasIncludeNested returns a boolean if a field has been set.

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


[[Back to top]](#) 


