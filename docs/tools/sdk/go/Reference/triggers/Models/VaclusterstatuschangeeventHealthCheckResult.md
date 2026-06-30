---
id: v1-vaclusterstatuschangeevent-health-check-result
title: VaclusterstatuschangeeventHealthCheckResult
pagination_label: VaclusterstatuschangeeventHealthCheckResult
sidebar_label: VaclusterstatuschangeeventHealthCheckResult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'VaclusterstatuschangeeventHealthCheckResult', 'V1VaclusterstatuschangeeventHealthCheckResult'] 
slug: /tools/sdk/go/triggers/models/vaclusterstatuschangeevent-health-check-result
tags: ['SDK', 'Software Development Kit', 'VaclusterstatuschangeeventHealthCheckResult', 'V1VaclusterstatuschangeeventHealthCheckResult']
---

# VaclusterstatuschangeeventHealthCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | **string** | Detailed message of the result of the health check. | 
**ResultType** | **string** | The type of the health check result. | 
**Status** | **string** | The status of the health check. | 

## Methods

### NewVaclusterstatuschangeeventHealthCheckResult

`func NewVaclusterstatuschangeeventHealthCheckResult(message string, resultType string, status string, ) *VaclusterstatuschangeeventHealthCheckResult`

NewVaclusterstatuschangeeventHealthCheckResult instantiates a new VaclusterstatuschangeeventHealthCheckResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVaclusterstatuschangeeventHealthCheckResultWithDefaults

`func NewVaclusterstatuschangeeventHealthCheckResultWithDefaults() *VaclusterstatuschangeeventHealthCheckResult`

NewVaclusterstatuschangeeventHealthCheckResultWithDefaults instantiates a new VaclusterstatuschangeeventHealthCheckResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *VaclusterstatuschangeeventHealthCheckResult) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *VaclusterstatuschangeeventHealthCheckResult) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *VaclusterstatuschangeeventHealthCheckResult) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetResultType

`func (o *VaclusterstatuschangeeventHealthCheckResult) GetResultType() string`

GetResultType returns the ResultType field if non-nil, zero value otherwise.

### GetResultTypeOk

`func (o *VaclusterstatuschangeeventHealthCheckResult) GetResultTypeOk() (*string, bool)`

GetResultTypeOk returns a tuple with the ResultType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResultType

`func (o *VaclusterstatuschangeeventHealthCheckResult) SetResultType(v string)`

SetResultType sets ResultType field to given value.


### GetStatus

`func (o *VaclusterstatuschangeeventHealthCheckResult) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *VaclusterstatuschangeeventHealthCheckResult) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *VaclusterstatuschangeeventHealthCheckResult) SetStatus(v string)`

SetStatus sets Status field to given value.



