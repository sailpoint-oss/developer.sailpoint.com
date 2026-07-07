---
id: v1-machineaccountsubtypeconfigdto
title: Machineaccountsubtypeconfigdto
pagination_label: Machineaccountsubtypeconfigdto
sidebar_label: Machineaccountsubtypeconfigdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineaccountsubtypeconfigdto', 'V1Machineaccountsubtypeconfigdto'] 
slug: /tools/sdk/go/machineaccountsubtypes/models/machineaccountsubtypeconfigdto
tags: ['SDK', 'Software Development Kit', 'Machineaccountsubtypeconfigdto', 'V1Machineaccountsubtypeconfigdto']
---

# Machineaccountsubtypeconfigdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubtypeId** | Pointer to **string** | Unique identifier representing the specific subtype of the machine account, used to distinguish between different machine account categories. | [optional] 
**MachineAccountCreate** | Pointer to [**MachineaccountsubtypeconfigdtoMachineAccountCreate**](machineaccountsubtypeconfigdto-machine-account-create) |  | [optional] 
**MachineAccountDelete** | Pointer to [**MachineaccountsubtypeconfigdtoMachineAccountDelete**](machineaccountsubtypeconfigdto-machine-account-delete) |  | [optional] 

## Methods

### NewMachineaccountsubtypeconfigdto

`func NewMachineaccountsubtypeconfigdto() *Machineaccountsubtypeconfigdto`

NewMachineaccountsubtypeconfigdto instantiates a new Machineaccountsubtypeconfigdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineaccountsubtypeconfigdtoWithDefaults

`func NewMachineaccountsubtypeconfigdtoWithDefaults() *Machineaccountsubtypeconfigdto`

NewMachineaccountsubtypeconfigdtoWithDefaults instantiates a new Machineaccountsubtypeconfigdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSubtypeId

`func (o *Machineaccountsubtypeconfigdto) GetSubtypeId() string`

GetSubtypeId returns the SubtypeId field if non-nil, zero value otherwise.

### GetSubtypeIdOk

`func (o *Machineaccountsubtypeconfigdto) GetSubtypeIdOk() (*string, bool)`

GetSubtypeIdOk returns a tuple with the SubtypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtypeId

`func (o *Machineaccountsubtypeconfigdto) SetSubtypeId(v string)`

SetSubtypeId sets SubtypeId field to given value.

### HasSubtypeId

`func (o *Machineaccountsubtypeconfigdto) HasSubtypeId() bool`

HasSubtypeId returns a boolean if a field has been set.

### GetMachineAccountCreate

`func (o *Machineaccountsubtypeconfigdto) GetMachineAccountCreate() MachineaccountsubtypeconfigdtoMachineAccountCreate`

GetMachineAccountCreate returns the MachineAccountCreate field if non-nil, zero value otherwise.

### GetMachineAccountCreateOk

`func (o *Machineaccountsubtypeconfigdto) GetMachineAccountCreateOk() (*MachineaccountsubtypeconfigdtoMachineAccountCreate, bool)`

GetMachineAccountCreateOk returns a tuple with the MachineAccountCreate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineAccountCreate

`func (o *Machineaccountsubtypeconfigdto) SetMachineAccountCreate(v MachineaccountsubtypeconfigdtoMachineAccountCreate)`

SetMachineAccountCreate sets MachineAccountCreate field to given value.

### HasMachineAccountCreate

`func (o *Machineaccountsubtypeconfigdto) HasMachineAccountCreate() bool`

HasMachineAccountCreate returns a boolean if a field has been set.

### GetMachineAccountDelete

`func (o *Machineaccountsubtypeconfigdto) GetMachineAccountDelete() MachineaccountsubtypeconfigdtoMachineAccountDelete`

GetMachineAccountDelete returns the MachineAccountDelete field if non-nil, zero value otherwise.

### GetMachineAccountDeleteOk

`func (o *Machineaccountsubtypeconfigdto) GetMachineAccountDeleteOk() (*MachineaccountsubtypeconfigdtoMachineAccountDelete, bool)`

GetMachineAccountDeleteOk returns a tuple with the MachineAccountDelete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineAccountDelete

`func (o *Machineaccountsubtypeconfigdto) SetMachineAccountDelete(v MachineaccountsubtypeconfigdtoMachineAccountDelete)`

SetMachineAccountDelete sets MachineAccountDelete field to given value.

### HasMachineAccountDelete

`func (o *Machineaccountsubtypeconfigdto) HasMachineAccountDelete() bool`

HasMachineAccountDelete returns a boolean if a field has been set.


