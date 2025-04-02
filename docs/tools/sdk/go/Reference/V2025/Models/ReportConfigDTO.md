---
id: report-config-dto
title: ReportConfigDTO
pagination_label: ReportConfigDTO
sidebar_label: ReportConfigDTO
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReportConfigDTO', 'ReportConfigDTO'] 
slug: /tools/sdk/go//models/report-config-dto
tags: ['SDK', 'Software Development Kit', 'ReportConfigDTO', 'ReportConfigDTO']
---

# ReportConfigDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ColumnName** | Pointer to **string** | Name of column in report | [optional] 
**Required** | Pointer to **bool** | If true, column is required in all reports, and this entry is immutable. A 400 error will result from any attempt to modify the column's definition. | [optional] [default to false]
**Included** | Pointer to **bool** | If true, column is included in the report. A 400 error will be thrown if an attempt is made to set included=false if required==true. | [optional] [default to false]
**Order** | Pointer to **int32** | Relative sort order for the column. Columns will be displayed left-to-right in nondecreasing order. | [optional] 

## Methods

### NewReportConfigDTO

`func NewReportConfigDTO() *ReportConfigDTO`

NewReportConfigDTO instantiates a new ReportConfigDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportConfigDTOWithDefaults

`func NewReportConfigDTOWithDefaults() *ReportConfigDTO`

NewReportConfigDTOWithDefaults instantiates a new ReportConfigDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetColumnName

`func (o *ReportConfigDTO) GetColumnName() string`

GetColumnName returns the ColumnName field if non-nil, zero value otherwise.

### GetColumnNameOk

`func (o *ReportConfigDTO) GetColumnNameOk() (*string, bool)`

GetColumnNameOk returns a tuple with the ColumnName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumnName

`func (o *ReportConfigDTO) SetColumnName(v string)`

SetColumnName sets ColumnName field to given value.

### HasColumnName

`func (o *ReportConfigDTO) HasColumnName() bool`

HasColumnName returns a boolean if a field has been set.

### GetRequired

`func (o *ReportConfigDTO) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *ReportConfigDTO) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *ReportConfigDTO) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *ReportConfigDTO) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetIncluded

`func (o *ReportConfigDTO) GetIncluded() bool`

GetIncluded returns the Included field if non-nil, zero value otherwise.

### GetIncludedOk

`func (o *ReportConfigDTO) GetIncludedOk() (*bool, bool)`

GetIncludedOk returns a tuple with the Included field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncluded

`func (o *ReportConfigDTO) SetIncluded(v bool)`

SetIncluded sets Included field to given value.

### HasIncluded

`func (o *ReportConfigDTO) HasIncluded() bool`

HasIncluded returns a boolean if a field has been set.

### GetOrder

`func (o *ReportConfigDTO) GetOrder() int32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *ReportConfigDTO) GetOrderOk() (*int32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *ReportConfigDTO) SetOrder(v int32)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *ReportConfigDTO) HasOrder() bool`

HasOrder returns a boolean if a field has been set.


