---
id: v2026-intel-privileged-access-item-wire
title: IntelPrivilegedAccessItemWire
pagination_label: IntelPrivilegedAccessItemWire
sidebar_label: IntelPrivilegedAccessItemWire
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelPrivilegedAccessItemWire', 'V2026IntelPrivilegedAccessItemWire'] 
slug: /tools/sdk/go/v2026/models/intel-privileged-access-item-wire
tags: ['SDK', 'Software Development Kit', 'IntelPrivilegedAccessItemWire', 'V2026IntelPrivilegedAccessItemWire']
---

# IntelPrivilegedAccessItemWire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Privileged** | **bool** | True when SDS Search classifies this item as privileged access for the identity. | 
**DisplayName** | Pointer to **string** | Display label for the privileged access item in administrative experiences. | [optional] 
**Name** | Pointer to **string** | Technical name of the privileged access item from SDS Search. | [optional] 
**Standalone** | Pointer to **bool** | True when the privileged item is modeled as a standalone entitlement or access object. | [optional] [default to false]
**Id** | **string** | Identifier of the privileged access item returned by SDS Search. | 
**Source** | Pointer to [**IntelPrivilegedAccessItemWireSource**](intel-privileged-access-item-wire-source) |  | [optional] 
**Attribute** | Pointer to **string** | Source attribute name that carries the privileged value when applicable. | [optional] 
**Type** | **string** | Object type classification from SDS Search (for example ENTITLEMENT). | 
**Value** | Pointer to **string** | Privileged value on the source attribute when applicable. | [optional] 

## Methods

### NewIntelPrivilegedAccessItemWire

`func NewIntelPrivilegedAccessItemWire(privileged bool, id string, type_ string, ) *IntelPrivilegedAccessItemWire`

NewIntelPrivilegedAccessItemWire instantiates a new IntelPrivilegedAccessItemWire object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelPrivilegedAccessItemWireWithDefaults

`func NewIntelPrivilegedAccessItemWireWithDefaults() *IntelPrivilegedAccessItemWire`

NewIntelPrivilegedAccessItemWireWithDefaults instantiates a new IntelPrivilegedAccessItemWire object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrivileged

`func (o *IntelPrivilegedAccessItemWire) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *IntelPrivilegedAccessItemWire) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *IntelPrivilegedAccessItemWire) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.


### GetDisplayName

`func (o *IntelPrivilegedAccessItemWire) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *IntelPrivilegedAccessItemWire) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *IntelPrivilegedAccessItemWire) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *IntelPrivilegedAccessItemWire) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetName

`func (o *IntelPrivilegedAccessItemWire) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IntelPrivilegedAccessItemWire) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IntelPrivilegedAccessItemWire) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IntelPrivilegedAccessItemWire) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStandalone

`func (o *IntelPrivilegedAccessItemWire) GetStandalone() bool`

GetStandalone returns the Standalone field if non-nil, zero value otherwise.

### GetStandaloneOk

`func (o *IntelPrivilegedAccessItemWire) GetStandaloneOk() (*bool, bool)`

GetStandaloneOk returns a tuple with the Standalone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandalone

`func (o *IntelPrivilegedAccessItemWire) SetStandalone(v bool)`

SetStandalone sets Standalone field to given value.

### HasStandalone

`func (o *IntelPrivilegedAccessItemWire) HasStandalone() bool`

HasStandalone returns a boolean if a field has been set.

### GetId

`func (o *IntelPrivilegedAccessItemWire) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IntelPrivilegedAccessItemWire) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IntelPrivilegedAccessItemWire) SetId(v string)`

SetId sets Id field to given value.


### GetSource

`func (o *IntelPrivilegedAccessItemWire) GetSource() IntelPrivilegedAccessItemWireSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *IntelPrivilegedAccessItemWire) GetSourceOk() (*IntelPrivilegedAccessItemWireSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *IntelPrivilegedAccessItemWire) SetSource(v IntelPrivilegedAccessItemWireSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *IntelPrivilegedAccessItemWire) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetAttribute

`func (o *IntelPrivilegedAccessItemWire) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *IntelPrivilegedAccessItemWire) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *IntelPrivilegedAccessItemWire) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *IntelPrivilegedAccessItemWire) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetType

`func (o *IntelPrivilegedAccessItemWire) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IntelPrivilegedAccessItemWire) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IntelPrivilegedAccessItemWire) SetType(v string)`

SetType sets Type field to given value.


### GetValue

`func (o *IntelPrivilegedAccessItemWire) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *IntelPrivilegedAccessItemWire) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *IntelPrivilegedAccessItemWire) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *IntelPrivilegedAccessItemWire) HasValue() bool`

HasValue returns a boolean if a field has been set.


