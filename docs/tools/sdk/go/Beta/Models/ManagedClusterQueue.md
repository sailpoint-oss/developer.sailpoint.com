---
id: managed-cluster-queue
title: ManagedClusterQueue
pagination_label: ManagedClusterQueue
sidebar_label: ManagedClusterQueue
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ManagedClusterQueue'] 
slug: /tools/sdk/go/beta/models/managed-cluster-queue
tags: ['SDK', 'Software Development Kit', 'ManagedClusterQueue']
---

# ManagedClusterQueue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **string** | ManagedCluster queue name | [optional] 
**Region** |  Pointer to **string** | ManagedCluster queue aws region | [optional] 

## Methods

### NewManagedClusterQueue

`func NewManagedClusterQueue() *ManagedClusterQueue`

NewManagedClusterQueue instantiates a new ManagedClusterQueue object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClusterQueueWithDefaults

`func NewManagedClusterQueueWithDefaults() *ManagedClusterQueue`

NewManagedClusterQueueWithDefaults instantiates a new ManagedClusterQueue object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ManagedClusterQueue) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ManagedClusterQueue) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ManagedClusterQueue) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ManagedClusterQueue) HasName() bool`

HasName returns a boolean if a field has been set.

### GetRegion

`func (o *ManagedClusterQueue) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *ManagedClusterQueue) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *ManagedClusterQueue) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *ManagedClusterQueue) HasRegion() bool`

HasRegion returns a boolean if a field has been set.


[[Back to top]](#) 


