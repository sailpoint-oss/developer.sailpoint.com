---
id: v2025-machine-identity-aggregation-response-target
title: MachineIdentityAggregationResponseTarget
pagination_label: MachineIdentityAggregationResponseTarget
sidebar_label: MachineIdentityAggregationResponseTarget
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityAggregationResponseTarget', 'V2025MachineIdentityAggregationResponseTarget'] 
slug: /tools/sdk/go/v2025/models/machine-identity-aggregation-response-target
tags: ['SDK', 'Software Development Kit', 'MachineIdentityAggregationResponseTarget', 'V2025MachineIdentityAggregationResponseTarget']
---

# MachineIdentityAggregationResponseTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewMachineIdentityAggregationResponseTarget

`func NewMachineIdentityAggregationResponseTarget() *MachineIdentityAggregationResponseTarget`

NewMachineIdentityAggregationResponseTarget instantiates a new MachineIdentityAggregationResponseTarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityAggregationResponseTargetWithDefaults

`func NewMachineIdentityAggregationResponseTargetWithDefaults() *MachineIdentityAggregationResponseTarget`

NewMachineIdentityAggregationResponseTargetWithDefaults instantiates a new MachineIdentityAggregationResponseTarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *MachineIdentityAggregationResponseTarget) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MachineIdentityAggregationResponseTarget) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MachineIdentityAggregationResponseTarget) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *MachineIdentityAggregationResponseTarget) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *MachineIdentityAggregationResponseTarget) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineIdentityAggregationResponseTarget) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineIdentityAggregationResponseTarget) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineIdentityAggregationResponseTarget) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *MachineIdentityAggregationResponseTarget) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineIdentityAggregationResponseTarget) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineIdentityAggregationResponseTarget) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MachineIdentityAggregationResponseTarget) HasName() bool`

HasName returns a boolean if a field has been set.


