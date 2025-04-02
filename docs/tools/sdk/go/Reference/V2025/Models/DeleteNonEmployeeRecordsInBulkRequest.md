---
id: delete-non-employee-records-in-bulk-request
title: DeleteNonEmployeeRecordsInBulkRequest
pagination_label: DeleteNonEmployeeRecordsInBulkRequest
sidebar_label: DeleteNonEmployeeRecordsInBulkRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DeleteNonEmployeeRecordsInBulkRequest', 'DeleteNonEmployeeRecordsInBulkRequest'] 
slug: /tools/sdk/go//models/delete-non-employee-records-in-bulk-request
tags: ['SDK', 'Software Development Kit', 'DeleteNonEmployeeRecordsInBulkRequest', 'DeleteNonEmployeeRecordsInBulkRequest']
---

# DeleteNonEmployeeRecordsInBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]string** | List of non-employee ids. | 

## Methods

### NewDeleteNonEmployeeRecordsInBulkRequest

`func NewDeleteNonEmployeeRecordsInBulkRequest(ids []string, ) *DeleteNonEmployeeRecordsInBulkRequest`

NewDeleteNonEmployeeRecordsInBulkRequest instantiates a new DeleteNonEmployeeRecordsInBulkRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteNonEmployeeRecordsInBulkRequestWithDefaults

`func NewDeleteNonEmployeeRecordsInBulkRequestWithDefaults() *DeleteNonEmployeeRecordsInBulkRequest`

NewDeleteNonEmployeeRecordsInBulkRequestWithDefaults instantiates a new DeleteNonEmployeeRecordsInBulkRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *DeleteNonEmployeeRecordsInBulkRequest) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *DeleteNonEmployeeRecordsInBulkRequest) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *DeleteNonEmployeeRecordsInBulkRequest) SetIds(v []string)`

SetIds sets Ids field to given value.



