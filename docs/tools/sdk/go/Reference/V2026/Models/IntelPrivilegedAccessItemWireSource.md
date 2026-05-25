---
id: v2026-intel-privileged-access-item-wire-source
title: IntelPrivilegedAccessItemWireSource
pagination_label: IntelPrivilegedAccessItemWireSource
sidebar_label: IntelPrivilegedAccessItemWireSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelPrivilegedAccessItemWireSource', 'V2026IntelPrivilegedAccessItemWireSource'] 
slug: /tools/sdk/go/v2026/models/intel-privileged-access-item-wire-source
tags: ['SDK', 'Software Development Kit', 'IntelPrivilegedAccessItemWireSource', 'V2026IntelPrivilegedAccessItemWireSource']
---

# IntelPrivilegedAccessItemWireSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Human-readable source name for the privileged access item. | [optional] 
**Id** | Pointer to **string** | Source identifier for the privileged access item. | [optional] 

## Methods

### NewIntelPrivilegedAccessItemWireSource

`func NewIntelPrivilegedAccessItemWireSource() *IntelPrivilegedAccessItemWireSource`

NewIntelPrivilegedAccessItemWireSource instantiates a new IntelPrivilegedAccessItemWireSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelPrivilegedAccessItemWireSourceWithDefaults

`func NewIntelPrivilegedAccessItemWireSourceWithDefaults() *IntelPrivilegedAccessItemWireSource`

NewIntelPrivilegedAccessItemWireSourceWithDefaults instantiates a new IntelPrivilegedAccessItemWireSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *IntelPrivilegedAccessItemWireSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IntelPrivilegedAccessItemWireSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IntelPrivilegedAccessItemWireSource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IntelPrivilegedAccessItemWireSource) HasName() bool`

HasName returns a boolean if a field has been set.

### GetId

`func (o *IntelPrivilegedAccessItemWireSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IntelPrivilegedAccessItemWireSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IntelPrivilegedAccessItemWireSource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IntelPrivilegedAccessItemWireSource) HasId() bool`

HasId returns a boolean if a field has been set.


