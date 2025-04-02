---
id: workgroup-bulk-delete-request
title: WorkgroupBulkDeleteRequest
pagination_label: WorkgroupBulkDeleteRequest
sidebar_label: WorkgroupBulkDeleteRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkgroupBulkDeleteRequest', 'WorkgroupBulkDeleteRequest'] 
slug: /tools/sdk/go//models/workgroup-bulk-delete-request
tags: ['SDK', 'Software Development Kit', 'WorkgroupBulkDeleteRequest', 'WorkgroupBulkDeleteRequest']
---

# WorkgroupBulkDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | Pointer to **[]string** | List of IDs of Governance Groups to be deleted. | [optional] 

## Methods

### NewWorkgroupBulkDeleteRequest

`func NewWorkgroupBulkDeleteRequest() *WorkgroupBulkDeleteRequest`

NewWorkgroupBulkDeleteRequest instantiates a new WorkgroupBulkDeleteRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkgroupBulkDeleteRequestWithDefaults

`func NewWorkgroupBulkDeleteRequestWithDefaults() *WorkgroupBulkDeleteRequest`

NewWorkgroupBulkDeleteRequestWithDefaults instantiates a new WorkgroupBulkDeleteRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *WorkgroupBulkDeleteRequest) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *WorkgroupBulkDeleteRequest) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *WorkgroupBulkDeleteRequest) SetIds(v []string)`

SetIds sets Ids field to given value.

### HasIds

`func (o *WorkgroupBulkDeleteRequest) HasIds() bool`

HasIds returns a boolean if a field has been set.


