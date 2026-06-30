---
id: v1-sedassignment
title: Sedassignment
pagination_label: Sedassignment
sidebar_label: Sedassignment
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sedassignment', 'V1Sedassignment'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/sedassignment
tags: ['SDK', 'Software Development Kit', 'Sedassignment', 'V1Sedassignment']
---

# Sedassignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | Pointer to [**Sedassignee**](sedassignee) |  | [optional] 
**Items** | Pointer to **[]string** | List of SED id's | [optional] 

## Methods

### NewSedassignment

`func NewSedassignment() *Sedassignment`

NewSedassignment instantiates a new Sedassignment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedassignmentWithDefaults

`func NewSedassignmentWithDefaults() *Sedassignment`

NewSedassignmentWithDefaults instantiates a new Sedassignment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssignee

`func (o *Sedassignment) GetAssignee() Sedassignee`

GetAssignee returns the Assignee field if non-nil, zero value otherwise.

### GetAssigneeOk

`func (o *Sedassignment) GetAssigneeOk() (*Sedassignee, bool)`

GetAssigneeOk returns a tuple with the Assignee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignee

`func (o *Sedassignment) SetAssignee(v Sedassignee)`

SetAssignee sets Assignee field to given value.

### HasAssignee

`func (o *Sedassignment) HasAssignee() bool`

HasAssignee returns a boolean if a field has been set.

### GetItems

`func (o *Sedassignment) GetItems() []string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *Sedassignment) GetItemsOk() (*[]string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *Sedassignment) SetItems(v []string)`

SetItems sets Items field to given value.

### HasItems

`func (o *Sedassignment) HasItems() bool`

HasItems returns a boolean if a field has been set.


