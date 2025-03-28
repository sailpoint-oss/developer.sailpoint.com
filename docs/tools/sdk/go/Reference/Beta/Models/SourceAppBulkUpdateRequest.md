---
id: beta-source-app-bulk-update-request
title: SourceAppBulkUpdateRequest
pagination_label: SourceAppBulkUpdateRequest
sidebar_label: SourceAppBulkUpdateRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceAppBulkUpdateRequest', 'BetaSourceAppBulkUpdateRequest'] 
slug: /tools/sdk/go/beta/models/source-app-bulk-update-request
tags: ['SDK', 'Software Development Kit', 'SourceAppBulkUpdateRequest', 'BetaSourceAppBulkUpdateRequest']
---

# SourceAppBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppIds** | **[]string** | List of source app ids to update | 
**JsonPatch** | [**[]JsonPatchOperation**](json-patch-operation) | The JSONPatch payload used to update the source app. | 

## Methods

### NewSourceAppBulkUpdateRequest

`func NewSourceAppBulkUpdateRequest(appIds []string, jsonPatch []JsonPatchOperation, ) *SourceAppBulkUpdateRequest`

NewSourceAppBulkUpdateRequest instantiates a new SourceAppBulkUpdateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceAppBulkUpdateRequestWithDefaults

`func NewSourceAppBulkUpdateRequestWithDefaults() *SourceAppBulkUpdateRequest`

NewSourceAppBulkUpdateRequestWithDefaults instantiates a new SourceAppBulkUpdateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppIds

`func (o *SourceAppBulkUpdateRequest) GetAppIds() []string`

GetAppIds returns the AppIds field if non-nil, zero value otherwise.

### GetAppIdsOk

`func (o *SourceAppBulkUpdateRequest) GetAppIdsOk() (*[]string, bool)`

GetAppIdsOk returns a tuple with the AppIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppIds

`func (o *SourceAppBulkUpdateRequest) SetAppIds(v []string)`

SetAppIds sets AppIds field to given value.


### GetJsonPatch

`func (o *SourceAppBulkUpdateRequest) GetJsonPatch() []JsonPatchOperation`

GetJsonPatch returns the JsonPatch field if non-nil, zero value otherwise.

### GetJsonPatchOk

`func (o *SourceAppBulkUpdateRequest) GetJsonPatchOk() (*[]JsonPatchOperation, bool)`

GetJsonPatchOk returns a tuple with the JsonPatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJsonPatch

`func (o *SourceAppBulkUpdateRequest) SetJsonPatch(v []JsonPatchOperation)`

SetJsonPatch sets JsonPatch field to given value.



