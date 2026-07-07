---
id: v1-list-machine-account-mappings-v1429-response
title: ListMachineAccountMappingsV1429Response
pagination_label: ListMachineAccountMappingsV1429Response
sidebar_label: ListMachineAccountMappingsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListMachineAccountMappingsV1429Response', 'V1ListMachineAccountMappingsV1429Response'] 
slug: /tools/sdk/go/machineaccountmappings/models/list-machine-account-mappings-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListMachineAccountMappingsV1429Response', 'V1ListMachineAccountMappingsV1429Response']
---

# ListMachineAccountMappingsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListMachineAccountMappingsV1429Response

`func NewListMachineAccountMappingsV1429Response() *ListMachineAccountMappingsV1429Response`

NewListMachineAccountMappingsV1429Response instantiates a new ListMachineAccountMappingsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListMachineAccountMappingsV1429ResponseWithDefaults

`func NewListMachineAccountMappingsV1429ResponseWithDefaults() *ListMachineAccountMappingsV1429Response`

NewListMachineAccountMappingsV1429ResponseWithDefaults instantiates a new ListMachineAccountMappingsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListMachineAccountMappingsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListMachineAccountMappingsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListMachineAccountMappingsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListMachineAccountMappingsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListMachineAccountMappingsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListMachineAccountMappingsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

