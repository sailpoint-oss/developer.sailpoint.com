---
id: queued-check-config-details
title: QueuedCheckConfigDetails
pagination_label: QueuedCheckConfigDetails
sidebar_label: QueuedCheckConfigDetails
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'QueuedCheckConfigDetails'] 
slug: /tools/sdk/go/v3/models/queued-check-config-details
tags: ['SDK', 'Software Development Kit', 'QueuedCheckConfigDetails']
---

# QueuedCheckConfigDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProvisioningStatusCheckIntervalMinutes** |  **string** | interval in minutes between status checks | 
**ProvisioningMaxStatusCheckDays** |  **string** | maximum number of days to check | 

## Methods

### NewQueuedCheckConfigDetails

`func NewQueuedCheckConfigDetails(provisioningStatusCheckIntervalMinutes string, provisioningMaxStatusCheckDays string, ) *QueuedCheckConfigDetails`

NewQueuedCheckConfigDetails instantiates a new QueuedCheckConfigDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueuedCheckConfigDetailsWithDefaults

`func NewQueuedCheckConfigDetailsWithDefaults() *QueuedCheckConfigDetails`

NewQueuedCheckConfigDetailsWithDefaults instantiates a new QueuedCheckConfigDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProvisioningStatusCheckIntervalMinutes

`func (o *QueuedCheckConfigDetails) GetProvisioningStatusCheckIntervalMinutes() string`

GetProvisioningStatusCheckIntervalMinutes returns the ProvisioningStatusCheckIntervalMinutes field if non-nil, zero value otherwise.

### GetProvisioningStatusCheckIntervalMinutesOk

`func (o *QueuedCheckConfigDetails) GetProvisioningStatusCheckIntervalMinutesOk() (*string, bool)`

GetProvisioningStatusCheckIntervalMinutesOk returns a tuple with the ProvisioningStatusCheckIntervalMinutes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningStatusCheckIntervalMinutes

`func (o *QueuedCheckConfigDetails) SetProvisioningStatusCheckIntervalMinutes(v string)`

SetProvisioningStatusCheckIntervalMinutes sets ProvisioningStatusCheckIntervalMinutes field to given value.


### GetProvisioningMaxStatusCheckDays

`func (o *QueuedCheckConfigDetails) GetProvisioningMaxStatusCheckDays() string`

GetProvisioningMaxStatusCheckDays returns the ProvisioningMaxStatusCheckDays field if non-nil, zero value otherwise.

### GetProvisioningMaxStatusCheckDaysOk

`func (o *QueuedCheckConfigDetails) GetProvisioningMaxStatusCheckDaysOk() (*string, bool)`

GetProvisioningMaxStatusCheckDaysOk returns a tuple with the ProvisioningMaxStatusCheckDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningMaxStatusCheckDays

`func (o *QueuedCheckConfigDetails) SetProvisioningMaxStatusCheckDays(v string)`

SetProvisioningMaxStatusCheckDays sets ProvisioningMaxStatusCheckDays field to given value.



[[Back to top]](#) 


