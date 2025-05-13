---
id: beta-multi-host-integrations-cluster
title: MultiHostIntegrationsCluster
pagination_label: MultiHostIntegrationsCluster
sidebar_label: MultiHostIntegrationsCluster
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultiHostIntegrationsCluster', 'BetaMultiHostIntegrationsCluster'] 
slug: /tools/sdk/go/beta/models/multi-host-integrations-cluster
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsCluster', 'BetaMultiHostIntegrationsCluster']
---

# MultiHostIntegrationsCluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Type of object being referenced. | 
**Id** | **string** | Cluster ID. | 
**Name** | **string** | Cluster's human-readable display name. | 

## Methods

### NewMultiHostIntegrationsCluster

`func NewMultiHostIntegrationsCluster(type_ string, id string, name string, ) *MultiHostIntegrationsCluster`

NewMultiHostIntegrationsCluster instantiates a new MultiHostIntegrationsCluster object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiHostIntegrationsClusterWithDefaults

`func NewMultiHostIntegrationsClusterWithDefaults() *MultiHostIntegrationsCluster`

NewMultiHostIntegrationsClusterWithDefaults instantiates a new MultiHostIntegrationsCluster object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *MultiHostIntegrationsCluster) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MultiHostIntegrationsCluster) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MultiHostIntegrationsCluster) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *MultiHostIntegrationsCluster) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MultiHostIntegrationsCluster) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MultiHostIntegrationsCluster) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *MultiHostIntegrationsCluster) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MultiHostIntegrationsCluster) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MultiHostIntegrationsCluster) SetName(v string)`

SetName sets Name field to given value.



