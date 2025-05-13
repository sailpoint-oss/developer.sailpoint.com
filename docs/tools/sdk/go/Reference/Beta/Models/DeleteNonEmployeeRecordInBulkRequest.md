---
id: beta-delete-non-employee-record-in-bulk-request
title: DeleteNonEmployeeRecordInBulkRequest
pagination_label: DeleteNonEmployeeRecordInBulkRequest
sidebar_label: DeleteNonEmployeeRecordInBulkRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DeleteNonEmployeeRecordInBulkRequest', 'BetaDeleteNonEmployeeRecordInBulkRequest'] 
slug: /tools/sdk/go/beta/models/delete-non-employee-record-in-bulk-request
tags: ['SDK', 'Software Development Kit', 'DeleteNonEmployeeRecordInBulkRequest', 'BetaDeleteNonEmployeeRecordInBulkRequest']
---

# DeleteNonEmployeeRecordInBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]string** | List of non-employee ids. | 

## Methods

### NewDeleteNonEmployeeRecordInBulkRequest

`func NewDeleteNonEmployeeRecordInBulkRequest(ids []string, ) *DeleteNonEmployeeRecordInBulkRequest`

NewDeleteNonEmployeeRecordInBulkRequest instantiates a new DeleteNonEmployeeRecordInBulkRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteNonEmployeeRecordInBulkRequestWithDefaults

`func NewDeleteNonEmployeeRecordInBulkRequestWithDefaults() *DeleteNonEmployeeRecordInBulkRequest`

NewDeleteNonEmployeeRecordInBulkRequestWithDefaults instantiates a new DeleteNonEmployeeRecordInBulkRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *DeleteNonEmployeeRecordInBulkRequest) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *DeleteNonEmployeeRecordInBulkRequest) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *DeleteNonEmployeeRecordInBulkRequest) SetIds(v []string)`

SetIds sets Ids field to given value.



