---
id: v2025-managed-client-health-indicators-body-health-indicators
title: ManagedClientHealthIndicatorsBodyHealthIndicators
pagination_label: ManagedClientHealthIndicatorsBodyHealthIndicators
sidebar_label: ManagedClientHealthIndicatorsBodyHealthIndicators
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClientHealthIndicatorsBodyHealthIndicators', 'V2025ManagedClientHealthIndicatorsBodyHealthIndicators'] 
slug: /tools/sdk/go/v2025/models/managed-client-health-indicators-body-health-indicators
tags: ['SDK', 'Software Development Kit', 'ManagedClientHealthIndicatorsBodyHealthIndicators', 'V2025ManagedClientHealthIndicatorsBodyHealthIndicators']
---

# ManagedClientHealthIndicatorsBodyHealthIndicators

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Container** | Pointer to [**HealthIndicatorCategory**](health-indicator-category) |  | [optional] 
**Memory** | Pointer to [**HealthIndicatorCategory**](health-indicator-category) |  | [optional] 
**Cpu** | Pointer to [**HealthIndicatorCategory**](health-indicator-category) |  | [optional] 

## Methods

### NewManagedClientHealthIndicatorsBodyHealthIndicators

`func NewManagedClientHealthIndicatorsBodyHealthIndicators() *ManagedClientHealthIndicatorsBodyHealthIndicators`

NewManagedClientHealthIndicatorsBodyHealthIndicators instantiates a new ManagedClientHealthIndicatorsBodyHealthIndicators object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClientHealthIndicatorsBodyHealthIndicatorsWithDefaults

`func NewManagedClientHealthIndicatorsBodyHealthIndicatorsWithDefaults() *ManagedClientHealthIndicatorsBodyHealthIndicators`

NewManagedClientHealthIndicatorsBodyHealthIndicatorsWithDefaults instantiates a new ManagedClientHealthIndicatorsBodyHealthIndicators object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContainer

`func (o *ManagedClientHealthIndicatorsBodyHealthIndicators) GetContainer() HealthIndicatorCategory`

GetContainer returns the Container field if non-nil, zero value otherwise.

### GetContainerOk

`func (o *ManagedClientHealthIndicatorsBodyHealthIndicators) GetContainerOk() (*HealthIndicatorCategory, bool)`

GetContainerOk returns a tuple with the Container field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainer

`func (o *ManagedClientHealthIndicatorsBodyHealthIndicators) SetContainer(v HealthIndicatorCategory)`

SetContainer sets Container field to given value.

### HasContainer

`func (o *ManagedClientHealthIndicatorsBodyHealthIndicators) HasContainer() bool`

HasContainer returns a boolean if a field has been set.

### GetMemory

`func (o *ManagedClientHealthIndicatorsBodyHealthIndicators) GetMemory() HealthIndicatorCategory`

GetMemory returns the Memory field if non-nil, zero value otherwise.

### GetMemoryOk

`func (o *ManagedClientHealthIndicatorsBodyHealthIndicators) GetMemoryOk() (*HealthIndicatorCategory, bool)`

GetMemoryOk returns a tuple with the Memory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemory

`func (o *ManagedClientHealthIndicatorsBodyHealthIndicators) SetMemory(v HealthIndicatorCategory)`

SetMemory sets Memory field to given value.

### HasMemory

`func (o *ManagedClientHealthIndicatorsBodyHealthIndicators) HasMemory() bool`

HasMemory returns a boolean if a field has been set.

### GetCpu

`func (o *ManagedClientHealthIndicatorsBodyHealthIndicators) GetCpu() HealthIndicatorCategory`

GetCpu returns the Cpu field if non-nil, zero value otherwise.

### GetCpuOk

`func (o *ManagedClientHealthIndicatorsBodyHealthIndicators) GetCpuOk() (*HealthIndicatorCategory, bool)`

GetCpuOk returns a tuple with the Cpu field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCpu

`func (o *ManagedClientHealthIndicatorsBodyHealthIndicators) SetCpu(v HealthIndicatorCategory)`

SetCpu sets Cpu field to given value.

### HasCpu

`func (o *ManagedClientHealthIndicatorsBodyHealthIndicators) HasCpu() bool`

HasCpu returns a boolean if a field has been set.


