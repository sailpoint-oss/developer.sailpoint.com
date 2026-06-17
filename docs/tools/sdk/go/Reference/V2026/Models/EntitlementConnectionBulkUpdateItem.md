---
id: v2026-entitlement-connection-bulk-update-item
title: EntitlementConnectionBulkUpdateItem
pagination_label: EntitlementConnectionBulkUpdateItem
sidebar_label: EntitlementConnectionBulkUpdateItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementConnectionBulkUpdateItem', 'V2026EntitlementConnectionBulkUpdateItem'] 
slug: /tools/sdk/go/v2026/models/entitlement-connection-bulk-update-item
tags: ['SDK', 'Software Development Kit', 'EntitlementConnectionBulkUpdateItem', 'V2026EntitlementConnectionBulkUpdateItem']
---

# EntitlementConnectionBulkUpdateItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **string** | Connection ID to update. | 
**Type** | **string** | Target connection type. | 

## Methods

### NewEntitlementConnectionBulkUpdateItem

`func NewEntitlementConnectionBulkUpdateItem(connectionId string, type_ string, ) *EntitlementConnectionBulkUpdateItem`

NewEntitlementConnectionBulkUpdateItem instantiates a new EntitlementConnectionBulkUpdateItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementConnectionBulkUpdateItemWithDefaults

`func NewEntitlementConnectionBulkUpdateItemWithDefaults() *EntitlementConnectionBulkUpdateItem`

NewEntitlementConnectionBulkUpdateItemWithDefaults instantiates a new EntitlementConnectionBulkUpdateItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnectionId

`func (o *EntitlementConnectionBulkUpdateItem) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *EntitlementConnectionBulkUpdateItem) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *EntitlementConnectionBulkUpdateItem) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.


### GetType

`func (o *EntitlementConnectionBulkUpdateItem) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntitlementConnectionBulkUpdateItem) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntitlementConnectionBulkUpdateItem) SetType(v string)`

SetType sets Type field to given value.



