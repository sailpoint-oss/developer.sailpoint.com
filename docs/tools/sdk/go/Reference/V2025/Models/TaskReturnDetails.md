---
id: v2025-task-return-details
title: TaskReturnDetails
pagination_label: TaskReturnDetails
sidebar_label: TaskReturnDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaskReturnDetails', 'V2025TaskReturnDetails'] 
slug: /tools/sdk/go/v2025/models/task-return-details
tags: ['SDK', 'Software Development Kit', 'TaskReturnDetails', 'V2025TaskReturnDetails']
---

# TaskReturnDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Display name of the TaskReturnDetails | 
**AttributeName** | **string** | Attribute the TaskReturnDetails is for | 

## Methods

### NewTaskReturnDetails

`func NewTaskReturnDetails(name string, attributeName string, ) *TaskReturnDetails`

NewTaskReturnDetails instantiates a new TaskReturnDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskReturnDetailsWithDefaults

`func NewTaskReturnDetailsWithDefaults() *TaskReturnDetails`

NewTaskReturnDetailsWithDefaults instantiates a new TaskReturnDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *TaskReturnDetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TaskReturnDetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TaskReturnDetails) SetName(v string)`

SetName sets Name field to given value.


### GetAttributeName

`func (o *TaskReturnDetails) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *TaskReturnDetails) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *TaskReturnDetails) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.



