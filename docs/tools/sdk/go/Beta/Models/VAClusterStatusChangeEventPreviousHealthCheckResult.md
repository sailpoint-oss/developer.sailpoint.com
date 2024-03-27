---
id: va-cluster-status-change-event-previous-health-check-result
title: VAClusterStatusChangeEventPreviousHealthCheckResult
pagination_label: VAClusterStatusChangeEventPreviousHealthCheckResult
sidebar_label: VAClusterStatusChangeEventPreviousHealthCheckResult
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'VAClusterStatusChangeEventPreviousHealthCheckResult'] 
slug: /tools/sdk/go/beta/models/va-cluster-status-change-event-previous-health-check-result
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEventPreviousHealthCheckResult']
---

# VAClusterStatusChangeEventPreviousHealthCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** |  **string** | Detailed message of the result of the health check. | 
**ResultType** |  **string** | The type of the health check result. | 
**Status** |  **map[string]interface{}** | The status of the health check. | 

## Methods

### NewVAClusterStatusChangeEventPreviousHealthCheckResult

`func NewVAClusterStatusChangeEventPreviousHealthCheckResult(message string, resultType string, status map[string]interface{}, ) *VAClusterStatusChangeEventPreviousHealthCheckResult`

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

`func (o *VAClusterStatusChangeEventPreviousHealthCheckResult) GetStatus() map[string]interface{}`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *VAClusterStatusChangeEventPreviousHealthCheckResult) GetStatusOk() (*map[string]interface{}, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *VAClusterStatusChangeEventPreviousHealthCheckResult) SetStatus(v map[string]interface{})`

SetStatus sets Status field to given value.



[[Back to top]](#) 


