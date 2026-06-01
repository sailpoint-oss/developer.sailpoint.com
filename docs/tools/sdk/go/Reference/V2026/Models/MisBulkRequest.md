---
id: v2026-mis-bulk-request
title: MisBulkRequest
pagination_label: MisBulkRequest
sidebar_label: MisBulkRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MisBulkRequest', 'V2026MisBulkRequest'] 
slug: /tools/sdk/go/v2026/models/mis-bulk-request
tags: ['SDK', 'Software Development Kit', 'MisBulkRequest', 'V2026MisBulkRequest']
---

# MisBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]string** | Machine identity or machine account IDs to include in the bulk operation. | 

## Methods

### NewMisBulkRequest

`func NewMisBulkRequest(ids []string, ) *MisBulkRequest`

NewMisBulkRequest instantiates a new MisBulkRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMisBulkRequestWithDefaults

`func NewMisBulkRequestWithDefaults() *MisBulkRequest`

NewMisBulkRequestWithDefaults instantiates a new MisBulkRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *MisBulkRequest) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *MisBulkRequest) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *MisBulkRequest) SetIds(v []string)`

SetIds sets Ids field to given value.



