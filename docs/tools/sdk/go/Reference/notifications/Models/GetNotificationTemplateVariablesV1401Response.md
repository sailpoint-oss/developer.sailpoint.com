---
id: v1-get-notification-template-variables-v1401-response
title: GetNotificationTemplateVariablesV1401Response
pagination_label: GetNotificationTemplateVariablesV1401Response
sidebar_label: GetNotificationTemplateVariablesV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetNotificationTemplateVariablesV1401Response', 'V1GetNotificationTemplateVariablesV1401Response'] 
slug: /tools/sdk/go/notifications/models/get-notification-template-variables-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetNotificationTemplateVariablesV1401Response', 'V1GetNotificationTemplateVariablesV1401Response']
---

# GetNotificationTemplateVariablesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetNotificationTemplateVariablesV1401Response

`func NewGetNotificationTemplateVariablesV1401Response() *GetNotificationTemplateVariablesV1401Response`

NewGetNotificationTemplateVariablesV1401Response instantiates a new GetNotificationTemplateVariablesV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetNotificationTemplateVariablesV1401ResponseWithDefaults

`func NewGetNotificationTemplateVariablesV1401ResponseWithDefaults() *GetNotificationTemplateVariablesV1401Response`

NewGetNotificationTemplateVariablesV1401ResponseWithDefaults instantiates a new GetNotificationTemplateVariablesV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetNotificationTemplateVariablesV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetNotificationTemplateVariablesV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetNotificationTemplateVariablesV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetNotificationTemplateVariablesV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetNotificationTemplateVariablesV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetNotificationTemplateVariablesV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

