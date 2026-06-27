---
id: v1-machineidentityownerreference
title: Machineidentityownerreference
pagination_label: Machineidentityownerreference
sidebar_label: Machineidentityownerreference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineidentityownerreference', 'V1Machineidentityownerreference'] 
slug: /tools/sdk/go/triggers/models/machineidentityownerreference
tags: ['SDK', 'Software Development Kit', 'Machineidentityownerreference', 'V1Machineidentityownerreference']
---

# Machineidentityownerreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Owner's type. | 
**Id** | **string** | Owner ID. | 
**Name** | **string** | Owner's display name. | 
**IsPrimary** | Pointer to **bool** | Indicates if this owner is the primary owner. | [optional] [default to false]

## Methods

### NewMachineidentityownerreference

`func NewMachineidentityownerreference(type_ string, id string, name string, ) *Machineidentityownerreference`

NewMachineidentityownerreference instantiates a new Machineidentityownerreference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityownerreferenceWithDefaults

`func NewMachineidentityownerreferenceWithDefaults() *Machineidentityownerreference`

NewMachineidentityownerreferenceWithDefaults instantiates a new Machineidentityownerreference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Machineidentityownerreference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Machineidentityownerreference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Machineidentityownerreference) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *Machineidentityownerreference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Machineidentityownerreference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Machineidentityownerreference) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Machineidentityownerreference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Machineidentityownerreference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Machineidentityownerreference) SetName(v string)`

SetName sets Name field to given value.


### GetIsPrimary

`func (o *Machineidentityownerreference) GetIsPrimary() bool`

GetIsPrimary returns the IsPrimary field if non-nil, zero value otherwise.

### GetIsPrimaryOk

`func (o *Machineidentityownerreference) GetIsPrimaryOk() (*bool, bool)`

GetIsPrimaryOk returns a tuple with the IsPrimary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPrimary

`func (o *Machineidentityownerreference) SetIsPrimary(v bool)`

SetIsPrimary sets IsPrimary field to given value.

### HasIsPrimary

`func (o *Machineidentityownerreference) HasIsPrimary() bool`

HasIsPrimary returns a boolean if a field has been set.


