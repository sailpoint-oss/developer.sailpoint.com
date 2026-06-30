---
id: v1-healthevent
title: Healthevent
pagination_label: Healthevent
sidebar_label: Healthevent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Healthevent', 'V1Healthevent'] 
slug: /tools/sdk/go/managedclients/models/healthevent
tags: ['SDK', 'Software Development Kit', 'Healthevent', 'V1Healthevent']
---

# Healthevent

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

### NewHealthevent

`func NewHealthevent() *Healthevent`

NewHealthevent instantiates a new Healthevent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHealtheventWithDefaults

`func NewHealtheventWithDefaults() *Healthevent`

NewHealtheventWithDefaults instantiates a new Healthevent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailedMessage

`func (o *Healthevent) GetDetailedMessage() string`

GetDetailedMessage returns the DetailedMessage field if non-nil, zero value otherwise.

### GetDetailedMessageOk

`func (o *Healthevent) GetDetailedMessageOk() (*string, bool)`

GetDetailedMessageOk returns a tuple with the DetailedMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailedMessage

`func (o *Healthevent) SetDetailedMessage(v string)`

SetDetailedMessage sets DetailedMessage field to given value.

### HasDetailedMessage

`func (o *Healthevent) HasDetailedMessage() bool`

HasDetailedMessage returns a boolean if a field has been set.

### GetUuid

`func (o *Healthevent) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *Healthevent) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *Healthevent) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *Healthevent) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetUrl

`func (o *Healthevent) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *Healthevent) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *Healthevent) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *Healthevent) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### SetUrlNil

`func (o *Healthevent) SetUrlNil(b bool)`

 SetUrlNil sets the value for Url to be an explicit nil

### UnsetUrl
`func (o *Healthevent) UnsetUrl()`

UnsetUrl ensures that no value is present for Url, not even an explicit nil
### GetTimestamp

`func (o *Healthevent) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *Healthevent) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *Healthevent) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *Healthevent) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetLastNotifiedTimeStamp

`func (o *Healthevent) GetLastNotifiedTimeStamp() SailPointTime`

GetLastNotifiedTimeStamp returns the LastNotifiedTimeStamp field if non-nil, zero value otherwise.

### GetLastNotifiedTimeStampOk

`func (o *Healthevent) GetLastNotifiedTimeStampOk() (*SailPointTime, bool)`

GetLastNotifiedTimeStampOk returns a tuple with the LastNotifiedTimeStamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastNotifiedTimeStamp

`func (o *Healthevent) SetLastNotifiedTimeStamp(v SailPointTime)`

SetLastNotifiedTimeStamp sets LastNotifiedTimeStamp field to given value.

### HasLastNotifiedTimeStamp

`func (o *Healthevent) HasLastNotifiedTimeStamp() bool`

HasLastNotifiedTimeStamp returns a boolean if a field has been set.

### GetCpuUtilizationPercentage

`func (o *Healthevent) GetCpuUtilizationPercentage() float32`

GetCpuUtilizationPercentage returns the CpuUtilizationPercentage field if non-nil, zero value otherwise.

### GetCpuUtilizationPercentageOk

`func (o *Healthevent) GetCpuUtilizationPercentageOk() (*float32, bool)`

GetCpuUtilizationPercentageOk returns a tuple with the CpuUtilizationPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCpuUtilizationPercentage

`func (o *Healthevent) SetCpuUtilizationPercentage(v float32)`

SetCpuUtilizationPercentage sets CpuUtilizationPercentage field to given value.

### HasCpuUtilizationPercentage

`func (o *Healthevent) HasCpuUtilizationPercentage() bool`

HasCpuUtilizationPercentage returns a boolean if a field has been set.

### SetCpuUtilizationPercentageNil

`func (o *Healthevent) SetCpuUtilizationPercentageNil(b bool)`

 SetCpuUtilizationPercentageNil sets the value for CpuUtilizationPercentage to be an explicit nil

### UnsetCpuUtilizationPercentage
`func (o *Healthevent) UnsetCpuUtilizationPercentage()`

UnsetCpuUtilizationPercentage ensures that no value is present for CpuUtilizationPercentage, not even an explicit nil
### GetFreeSpacePercentage

`func (o *Healthevent) GetFreeSpacePercentage() float32`

GetFreeSpacePercentage returns the FreeSpacePercentage field if non-nil, zero value otherwise.

### GetFreeSpacePercentageOk

`func (o *Healthevent) GetFreeSpacePercentageOk() (*float32, bool)`

GetFreeSpacePercentageOk returns a tuple with the FreeSpacePercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFreeSpacePercentage

`func (o *Healthevent) SetFreeSpacePercentage(v float32)`

SetFreeSpacePercentage sets FreeSpacePercentage field to given value.

### HasFreeSpacePercentage

`func (o *Healthevent) HasFreeSpacePercentage() bool`

HasFreeSpacePercentage returns a boolean if a field has been set.

### SetFreeSpacePercentageNil

`func (o *Healthevent) SetFreeSpacePercentageNil(b bool)`

 SetFreeSpacePercentageNil sets the value for FreeSpacePercentage to be an explicit nil

### UnsetFreeSpacePercentage
`func (o *Healthevent) UnsetFreeSpacePercentage()`

UnsetFreeSpacePercentage ensures that no value is present for FreeSpacePercentage, not even an explicit nil

