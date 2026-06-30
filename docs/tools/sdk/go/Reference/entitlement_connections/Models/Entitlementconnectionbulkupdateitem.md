---
id: v1-entitlementconnectionbulkupdateitem
title: Entitlementconnectionbulkupdateitem
pagination_label: Entitlementconnectionbulkupdateitem
sidebar_label: Entitlementconnectionbulkupdateitem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementconnectionbulkupdateitem', 'V1Entitlementconnectionbulkupdateitem'] 
slug: /tools/sdk/go/entitlementconnections/models/entitlementconnectionbulkupdateitem
tags: ['SDK', 'Software Development Kit', 'Entitlementconnectionbulkupdateitem', 'V1Entitlementconnectionbulkupdateitem']
---

# Entitlementconnectionbulkupdateitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **string** | Connection ID to update. | 
**Type** | **string** | Target connection type. | 

## Methods

### NewEntitlementconnectionbulkupdateitem

`func NewEntitlementconnectionbulkupdateitem(connectionId string, type_ string, ) *Entitlementconnectionbulkupdateitem`

NewEntitlementconnectionbulkupdateitem instantiates a new Entitlementconnectionbulkupdateitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementconnectionbulkupdateitemWithDefaults

`func NewEntitlementconnectionbulkupdateitemWithDefaults() *Entitlementconnectionbulkupdateitem`

NewEntitlementconnectionbulkupdateitemWithDefaults instantiates a new Entitlementconnectionbulkupdateitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnectionId

`func (o *Entitlementconnectionbulkupdateitem) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *Entitlementconnectionbulkupdateitem) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *Entitlementconnectionbulkupdateitem) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.


### GetType

`func (o *Entitlementconnectionbulkupdateitem) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Entitlementconnectionbulkupdateitem) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Entitlementconnectionbulkupdateitem) SetType(v string)`

SetType sets Type field to given value.



