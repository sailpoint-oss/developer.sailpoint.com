---
id: v1-managedclusterqueue
title: Managedclusterqueue
pagination_label: Managedclusterqueue
sidebar_label: Managedclusterqueue
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Managedclusterqueue', 'V1Managedclusterqueue'] 
slug: /tools/sdk/go/managedclusters/models/managedclusterqueue
tags: ['SDK', 'Software Development Kit', 'Managedclusterqueue', 'V1Managedclusterqueue']
---

# Managedclusterqueue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | ManagedCluster queue name | [optional] 
**Region** | Pointer to **string** | ManagedCluster queue aws region | [optional] 

## Methods

### NewManagedclusterqueue

`func NewManagedclusterqueue() *Managedclusterqueue`

NewManagedclusterqueue instantiates a new Managedclusterqueue object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedclusterqueueWithDefaults

`func NewManagedclusterqueueWithDefaults() *Managedclusterqueue`

NewManagedclusterqueueWithDefaults instantiates a new Managedclusterqueue object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Managedclusterqueue) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Managedclusterqueue) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Managedclusterqueue) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Managedclusterqueue) HasName() bool`

HasName returns a boolean if a field has been set.

### GetRegion

`func (o *Managedclusterqueue) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *Managedclusterqueue) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *Managedclusterqueue) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *Managedclusterqueue) HasRegion() bool`

HasRegion returns a boolean if a field has been set.


