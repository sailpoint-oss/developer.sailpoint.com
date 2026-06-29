---
id: v1-delete-non-employee-records-in-bulk-v1-request
title: DeleteNonEmployeeRecordsInBulkV1Request
pagination_label: DeleteNonEmployeeRecordsInBulkV1Request
sidebar_label: DeleteNonEmployeeRecordsInBulkV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DeleteNonEmployeeRecordsInBulkV1Request', 'V1DeleteNonEmployeeRecordsInBulkV1Request'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/delete-non-employee-records-in-bulk-v1-request
tags: ['SDK', 'Software Development Kit', 'DeleteNonEmployeeRecordsInBulkV1Request', 'V1DeleteNonEmployeeRecordsInBulkV1Request']
---

# DeleteNonEmployeeRecordsInBulkV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]string** | List of non-employee ids. | 

## Methods

### NewDeleteNonEmployeeRecordsInBulkV1Request

`func NewDeleteNonEmployeeRecordsInBulkV1Request(ids []string, ) *DeleteNonEmployeeRecordsInBulkV1Request`

NewDeleteNonEmployeeRecordsInBulkV1Request instantiates a new DeleteNonEmployeeRecordsInBulkV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteNonEmployeeRecordsInBulkV1RequestWithDefaults

`func NewDeleteNonEmployeeRecordsInBulkV1RequestWithDefaults() *DeleteNonEmployeeRecordsInBulkV1Request`

NewDeleteNonEmployeeRecordsInBulkV1RequestWithDefaults instantiates a new DeleteNonEmployeeRecordsInBulkV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *DeleteNonEmployeeRecordsInBulkV1Request) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *DeleteNonEmployeeRecordsInBulkV1Request) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *DeleteNonEmployeeRecordsInBulkV1Request) SetIds(v []string)`

SetIds sets Ids field to given value.



