---
id: v2024-va-cluster-status-change-event
title: VAClusterStatusChangeEvent
pagination_label: VAClusterStatusChangeEvent
sidebar_label: VAClusterStatusChangeEvent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'VAClusterStatusChangeEvent', 'V2024VAClusterStatusChangeEvent'] 
slug: /tools/sdk/go/v2024/models/va-cluster-status-change-event
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEvent', 'V2024VAClusterStatusChangeEvent']
---

# VAClusterStatusChangeEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | **time.Time** | The date and time the status change occurred. | 
**Type** | **map[string]interface{}** | The type of the object that initiated this event. | 
**Application** | [**VAClusterStatusChangeEventApplication**](va-cluster-status-change-event-application) |  | 
**HealthCheckResult** | [**VAClusterStatusChangeEventHealthCheckResult**](va-cluster-status-change-event-health-check-result) |  | 
**PreviousHealthCheckResult** | [**VAClusterStatusChangeEventPreviousHealthCheckResult**](va-cluster-status-change-event-previous-health-check-result) |  | 

## Methods

### NewVAClusterStatusChangeEvent

`func NewVAClusterStatusChangeEvent(created time.Time, type_ map[string]interface{}, application VAClusterStatusChangeEventApplication, healthCheckResult VAClusterStatusChangeEventHealthCheckResult, previousHealthCheckResult VAClusterStatusChangeEventPreviousHealthCheckResult, ) *VAClusterStatusChangeEvent`

NewVAClusterStatusChangeEvent instantiates a new VAClusterStatusChangeEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVAClusterStatusChangeEventWithDefaults

`func NewVAClusterStatusChangeEventWithDefaults() *VAClusterStatusChangeEvent`

NewVAClusterStatusChangeEventWithDefaults instantiates a new VAClusterStatusChangeEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *VAClusterStatusChangeEvent) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *VAClusterStatusChangeEvent) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *VAClusterStatusChangeEvent) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetType

`func (o *VAClusterStatusChangeEvent) GetType() map[string]interface{}`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *VAClusterStatusChangeEvent) GetTypeOk() (*map[string]interface{}, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *VAClusterStatusChangeEvent) SetType(v map[string]interface{})`

SetType sets Type field to given value.


### GetApplication

`func (o *VAClusterStatusChangeEvent) GetApplication() VAClusterStatusChangeEventApplication`

GetApplication returns the Application field if non-nil, zero value otherwise.

### GetApplicationOk

`func (o *VAClusterStatusChangeEvent) GetApplicationOk() (*VAClusterStatusChangeEventApplication, bool)`

GetApplicationOk returns a tuple with the Application field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplication

`func (o *VAClusterStatusChangeEvent) SetApplication(v VAClusterStatusChangeEventApplication)`

SetApplication sets Application field to given value.


### GetHealthCheckResult

`func (o *VAClusterStatusChangeEvent) GetHealthCheckResult() VAClusterStatusChangeEventHealthCheckResult`

GetHealthCheckResult returns the HealthCheckResult field if non-nil, zero value otherwise.

### GetHealthCheckResultOk

`func (o *VAClusterStatusChangeEvent) GetHealthCheckResultOk() (*VAClusterStatusChangeEventHealthCheckResult, bool)`

GetHealthCheckResultOk returns a tuple with the HealthCheckResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHealthCheckResult

`func (o *VAClusterStatusChangeEvent) SetHealthCheckResult(v VAClusterStatusChangeEventHealthCheckResult)`

SetHealthCheckResult sets HealthCheckResult field to given value.


### GetPreviousHealthCheckResult

`func (o *VAClusterStatusChangeEvent) GetPreviousHealthCheckResult() VAClusterStatusChangeEventPreviousHealthCheckResult`

GetPreviousHealthCheckResult returns the PreviousHealthCheckResult field if non-nil, zero value otherwise.

### GetPreviousHealthCheckResultOk

`func (o *VAClusterStatusChangeEvent) GetPreviousHealthCheckResultOk() (*VAClusterStatusChangeEventPreviousHealthCheckResult, bool)`

GetPreviousHealthCheckResultOk returns a tuple with the PreviousHealthCheckResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousHealthCheckResult

`func (o *VAClusterStatusChangeEvent) SetPreviousHealthCheckResult(v VAClusterStatusChangeEventPreviousHealthCheckResult)`

SetPreviousHealthCheckResult sets PreviousHealthCheckResult field to given value.



