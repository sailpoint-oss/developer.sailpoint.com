---
id: v2024-invocation
title: Invocation
pagination_label: Invocation
sidebar_label: Invocation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Invocation', 'V2024Invocation'] 
slug: /tools/sdk/go/v2024/models/invocation
tags: ['SDK', 'Software Development Kit', 'Invocation', 'V2024Invocation']
---

# Invocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Invocation ID | [optional] 
**TriggerId** | Pointer to **string** | Trigger ID | [optional] 
**Secret** | Pointer to **string** | Unique invocation secret. | [optional] 
**ContentJson** | Pointer to **map[string]interface{}** | JSON map of invocation metadata. | [optional] 

## Methods

### NewInvocation

`func NewInvocation() *Invocation`

NewInvocation instantiates a new Invocation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvocationWithDefaults

`func NewInvocationWithDefaults() *Invocation`

NewInvocationWithDefaults instantiates a new Invocation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Invocation) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Invocation) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Invocation) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Invocation) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTriggerId

`func (o *Invocation) GetTriggerId() string`

GetTriggerId returns the TriggerId field if non-nil, zero value otherwise.

### GetTriggerIdOk

`func (o *Invocation) GetTriggerIdOk() (*string, bool)`

GetTriggerIdOk returns a tuple with the TriggerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTriggerId

`func (o *Invocation) SetTriggerId(v string)`

SetTriggerId sets TriggerId field to given value.

### HasTriggerId

`func (o *Invocation) HasTriggerId() bool`

HasTriggerId returns a boolean if a field has been set.

### GetSecret

`func (o *Invocation) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *Invocation) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *Invocation) SetSecret(v string)`

SetSecret sets Secret field to given value.

### HasSecret

`func (o *Invocation) HasSecret() bool`

HasSecret returns a boolean if a field has been set.

### GetContentJson

`func (o *Invocation) GetContentJson() map[string]interface{}`

GetContentJson returns the ContentJson field if non-nil, zero value otherwise.

### GetContentJsonOk

`func (o *Invocation) GetContentJsonOk() (*map[string]interface{}, bool)`

GetContentJsonOk returns a tuple with the ContentJson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentJson

`func (o *Invocation) SetContentJson(v map[string]interface{})`

SetContentJson sets ContentJson field to given value.

### HasContentJson

`func (o *Invocation) HasContentJson() bool`

HasContentJson returns a boolean if a field has been set.


