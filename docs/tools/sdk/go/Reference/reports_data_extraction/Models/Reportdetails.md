---
id: v1-reportdetails
title: Reportdetails
pagination_label: Reportdetails
sidebar_label: Reportdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Reportdetails', 'V1Reportdetails'] 
slug: /tools/sdk/go/reportsdataextraction/models/reportdetails
tags: ['SDK', 'Software Development Kit', 'Reportdetails', 'V1Reportdetails']
---

# Reportdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReportType** | Pointer to **string** | Use this property to define what report should be processed in the RDE service. | [optional] 
**Arguments** | Pointer to [**ReportdetailsArguments**](reportdetails-arguments) |  | [optional] 

## Methods

### NewReportdetails

`func NewReportdetails() *Reportdetails`

NewReportdetails instantiates a new Reportdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportdetailsWithDefaults

`func NewReportdetailsWithDefaults() *Reportdetails`

NewReportdetailsWithDefaults instantiates a new Reportdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReportType

`func (o *Reportdetails) GetReportType() string`

GetReportType returns the ReportType field if non-nil, zero value otherwise.

### GetReportTypeOk

`func (o *Reportdetails) GetReportTypeOk() (*string, bool)`

GetReportTypeOk returns a tuple with the ReportType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportType

`func (o *Reportdetails) SetReportType(v string)`

SetReportType sets ReportType field to given value.

### HasReportType

`func (o *Reportdetails) HasReportType() bool`

HasReportType returns a boolean if a field has been set.

### GetArguments

`func (o *Reportdetails) GetArguments() ReportdetailsArguments`

GetArguments returns the Arguments field if non-nil, zero value otherwise.

### GetArgumentsOk

`func (o *Reportdetails) GetArgumentsOk() (*ReportdetailsArguments, bool)`

GetArgumentsOk returns a tuple with the Arguments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArguments

`func (o *Reportdetails) SetArguments(v ReportdetailsArguments)`

SetArguments sets Arguments field to given value.

### HasArguments

`func (o *Reportdetails) HasArguments() bool`

HasArguments returns a boolean if a field has been set.


