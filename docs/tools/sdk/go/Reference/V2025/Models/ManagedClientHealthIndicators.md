---
id: v2025-managed-client-health-indicators
title: ManagedClientHealthIndicators
pagination_label: ManagedClientHealthIndicators
sidebar_label: ManagedClientHealthIndicators
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClientHealthIndicators', 'V2025ManagedClientHealthIndicators'] 
slug: /tools/sdk/go/v2025/models/managed-client-health-indicators
tags: ['SDK', 'Software Development Kit', 'ManagedClientHealthIndicators', 'V2025ManagedClientHealthIndicators']
---

# ManagedClientHealthIndicators

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | [**ManagedClientHealthIndicatorsBody**](managed-client-health-indicators-body) |  | 
**Status** | **string** | Top-level status of the Managed Client | 
**Type** | **string** | Type of the Managed Client | 
**Timestamp** | **SailPointTime** | Timestamp when this report was generated | 

## Methods

### NewManagedClientHealthIndicators

`func NewManagedClientHealthIndicators(body ManagedClientHealthIndicatorsBody, status string, type_ string, timestamp SailPointTime, ) *ManagedClientHealthIndicators`

NewManagedClientHealthIndicators instantiates a new ManagedClientHealthIndicators object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClientHealthIndicatorsWithDefaults

`func NewManagedClientHealthIndicatorsWithDefaults() *ManagedClientHealthIndicators`

NewManagedClientHealthIndicatorsWithDefaults instantiates a new ManagedClientHealthIndicators object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBody

`func (o *ManagedClientHealthIndicators) GetBody() ManagedClientHealthIndicatorsBody`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *ManagedClientHealthIndicators) GetBodyOk() (*ManagedClientHealthIndicatorsBody, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *ManagedClientHealthIndicators) SetBody(v ManagedClientHealthIndicatorsBody)`

SetBody sets Body field to given value.


### GetStatus

`func (o *ManagedClientHealthIndicators) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ManagedClientHealthIndicators) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ManagedClientHealthIndicators) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetType

`func (o *ManagedClientHealthIndicators) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ManagedClientHealthIndicators) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ManagedClientHealthIndicators) SetType(v string)`

SetType sets Type field to given value.


### GetTimestamp

`func (o *ManagedClientHealthIndicators) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *ManagedClientHealthIndicators) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *ManagedClientHealthIndicators) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.



