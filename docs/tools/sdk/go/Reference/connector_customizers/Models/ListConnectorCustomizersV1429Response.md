---
id: v1-list-connector-customizers-v1429-response
title: ListConnectorCustomizersV1429Response
pagination_label: ListConnectorCustomizersV1429Response
sidebar_label: ListConnectorCustomizersV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListConnectorCustomizersV1429Response', 'V1ListConnectorCustomizersV1429Response'] 
slug: /tools/sdk/go/connectorcustomizers/models/list-connector-customizers-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListConnectorCustomizersV1429Response', 'V1ListConnectorCustomizersV1429Response']
---

# ListConnectorCustomizersV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListConnectorCustomizersV1429Response

`func NewListConnectorCustomizersV1429Response() *ListConnectorCustomizersV1429Response`

NewListConnectorCustomizersV1429Response instantiates a new ListConnectorCustomizersV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListConnectorCustomizersV1429ResponseWithDefaults

`func NewListConnectorCustomizersV1429ResponseWithDefaults() *ListConnectorCustomizersV1429Response`

NewListConnectorCustomizersV1429ResponseWithDefaults instantiates a new ListConnectorCustomizersV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListConnectorCustomizersV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListConnectorCustomizersV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListConnectorCustomizersV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListConnectorCustomizersV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListConnectorCustomizersV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListConnectorCustomizersV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

