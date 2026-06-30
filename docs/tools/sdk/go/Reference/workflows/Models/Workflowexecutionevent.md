---
id: v1-workflowexecutionevent
title: Workflowexecutionevent
pagination_label: Workflowexecutionevent
sidebar_label: Workflowexecutionevent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workflowexecutionevent', 'V1Workflowexecutionevent'] 
slug: /tools/sdk/go/workflows/models/workflowexecutionevent
tags: ['SDK', 'Software Development Kit', 'Workflowexecutionevent', 'V1Workflowexecutionevent']
---

# Workflowexecutionevent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of event | [optional] 
**Timestamp** | Pointer to **SailPointTime** | The date-time when the event occurred | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Additional attributes associated with the event | [optional] 

## Methods

### NewWorkflowexecutionevent

`func NewWorkflowexecutionevent() *Workflowexecutionevent`

NewWorkflowexecutionevent instantiates a new Workflowexecutionevent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowexecutioneventWithDefaults

`func NewWorkflowexecutioneventWithDefaults() *Workflowexecutionevent`

NewWorkflowexecutioneventWithDefaults instantiates a new Workflowexecutionevent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Workflowexecutionevent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Workflowexecutionevent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Workflowexecutionevent) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Workflowexecutionevent) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTimestamp

`func (o *Workflowexecutionevent) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *Workflowexecutionevent) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *Workflowexecutionevent) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *Workflowexecutionevent) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetAttributes

`func (o *Workflowexecutionevent) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Workflowexecutionevent) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Workflowexecutionevent) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Workflowexecutionevent) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


