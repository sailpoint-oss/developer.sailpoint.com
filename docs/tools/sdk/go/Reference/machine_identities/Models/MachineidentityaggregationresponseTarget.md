---
id: v1-machineidentityaggregationresponse-target
title: MachineidentityaggregationresponseTarget
pagination_label: MachineidentityaggregationresponseTarget
sidebar_label: MachineidentityaggregationresponseTarget
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineidentityaggregationresponseTarget', 'V1MachineidentityaggregationresponseTarget'] 
slug: /tools/sdk/go/machineidentities/models/machineidentityaggregationresponse-target
tags: ['SDK', 'Software Development Kit', 'MachineidentityaggregationresponseTarget', 'V1MachineidentityaggregationresponseTarget']
---

# MachineidentityaggregationresponseTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**Dtotype**](dtotype) |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewMachineidentityaggregationresponseTarget

`func NewMachineidentityaggregationresponseTarget() *MachineidentityaggregationresponseTarget`

NewMachineidentityaggregationresponseTarget instantiates a new MachineidentityaggregationresponseTarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityaggregationresponseTargetWithDefaults

`func NewMachineidentityaggregationresponseTargetWithDefaults() *MachineidentityaggregationresponseTarget`

NewMachineidentityaggregationresponseTargetWithDefaults instantiates a new MachineidentityaggregationresponseTarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *MachineidentityaggregationresponseTarget) GetType() Dtotype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MachineidentityaggregationresponseTarget) GetTypeOk() (*Dtotype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MachineidentityaggregationresponseTarget) SetType(v Dtotype)`

SetType sets Type field to given value.

### HasType

`func (o *MachineidentityaggregationresponseTarget) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *MachineidentityaggregationresponseTarget) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineidentityaggregationresponseTarget) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineidentityaggregationresponseTarget) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineidentityaggregationresponseTarget) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *MachineidentityaggregationresponseTarget) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineidentityaggregationresponseTarget) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineidentityaggregationresponseTarget) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MachineidentityaggregationresponseTarget) HasName() bool`

HasName returns a boolean if a field has been set.


