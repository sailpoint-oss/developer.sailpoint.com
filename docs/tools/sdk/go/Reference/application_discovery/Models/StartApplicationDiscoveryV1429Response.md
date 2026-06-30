---
id: v1-start-application-discovery-v1429-response
title: StartApplicationDiscoveryV1429Response
pagination_label: StartApplicationDiscoveryV1429Response
sidebar_label: StartApplicationDiscoveryV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'StartApplicationDiscoveryV1429Response', 'V1StartApplicationDiscoveryV1429Response'] 
slug: /tools/sdk/go/applicationdiscovery/models/start-application-discovery-v1429-response
tags: ['SDK', 'Software Development Kit', 'StartApplicationDiscoveryV1429Response', 'V1StartApplicationDiscoveryV1429Response']
---

# StartApplicationDiscoveryV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewStartApplicationDiscoveryV1429Response

`func NewStartApplicationDiscoveryV1429Response() *StartApplicationDiscoveryV1429Response`

NewStartApplicationDiscoveryV1429Response instantiates a new StartApplicationDiscoveryV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStartApplicationDiscoveryV1429ResponseWithDefaults

`func NewStartApplicationDiscoveryV1429ResponseWithDefaults() *StartApplicationDiscoveryV1429Response`

NewStartApplicationDiscoveryV1429ResponseWithDefaults instantiates a new StartApplicationDiscoveryV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *StartApplicationDiscoveryV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *StartApplicationDiscoveryV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *StartApplicationDiscoveryV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *StartApplicationDiscoveryV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *StartApplicationDiscoveryV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *StartApplicationDiscoveryV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

