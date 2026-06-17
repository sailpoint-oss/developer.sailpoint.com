---
id: v2026-entitlement-connection-bulk-update-result-item
title: EntitlementConnectionBulkUpdateResultItem
pagination_label: EntitlementConnectionBulkUpdateResultItem
sidebar_label: EntitlementConnectionBulkUpdateResultItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementConnectionBulkUpdateResultItem', 'V2026EntitlementConnectionBulkUpdateResultItem'] 
slug: /tools/sdk/go/v2026/models/entitlement-connection-bulk-update-result-item
tags: ['SDK', 'Software Development Kit', 'EntitlementConnectionBulkUpdateResultItem', 'V2026EntitlementConnectionBulkUpdateResultItem']
---

# EntitlementConnectionBulkUpdateResultItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | Pointer to **string** | Connection ID processed in this row. | [optional] 
**Type** | Pointer to **string** | Requested or resulting connection type for the row. | [optional] 
**Status** | Pointer to **int32** | Item-level result status code. | [optional] 
**Description** | Pointer to **string** | Item-level result message. | [optional] 

## Methods

### NewEntitlementConnectionBulkUpdateResultItem

`func NewEntitlementConnectionBulkUpdateResultItem() *EntitlementConnectionBulkUpdateResultItem`

NewEntitlementConnectionBulkUpdateResultItem instantiates a new EntitlementConnectionBulkUpdateResultItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementConnectionBulkUpdateResultItemWithDefaults

`func NewEntitlementConnectionBulkUpdateResultItemWithDefaults() *EntitlementConnectionBulkUpdateResultItem`

NewEntitlementConnectionBulkUpdateResultItemWithDefaults instantiates a new EntitlementConnectionBulkUpdateResultItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnectionId

`func (o *EntitlementConnectionBulkUpdateResultItem) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *EntitlementConnectionBulkUpdateResultItem) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *EntitlementConnectionBulkUpdateResultItem) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.

### HasConnectionId

`func (o *EntitlementConnectionBulkUpdateResultItem) HasConnectionId() bool`

HasConnectionId returns a boolean if a field has been set.

### GetType

`func (o *EntitlementConnectionBulkUpdateResultItem) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntitlementConnectionBulkUpdateResultItem) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntitlementConnectionBulkUpdateResultItem) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntitlementConnectionBulkUpdateResultItem) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStatus

`func (o *EntitlementConnectionBulkUpdateResultItem) GetStatus() int32`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *EntitlementConnectionBulkUpdateResultItem) GetStatusOk() (*int32, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *EntitlementConnectionBulkUpdateResultItem) SetStatus(v int32)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *EntitlementConnectionBulkUpdateResultItem) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetDescription

`func (o *EntitlementConnectionBulkUpdateResultItem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EntitlementConnectionBulkUpdateResultItem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EntitlementConnectionBulkUpdateResultItem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EntitlementConnectionBulkUpdateResultItem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


