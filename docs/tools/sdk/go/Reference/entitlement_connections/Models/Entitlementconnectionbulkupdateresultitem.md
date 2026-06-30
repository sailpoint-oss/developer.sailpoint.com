---
id: v1-entitlementconnectionbulkupdateresultitem
title: Entitlementconnectionbulkupdateresultitem
pagination_label: Entitlementconnectionbulkupdateresultitem
sidebar_label: Entitlementconnectionbulkupdateresultitem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementconnectionbulkupdateresultitem', 'V1Entitlementconnectionbulkupdateresultitem'] 
slug: /tools/sdk/go/entitlementconnections/models/entitlementconnectionbulkupdateresultitem
tags: ['SDK', 'Software Development Kit', 'Entitlementconnectionbulkupdateresultitem', 'V1Entitlementconnectionbulkupdateresultitem']
---

# Entitlementconnectionbulkupdateresultitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | Pointer to **string** | Connection ID processed in this row. | [optional] 
**Type** | Pointer to **string** | Requested or resulting connection type for the row. | [optional] 
**Status** | Pointer to **int32** | Item-level result status code. | [optional] 
**Description** | Pointer to **string** | Item-level result message. | [optional] 

## Methods

### NewEntitlementconnectionbulkupdateresultitem

`func NewEntitlementconnectionbulkupdateresultitem() *Entitlementconnectionbulkupdateresultitem`

NewEntitlementconnectionbulkupdateresultitem instantiates a new Entitlementconnectionbulkupdateresultitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementconnectionbulkupdateresultitemWithDefaults

`func NewEntitlementconnectionbulkupdateresultitemWithDefaults() *Entitlementconnectionbulkupdateresultitem`

NewEntitlementconnectionbulkupdateresultitemWithDefaults instantiates a new Entitlementconnectionbulkupdateresultitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnectionId

`func (o *Entitlementconnectionbulkupdateresultitem) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *Entitlementconnectionbulkupdateresultitem) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *Entitlementconnectionbulkupdateresultitem) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.

### HasConnectionId

`func (o *Entitlementconnectionbulkupdateresultitem) HasConnectionId() bool`

HasConnectionId returns a boolean if a field has been set.

### GetType

`func (o *Entitlementconnectionbulkupdateresultitem) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Entitlementconnectionbulkupdateresultitem) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Entitlementconnectionbulkupdateresultitem) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Entitlementconnectionbulkupdateresultitem) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStatus

`func (o *Entitlementconnectionbulkupdateresultitem) GetStatus() int32`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Entitlementconnectionbulkupdateresultitem) GetStatusOk() (*int32, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Entitlementconnectionbulkupdateresultitem) SetStatus(v int32)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Entitlementconnectionbulkupdateresultitem) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetDescription

`func (o *Entitlementconnectionbulkupdateresultitem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Entitlementconnectionbulkupdateresultitem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Entitlementconnectionbulkupdateresultitem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Entitlementconnectionbulkupdateresultitem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


