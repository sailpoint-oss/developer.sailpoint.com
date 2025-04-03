---
id: v2025-lookup-step
title: LookupStep
pagination_label: LookupStep
sidebar_label: LookupStep
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LookupStep', 'V2025LookupStep'] 
slug: /tools/sdk/go/v2025/models/lookup-step
tags: ['SDK', 'Software Development Kit', 'LookupStep', 'V2025LookupStep']
---

# LookupStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReassignedToId** | Pointer to **string** | The ID of the Identity who work is reassigned to | [optional] 
**ReassignedFromId** | Pointer to **string** | The ID of the Identity who work is reassigned from | [optional] 
**ReassignmentType** | Pointer to [**ReassignmentTypeEnum**](reassignment-type-enum) |  | [optional] 

## Methods

### NewLookupStep

`func NewLookupStep() *LookupStep`

NewLookupStep instantiates a new LookupStep object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLookupStepWithDefaults

`func NewLookupStepWithDefaults() *LookupStep`

NewLookupStepWithDefaults instantiates a new LookupStep object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReassignedToId

`func (o *LookupStep) GetReassignedToId() string`

GetReassignedToId returns the ReassignedToId field if non-nil, zero value otherwise.

### GetReassignedToIdOk

`func (o *LookupStep) GetReassignedToIdOk() (*string, bool)`

GetReassignedToIdOk returns a tuple with the ReassignedToId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignedToId

`func (o *LookupStep) SetReassignedToId(v string)`

SetReassignedToId sets ReassignedToId field to given value.

### HasReassignedToId

`func (o *LookupStep) HasReassignedToId() bool`

HasReassignedToId returns a boolean if a field has been set.

### GetReassignedFromId

`func (o *LookupStep) GetReassignedFromId() string`

GetReassignedFromId returns the ReassignedFromId field if non-nil, zero value otherwise.

### GetReassignedFromIdOk

`func (o *LookupStep) GetReassignedFromIdOk() (*string, bool)`

GetReassignedFromIdOk returns a tuple with the ReassignedFromId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignedFromId

`func (o *LookupStep) SetReassignedFromId(v string)`

SetReassignedFromId sets ReassignedFromId field to given value.

### HasReassignedFromId

`func (o *LookupStep) HasReassignedFromId() bool`

HasReassignedFromId returns a boolean if a field has been set.

### GetReassignmentType

`func (o *LookupStep) GetReassignmentType() ReassignmentTypeEnum`

GetReassignmentType returns the ReassignmentType field if non-nil, zero value otherwise.

### GetReassignmentTypeOk

`func (o *LookupStep) GetReassignmentTypeOk() (*ReassignmentTypeEnum, bool)`

GetReassignmentTypeOk returns a tuple with the ReassignmentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentType

`func (o *LookupStep) SetReassignmentType(v ReassignmentTypeEnum)`

SetReassignmentType sets ReassignmentType field to given value.

### HasReassignmentType

`func (o *LookupStep) HasReassignmentType() bool`

HasReassignmentType returns a boolean if a field has been set.


