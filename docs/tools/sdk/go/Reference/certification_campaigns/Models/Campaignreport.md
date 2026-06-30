---
id: v1-campaignreport
title: Campaignreport
pagination_label: Campaignreport
sidebar_label: Campaignreport
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Campaignreport', 'V1Campaignreport'] 
slug: /tools/sdk/go/certificationcampaigns/models/campaignreport
tags: ['SDK', 'Software Development Kit', 'Campaignreport', 'V1Campaignreport']
---

# Campaignreport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | SOD policy violation report result DTO type. | [optional] 
**Id** | Pointer to **string** | SOD policy violation report result ID. | [optional] 
**Name** | Pointer to **string** | Human-readable name of the SOD policy violation report result. | [optional] 
**Status** | Pointer to **string** | Status of a SOD policy violation report. | [optional] 
**ReportType** | [**Reporttype**](reporttype) |  | 
**LastRunAt** | Pointer to **SailPointTime** | The most recent date and time this report was run | [optional] [readonly] 

## Methods

### NewCampaignreport

`func NewCampaignreport(reportType Reporttype, ) *Campaignreport`

NewCampaignreport instantiates a new Campaignreport object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignreportWithDefaults

`func NewCampaignreportWithDefaults() *Campaignreport`

NewCampaignreportWithDefaults instantiates a new Campaignreport object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Campaignreport) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Campaignreport) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Campaignreport) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Campaignreport) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Campaignreport) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Campaignreport) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Campaignreport) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Campaignreport) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Campaignreport) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Campaignreport) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Campaignreport) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Campaignreport) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStatus

`func (o *Campaignreport) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Campaignreport) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Campaignreport) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Campaignreport) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetReportType

`func (o *Campaignreport) GetReportType() Reporttype`

GetReportType returns the ReportType field if non-nil, zero value otherwise.

### GetReportTypeOk

`func (o *Campaignreport) GetReportTypeOk() (*Reporttype, bool)`

GetReportTypeOk returns a tuple with the ReportType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportType

`func (o *Campaignreport) SetReportType(v Reporttype)`

SetReportType sets ReportType field to given value.


### GetLastRunAt

`func (o *Campaignreport) GetLastRunAt() SailPointTime`

GetLastRunAt returns the LastRunAt field if non-nil, zero value otherwise.

### GetLastRunAtOk

`func (o *Campaignreport) GetLastRunAtOk() (*SailPointTime, bool)`

GetLastRunAtOk returns a tuple with the LastRunAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastRunAt

`func (o *Campaignreport) SetLastRunAt(v SailPointTime)`

SetLastRunAt sets LastRunAt field to given value.

### HasLastRunAt

`func (o *Campaignreport) HasLastRunAt() bool`

HasLastRunAt returns a boolean if a field has been set.


