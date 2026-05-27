---
id: v2026-intel-access-source-wire
title: IntelAccessSourceWire
pagination_label: IntelAccessSourceWire
sidebar_label: IntelAccessSourceWire
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelAccessSourceWire', 'V2026IntelAccessSourceWire'] 
slug: /tools/sdk/go/v2026/models/intel-access-source-wire
tags: ['SDK', 'Software Development Kit', 'IntelAccessSourceWire', 'V2026IntelAccessSourceWire']
---

# IntelAccessSourceWire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Source identifier referenced by the account wire object. | [optional] 
**Name** | Pointer to **string** | Human-readable source name shown in administrative consoles. | [optional] 

## Methods

### NewIntelAccessSourceWire

`func NewIntelAccessSourceWire() *IntelAccessSourceWire`

NewIntelAccessSourceWire instantiates a new IntelAccessSourceWire object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelAccessSourceWireWithDefaults

`func NewIntelAccessSourceWireWithDefaults() *IntelAccessSourceWire`

NewIntelAccessSourceWireWithDefaults instantiates a new IntelAccessSourceWire object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IntelAccessSourceWire) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IntelAccessSourceWire) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IntelAccessSourceWire) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IntelAccessSourceWire) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IntelAccessSourceWire) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IntelAccessSourceWire) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IntelAccessSourceWire) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IntelAccessSourceWire) HasName() bool`

HasName returns a boolean if a field has been set.


