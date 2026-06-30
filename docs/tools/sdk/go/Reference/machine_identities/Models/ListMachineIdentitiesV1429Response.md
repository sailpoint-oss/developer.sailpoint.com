---
id: v1-list-machine-identities-v1429-response
title: ListMachineIdentitiesV1429Response
pagination_label: ListMachineIdentitiesV1429Response
sidebar_label: ListMachineIdentitiesV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListMachineIdentitiesV1429Response', 'V1ListMachineIdentitiesV1429Response'] 
slug: /tools/sdk/go/machineidentities/models/list-machine-identities-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListMachineIdentitiesV1429Response', 'V1ListMachineIdentitiesV1429Response']
---

# ListMachineIdentitiesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListMachineIdentitiesV1429Response

`func NewListMachineIdentitiesV1429Response() *ListMachineIdentitiesV1429Response`

NewListMachineIdentitiesV1429Response instantiates a new ListMachineIdentitiesV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListMachineIdentitiesV1429ResponseWithDefaults

`func NewListMachineIdentitiesV1429ResponseWithDefaults() *ListMachineIdentitiesV1429Response`

NewListMachineIdentitiesV1429ResponseWithDefaults instantiates a new ListMachineIdentitiesV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListMachineIdentitiesV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListMachineIdentitiesV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListMachineIdentitiesV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListMachineIdentitiesV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListMachineIdentitiesV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListMachineIdentitiesV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

