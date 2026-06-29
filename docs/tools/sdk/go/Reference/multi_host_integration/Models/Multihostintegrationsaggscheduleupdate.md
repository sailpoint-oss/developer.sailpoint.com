---
id: v1-multihostintegrationsaggscheduleupdate
title: Multihostintegrationsaggscheduleupdate
pagination_label: Multihostintegrationsaggscheduleupdate
sidebar_label: Multihostintegrationsaggscheduleupdate
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Multihostintegrationsaggscheduleupdate', 'V1Multihostintegrationsaggscheduleupdate'] 
slug: /tools/sdk/go/multihostintegration/models/multihostintegrationsaggscheduleupdate
tags: ['SDK', 'Software Development Kit', 'Multihostintegrationsaggscheduleupdate', 'V1Multihostintegrationsaggscheduleupdate']
---

# Multihostintegrationsaggscheduleupdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MultihostId** | **string** | Multi-Host Integration ID. The ID must be unique | 
**AggregationGrpId** | **string** | Multi-Host Integration aggregation group ID | 
**AggregationGrpName** | **string** | Multi-Host Integration name | 
**AggregationCronSchedule** | **string** | Cron expression to schedule aggregation | 
**EnableSchedule** | **bool** | Boolean value for Multi-Host Integration aggregation schedule.  This specifies if scheduled aggregation is enabled or disabled. | [default to false]
**SourceIdList** | **[]string** | Source IDs of the Multi-Host Integration | 
**Created** | Pointer to **SailPointTime** | Created date of Multi-Host Integration aggregation schedule | [optional] 
**Modified** | Pointer to **SailPointTime** | Modified date of Multi-Host Integration aggregation schedule | [optional] 

## Methods

### NewMultihostintegrationsaggscheduleupdate

`func NewMultihostintegrationsaggscheduleupdate(multihostId string, aggregationGrpId string, aggregationGrpName string, aggregationCronSchedule string, enableSchedule bool, sourceIdList []string, ) *Multihostintegrationsaggscheduleupdate`

NewMultihostintegrationsaggscheduleupdate instantiates a new Multihostintegrationsaggscheduleupdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultihostintegrationsaggscheduleupdateWithDefaults

`func NewMultihostintegrationsaggscheduleupdateWithDefaults() *Multihostintegrationsaggscheduleupdate`

NewMultihostintegrationsaggscheduleupdateWithDefaults instantiates a new Multihostintegrationsaggscheduleupdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMultihostId

`func (o *Multihostintegrationsaggscheduleupdate) GetMultihostId() string`

GetMultihostId returns the MultihostId field if non-nil, zero value otherwise.

### GetMultihostIdOk

`func (o *Multihostintegrationsaggscheduleupdate) GetMultihostIdOk() (*string, bool)`

GetMultihostIdOk returns a tuple with the MultihostId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultihostId

`func (o *Multihostintegrationsaggscheduleupdate) SetMultihostId(v string)`

SetMultihostId sets MultihostId field to given value.


### GetAggregationGrpId

`func (o *Multihostintegrationsaggscheduleupdate) GetAggregationGrpId() string`

GetAggregationGrpId returns the AggregationGrpId field if non-nil, zero value otherwise.

### GetAggregationGrpIdOk

`func (o *Multihostintegrationsaggscheduleupdate) GetAggregationGrpIdOk() (*string, bool)`

GetAggregationGrpIdOk returns a tuple with the AggregationGrpId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationGrpId

`func (o *Multihostintegrationsaggscheduleupdate) SetAggregationGrpId(v string)`

SetAggregationGrpId sets AggregationGrpId field to given value.


### GetAggregationGrpName

`func (o *Multihostintegrationsaggscheduleupdate) GetAggregationGrpName() string`

GetAggregationGrpName returns the AggregationGrpName field if non-nil, zero value otherwise.

### GetAggregationGrpNameOk

`func (o *Multihostintegrationsaggscheduleupdate) GetAggregationGrpNameOk() (*string, bool)`

GetAggregationGrpNameOk returns a tuple with the AggregationGrpName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationGrpName

`func (o *Multihostintegrationsaggscheduleupdate) SetAggregationGrpName(v string)`

SetAggregationGrpName sets AggregationGrpName field to given value.


### GetAggregationCronSchedule

`func (o *Multihostintegrationsaggscheduleupdate) GetAggregationCronSchedule() string`

GetAggregationCronSchedule returns the AggregationCronSchedule field if non-nil, zero value otherwise.

### GetAggregationCronScheduleOk

`func (o *Multihostintegrationsaggscheduleupdate) GetAggregationCronScheduleOk() (*string, bool)`

GetAggregationCronScheduleOk returns a tuple with the AggregationCronSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationCronSchedule

`func (o *Multihostintegrationsaggscheduleupdate) SetAggregationCronSchedule(v string)`

SetAggregationCronSchedule sets AggregationCronSchedule field to given value.


### GetEnableSchedule

`func (o *Multihostintegrationsaggscheduleupdate) GetEnableSchedule() bool`

GetEnableSchedule returns the EnableSchedule field if non-nil, zero value otherwise.

### GetEnableScheduleOk

`func (o *Multihostintegrationsaggscheduleupdate) GetEnableScheduleOk() (*bool, bool)`

GetEnableScheduleOk returns a tuple with the EnableSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableSchedule

`func (o *Multihostintegrationsaggscheduleupdate) SetEnableSchedule(v bool)`

SetEnableSchedule sets EnableSchedule field to given value.


### GetSourceIdList

`func (o *Multihostintegrationsaggscheduleupdate) GetSourceIdList() []string`

GetSourceIdList returns the SourceIdList field if non-nil, zero value otherwise.

### GetSourceIdListOk

`func (o *Multihostintegrationsaggscheduleupdate) GetSourceIdListOk() (*[]string, bool)`

GetSourceIdListOk returns a tuple with the SourceIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIdList

`func (o *Multihostintegrationsaggscheduleupdate) SetSourceIdList(v []string)`

SetSourceIdList sets SourceIdList field to given value.


### GetCreated

`func (o *Multihostintegrationsaggscheduleupdate) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Multihostintegrationsaggscheduleupdate) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Multihostintegrationsaggscheduleupdate) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Multihostintegrationsaggscheduleupdate) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Multihostintegrationsaggscheduleupdate) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Multihostintegrationsaggscheduleupdate) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Multihostintegrationsaggscheduleupdate) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Multihostintegrationsaggscheduleupdate) HasModified() bool`

HasModified returns a boolean if a field has been set.


