---
id: v2025-work-items-summary
title: WorkItemsSummary
pagination_label: WorkItemsSummary
sidebar_label: WorkItemsSummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkItemsSummary', 'V2025WorkItemsSummary'] 
slug: /tools/sdk/go/v2025/models/work-items-summary
tags: ['SDK', 'Software Development Kit', 'WorkItemsSummary', 'V2025WorkItemsSummary']
---

# WorkItemsSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Open** | Pointer to **int32** | The count of open work items | [optional] 
**Completed** | Pointer to **int32** | The count of completed work items | [optional] 
**Total** | Pointer to **int32** | The count of total work items | [optional] 

## Methods

### NewWorkItemsSummary

`func NewWorkItemsSummary() *WorkItemsSummary`

NewWorkItemsSummary instantiates a new WorkItemsSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkItemsSummaryWithDefaults

`func NewWorkItemsSummaryWithDefaults() *WorkItemsSummary`

NewWorkItemsSummaryWithDefaults instantiates a new WorkItemsSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOpen

`func (o *WorkItemsSummary) GetOpen() int32`

GetOpen returns the Open field if non-nil, zero value otherwise.

### GetOpenOk

`func (o *WorkItemsSummary) GetOpenOk() (*int32, bool)`

GetOpenOk returns a tuple with the Open field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpen

`func (o *WorkItemsSummary) SetOpen(v int32)`

SetOpen sets Open field to given value.

### HasOpen

`func (o *WorkItemsSummary) HasOpen() bool`

HasOpen returns a boolean if a field has been set.

### GetCompleted

`func (o *WorkItemsSummary) GetCompleted() int32`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *WorkItemsSummary) GetCompletedOk() (*int32, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *WorkItemsSummary) SetCompleted(v int32)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *WorkItemsSummary) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetTotal

`func (o *WorkItemsSummary) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *WorkItemsSummary) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *WorkItemsSummary) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *WorkItemsSummary) HasTotal() bool`

HasTotal returns a boolean if a field has been set.


