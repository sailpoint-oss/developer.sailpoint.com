---
id: report-details
title: ReportDetails
pagination_label: ReportDetails
sidebar_label: ReportDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReportDetails', 'ReportDetails'] 
slug: /tools/sdk/go//models/report-details
tags: ['SDK', 'Software Development Kit', 'ReportDetails', 'ReportDetails']
---

# ReportDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReportType** | Pointer to **string** | Use this property to define what report should be processed in the RDE service. | [optional] 
**Arguments** | Pointer to [**ReportDetailsArguments**](report-details-arguments) |  | [optional] 

## Methods

### NewReportDetails

`func NewReportDetails() *ReportDetails`

NewReportDetails instantiates a new ReportDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportDetailsWithDefaults

`func NewReportDetailsWithDefaults() *ReportDetails`

NewReportDetailsWithDefaults instantiates a new ReportDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReportType

`func (o *ReportDetails) GetReportType() string`

GetReportType returns the ReportType field if non-nil, zero value otherwise.

### GetReportTypeOk

`func (o *ReportDetails) GetReportTypeOk() (*string, bool)`

GetReportTypeOk returns a tuple with the ReportType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportType

`func (o *ReportDetails) SetReportType(v string)`

SetReportType sets ReportType field to given value.

### HasReportType

`func (o *ReportDetails) HasReportType() bool`

HasReportType returns a boolean if a field has been set.

### GetArguments

`func (o *ReportDetails) GetArguments() ReportDetailsArguments`

GetArguments returns the Arguments field if non-nil, zero value otherwise.

### GetArgumentsOk

`func (o *ReportDetails) GetArgumentsOk() (*ReportDetailsArguments, bool)`

GetArgumentsOk returns a tuple with the Arguments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArguments

`func (o *ReportDetails) SetArguments(v ReportDetailsArguments)`

SetArguments sets Arguments field to given value.

### HasArguments

`func (o *ReportDetails) HasArguments() bool`

HasArguments returns a boolean if a field has been set.


