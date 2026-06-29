---
id: v1-workitemssummary
title: Workitemssummary
pagination_label: Workitemssummary
sidebar_label: Workitemssummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workitemssummary', 'V1Workitemssummary'] 
slug: /tools/sdk/go/workitems/models/workitemssummary
tags: ['SDK', 'Software Development Kit', 'Workitemssummary', 'V1Workitemssummary']
---

# Workitemssummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Open** | Pointer to **int32** | The count of open work items | [optional] 
**Completed** | Pointer to **int32** | The count of completed work items | [optional] 
**Total** | Pointer to **int32** | The count of total work items | [optional] 

## Methods

### NewWorkitemssummary

`func NewWorkitemssummary() *Workitemssummary`

NewWorkitemssummary instantiates a new Workitemssummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkitemssummaryWithDefaults

`func NewWorkitemssummaryWithDefaults() *Workitemssummary`

NewWorkitemssummaryWithDefaults instantiates a new Workitemssummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOpen

`func (o *Workitemssummary) GetOpen() int32`

GetOpen returns the Open field if non-nil, zero value otherwise.

### GetOpenOk

`func (o *Workitemssummary) GetOpenOk() (*int32, bool)`

GetOpenOk returns a tuple with the Open field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpen

`func (o *Workitemssummary) SetOpen(v int32)`

SetOpen sets Open field to given value.

### HasOpen

`func (o *Workitemssummary) HasOpen() bool`

HasOpen returns a boolean if a field has been set.

### GetCompleted

`func (o *Workitemssummary) GetCompleted() int32`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Workitemssummary) GetCompletedOk() (*int32, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Workitemssummary) SetCompleted(v int32)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Workitemssummary) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetTotal

`func (o *Workitemssummary) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *Workitemssummary) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *Workitemssummary) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *Workitemssummary) HasTotal() bool`

HasTotal returns a boolean if a field has been set.


