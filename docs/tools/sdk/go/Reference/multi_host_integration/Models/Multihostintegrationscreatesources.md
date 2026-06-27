---
id: v1-multihostintegrationscreatesources
title: Multihostintegrationscreatesources
pagination_label: Multihostintegrationscreatesources
sidebar_label: Multihostintegrationscreatesources
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Multihostintegrationscreatesources', 'V1Multihostintegrationscreatesources'] 
slug: /tools/sdk/go/multihostintegration/models/multihostintegrationscreatesources
tags: ['SDK', 'Software Development Kit', 'Multihostintegrationscreatesources', 'V1Multihostintegrationscreatesources']
---

# Multihostintegrationscreatesources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Source's human-readable name. | 
**Description** | Pointer to **string** | Source's human-readable description. | [optional] 
**ConnectorAttributes** | Pointer to **map[string]interface{}** | Connector specific configuration. This configuration will differ from type to type. | [optional] 

## Methods

### NewMultihostintegrationscreatesources

`func NewMultihostintegrationscreatesources(name string, ) *Multihostintegrationscreatesources`

NewMultihostintegrationscreatesources instantiates a new Multihostintegrationscreatesources object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultihostintegrationscreatesourcesWithDefaults

`func NewMultihostintegrationscreatesourcesWithDefaults() *Multihostintegrationscreatesources`

NewMultihostintegrationscreatesourcesWithDefaults instantiates a new Multihostintegrationscreatesources object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Multihostintegrationscreatesources) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Multihostintegrationscreatesources) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Multihostintegrationscreatesources) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Multihostintegrationscreatesources) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Multihostintegrationscreatesources) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Multihostintegrationscreatesources) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Multihostintegrationscreatesources) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetConnectorAttributes

`func (o *Multihostintegrationscreatesources) GetConnectorAttributes() map[string]interface{}`

GetConnectorAttributes returns the ConnectorAttributes field if non-nil, zero value otherwise.

### GetConnectorAttributesOk

`func (o *Multihostintegrationscreatesources) GetConnectorAttributesOk() (*map[string]interface{}, bool)`

GetConnectorAttributesOk returns a tuple with the ConnectorAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorAttributes

`func (o *Multihostintegrationscreatesources) SetConnectorAttributes(v map[string]interface{})`

SetConnectorAttributes sets ConnectorAttributes field to given value.

### HasConnectorAttributes

`func (o *Multihostintegrationscreatesources) HasConnectorAttributes() bool`

HasConnectorAttributes returns a boolean if a field has been set.


