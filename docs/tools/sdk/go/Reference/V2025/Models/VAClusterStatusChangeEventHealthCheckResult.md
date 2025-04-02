---
id: va-cluster-status-change-event-health-check-result
title: VAClusterStatusChangeEventHealthCheckResult
pagination_label: VAClusterStatusChangeEventHealthCheckResult
sidebar_label: VAClusterStatusChangeEventHealthCheckResult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'VAClusterStatusChangeEventHealthCheckResult', 'VAClusterStatusChangeEventHealthCheckResult'] 
slug: /tools/sdk/go//models/va-cluster-status-change-event-health-check-result
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEventHealthCheckResult', 'VAClusterStatusChangeEventHealthCheckResult']
---

# VAClusterStatusChangeEventHealthCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | **string** | Detailed message of the result of the health check. | 
**ResultType** | **string** | The type of the health check result. | 
**Status** | **map[string]interface{}** | The status of the health check. | 

## Methods

### NewVAClusterStatusChangeEventHealthCheckResult

`func NewVAClusterStatusChangeEventHealthCheckResult(message string, resultType string, status map[string]interface{}, ) *VAClusterStatusChangeEventHealthCheckResult`

NewVAClusterStatusChangeEventHealthCheckResult instantiates a new VAClusterStatusChangeEventHealthCheckResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVAClusterStatusChangeEventHealthCheckResultWithDefaults

`func NewVAClusterStatusChangeEventHealthCheckResultWithDefaults() *VAClusterStatusChangeEventHealthCheckResult`

NewVAClusterStatusChangeEventHealthCheckResultWithDefaults instantiates a new VAClusterStatusChangeEventHealthCheckResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *VAClusterStatusChangeEventHealthCheckResult) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *VAClusterStatusChangeEventHealthCheckResult) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *VAClusterStatusChangeEventHealthCheckResult) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetResultType

`func (o *VAClusterStatusChangeEventHealthCheckResult) GetResultType() string`

GetResultType returns the ResultType field if non-nil, zero value otherwise.

### GetResultTypeOk

`func (o *VAClusterStatusChangeEventHealthCheckResult) GetResultTypeOk() (*string, bool)`

GetResultTypeOk returns a tuple with the ResultType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResultType

`func (o *VAClusterStatusChangeEventHealthCheckResult) SetResultType(v string)`

SetResultType sets ResultType field to given value.


### GetStatus

`func (o *VAClusterStatusChangeEventHealthCheckResult) GetStatus() map[string]interface{}`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *VAClusterStatusChangeEventHealthCheckResult) GetStatusOk() (*map[string]interface{}, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *VAClusterStatusChangeEventHealthCheckResult) SetStatus(v map[string]interface{})`

SetStatus sets Status field to given value.



