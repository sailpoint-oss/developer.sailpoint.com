---
id: v1-workgroupconnectiondto
title: Workgroupconnectiondto
pagination_label: Workgroupconnectiondto
sidebar_label: Workgroupconnectiondto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workgroupconnectiondto', 'V1Workgroupconnectiondto'] 
slug: /tools/sdk/go/governancegroups/models/workgroupconnectiondto
tags: ['SDK', 'Software Development Kit', 'Workgroupconnectiondto', 'V1Workgroupconnectiondto']
---

# Workgroupconnectiondto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Object** | Pointer to [**WorkgroupconnectiondtoObject**](workgroupconnectiondto-object) |  | [optional] 
**ConnectionType** | Pointer to **string** | Connection Type. | [optional] 

## Methods

### NewWorkgroupconnectiondto

`func NewWorkgroupconnectiondto() *Workgroupconnectiondto`

NewWorkgroupconnectiondto instantiates a new Workgroupconnectiondto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkgroupconnectiondtoWithDefaults

`func NewWorkgroupconnectiondtoWithDefaults() *Workgroupconnectiondto`

NewWorkgroupconnectiondtoWithDefaults instantiates a new Workgroupconnectiondto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObject

`func (o *Workgroupconnectiondto) GetObject() WorkgroupconnectiondtoObject`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *Workgroupconnectiondto) GetObjectOk() (*WorkgroupconnectiondtoObject, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *Workgroupconnectiondto) SetObject(v WorkgroupconnectiondtoObject)`

SetObject sets Object field to given value.

### HasObject

`func (o *Workgroupconnectiondto) HasObject() bool`

HasObject returns a boolean if a field has been set.

### GetConnectionType

`func (o *Workgroupconnectiondto) GetConnectionType() string`

GetConnectionType returns the ConnectionType field if non-nil, zero value otherwise.

### GetConnectionTypeOk

`func (o *Workgroupconnectiondto) GetConnectionTypeOk() (*string, bool)`

GetConnectionTypeOk returns a tuple with the ConnectionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionType

`func (o *Workgroupconnectiondto) SetConnectionType(v string)`

SetConnectionType sets ConnectionType field to given value.

### HasConnectionType

`func (o *Workgroupconnectiondto) HasConnectionType() bool`

HasConnectionType returns a boolean if a field has been set.


