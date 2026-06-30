---
id: v1-queuedcheckconfigdetails
title: Queuedcheckconfigdetails
pagination_label: Queuedcheckconfigdetails
sidebar_label: Queuedcheckconfigdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Queuedcheckconfigdetails', 'V1Queuedcheckconfigdetails'] 
slug: /tools/sdk/go/servicedeskintegration/models/queuedcheckconfigdetails
tags: ['SDK', 'Software Development Kit', 'Queuedcheckconfigdetails', 'V1Queuedcheckconfigdetails']
---

# Queuedcheckconfigdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProvisioningStatusCheckIntervalMinutes** | **string** | Interval in minutes between status checks | 
**ProvisioningMaxStatusCheckDays** | **string** | Maximum number of days to check | 

## Methods

### NewQueuedcheckconfigdetails

`func NewQueuedcheckconfigdetails(provisioningStatusCheckIntervalMinutes string, provisioningMaxStatusCheckDays string, ) *Queuedcheckconfigdetails`

NewQueuedcheckconfigdetails instantiates a new Queuedcheckconfigdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueuedcheckconfigdetailsWithDefaults

`func NewQueuedcheckconfigdetailsWithDefaults() *Queuedcheckconfigdetails`

NewQueuedcheckconfigdetailsWithDefaults instantiates a new Queuedcheckconfigdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProvisioningStatusCheckIntervalMinutes

`func (o *Queuedcheckconfigdetails) GetProvisioningStatusCheckIntervalMinutes() string`

GetProvisioningStatusCheckIntervalMinutes returns the ProvisioningStatusCheckIntervalMinutes field if non-nil, zero value otherwise.

### GetProvisioningStatusCheckIntervalMinutesOk

`func (o *Queuedcheckconfigdetails) GetProvisioningStatusCheckIntervalMinutesOk() (*string, bool)`

GetProvisioningStatusCheckIntervalMinutesOk returns a tuple with the ProvisioningStatusCheckIntervalMinutes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningStatusCheckIntervalMinutes

`func (o *Queuedcheckconfigdetails) SetProvisioningStatusCheckIntervalMinutes(v string)`

SetProvisioningStatusCheckIntervalMinutes sets ProvisioningStatusCheckIntervalMinutes field to given value.


### GetProvisioningMaxStatusCheckDays

`func (o *Queuedcheckconfigdetails) GetProvisioningMaxStatusCheckDays() string`

GetProvisioningMaxStatusCheckDays returns the ProvisioningMaxStatusCheckDays field if non-nil, zero value otherwise.

### GetProvisioningMaxStatusCheckDaysOk

`func (o *Queuedcheckconfigdetails) GetProvisioningMaxStatusCheckDaysOk() (*string, bool)`

GetProvisioningMaxStatusCheckDaysOk returns a tuple with the ProvisioningMaxStatusCheckDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningMaxStatusCheckDays

`func (o *Queuedcheckconfigdetails) SetProvisioningMaxStatusCheckDays(v string)`

SetProvisioningMaxStatusCheckDays sets ProvisioningMaxStatusCheckDays field to given value.



