---
id: v2026-intel-machine-source
title: IntelMachineSource
pagination_label: IntelMachineSource
sidebar_label: IntelMachineSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelMachineSource', 'V2026IntelMachineSource'] 
slug: /tools/sdk/go/v2026/models/intel-machine-source
tags: ['SDK', 'Software Development Kit', 'IntelMachineSource', 'V2026IntelMachineSource']
---

# IntelMachineSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier of the correlated source in Identity Security Cloud. | [optional] 
**Name** | Pointer to **string** | Display name of the source as configured in Identity Security Cloud. | [optional] 
**Type** | Pointer to **string** | Connector or source type classification for the backing system. | [optional] 

## Methods

### NewIntelMachineSource

`func NewIntelMachineSource() *IntelMachineSource`

NewIntelMachineSource instantiates a new IntelMachineSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelMachineSourceWithDefaults

`func NewIntelMachineSourceWithDefaults() *IntelMachineSource`

NewIntelMachineSourceWithDefaults instantiates a new IntelMachineSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IntelMachineSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IntelMachineSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IntelMachineSource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IntelMachineSource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IntelMachineSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IntelMachineSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IntelMachineSource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IntelMachineSource) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *IntelMachineSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IntelMachineSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IntelMachineSource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *IntelMachineSource) HasType() bool`

HasType returns a boolean if a field has been set.


