---
id: v1-notificationtemplatecontext
title: Notificationtemplatecontext
pagination_label: Notificationtemplatecontext
sidebar_label: Notificationtemplatecontext
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Notificationtemplatecontext', 'V1Notificationtemplatecontext'] 
slug: /tools/sdk/go/notifications/models/notificationtemplatecontext
tags: ['SDK', 'Software Development Kit', 'Notificationtemplatecontext', 'V1Notificationtemplatecontext']
---

# Notificationtemplatecontext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | Pointer to **map[string]interface{}** | A JSON object that stores the context. | [optional] 
**Created** | Pointer to **SailPointTime** | When the global context was created | [optional] 
**Modified** | Pointer to **SailPointTime** | When the global context was last modified | [optional] 

## Methods

### NewNotificationtemplatecontext

`func NewNotificationtemplatecontext() *Notificationtemplatecontext`

NewNotificationtemplatecontext instantiates a new Notificationtemplatecontext object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNotificationtemplatecontextWithDefaults

`func NewNotificationtemplatecontextWithDefaults() *Notificationtemplatecontext`

NewNotificationtemplatecontextWithDefaults instantiates a new Notificationtemplatecontext object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributes

`func (o *Notificationtemplatecontext) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Notificationtemplatecontext) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Notificationtemplatecontext) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Notificationtemplatecontext) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetCreated

`func (o *Notificationtemplatecontext) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Notificationtemplatecontext) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Notificationtemplatecontext) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Notificationtemplatecontext) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Notificationtemplatecontext) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Notificationtemplatecontext) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Notificationtemplatecontext) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Notificationtemplatecontext) HasModified() bool`

HasModified returns a boolean if a field has been set.


