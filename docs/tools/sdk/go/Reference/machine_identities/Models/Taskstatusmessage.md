---
id: v1-taskstatusmessage
title: Taskstatusmessage
pagination_label: Taskstatusmessage
sidebar_label: Taskstatusmessage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Taskstatusmessage', 'V1Taskstatusmessage'] 
slug: /tools/sdk/go/machineidentities/models/taskstatusmessage
tags: ['SDK', 'Software Development Kit', 'Taskstatusmessage', 'V1Taskstatusmessage']
---

# Taskstatusmessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Type of the message | 
**LocalizedText** | [**NullableLocalizedmessage**](localizedmessage) |  | 
**Key** | **string** | Key of the message | 
**Parameters** | [**[]TaskstatusmessageParametersInner**](taskstatusmessage-parameters-inner) | Message parameters for internationalization | 

## Methods

### NewTaskstatusmessage

`func NewTaskstatusmessage(type_ string, localizedText NullableLocalizedmessage, key string, parameters []TaskstatusmessageParametersInner, ) *Taskstatusmessage`

NewTaskstatusmessage instantiates a new Taskstatusmessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskstatusmessageWithDefaults

`func NewTaskstatusmessageWithDefaults() *Taskstatusmessage`

NewTaskstatusmessageWithDefaults instantiates a new Taskstatusmessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Taskstatusmessage) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Taskstatusmessage) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Taskstatusmessage) SetType(v string)`

SetType sets Type field to given value.


### GetLocalizedText

`func (o *Taskstatusmessage) GetLocalizedText() Localizedmessage`

GetLocalizedText returns the LocalizedText field if non-nil, zero value otherwise.

### GetLocalizedTextOk

`func (o *Taskstatusmessage) GetLocalizedTextOk() (*Localizedmessage, bool)`

GetLocalizedTextOk returns a tuple with the LocalizedText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizedText

`func (o *Taskstatusmessage) SetLocalizedText(v Localizedmessage)`

SetLocalizedText sets LocalizedText field to given value.


### SetLocalizedTextNil

`func (o *Taskstatusmessage) SetLocalizedTextNil(b bool)`

 SetLocalizedTextNil sets the value for LocalizedText to be an explicit nil

### UnsetLocalizedText
`func (o *Taskstatusmessage) UnsetLocalizedText()`

UnsetLocalizedText ensures that no value is present for LocalizedText, not even an explicit nil
### GetKey

`func (o *Taskstatusmessage) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Taskstatusmessage) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Taskstatusmessage) SetKey(v string)`

SetKey sets Key field to given value.


### GetParameters

`func (o *Taskstatusmessage) GetParameters() []TaskstatusmessageParametersInner`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *Taskstatusmessage) GetParametersOk() (*[]TaskstatusmessageParametersInner, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *Taskstatusmessage) SetParameters(v []TaskstatusmessageParametersInner)`

SetParameters sets Parameters field to given value.


### SetParametersNil

`func (o *Taskstatusmessage) SetParametersNil(b bool)`

 SetParametersNil sets the value for Parameters to be an explicit nil

### UnsetParameters
`func (o *Taskstatusmessage) UnsetParameters()`

UnsetParameters ensures that no value is present for Parameters, not even an explicit nil

