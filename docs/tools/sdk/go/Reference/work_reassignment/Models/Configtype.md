---
id: v1-configtype
title: Configtype
pagination_label: Configtype
sidebar_label: Configtype
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Configtype', 'V1Configtype'] 
slug: /tools/sdk/go/workreassignment/models/configtype
tags: ['SDK', 'Software Development Kit', 'Configtype', 'V1Configtype']
---

# Configtype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Priority** | Pointer to **int32** |  | [optional] 
**InternalName** | Pointer to [**Configtypeenumcamel**](configtypeenumcamel) |  | [optional] 
**InternalNameCamel** | Pointer to [**Configtypeenum**](configtypeenum) |  | [optional] 
**DisplayName** | Pointer to **string** | Human readable display name of the type to be shown on UI | [optional] 
**Description** | Pointer to **string** | Description of the type of work to be reassigned, displayed by the UI. | [optional] 

## Methods

### NewConfigtype

`func NewConfigtype() *Configtype`

NewConfigtype instantiates a new Configtype object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigtypeWithDefaults

`func NewConfigtypeWithDefaults() *Configtype`

NewConfigtypeWithDefaults instantiates a new Configtype object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPriority

`func (o *Configtype) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *Configtype) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *Configtype) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *Configtype) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetInternalName

`func (o *Configtype) GetInternalName() Configtypeenumcamel`

GetInternalName returns the InternalName field if non-nil, zero value otherwise.

### GetInternalNameOk

`func (o *Configtype) GetInternalNameOk() (*Configtypeenumcamel, bool)`

GetInternalNameOk returns a tuple with the InternalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalName

`func (o *Configtype) SetInternalName(v Configtypeenumcamel)`

SetInternalName sets InternalName field to given value.

### HasInternalName

`func (o *Configtype) HasInternalName() bool`

HasInternalName returns a boolean if a field has been set.

### GetInternalNameCamel

`func (o *Configtype) GetInternalNameCamel() Configtypeenum`

GetInternalNameCamel returns the InternalNameCamel field if non-nil, zero value otherwise.

### GetInternalNameCamelOk

`func (o *Configtype) GetInternalNameCamelOk() (*Configtypeenum, bool)`

GetInternalNameCamelOk returns a tuple with the InternalNameCamel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalNameCamel

`func (o *Configtype) SetInternalNameCamel(v Configtypeenum)`

SetInternalNameCamel sets InternalNameCamel field to given value.

### HasInternalNameCamel

`func (o *Configtype) HasInternalNameCamel() bool`

HasInternalNameCamel returns a boolean if a field has been set.

### GetDisplayName

`func (o *Configtype) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Configtype) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Configtype) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Configtype) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *Configtype) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Configtype) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Configtype) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Configtype) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


