---
id: beta-va-cluster-status-change-event-previous-health-check-result
title: VAClusterStatusChangeEventPreviousHealthCheckResult
pagination_label: VAClusterStatusChangeEventPreviousHealthCheckResult
sidebar_label: VAClusterStatusChangeEventPreviousHealthCheckResult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'VAClusterStatusChangeEventPreviousHealthCheckResult', 'BetaVAClusterStatusChangeEventPreviousHealthCheckResult'] 
slug: /tools/sdk/go/beta/models/va-cluster-status-change-event-previous-health-check-result
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEventPreviousHealthCheckResult', 'BetaVAClusterStatusChangeEventPreviousHealthCheckResult']
---

# VAClusterStatusChangeEventPreviousHealthCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | **string** | Detailed message of the health check result. | 
**ResultType** | **string** | Health check result type. | 
**Status** | **string** | Health check status. | 

## Methods

### NewVAClusterStatusChangeEventPreviousHealthCheckResult

`func NewVAClusterStatusChangeEventPreviousHealthCheckResult(message string, resultType string, status string, ) *VAClusterStatusChangeEventPreviousHealthCheckResult`

NewVAClusterStatusChangeEventPreviousHealthCheckResult instantiates a new VAClusterStatusChangeEventPreviousHealthCheckResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVAClusterStatusChangeEventPreviousHealthCheckResultWithDefaults

`func NewVAClusterStatusChangeEventPreviousHealthCheckResultWithDefaults() *VAClusterStatusChangeEventPreviousHealthCheckResult`

NewVAClusterStatusChangeEventPreviousHealthCheckResultWithDefaults instantiates a new VAClusterStatusChangeEventPreviousHealthCheckResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *VAClusterStatusChangeEventPreviousHealthCheckResult) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *VAClusterStatusChangeEventPreviousHealthCheckResult) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *VAClusterStatusChangeEventPreviousHealthCheckResult) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetResultType

`func (o *VAClusterStatusChangeEventPreviousHealthCheckResult) GetResultType() string`

GetResultType returns the ResultType field if non-nil, zero value otherwise.

### GetResultTypeOk

`func (o *VAClusterStatusChangeEventPreviousHealthCheckResult) GetResultTypeOk() (*string, bool)`

GetResultTypeOk returns a tuple with the ResultType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResultType

`func (o *VAClusterStatusChangeEventPreviousHealthCheckResult) SetResultType(v string)`

SetResultType sets ResultType field to given value.


### GetStatus

`func (o *VAClusterStatusChangeEventPreviousHealthCheckResult) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *VAClusterStatusChangeEventPreviousHealthCheckResult) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *VAClusterStatusChangeEventPreviousHealthCheckResult) SetStatus(v string)`

SetStatus sets Status field to given value.



