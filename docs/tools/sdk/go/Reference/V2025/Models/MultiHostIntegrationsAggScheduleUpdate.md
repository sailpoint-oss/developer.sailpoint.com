---
id: multi-host-integrations-agg-schedule-update
title: MultiHostIntegrationsAggScheduleUpdate
pagination_label: MultiHostIntegrationsAggScheduleUpdate
sidebar_label: MultiHostIntegrationsAggScheduleUpdate
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultiHostIntegrationsAggScheduleUpdate', 'MultiHostIntegrationsAggScheduleUpdate'] 
slug: /tools/sdk/go//models/multi-host-integrations-agg-schedule-update
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsAggScheduleUpdate', 'MultiHostIntegrationsAggScheduleUpdate']
---

# MultiHostIntegrationsAggScheduleUpdate

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

### NewMultiHostIntegrationsAggScheduleUpdate

`func NewMultiHostIntegrationsAggScheduleUpdate(multihostId string, aggregationGrpId string, aggregationGrpName string, aggregationCronSchedule string, enableSchedule bool, sourceIdList []string, ) *MultiHostIntegrationsAggScheduleUpdate`

NewMultiHostIntegrationsAggScheduleUpdate instantiates a new MultiHostIntegrationsAggScheduleUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiHostIntegrationsAggScheduleUpdateWithDefaults

`func NewMultiHostIntegrationsAggScheduleUpdateWithDefaults() *MultiHostIntegrationsAggScheduleUpdate`

NewMultiHostIntegrationsAggScheduleUpdateWithDefaults instantiates a new MultiHostIntegrationsAggScheduleUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMultihostId

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetMultihostId() string`

GetMultihostId returns the MultihostId field if non-nil, zero value otherwise.

### GetMultihostIdOk

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetMultihostIdOk() (*string, bool)`

GetMultihostIdOk returns a tuple with the MultihostId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultihostId

`func (o *MultiHostIntegrationsAggScheduleUpdate) SetMultihostId(v string)`

SetMultihostId sets MultihostId field to given value.


### GetAggregationGrpId

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetAggregationGrpId() string`

GetAggregationGrpId returns the AggregationGrpId field if non-nil, zero value otherwise.

### GetAggregationGrpIdOk

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetAggregationGrpIdOk() (*string, bool)`

GetAggregationGrpIdOk returns a tuple with the AggregationGrpId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationGrpId

`func (o *MultiHostIntegrationsAggScheduleUpdate) SetAggregationGrpId(v string)`

SetAggregationGrpId sets AggregationGrpId field to given value.


### GetAggregationGrpName

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetAggregationGrpName() string`

GetAggregationGrpName returns the AggregationGrpName field if non-nil, zero value otherwise.

### GetAggregationGrpNameOk

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetAggregationGrpNameOk() (*string, bool)`

GetAggregationGrpNameOk returns a tuple with the AggregationGrpName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationGrpName

`func (o *MultiHostIntegrationsAggScheduleUpdate) SetAggregationGrpName(v string)`

SetAggregationGrpName sets AggregationGrpName field to given value.


### GetAggregationCronSchedule

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetAggregationCronSchedule() string`

GetAggregationCronSchedule returns the AggregationCronSchedule field if non-nil, zero value otherwise.

### GetAggregationCronScheduleOk

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetAggregationCronScheduleOk() (*string, bool)`

GetAggregationCronScheduleOk returns a tuple with the AggregationCronSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationCronSchedule

`func (o *MultiHostIntegrationsAggScheduleUpdate) SetAggregationCronSchedule(v string)`

SetAggregationCronSchedule sets AggregationCronSchedule field to given value.


### GetEnableSchedule

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetEnableSchedule() bool`

GetEnableSchedule returns the EnableSchedule field if non-nil, zero value otherwise.

### GetEnableScheduleOk

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetEnableScheduleOk() (*bool, bool)`

GetEnableScheduleOk returns a tuple with the EnableSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableSchedule

`func (o *MultiHostIntegrationsAggScheduleUpdate) SetEnableSchedule(v bool)`

SetEnableSchedule sets EnableSchedule field to given value.


### GetSourceIdList

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetSourceIdList() []string`

GetSourceIdList returns the SourceIdList field if non-nil, zero value otherwise.

### GetSourceIdListOk

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetSourceIdListOk() (*[]string, bool)`

GetSourceIdListOk returns a tuple with the SourceIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIdList

`func (o *MultiHostIntegrationsAggScheduleUpdate) SetSourceIdList(v []string)`

SetSourceIdList sets SourceIdList field to given value.


### GetCreated

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MultiHostIntegrationsAggScheduleUpdate) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *MultiHostIntegrationsAggScheduleUpdate) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *MultiHostIntegrationsAggScheduleUpdate) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *MultiHostIntegrationsAggScheduleUpdate) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *MultiHostIntegrationsAggScheduleUpdate) HasModified() bool`

HasModified returns a boolean if a field has been set.


