---
id: v2026-mis-bulk-update-request
title: MisBulkUpdateRequest
pagination_label: MisBulkUpdateRequest
sidebar_label: MisBulkUpdateRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MisBulkUpdateRequest', 'V2026MisBulkUpdateRequest'] 
slug: /tools/sdk/go/v2026/models/mis-bulk-update-request
tags: ['SDK', 'Software Development Kit', 'MisBulkUpdateRequest', 'V2026MisBulkUpdateRequest']
---

# MisBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]string** | Machine identity or machine account IDs to update. | 
**JsonPatch** | [**[]JsonPatchOperation**](json-patch-operation) | JSON Patch operations to apply to each ID in the request (RFC 6902). | 

## Methods

### NewMisBulkUpdateRequest

`func NewMisBulkUpdateRequest(ids []string, jsonPatch []JsonPatchOperation, ) *MisBulkUpdateRequest`

NewMisBulkUpdateRequest instantiates a new MisBulkUpdateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMisBulkUpdateRequestWithDefaults

`func NewMisBulkUpdateRequestWithDefaults() *MisBulkUpdateRequest`

NewMisBulkUpdateRequestWithDefaults instantiates a new MisBulkUpdateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *MisBulkUpdateRequest) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *MisBulkUpdateRequest) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *MisBulkUpdateRequest) SetIds(v []string)`

SetIds sets Ids field to given value.


### GetJsonPatch

`func (o *MisBulkUpdateRequest) GetJsonPatch() []JsonPatchOperation`

GetJsonPatch returns the JsonPatch field if non-nil, zero value otherwise.

### GetJsonPatchOk

`func (o *MisBulkUpdateRequest) GetJsonPatchOk() (*[]JsonPatchOperation, bool)`

GetJsonPatchOk returns a tuple with the JsonPatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJsonPatch

`func (o *MisBulkUpdateRequest) SetJsonPatch(v []JsonPatchOperation)`

SetJsonPatch sets JsonPatch field to given value.



