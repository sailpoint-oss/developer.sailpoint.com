---
id: v1-servicedeskintegrationtemplatetype
title: Servicedeskintegrationtemplatetype
pagination_label: Servicedeskintegrationtemplatetype
sidebar_label: Servicedeskintegrationtemplatetype
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Servicedeskintegrationtemplatetype', 'V1Servicedeskintegrationtemplatetype'] 
slug: /tools/sdk/go/servicedeskintegration/models/servicedeskintegrationtemplatetype
tags: ['SDK', 'Software Development Kit', 'Servicedeskintegrationtemplatetype', 'V1Servicedeskintegrationtemplatetype']
---

# Servicedeskintegrationtemplatetype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | This is the name of the type. | [optional] 
**Type** | **string** | This is the type value for the type. | 
**ScriptName** | **string** | This is the scriptName attribute value for the type. | 

## Methods

### NewServicedeskintegrationtemplatetype

`func NewServicedeskintegrationtemplatetype(type_ string, scriptName string, ) *Servicedeskintegrationtemplatetype`

NewServicedeskintegrationtemplatetype instantiates a new Servicedeskintegrationtemplatetype object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServicedeskintegrationtemplatetypeWithDefaults

`func NewServicedeskintegrationtemplatetypeWithDefaults() *Servicedeskintegrationtemplatetype`

NewServicedeskintegrationtemplatetypeWithDefaults instantiates a new Servicedeskintegrationtemplatetype object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Servicedeskintegrationtemplatetype) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Servicedeskintegrationtemplatetype) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Servicedeskintegrationtemplatetype) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Servicedeskintegrationtemplatetype) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *Servicedeskintegrationtemplatetype) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Servicedeskintegrationtemplatetype) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Servicedeskintegrationtemplatetype) SetType(v string)`

SetType sets Type field to given value.


### GetScriptName

`func (o *Servicedeskintegrationtemplatetype) GetScriptName() string`

GetScriptName returns the ScriptName field if non-nil, zero value otherwise.

### GetScriptNameOk

`func (o *Servicedeskintegrationtemplatetype) GetScriptNameOk() (*string, bool)`

GetScriptNameOk returns a tuple with the ScriptName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScriptName

`func (o *Servicedeskintegrationtemplatetype) SetScriptName(v string)`

SetScriptName sets ScriptName field to given value.



