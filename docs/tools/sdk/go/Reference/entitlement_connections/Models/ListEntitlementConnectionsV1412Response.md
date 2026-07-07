---
id: v1-list-entitlement-connections-v1412-response
title: ListEntitlementConnectionsV1412Response
pagination_label: ListEntitlementConnectionsV1412Response
sidebar_label: ListEntitlementConnectionsV1412Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListEntitlementConnectionsV1412Response', 'V1ListEntitlementConnectionsV1412Response'] 
slug: /tools/sdk/go/entitlementconnections/models/list-entitlement-connections-v1412-response
tags: ['SDK', 'Software Development Kit', 'ListEntitlementConnectionsV1412Response', 'V1ListEntitlementConnectionsV1412Response']
---

# ListEntitlementConnectionsV1412Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListEntitlementConnectionsV1412Response

`func NewListEntitlementConnectionsV1412Response() *ListEntitlementConnectionsV1412Response`

NewListEntitlementConnectionsV1412Response instantiates a new ListEntitlementConnectionsV1412Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListEntitlementConnectionsV1412ResponseWithDefaults

`func NewListEntitlementConnectionsV1412ResponseWithDefaults() *ListEntitlementConnectionsV1412Response`

NewListEntitlementConnectionsV1412ResponseWithDefaults instantiates a new ListEntitlementConnectionsV1412Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListEntitlementConnectionsV1412Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListEntitlementConnectionsV1412Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListEntitlementConnectionsV1412Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListEntitlementConnectionsV1412Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListEntitlementConnectionsV1412Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListEntitlementConnectionsV1412Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

