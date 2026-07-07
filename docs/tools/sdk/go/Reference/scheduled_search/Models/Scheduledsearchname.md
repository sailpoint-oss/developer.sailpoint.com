---
id: v1-scheduledsearchname
title: Scheduledsearchname
pagination_label: Scheduledsearchname
sidebar_label: Scheduledsearchname
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Scheduledsearchname', 'V1Scheduledsearchname'] 
slug: /tools/sdk/go/scheduledsearch/models/scheduledsearchname
tags: ['SDK', 'Software Development Kit', 'Scheduledsearchname', 'V1Scheduledsearchname']
---

# Scheduledsearchname

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **NullableString** | The name of the scheduled search.  | [optional] 
**Description** | Pointer to **NullableString** | The description of the scheduled search.  | [optional] 

## Methods

### NewScheduledsearchname

`func NewScheduledsearchname() *Scheduledsearchname`

NewScheduledsearchname instantiates a new Scheduledsearchname object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledsearchnameWithDefaults

`func NewScheduledsearchnameWithDefaults() *Scheduledsearchname`

NewScheduledsearchnameWithDefaults instantiates a new Scheduledsearchname object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Scheduledsearchname) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Scheduledsearchname) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Scheduledsearchname) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Scheduledsearchname) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Scheduledsearchname) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Scheduledsearchname) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDescription

`func (o *Scheduledsearchname) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Scheduledsearchname) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Scheduledsearchname) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Scheduledsearchname) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Scheduledsearchname) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Scheduledsearchname) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil

