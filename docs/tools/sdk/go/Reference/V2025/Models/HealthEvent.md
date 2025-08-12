---
id: v2025-health-event
title: HealthEvent
pagination_label: HealthEvent
sidebar_label: HealthEvent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'HealthEvent', 'V2025HealthEvent'] 
slug: /tools/sdk/go/v2025/models/health-event
tags: ['SDK', 'Software Development Kit', 'HealthEvent', 'V2025HealthEvent']
---

# HealthEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailedMessage** | Pointer to **string** | Description of the issue | [optional] 
**Uuid** | Pointer to **string** | Unique identifier for the health event | [optional] 
**Url** | Pointer to **NullableString** | Optional URL associated with the issue | [optional] 
**Timestamp** | Pointer to **SailPointTime** | Time when the event occurred | [optional] 
**LastNotifiedTimeStamp** | Pointer to **SailPointTime** | Last time notification was sent for this issue | [optional] 
**CpuUtilizationPercentage** | Pointer to **NullableFloat32** | CPU usage percentage | [optional] 
**FreeSpacePercentage** | Pointer to **NullableFloat32** | Free memory percentage | [optional] 

## Methods

### NewHealthEvent

`func NewHealthEvent() *HealthEvent`

NewHealthEvent instantiates a new HealthEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHealthEventWithDefaults

`func NewHealthEventWithDefaults() *HealthEvent`

NewHealthEventWithDefaults instantiates a new HealthEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailedMessage

`func (o *HealthEvent) GetDetailedMessage() string`

GetDetailedMessage returns the DetailedMessage field if non-nil, zero value otherwise.

### GetDetailedMessageOk

`func (o *HealthEvent) GetDetailedMessageOk() (*string, bool)`

GetDetailedMessageOk returns a tuple with the DetailedMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailedMessage

`func (o *HealthEvent) SetDetailedMessage(v string)`

SetDetailedMessage sets DetailedMessage field to given value.

### HasDetailedMessage

`func (o *HealthEvent) HasDetailedMessage() bool`

HasDetailedMessage returns a boolean if a field has been set.

### GetUuid

`func (o *HealthEvent) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *HealthEvent) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *HealthEvent) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *HealthEvent) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetUrl

`func (o *HealthEvent) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *HealthEvent) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *HealthEvent) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *HealthEvent) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### SetUrlNil

`func (o *HealthEvent) SetUrlNil(b bool)`

 SetUrlNil sets the value for Url to be an explicit nil

### UnsetUrl
`func (o *HealthEvent) UnsetUrl()`

UnsetUrl ensures that no value is present for Url, not even an explicit nil
### GetTimestamp

`func (o *HealthEvent) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *HealthEvent) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *HealthEvent) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *HealthEvent) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetLastNotifiedTimeStamp

`func (o *HealthEvent) GetLastNotifiedTimeStamp() SailPointTime`

GetLastNotifiedTimeStamp returns the LastNotifiedTimeStamp field if non-nil, zero value otherwise.

### GetLastNotifiedTimeStampOk

`func (o *HealthEvent) GetLastNotifiedTimeStampOk() (*SailPointTime, bool)`

GetLastNotifiedTimeStampOk returns a tuple with the LastNotifiedTimeStamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastNotifiedTimeStamp

`func (o *HealthEvent) SetLastNotifiedTimeStamp(v SailPointTime)`

SetLastNotifiedTimeStamp sets LastNotifiedTimeStamp field to given value.

### HasLastNotifiedTimeStamp

`func (o *HealthEvent) HasLastNotifiedTimeStamp() bool`

HasLastNotifiedTimeStamp returns a boolean if a field has been set.

### GetCpuUtilizationPercentage

`func (o *HealthEvent) GetCpuUtilizationPercentage() float32`

GetCpuUtilizationPercentage returns the CpuUtilizationPercentage field if non-nil, zero value otherwise.

### GetCpuUtilizationPercentageOk

`func (o *HealthEvent) GetCpuUtilizationPercentageOk() (*float32, bool)`

GetCpuUtilizationPercentageOk returns a tuple with the CpuUtilizationPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCpuUtilizationPercentage

`func (o *HealthEvent) SetCpuUtilizationPercentage(v float32)`

SetCpuUtilizationPercentage sets CpuUtilizationPercentage field to given value.

### HasCpuUtilizationPercentage

`func (o *HealthEvent) HasCpuUtilizationPercentage() bool`

HasCpuUtilizationPercentage returns a boolean if a field has been set.

### SetCpuUtilizationPercentageNil

`func (o *HealthEvent) SetCpuUtilizationPercentageNil(b bool)`

 SetCpuUtilizationPercentageNil sets the value for CpuUtilizationPercentage to be an explicit nil

### UnsetCpuUtilizationPercentage
`func (o *HealthEvent) UnsetCpuUtilizationPercentage()`

UnsetCpuUtilizationPercentage ensures that no value is present for CpuUtilizationPercentage, not even an explicit nil
### GetFreeSpacePercentage

`func (o *HealthEvent) GetFreeSpacePercentage() float32`

GetFreeSpacePercentage returns the FreeSpacePercentage field if non-nil, zero value otherwise.

### GetFreeSpacePercentageOk

`func (o *HealthEvent) GetFreeSpacePercentageOk() (*float32, bool)`

GetFreeSpacePercentageOk returns a tuple with the FreeSpacePercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFreeSpacePercentage

`func (o *HealthEvent) SetFreeSpacePercentage(v float32)`

SetFreeSpacePercentage sets FreeSpacePercentage field to given value.

### HasFreeSpacePercentage

`func (o *HealthEvent) HasFreeSpacePercentage() bool`

HasFreeSpacePercentage returns a boolean if a field has been set.

### SetFreeSpacePercentageNil

`func (o *HealthEvent) SetFreeSpacePercentageNil(b bool)`

 SetFreeSpacePercentageNil sets the value for FreeSpacePercentage to be an explicit nil

### UnsetFreeSpacePercentage
`func (o *HealthEvent) UnsetFreeSpacePercentage()`

UnsetFreeSpacePercentage ensures that no value is present for FreeSpacePercentage, not even an explicit nil

