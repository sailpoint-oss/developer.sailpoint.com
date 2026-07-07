---
id: v1-get-notification-template-variables-v1429-response
title: GetNotificationTemplateVariablesV1429Response
pagination_label: GetNotificationTemplateVariablesV1429Response
sidebar_label: GetNotificationTemplateVariablesV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetNotificationTemplateVariablesV1429Response', 'V1GetNotificationTemplateVariablesV1429Response'] 
slug: /tools/sdk/go/notifications/models/get-notification-template-variables-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetNotificationTemplateVariablesV1429Response', 'V1GetNotificationTemplateVariablesV1429Response']
---

# GetNotificationTemplateVariablesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetNotificationTemplateVariablesV1429Response

`func NewGetNotificationTemplateVariablesV1429Response() *GetNotificationTemplateVariablesV1429Response`

NewGetNotificationTemplateVariablesV1429Response instantiates a new GetNotificationTemplateVariablesV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetNotificationTemplateVariablesV1429ResponseWithDefaults

`func NewGetNotificationTemplateVariablesV1429ResponseWithDefaults() *GetNotificationTemplateVariablesV1429Response`

NewGetNotificationTemplateVariablesV1429ResponseWithDefaults instantiates a new GetNotificationTemplateVariablesV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetNotificationTemplateVariablesV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetNotificationTemplateVariablesV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetNotificationTemplateVariablesV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetNotificationTemplateVariablesV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetNotificationTemplateVariablesV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetNotificationTemplateVariablesV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

