---
id: v1-vaclusterstatuschangeevent-previous-health-check-result
title: VaclusterstatuschangeeventPreviousHealthCheckResult
pagination_label: VaclusterstatuschangeeventPreviousHealthCheckResult
sidebar_label: VaclusterstatuschangeeventPreviousHealthCheckResult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'VaclusterstatuschangeeventPreviousHealthCheckResult', 'V1VaclusterstatuschangeeventPreviousHealthCheckResult'] 
slug: /tools/sdk/go/triggers/models/vaclusterstatuschangeevent-previous-health-check-result
tags: ['SDK', 'Software Development Kit', 'VaclusterstatuschangeeventPreviousHealthCheckResult', 'V1VaclusterstatuschangeeventPreviousHealthCheckResult']
---

# VaclusterstatuschangeeventPreviousHealthCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | **string** | Detailed message of the result of the health check. | 
**ResultType** | **string** | The type of the health check result. | 
**Status** | **string** | The status of the health check. | 

## Methods

### NewVaclusterstatuschangeeventPreviousHealthCheckResult

`func NewVaclusterstatuschangeeventPreviousHealthCheckResult(message string, resultType string, status string, ) *VaclusterstatuschangeeventPreviousHealthCheckResult`

NewVaclusterstatuschangeeventPreviousHealthCheckResult instantiates a new VaclusterstatuschangeeventPreviousHealthCheckResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVaclusterstatuschangeeventPreviousHealthCheckResultWithDefaults

`func NewVaclusterstatuschangeeventPreviousHealthCheckResultWithDefaults() *VaclusterstatuschangeeventPreviousHealthCheckResult`

NewVaclusterstatuschangeeventPreviousHealthCheckResultWithDefaults instantiates a new VaclusterstatuschangeeventPreviousHealthCheckResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *VaclusterstatuschangeeventPreviousHealthCheckResult) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *VaclusterstatuschangeeventPreviousHealthCheckResult) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *VaclusterstatuschangeeventPreviousHealthCheckResult) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetResultType

`func (o *VaclusterstatuschangeeventPreviousHealthCheckResult) GetResultType() string`

GetResultType returns the ResultType field if non-nil, zero value otherwise.

### GetResultTypeOk

`func (o *VaclusterstatuschangeeventPreviousHealthCheckResult) GetResultTypeOk() (*string, bool)`

GetResultTypeOk returns a tuple with the ResultType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResultType

`func (o *VaclusterstatuschangeeventPreviousHealthCheckResult) SetResultType(v string)`

SetResultType sets ResultType field to given value.


### GetStatus

`func (o *VaclusterstatuschangeeventPreviousHealthCheckResult) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *VaclusterstatuschangeeventPreviousHealthCheckResult) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *VaclusterstatuschangeeventPreviousHealthCheckResult) SetStatus(v string)`

SetStatus sets Status field to given value.



