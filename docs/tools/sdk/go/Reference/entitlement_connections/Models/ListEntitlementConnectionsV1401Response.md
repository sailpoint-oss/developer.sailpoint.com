---
id: v1-list-entitlement-connections-v1401-response
title: ListEntitlementConnectionsV1401Response
pagination_label: ListEntitlementConnectionsV1401Response
sidebar_label: ListEntitlementConnectionsV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListEntitlementConnectionsV1401Response', 'V1ListEntitlementConnectionsV1401Response'] 
slug: /tools/sdk/go/entitlementconnections/models/list-entitlement-connections-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListEntitlementConnectionsV1401Response', 'V1ListEntitlementConnectionsV1401Response']
---

# ListEntitlementConnectionsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListEntitlementConnectionsV1401Response

`func NewListEntitlementConnectionsV1401Response() *ListEntitlementConnectionsV1401Response`

NewListEntitlementConnectionsV1401Response instantiates a new ListEntitlementConnectionsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListEntitlementConnectionsV1401ResponseWithDefaults

`func NewListEntitlementConnectionsV1401ResponseWithDefaults() *ListEntitlementConnectionsV1401Response`

NewListEntitlementConnectionsV1401ResponseWithDefaults instantiates a new ListEntitlementConnectionsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *ListEntitlementConnectionsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ListEntitlementConnectionsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ListEntitlementConnectionsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *ListEntitlementConnectionsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *ListEntitlementConnectionsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *ListEntitlementConnectionsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

