---
id: v1-roleminingsessionstatus
title: Roleminingsessionstatus
pagination_label: Roleminingsessionstatus
sidebar_label: Roleminingsessionstatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingsessionstatus', 'V1Roleminingsessionstatus'] 
slug: /tools/sdk/go/iairolemining/models/roleminingsessionstatus
tags: ['SDK', 'Software Development Kit', 'Roleminingsessionstatus', 'V1Roleminingsessionstatus']
---

# Roleminingsessionstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to [**Roleminingsessionstate**](roleminingsessionstate) |  | [optional] 

## Methods

### NewRoleminingsessionstatus

`func NewRoleminingsessionstatus() *Roleminingsessionstatus`

NewRoleminingsessionstatus instantiates a new Roleminingsessionstatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingsessionstatusWithDefaults

`func NewRoleminingsessionstatusWithDefaults() *Roleminingsessionstatus`

NewRoleminingsessionstatusWithDefaults instantiates a new Roleminingsessionstatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *Roleminingsessionstatus) GetState() Roleminingsessionstate`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Roleminingsessionstatus) GetStateOk() (*Roleminingsessionstate, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Roleminingsessionstatus) SetState(v Roleminingsessionstate)`

SetState sets State field to given value.

### HasState

`func (o *Roleminingsessionstatus) HasState() bool`

HasState returns a boolean if a field has been set.


