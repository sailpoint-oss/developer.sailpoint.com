---
id: report-results
title: ReportResults
pagination_label: ReportResults
sidebar_label: ReportResults
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ReportResults'] 
slug: /tools/sdk/go/v3/models/report-results
tags: ['SDK', 'Software Development Kit', 'ReportResults']
---

# ReportResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReportType** |  Pointer to **string** | Use this property to define what report should be processed in the RDE service. | [optional] 
**TaskDefName** |  Pointer to **string** | Name of the task definition which is started to process requesting report. Usually the same as report name | [optional] 
**Id** |  Pointer to **string** | Unique task definition identifier. | [optional] 
**Created** |  Pointer to **time.Time** | Report processing start date | [optional] 
**Status** |  Pointer to **string** | Report current state or result status. | [optional] 
**Duration** |  Pointer to **int64** | Report processing time in ms. | [optional] 
**Rows** |  Pointer to **int64** | Report size in rows. | [optional] 
**AvailableFormats** |  Pointer to **[]string** | Output report file formats. This are formats for calling get endpoint as a query parameter &#39;fileFormat&#39;.  In case report won&#39;t have this argument there will be [&#39;CSV&#39;, &#39;PDF&#39;] as default. | [optional] 

## Methods

### NewReportResults

`func NewReportResults() *ReportResults`

NewReportResults instantiates a new ReportResults object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportResultsWithDefaults

`func NewReportResultsWithDefaults() *ReportResults`

NewReportResultsWithDefaults instantiates a new ReportResults object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReportType

`func (o *ReportResults) GetReportType() string`

GetReportType returns the ReportType field if non-nil, zero value otherwise.

### GetReportTypeOk

`func (o *ReportResults) GetReportTypeOk() (*string, bool)`

GetReportTypeOk returns a tuple with the ReportType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportType

`func (o *ReportResults) SetReportType(v string)`

SetReportType sets ReportType field to given value.

### HasReportType

`func (o *ReportResults) HasReportType() bool`

HasReportType returns a boolean if a field has been set.

### GetTaskDefName

`func (o *ReportResults) GetTaskDefName() string`

GetTaskDefName returns the TaskDefName field if non-nil, zero value otherwise.

### GetTaskDefNameOk

`func (o *ReportResults) GetTaskDefNameOk() (*string, bool)`

GetTaskDefNameOk returns a tuple with the TaskDefName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskDefName

`func (o *ReportResults) SetTaskDefName(v string)`

SetTaskDefName sets TaskDefName field to given value.

### HasTaskDefName

`func (o *ReportResults) HasTaskDefName() bool`

HasTaskDefName returns a boolean if a field has been set.

### GetId

`func (o *ReportResults) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReportResults) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReportResults) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ReportResults) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreated

`func (o *ReportResults) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ReportResults) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ReportResults) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ReportResults) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetStatus

`func (o *ReportResults) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ReportResults) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ReportResults) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ReportResults) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetDuration

`func (o *ReportResults) GetDuration() int64`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *ReportResults) GetDurationOk() (*int64, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *ReportResults) SetDuration(v int64)`

SetDuration sets Duration field to given value.

### HasDuration

`func (o *ReportResults) HasDuration() bool`

HasDuration returns a boolean if a field has been set.

### GetRows

`func (o *ReportResults) GetRows() int64`

GetRows returns the Rows field if non-nil, zero value otherwise.

### GetRowsOk

`func (o *ReportResults) GetRowsOk() (*int64, bool)`

GetRowsOk returns a tuple with the Rows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRows

`func (o *ReportResults) SetRows(v int64)`

SetRows sets Rows field to given value.

### HasRows

`func (o *ReportResults) HasRows() bool`

HasRows returns a boolean if a field has been set.

### GetAvailableFormats

`func (o *ReportResults) GetAvailableFormats() []string`

GetAvailableFormats returns the AvailableFormats field if non-nil, zero value otherwise.

### GetAvailableFormatsOk

`func (o *ReportResults) GetAvailableFormatsOk() (*[]string, bool)`

GetAvailableFormatsOk returns a tuple with the AvailableFormats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableFormats

`func (o *ReportResults) SetAvailableFormats(v []string)`

SetAvailableFormats sets AvailableFormats field to given value.

### HasAvailableFormats

`func (o *ReportResults) HasAvailableFormats() bool`

HasAvailableFormats returns a boolean if a field has been set.


[[Back to top]](#) 


