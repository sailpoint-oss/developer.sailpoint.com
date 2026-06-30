---
id: v1-workgroupbulkdeleterequest
title: Workgroupbulkdeleterequest
pagination_label: Workgroupbulkdeleterequest
sidebar_label: Workgroupbulkdeleterequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workgroupbulkdeleterequest', 'V1Workgroupbulkdeleterequest'] 
slug: /tools/sdk/go/governancegroups/models/workgroupbulkdeleterequest
tags: ['SDK', 'Software Development Kit', 'Workgroupbulkdeleterequest', 'V1Workgroupbulkdeleterequest']
---

# Workgroupbulkdeleterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | Pointer to **[]string** | List of IDs of Governance Groups to be deleted. | [optional] 

## Methods

### NewWorkgroupbulkdeleterequest

`func NewWorkgroupbulkdeleterequest() *Workgroupbulkdeleterequest`

NewWorkgroupbulkdeleterequest instantiates a new Workgroupbulkdeleterequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkgroupbulkdeleterequestWithDefaults

`func NewWorkgroupbulkdeleterequestWithDefaults() *Workgroupbulkdeleterequest`

NewWorkgroupbulkdeleterequestWithDefaults instantiates a new Workgroupbulkdeleterequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *Workgroupbulkdeleterequest) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *Workgroupbulkdeleterequest) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *Workgroupbulkdeleterequest) SetIds(v []string)`

SetIds sets Ids field to given value.

### HasIds

`func (o *Workgroupbulkdeleterequest) HasIds() bool`

HasIds returns a boolean if a field has been set.


