---
id: v1-lookupstep
title: Lookupstep
pagination_label: Lookupstep
sidebar_label: Lookupstep
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Lookupstep', 'V1Lookupstep'] 
slug: /tools/sdk/go/workreassignment/models/lookupstep
tags: ['SDK', 'Software Development Kit', 'Lookupstep', 'V1Lookupstep']
---

# Lookupstep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReassignedToId** | Pointer to **string** | The ID of the Identity who work is reassigned to | [optional] 
**ReassignedFromId** | Pointer to **string** | The ID of the Identity who work is reassigned from | [optional] 
**ReassignmentType** | Pointer to [**Reassignmenttypeenum**](reassignmenttypeenum) |  | [optional] 

## Methods

### NewLookupstep

`func NewLookupstep() *Lookupstep`

NewLookupstep instantiates a new Lookupstep object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLookupstepWithDefaults

`func NewLookupstepWithDefaults() *Lookupstep`

NewLookupstepWithDefaults instantiates a new Lookupstep object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReassignedToId

`func (o *Lookupstep) GetReassignedToId() string`

GetReassignedToId returns the ReassignedToId field if non-nil, zero value otherwise.

### GetReassignedToIdOk

`func (o *Lookupstep) GetReassignedToIdOk() (*string, bool)`

GetReassignedToIdOk returns a tuple with the ReassignedToId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignedToId

`func (o *Lookupstep) SetReassignedToId(v string)`

SetReassignedToId sets ReassignedToId field to given value.

### HasReassignedToId

`func (o *Lookupstep) HasReassignedToId() bool`

HasReassignedToId returns a boolean if a field has been set.

### GetReassignedFromId

`func (o *Lookupstep) GetReassignedFromId() string`

GetReassignedFromId returns the ReassignedFromId field if non-nil, zero value otherwise.

### GetReassignedFromIdOk

`func (o *Lookupstep) GetReassignedFromIdOk() (*string, bool)`

GetReassignedFromIdOk returns a tuple with the ReassignedFromId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignedFromId

`func (o *Lookupstep) SetReassignedFromId(v string)`

SetReassignedFromId sets ReassignedFromId field to given value.

### HasReassignedFromId

`func (o *Lookupstep) HasReassignedFromId() bool`

HasReassignedFromId returns a boolean if a field has been set.

### GetReassignmentType

`func (o *Lookupstep) GetReassignmentType() Reassignmenttypeenum`

GetReassignmentType returns the ReassignmentType field if non-nil, zero value otherwise.

### GetReassignmentTypeOk

`func (o *Lookupstep) GetReassignmentTypeOk() (*Reassignmenttypeenum, bool)`

GetReassignmentTypeOk returns a tuple with the ReassignmentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentType

`func (o *Lookupstep) SetReassignmentType(v Reassignmenttypeenum)`

SetReassignmentType sets ReassignmentType field to given value.

### HasReassignmentType

`func (o *Lookupstep) HasReassignmentType() bool`

HasReassignmentType returns a boolean if a field has been set.


