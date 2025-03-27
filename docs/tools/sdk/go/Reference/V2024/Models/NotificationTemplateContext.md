---
id: v2024-notification-template-context
title: NotificationTemplateContext
pagination_label: NotificationTemplateContext
sidebar_label: NotificationTemplateContext
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NotificationTemplateContext', 'V2024NotificationTemplateContext'] 
slug: /tools/sdk/go/v2024/models/notification-template-context
tags: ['SDK', 'Software Development Kit', 'NotificationTemplateContext', 'V2024NotificationTemplateContext']
---

# NotificationTemplateContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | Pointer to **map[string]interface{}** | A JSON object that stores the context. | [optional] 
**Created** | Pointer to **time.Time** | When the global context was created | [optional] 
**Modified** | Pointer to **time.Time** | When the global context was last modified | [optional] 

## Methods

### NewNotificationTemplateContext

`func NewNotificationTemplateContext() *NotificationTemplateContext`

NewNotificationTemplateContext instantiates a new NotificationTemplateContext object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNotificationTemplateContextWithDefaults

`func NewNotificationTemplateContextWithDefaults() *NotificationTemplateContext`

NewNotificationTemplateContextWithDefaults instantiates a new NotificationTemplateContext object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributes

`func (o *NotificationTemplateContext) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *NotificationTemplateContext) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *NotificationTemplateContext) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *NotificationTemplateContext) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetCreated

`func (o *NotificationTemplateContext) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *NotificationTemplateContext) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *NotificationTemplateContext) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *NotificationTemplateContext) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *NotificationTemplateContext) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *NotificationTemplateContext) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *NotificationTemplateContext) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *NotificationTemplateContext) HasModified() bool`

HasModified returns a boolean if a field has been set.


