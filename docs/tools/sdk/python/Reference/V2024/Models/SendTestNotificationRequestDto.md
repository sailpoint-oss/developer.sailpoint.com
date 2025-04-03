---
id: v2024-send-test-notification-request-dto
title: SendTestNotificationRequestDto
pagination_label: SendTestNotificationRequestDto
sidebar_label: SendTestNotificationRequestDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SendTestNotificationRequestDto', 'V2024SendTestNotificationRequestDto'] 
slug: /tools/sdk/go/v2024/models/send-test-notification-request-dto
tags: ['SDK', 'Software Development Kit', 'SendTestNotificationRequestDto', 'V2024SendTestNotificationRequestDto']
---

# SendTestNotificationRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The template notification key. | [optional] 
**Medium** | Pointer to **string** | The notification medium. Has to be one of the following enum values. | [optional] 
**Context** | Pointer to **map[string]interface{}** | A Json object that denotes the context specific to the template. | [optional] 

## Methods

### NewSendTestNotificationRequestDto

`func NewSendTestNotificationRequestDto() *SendTestNotificationRequestDto`

NewSendTestNotificationRequestDto instantiates a new SendTestNotificationRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendTestNotificationRequestDtoWithDefaults

`func NewSendTestNotificationRequestDtoWithDefaults() *SendTestNotificationRequestDto`

NewSendTestNotificationRequestDtoWithDefaults instantiates a new SendTestNotificationRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *SendTestNotificationRequestDto) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *SendTestNotificationRequestDto) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *SendTestNotificationRequestDto) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *SendTestNotificationRequestDto) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetMedium

`func (o *SendTestNotificationRequestDto) GetMedium() string`

GetMedium returns the Medium field if non-nil, zero value otherwise.

### GetMediumOk

`func (o *SendTestNotificationRequestDto) GetMediumOk() (*string, bool)`

GetMediumOk returns a tuple with the Medium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedium

`func (o *SendTestNotificationRequestDto) SetMedium(v string)`

SetMedium sets Medium field to given value.

### HasMedium

`func (o *SendTestNotificationRequestDto) HasMedium() bool`

HasMedium returns a boolean if a field has been set.

### GetContext

`func (o *SendTestNotificationRequestDto) GetContext() map[string]interface{}`

GetContext returns the Context field if non-nil, zero value otherwise.

### GetContextOk

`func (o *SendTestNotificationRequestDto) GetContextOk() (*map[string]interface{}, bool)`

GetContextOk returns a tuple with the Context field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContext

`func (o *SendTestNotificationRequestDto) SetContext(v map[string]interface{})`

SetContext sets Context field to given value.

### HasContext

`func (o *SendTestNotificationRequestDto) HasContext() bool`

HasContext returns a boolean if a field has been set.


