---
id: v1-get-managed-cluster-types-v1429-response
title: GetManagedClusterTypesV1429Response
pagination_label: GetManagedClusterTypesV1429Response
sidebar_label: GetManagedClusterTypesV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetManagedClusterTypesV1429Response', 'V1GetManagedClusterTypesV1429Response'] 
slug: /tools/sdk/go/managedclustertypes/models/get-managed-cluster-types-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetManagedClusterTypesV1429Response', 'V1GetManagedClusterTypesV1429Response']
---

# GetManagedClusterTypesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetManagedClusterTypesV1429Response

`func NewGetManagedClusterTypesV1429Response() *GetManagedClusterTypesV1429Response`

NewGetManagedClusterTypesV1429Response instantiates a new GetManagedClusterTypesV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetManagedClusterTypesV1429ResponseWithDefaults

`func NewGetManagedClusterTypesV1429ResponseWithDefaults() *GetManagedClusterTypesV1429Response`

NewGetManagedClusterTypesV1429ResponseWithDefaults instantiates a new GetManagedClusterTypesV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetManagedClusterTypesV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetManagedClusterTypesV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetManagedClusterTypesV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetManagedClusterTypesV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetManagedClusterTypesV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetManagedClusterTypesV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

