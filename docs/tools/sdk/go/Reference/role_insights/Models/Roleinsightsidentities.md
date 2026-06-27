---
id: v1-roleinsightsidentities
title: Roleinsightsidentities
pagination_label: Roleinsightsidentities
sidebar_label: Roleinsightsidentities
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleinsightsidentities', 'V1Roleinsightsidentities'] 
slug: /tools/sdk/go/roleinsights/models/roleinsightsidentities
tags: ['SDK', 'Software Development Kit', 'Roleinsightsidentities', 'V1Roleinsightsidentities']
---

# Roleinsightsidentities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id for identity | [optional] 
**Name** | Pointer to **string** | Name for identity | [optional] 
**Attributes** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewRoleinsightsidentities

`func NewRoleinsightsidentities() *Roleinsightsidentities`

NewRoleinsightsidentities instantiates a new Roleinsightsidentities object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleinsightsidentitiesWithDefaults

`func NewRoleinsightsidentitiesWithDefaults() *Roleinsightsidentities`

NewRoleinsightsidentitiesWithDefaults instantiates a new Roleinsightsidentities object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Roleinsightsidentities) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Roleinsightsidentities) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Roleinsightsidentities) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Roleinsightsidentities) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Roleinsightsidentities) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Roleinsightsidentities) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Roleinsightsidentities) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Roleinsightsidentities) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAttributes

`func (o *Roleinsightsidentities) GetAttributes() map[string]string`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Roleinsightsidentities) GetAttributesOk() (*map[string]string, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Roleinsightsidentities) SetAttributes(v map[string]string)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Roleinsightsidentities) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


