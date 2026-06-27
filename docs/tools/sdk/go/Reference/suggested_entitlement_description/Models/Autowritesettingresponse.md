---
id: v1-autowritesettingresponse
title: Autowritesettingresponse
pagination_label: Autowritesettingresponse
sidebar_label: Autowritesettingresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Autowritesettingresponse', 'V1Autowritesettingresponse'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/autowritesettingresponse
tags: ['SDK', 'Software Development Kit', 'Autowritesettingresponse', 'V1Autowritesettingresponse']
---

# Autowritesettingresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Whether auto-write is currently enabled for the tenant | [optional] [default to false]
**IncludedSourceIds** | Pointer to **[]string** | Source IDs in the allowlist. Empty array means not in allowlist mode. | [optional] 
**ExcludedSourceIds** | Pointer to **[]string** | Source IDs to exclude from auto-write. Always applied. | [optional] 
**CreatedAt** | Pointer to **SailPointTime** | When settings were first created | [optional] 
**UpdatedAt** | Pointer to **SailPointTime** | When settings were last modified | [optional] 

## Methods

### NewAutowritesettingresponse

`func NewAutowritesettingresponse() *Autowritesettingresponse`

NewAutowritesettingresponse instantiates a new Autowritesettingresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutowritesettingresponseWithDefaults

`func NewAutowritesettingresponseWithDefaults() *Autowritesettingresponse`

NewAutowritesettingresponseWithDefaults instantiates a new Autowritesettingresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *Autowritesettingresponse) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Autowritesettingresponse) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Autowritesettingresponse) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Autowritesettingresponse) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetIncludedSourceIds

`func (o *Autowritesettingresponse) GetIncludedSourceIds() []string`

GetIncludedSourceIds returns the IncludedSourceIds field if non-nil, zero value otherwise.

### GetIncludedSourceIdsOk

`func (o *Autowritesettingresponse) GetIncludedSourceIdsOk() (*[]string, bool)`

GetIncludedSourceIdsOk returns a tuple with the IncludedSourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedSourceIds

`func (o *Autowritesettingresponse) SetIncludedSourceIds(v []string)`

SetIncludedSourceIds sets IncludedSourceIds field to given value.

### HasIncludedSourceIds

`func (o *Autowritesettingresponse) HasIncludedSourceIds() bool`

HasIncludedSourceIds returns a boolean if a field has been set.

### SetIncludedSourceIdsNil

`func (o *Autowritesettingresponse) SetIncludedSourceIdsNil(b bool)`

 SetIncludedSourceIdsNil sets the value for IncludedSourceIds to be an explicit nil

### UnsetIncludedSourceIds
`func (o *Autowritesettingresponse) UnsetIncludedSourceIds()`

UnsetIncludedSourceIds ensures that no value is present for IncludedSourceIds, not even an explicit nil
### GetExcludedSourceIds

`func (o *Autowritesettingresponse) GetExcludedSourceIds() []string`

GetExcludedSourceIds returns the ExcludedSourceIds field if non-nil, zero value otherwise.

### GetExcludedSourceIdsOk

`func (o *Autowritesettingresponse) GetExcludedSourceIdsOk() (*[]string, bool)`

GetExcludedSourceIdsOk returns a tuple with the ExcludedSourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedSourceIds

`func (o *Autowritesettingresponse) SetExcludedSourceIds(v []string)`

SetExcludedSourceIds sets ExcludedSourceIds field to given value.

### HasExcludedSourceIds

`func (o *Autowritesettingresponse) HasExcludedSourceIds() bool`

HasExcludedSourceIds returns a boolean if a field has been set.

### SetExcludedSourceIdsNil

`func (o *Autowritesettingresponse) SetExcludedSourceIdsNil(b bool)`

 SetExcludedSourceIdsNil sets the value for ExcludedSourceIds to be an explicit nil

### UnsetExcludedSourceIds
`func (o *Autowritesettingresponse) UnsetExcludedSourceIds()`

UnsetExcludedSourceIds ensures that no value is present for ExcludedSourceIds, not even an explicit nil
### GetCreatedAt

`func (o *Autowritesettingresponse) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Autowritesettingresponse) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Autowritesettingresponse) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Autowritesettingresponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Autowritesettingresponse) GetUpdatedAt() SailPointTime`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Autowritesettingresponse) GetUpdatedAtOk() (*SailPointTime, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Autowritesettingresponse) SetUpdatedAt(v SailPointTime)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Autowritesettingresponse) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


