---
id: v2024-campaign-report
title: CampaignReport
pagination_label: CampaignReport
sidebar_label: CampaignReport
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignReport', 'V2024CampaignReport'] 
slug: /tools/sdk/go/v2024/models/campaign-report
tags: ['SDK', 'Software Development Kit', 'CampaignReport', 'V2024CampaignReport']
---

# CampaignReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | SOD policy violation report result DTO type. | [optional] 
**Id** | Pointer to **string** | SOD policy violation report result ID. | [optional] 
**Name** | Pointer to **string** | Human-readable name of the SOD policy violation report result. | [optional] 
**Status** | Pointer to **string** | Status of a SOD policy violation report. | [optional] 
**ReportType** | [**ReportType**](report-type) |  | 
**LastRunAt** | Pointer to **SailPointTime** | The most recent date and time this report was run | [optional] [readonly] 

## Methods

### NewCampaignReport

`func NewCampaignReport(reportType ReportType, ) *CampaignReport`

NewCampaignReport instantiates a new CampaignReport object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignReportWithDefaults

`func NewCampaignReportWithDefaults() *CampaignReport`

NewCampaignReportWithDefaults instantiates a new CampaignReport object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *CampaignReport) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignReport) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignReport) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CampaignReport) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *CampaignReport) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignReport) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignReport) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CampaignReport) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *CampaignReport) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignReport) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignReport) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CampaignReport) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStatus

`func (o *CampaignReport) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CampaignReport) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CampaignReport) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CampaignReport) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetReportType

`func (o *CampaignReport) GetReportType() ReportType`

GetReportType returns the ReportType field if non-nil, zero value otherwise.

### GetReportTypeOk

`func (o *CampaignReport) GetReportTypeOk() (*ReportType, bool)`

GetReportTypeOk returns a tuple with the ReportType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportType

`func (o *CampaignReport) SetReportType(v ReportType)`

SetReportType sets ReportType field to given value.


### GetLastRunAt

`func (o *CampaignReport) GetLastRunAt() SailPointTime`

GetLastRunAt returns the LastRunAt field if non-nil, zero value otherwise.

### GetLastRunAtOk

`func (o *CampaignReport) GetLastRunAtOk() (*SailPointTime, bool)`

GetLastRunAtOk returns a tuple with the LastRunAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastRunAt

`func (o *CampaignReport) SetLastRunAt(v SailPointTime)`

SetLastRunAt sets LastRunAt field to given value.

### HasLastRunAt

`func (o *CampaignReport) HasLastRunAt() bool`

HasLastRunAt returns a boolean if a field has been set.


