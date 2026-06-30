---
id: v1-list-entitlement-connections-v1429-response
title: ListEntitlementConnectionsV1429Response
pagination_label: ListEntitlementConnectionsV1429Response
sidebar_label: ListEntitlementConnectionsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListEntitlementConnectionsV1429Response', 'V1ListEntitlementConnectionsV1429Response'] 
slug: /tools/sdk/go/entitlementconnections/models/list-entitlement-connections-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListEntitlementConnectionsV1429Response', 'V1ListEntitlementConnectionsV1429Response']
---

# ListEntitlementConnectionsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListEntitlementConnectionsV1429Response

`func NewListEntitlementConnectionsV1429Response() *ListEntitlementConnectionsV1429Response`

NewListEntitlementConnectionsV1429Response instantiates a new ListEntitlementConnectionsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListEntitlementConnectionsV1429ResponseWithDefaults

`func NewListEntitlementConnectionsV1429ResponseWithDefaults() *ListEntitlementConnectionsV1429Response`

NewListEntitlementConnectionsV1429ResponseWithDefaults instantiates a new ListEntitlementConnectionsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListEntitlementConnectionsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListEntitlementConnectionsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListEntitlementConnectionsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListEntitlementConnectionsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListEntitlementConnectionsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListEntitlementConnectionsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

