---
id: v1-get-multi-host-integrations-list-v1429-response
title: GetMultiHostIntegrationsListV1429Response
pagination_label: GetMultiHostIntegrationsListV1429Response
sidebar_label: GetMultiHostIntegrationsListV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetMultiHostIntegrationsListV1429Response', 'V1GetMultiHostIntegrationsListV1429Response'] 
slug: /tools/sdk/go/multihostintegration/models/get-multi-host-integrations-list-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetMultiHostIntegrationsListV1429Response', 'V1GetMultiHostIntegrationsListV1429Response']
---

# GetMultiHostIntegrationsListV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetMultiHostIntegrationsListV1429Response

`func NewGetMultiHostIntegrationsListV1429Response() *GetMultiHostIntegrationsListV1429Response`

NewGetMultiHostIntegrationsListV1429Response instantiates a new GetMultiHostIntegrationsListV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetMultiHostIntegrationsListV1429ResponseWithDefaults

`func NewGetMultiHostIntegrationsListV1429ResponseWithDefaults() *GetMultiHostIntegrationsListV1429Response`

NewGetMultiHostIntegrationsListV1429ResponseWithDefaults instantiates a new GetMultiHostIntegrationsListV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetMultiHostIntegrationsListV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetMultiHostIntegrationsListV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetMultiHostIntegrationsListV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetMultiHostIntegrationsListV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetMultiHostIntegrationsListV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetMultiHostIntegrationsListV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

