---
id: v2024-sed-assignment
title: SedAssignment
pagination_label: SedAssignment
sidebar_label: SedAssignment
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SedAssignment', 'V2024SedAssignment'] 
slug: /tools/sdk/go/v2024/models/sed-assignment
tags: ['SDK', 'Software Development Kit', 'SedAssignment', 'V2024SedAssignment']
---

# SedAssignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | Pointer to [**SedAssignee**](sed-assignee) |  | [optional] 
**Items** | Pointer to **[]string** | List of SED id's | [optional] 

## Methods

### NewSedAssignment

`func NewSedAssignment() *SedAssignment`

NewSedAssignment instantiates a new SedAssignment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedAssignmentWithDefaults

`func NewSedAssignmentWithDefaults() *SedAssignment`

NewSedAssignmentWithDefaults instantiates a new SedAssignment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssignee

`func (o *SedAssignment) GetAssignee() SedAssignee`

GetAssignee returns the Assignee field if non-nil, zero value otherwise.

### GetAssigneeOk

`func (o *SedAssignment) GetAssigneeOk() (*SedAssignee, bool)`

GetAssigneeOk returns a tuple with the Assignee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignee

`func (o *SedAssignment) SetAssignee(v SedAssignee)`

SetAssignee sets Assignee field to given value.

### HasAssignee

`func (o *SedAssignment) HasAssignee() bool`

HasAssignee returns a boolean if a field has been set.

### GetItems

`func (o *SedAssignment) GetItems() []string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *SedAssignment) GetItemsOk() (*[]string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *SedAssignment) SetItems(v []string)`

SetItems sets Items field to given value.

### HasItems

`func (o *SedAssignment) HasItems() bool`

HasItems returns a boolean if a field has been set.


