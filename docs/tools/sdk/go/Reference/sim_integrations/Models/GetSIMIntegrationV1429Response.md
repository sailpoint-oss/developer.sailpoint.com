---
id: v1-get-sim-integration-v1429-response
title: GetSIMIntegrationV1429Response
pagination_label: GetSIMIntegrationV1429Response
sidebar_label: GetSIMIntegrationV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetSIMIntegrationV1429Response', 'V1GetSIMIntegrationV1429Response'] 
slug: /tools/sdk/go/simintegrations/models/get-sim-integration-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetSIMIntegrationV1429Response', 'V1GetSIMIntegrationV1429Response']
---

# GetSIMIntegrationV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetSIMIntegrationV1429Response

`func NewGetSIMIntegrationV1429Response() *GetSIMIntegrationV1429Response`

NewGetSIMIntegrationV1429Response instantiates a new GetSIMIntegrationV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSIMIntegrationV1429ResponseWithDefaults

`func NewGetSIMIntegrationV1429ResponseWithDefaults() *GetSIMIntegrationV1429Response`

NewGetSIMIntegrationV1429ResponseWithDefaults instantiates a new GetSIMIntegrationV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetSIMIntegrationV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetSIMIntegrationV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetSIMIntegrationV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetSIMIntegrationV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetSIMIntegrationV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetSIMIntegrationV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

