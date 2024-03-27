---
id: entitlement-bulk-update-request
title: EntitlementBulkUpdateRequest
pagination_label: EntitlementBulkUpdateRequest
sidebar_label: EntitlementBulkUpdateRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'EntitlementBulkUpdateRequest'] 
slug: /tools/sdk/go/beta/models/entitlement-bulk-update-request
tags: ['SDK', 'Software Development Kit', 'EntitlementBulkUpdateRequest']
---

# EntitlementBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementIds** |  **[]string** | List of entitlement ids to update | 
**JsonPatch** |  [**[]JsonPatchOperation**](json-patch-operation) |  | 

## Methods

### NewEntitlementBulkUpdateRequest

`func NewEntitlementBulkUpdateRequest(entitlementIds []string, jsonPatch []JsonPatchOperation, ) *EntitlementBulkUpdateRequest`

NewEntitlementBulkUpdateRequest instantiates a new EntitlementBulkUpdateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementBulkUpdateRequestWithDefaults

`func NewEntitlementBulkUpdateRequestWithDefaults() *EntitlementBulkUpdateRequest`

NewEntitlementBulkUpdateRequestWithDefaults instantiates a new EntitlementBulkUpdateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlementIds

`func (o *EntitlementBulkUpdateRequest) GetEntitlementIds() []string`

GetEntitlementIds returns the EntitlementIds field if non-nil, zero value otherwise.

### GetEntitlementIdsOk

`func (o *EntitlementBulkUpdateRequest) GetEntitlementIdsOk() (*[]string, bool)`

GetEntitlementIdsOk returns a tuple with the EntitlementIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementIds

`func (o *EntitlementBulkUpdateRequest) SetEntitlementIds(v []string)`

SetEntitlementIds sets EntitlementIds field to given value.


### GetJsonPatch

`func (o *EntitlementBulkUpdateRequest) GetJsonPatch() []JsonPatchOperation`

GetJsonPatch returns the JsonPatch field if non-nil, zero value otherwise.

### GetJsonPatchOk

`func (o *EntitlementBulkUpdateRequest) GetJsonPatchOk() (*[]JsonPatchOperation, bool)`

GetJsonPatchOk returns a tuple with the JsonPatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJsonPatch

`func (o *EntitlementBulkUpdateRequest) SetJsonPatch(v []JsonPatchOperation)`

SetJsonPatch sets JsonPatch field to given value.



[[Back to top]](#) 


