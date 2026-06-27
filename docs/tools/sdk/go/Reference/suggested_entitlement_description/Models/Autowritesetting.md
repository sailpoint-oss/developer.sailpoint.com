---
id: v1-autowritesetting
title: Autowritesetting
pagination_label: Autowritesetting
sidebar_label: Autowritesetting
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Autowritesetting', 'V1Autowritesetting'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/autowritesetting
tags: ['SDK', 'Software Development Kit', 'Autowritesetting', 'V1Autowritesetting']
---

# Autowritesetting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Whether auto-write is currently enabled for the tenant | [optional] [default to false]
**IncludedSourceIds** | Pointer to **[]string** | Source IDs in the allowlist. Empty array means not in allowlist mode. | [optional] 
**ExcludedSourceIds** | Pointer to **[]string** | Source IDs to exclude from auto-write. Always applied. | [optional] 

## Methods

### NewAutowritesetting

`func NewAutowritesetting() *Autowritesetting`

NewAutowritesetting instantiates a new Autowritesetting object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutowritesettingWithDefaults

`func NewAutowritesettingWithDefaults() *Autowritesetting`

NewAutowritesettingWithDefaults instantiates a new Autowritesetting object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *Autowritesetting) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Autowritesetting) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Autowritesetting) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Autowritesetting) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetIncludedSourceIds

`func (o *Autowritesetting) GetIncludedSourceIds() []string`

GetIncludedSourceIds returns the IncludedSourceIds field if non-nil, zero value otherwise.

### GetIncludedSourceIdsOk

`func (o *Autowritesetting) GetIncludedSourceIdsOk() (*[]string, bool)`

GetIncludedSourceIdsOk returns a tuple with the IncludedSourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedSourceIds

`func (o *Autowritesetting) SetIncludedSourceIds(v []string)`

SetIncludedSourceIds sets IncludedSourceIds field to given value.

### HasIncludedSourceIds

`func (o *Autowritesetting) HasIncludedSourceIds() bool`

HasIncludedSourceIds returns a boolean if a field has been set.

### SetIncludedSourceIdsNil

`func (o *Autowritesetting) SetIncludedSourceIdsNil(b bool)`

 SetIncludedSourceIdsNil sets the value for IncludedSourceIds to be an explicit nil

### UnsetIncludedSourceIds
`func (o *Autowritesetting) UnsetIncludedSourceIds()`

UnsetIncludedSourceIds ensures that no value is present for IncludedSourceIds, not even an explicit nil
### GetExcludedSourceIds

`func (o *Autowritesetting) GetExcludedSourceIds() []string`

GetExcludedSourceIds returns the ExcludedSourceIds field if non-nil, zero value otherwise.

### GetExcludedSourceIdsOk

`func (o *Autowritesetting) GetExcludedSourceIdsOk() (*[]string, bool)`

GetExcludedSourceIdsOk returns a tuple with the ExcludedSourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedSourceIds

`func (o *Autowritesetting) SetExcludedSourceIds(v []string)`

SetExcludedSourceIds sets ExcludedSourceIds field to given value.

### HasExcludedSourceIds

`func (o *Autowritesetting) HasExcludedSourceIds() bool`

HasExcludedSourceIds returns a boolean if a field has been set.

### SetExcludedSourceIdsNil

`func (o *Autowritesetting) SetExcludedSourceIdsNil(b bool)`

 SetExcludedSourceIdsNil sets the value for ExcludedSourceIds to be an explicit nil

### UnsetExcludedSourceIds
`func (o *Autowritesetting) UnsetExcludedSourceIds()`

UnsetExcludedSourceIds ensures that no value is present for ExcludedSourceIds, not even an explicit nil

