---
id: v1-reportresults
title: Reportresults
pagination_label: Reportresults
sidebar_label: Reportresults
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Reportresults', 'V1Reportresults'] 
slug: /tools/sdk/go/reportsdataextraction/models/reportresults
tags: ['SDK', 'Software Development Kit', 'Reportresults', 'V1Reportresults']
---

# Reportresults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReportType** | Pointer to **string** | Use this property to define what report should be processed in the RDE service. | [optional] 
**TaskDefName** | Pointer to **string** | Name of the task definition which is started to process requesting report. Usually the same as report name | [optional] 
**Id** | Pointer to **string** | Unique task definition identifier. | [optional] 
**Created** | Pointer to **SailPointTime** | Report processing start date | [optional] 
**Status** | Pointer to **string** | Report current state or result status. | [optional] 
**Duration** | Pointer to **int64** | Report processing time in ms. | [optional] 
**Rows** | Pointer to **int64** | Report size in rows. | [optional] 
**AvailableFormats** | Pointer to **[]string** | Output report file formats. This are formats for calling get endpoint as a query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 

## Methods

### NewReportresults

`func NewReportresults() *Reportresults`

NewReportresults instantiates a new Reportresults object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportresultsWithDefaults

`func NewReportresultsWithDefaults() *Reportresults`

NewReportresultsWithDefaults instantiates a new Reportresults object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReportType

`func (o *Reportresults) GetReportType() string`

GetReportType returns the ReportType field if non-nil, zero value otherwise.

### GetReportTypeOk

`func (o *Reportresults) GetReportTypeOk() (*string, bool)`

GetReportTypeOk returns a tuple with the ReportType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportType

`func (o *Reportresults) SetReportType(v string)`

SetReportType sets ReportType field to given value.

### HasReportType

`func (o *Reportresults) HasReportType() bool`

HasReportType returns a boolean if a field has been set.

### GetTaskDefName

`func (o *Reportresults) GetTaskDefName() string`

GetTaskDefName returns the TaskDefName field if non-nil, zero value otherwise.

### GetTaskDefNameOk

`func (o *Reportresults) GetTaskDefNameOk() (*string, bool)`

GetTaskDefNameOk returns a tuple with the TaskDefName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskDefName

`func (o *Reportresults) SetTaskDefName(v string)`

SetTaskDefName sets TaskDefName field to given value.

### HasTaskDefName

`func (o *Reportresults) HasTaskDefName() bool`

HasTaskDefName returns a boolean if a field has been set.

### GetId

`func (o *Reportresults) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Reportresults) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Reportresults) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Reportresults) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreated

`func (o *Reportresults) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Reportresults) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Reportresults) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Reportresults) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetStatus

`func (o *Reportresults) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Reportresults) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Reportresults) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Reportresults) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetDuration

`func (o *Reportresults) GetDuration() int64`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *Reportresults) GetDurationOk() (*int64, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *Reportresults) SetDuration(v int64)`

SetDuration sets Duration field to given value.

### HasDuration

`func (o *Reportresults) HasDuration() bool`

HasDuration returns a boolean if a field has been set.

### GetRows

`func (o *Reportresults) GetRows() int64`

GetRows returns the Rows field if non-nil, zero value otherwise.

### GetRowsOk

`func (o *Reportresults) GetRowsOk() (*int64, bool)`

GetRowsOk returns a tuple with the Rows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRows

`func (o *Reportresults) SetRows(v int64)`

SetRows sets Rows field to given value.

### HasRows

`func (o *Reportresults) HasRows() bool`

HasRows returns a boolean if a field has been set.

### GetAvailableFormats

`func (o *Reportresults) GetAvailableFormats() []string`

GetAvailableFormats returns the AvailableFormats field if non-nil, zero value otherwise.

### GetAvailableFormatsOk

`func (o *Reportresults) GetAvailableFormatsOk() (*[]string, bool)`

GetAvailableFormatsOk returns a tuple with the AvailableFormats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableFormats

`func (o *Reportresults) SetAvailableFormats(v []string)`

SetAvailableFormats sets AvailableFormats field to given value.

### HasAvailableFormats

`func (o *Reportresults) HasAvailableFormats() bool`

HasAvailableFormats returns a boolean if a field has been set.


