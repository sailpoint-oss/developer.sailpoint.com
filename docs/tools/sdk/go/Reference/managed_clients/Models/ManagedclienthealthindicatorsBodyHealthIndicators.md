---
id: v1-managedclienthealthindicators-body-health-indicators
title: ManagedclienthealthindicatorsBodyHealthIndicators
pagination_label: ManagedclienthealthindicatorsBodyHealthIndicators
sidebar_label: ManagedclienthealthindicatorsBodyHealthIndicators
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedclienthealthindicatorsBodyHealthIndicators', 'V1ManagedclienthealthindicatorsBodyHealthIndicators'] 
slug: /tools/sdk/go/managedclients/models/managedclienthealthindicators-body-health-indicators
tags: ['SDK', 'Software Development Kit', 'ManagedclienthealthindicatorsBodyHealthIndicators', 'V1ManagedclienthealthindicatorsBodyHealthIndicators']
---

# ManagedclienthealthindicatorsBodyHealthIndicators

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Container** | Pointer to [**Healthindicatorcategory**](healthindicatorcategory) |  | [optional] 
**Memory** | Pointer to [**Healthindicatorcategory**](healthindicatorcategory) |  | [optional] 
**Cpu** | Pointer to [**Healthindicatorcategory**](healthindicatorcategory) |  | [optional] 

## Methods

### NewManagedclienthealthindicatorsBodyHealthIndicators

`func NewManagedclienthealthindicatorsBodyHealthIndicators() *ManagedclienthealthindicatorsBodyHealthIndicators`

NewManagedclienthealthindicatorsBodyHealthIndicators instantiates a new ManagedclienthealthindicatorsBodyHealthIndicators object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedclienthealthindicatorsBodyHealthIndicatorsWithDefaults

`func NewManagedclienthealthindicatorsBodyHealthIndicatorsWithDefaults() *ManagedclienthealthindicatorsBodyHealthIndicators`

NewManagedclienthealthindicatorsBodyHealthIndicatorsWithDefaults instantiates a new ManagedclienthealthindicatorsBodyHealthIndicators object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContainer

`func (o *ManagedclienthealthindicatorsBodyHealthIndicators) GetContainer() Healthindicatorcategory`

GetContainer returns the Container field if non-nil, zero value otherwise.

### GetContainerOk

`func (o *ManagedclienthealthindicatorsBodyHealthIndicators) GetContainerOk() (*Healthindicatorcategory, bool)`

GetContainerOk returns a tuple with the Container field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainer

`func (o *ManagedclienthealthindicatorsBodyHealthIndicators) SetContainer(v Healthindicatorcategory)`

SetContainer sets Container field to given value.

### HasContainer

`func (o *ManagedclienthealthindicatorsBodyHealthIndicators) HasContainer() bool`

HasContainer returns a boolean if a field has been set.

### GetMemory

`func (o *ManagedclienthealthindicatorsBodyHealthIndicators) GetMemory() Healthindicatorcategory`

GetMemory returns the Memory field if non-nil, zero value otherwise.

### GetMemoryOk

`func (o *ManagedclienthealthindicatorsBodyHealthIndicators) GetMemoryOk() (*Healthindicatorcategory, bool)`

GetMemoryOk returns a tuple with the Memory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemory

`func (o *ManagedclienthealthindicatorsBodyHealthIndicators) SetMemory(v Healthindicatorcategory)`

SetMemory sets Memory field to given value.

### HasMemory

`func (o *ManagedclienthealthindicatorsBodyHealthIndicators) HasMemory() bool`

HasMemory returns a boolean if a field has been set.

### GetCpu

`func (o *ManagedclienthealthindicatorsBodyHealthIndicators) GetCpu() Healthindicatorcategory`

GetCpu returns the Cpu field if non-nil, zero value otherwise.

### GetCpuOk

`func (o *ManagedclienthealthindicatorsBodyHealthIndicators) GetCpuOk() (*Healthindicatorcategory, bool)`

GetCpuOk returns a tuple with the Cpu field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCpu

`func (o *ManagedclienthealthindicatorsBodyHealthIndicators) SetCpu(v Healthindicatorcategory)`

SetCpu sets Cpu field to given value.

### HasCpu

`func (o *ManagedclienthealthindicatorsBodyHealthIndicators) HasCpu() bool`

HasCpu returns a boolean if a field has been set.


