---
id: v1-vaclusterstatuschangeevent
title: Vaclusterstatuschangeevent
pagination_label: Vaclusterstatuschangeevent
sidebar_label: Vaclusterstatuschangeevent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Vaclusterstatuschangeevent', 'V1Vaclusterstatuschangeevent'] 
slug: /tools/sdk/go/triggers/models/vaclusterstatuschangeevent
tags: ['SDK', 'Software Development Kit', 'Vaclusterstatuschangeevent', 'V1Vaclusterstatuschangeevent']
---

# Vaclusterstatuschangeevent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | **SailPointTime** | The date and time the status change occurred. | 
**Type** | **string** | The type of the object that initiated this event. | 
**Application** | [**VaclusterstatuschangeeventApplication**](vaclusterstatuschangeevent-application) |  | 
**HealthCheckResult** | [**VaclusterstatuschangeeventHealthCheckResult**](vaclusterstatuschangeevent-health-check-result) |  | 
**PreviousHealthCheckResult** | [**VaclusterstatuschangeeventPreviousHealthCheckResult**](vaclusterstatuschangeevent-previous-health-check-result) |  | 

## Methods

### NewVaclusterstatuschangeevent

`func NewVaclusterstatuschangeevent(created SailPointTime, type_ string, application VaclusterstatuschangeeventApplication, healthCheckResult VaclusterstatuschangeeventHealthCheckResult, previousHealthCheckResult VaclusterstatuschangeeventPreviousHealthCheckResult, ) *Vaclusterstatuschangeevent`

NewVaclusterstatuschangeevent instantiates a new Vaclusterstatuschangeevent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVaclusterstatuschangeeventWithDefaults

`func NewVaclusterstatuschangeeventWithDefaults() *Vaclusterstatuschangeevent`

NewVaclusterstatuschangeeventWithDefaults instantiates a new Vaclusterstatuschangeevent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *Vaclusterstatuschangeevent) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Vaclusterstatuschangeevent) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Vaclusterstatuschangeevent) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetType

`func (o *Vaclusterstatuschangeevent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Vaclusterstatuschangeevent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Vaclusterstatuschangeevent) SetType(v string)`

SetType sets Type field to given value.


### GetApplication

`func (o *Vaclusterstatuschangeevent) GetApplication() VaclusterstatuschangeeventApplication`

GetApplication returns the Application field if non-nil, zero value otherwise.

### GetApplicationOk

`func (o *Vaclusterstatuschangeevent) GetApplicationOk() (*VaclusterstatuschangeeventApplication, bool)`

GetApplicationOk returns a tuple with the Application field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplication

`func (o *Vaclusterstatuschangeevent) SetApplication(v VaclusterstatuschangeeventApplication)`

SetApplication sets Application field to given value.


### GetHealthCheckResult

`func (o *Vaclusterstatuschangeevent) GetHealthCheckResult() VaclusterstatuschangeeventHealthCheckResult`

GetHealthCheckResult returns the HealthCheckResult field if non-nil, zero value otherwise.

### GetHealthCheckResultOk

`func (o *Vaclusterstatuschangeevent) GetHealthCheckResultOk() (*VaclusterstatuschangeeventHealthCheckResult, bool)`

GetHealthCheckResultOk returns a tuple with the HealthCheckResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHealthCheckResult

`func (o *Vaclusterstatuschangeevent) SetHealthCheckResult(v VaclusterstatuschangeeventHealthCheckResult)`

SetHealthCheckResult sets HealthCheckResult field to given value.


### GetPreviousHealthCheckResult

`func (o *Vaclusterstatuschangeevent) GetPreviousHealthCheckResult() VaclusterstatuschangeeventPreviousHealthCheckResult`

GetPreviousHealthCheckResult returns the PreviousHealthCheckResult field if non-nil, zero value otherwise.

### GetPreviousHealthCheckResultOk

`func (o *Vaclusterstatuschangeevent) GetPreviousHealthCheckResultOk() (*VaclusterstatuschangeeventPreviousHealthCheckResult, bool)`

GetPreviousHealthCheckResultOk returns a tuple with the PreviousHealthCheckResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousHealthCheckResult

`func (o *Vaclusterstatuschangeevent) SetPreviousHealthCheckResult(v VaclusterstatuschangeeventPreviousHealthCheckResult)`

SetPreviousHealthCheckResult sets PreviousHealthCheckResult field to given value.



