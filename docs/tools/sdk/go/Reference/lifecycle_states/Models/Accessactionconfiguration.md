---
id: v1-accessactionconfiguration
title: Accessactionconfiguration
pagination_label: Accessactionconfiguration
sidebar_label: Accessactionconfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessactionconfiguration', 'V1Accessactionconfiguration'] 
slug: /tools/sdk/go/lifecyclestates/models/accessactionconfiguration
tags: ['SDK', 'Software Development Kit', 'Accessactionconfiguration', 'V1Accessactionconfiguration']
---

# Accessactionconfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RemoveAllAccessEnabled** | Pointer to **bool** | If true, then all accesses are marked for removal. | [optional] [default to false]

## Methods

### NewAccessactionconfiguration

`func NewAccessactionconfiguration() *Accessactionconfiguration`

NewAccessactionconfiguration instantiates a new Accessactionconfiguration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessactionconfigurationWithDefaults

`func NewAccessactionconfigurationWithDefaults() *Accessactionconfiguration`

NewAccessactionconfigurationWithDefaults instantiates a new Accessactionconfiguration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRemoveAllAccessEnabled

`func (o *Accessactionconfiguration) GetRemoveAllAccessEnabled() bool`

GetRemoveAllAccessEnabled returns the RemoveAllAccessEnabled field if non-nil, zero value otherwise.

### GetRemoveAllAccessEnabledOk

`func (o *Accessactionconfiguration) GetRemoveAllAccessEnabledOk() (*bool, bool)`

GetRemoveAllAccessEnabledOk returns a tuple with the RemoveAllAccessEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveAllAccessEnabled

`func (o *Accessactionconfiguration) SetRemoveAllAccessEnabled(v bool)`

SetRemoveAllAccessEnabled sets RemoveAllAccessEnabled field to given value.

### HasRemoveAllAccessEnabled

`func (o *Accessactionconfiguration) HasRemoveAllAccessEnabled() bool`

HasRemoveAllAccessEnabled returns a boolean if a field has been set.


