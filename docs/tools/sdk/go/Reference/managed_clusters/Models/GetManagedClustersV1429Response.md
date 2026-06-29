---
id: v1-get-managed-clusters-v1429-response
title: GetManagedClustersV1429Response
pagination_label: GetManagedClustersV1429Response
sidebar_label: GetManagedClustersV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetManagedClustersV1429Response', 'V1GetManagedClustersV1429Response'] 
slug: /tools/sdk/go/managedclusters/models/get-managed-clusters-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetManagedClustersV1429Response', 'V1GetManagedClustersV1429Response']
---

# GetManagedClustersV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetManagedClustersV1429Response

`func NewGetManagedClustersV1429Response() *GetManagedClustersV1429Response`

NewGetManagedClustersV1429Response instantiates a new GetManagedClustersV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetManagedClustersV1429ResponseWithDefaults

`func NewGetManagedClustersV1429ResponseWithDefaults() *GetManagedClustersV1429Response`

NewGetManagedClustersV1429ResponseWithDefaults instantiates a new GetManagedClustersV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetManagedClustersV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetManagedClustersV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetManagedClustersV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetManagedClustersV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetManagedClustersV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetManagedClustersV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

