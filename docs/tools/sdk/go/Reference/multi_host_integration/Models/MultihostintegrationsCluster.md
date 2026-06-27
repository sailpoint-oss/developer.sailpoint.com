---
id: v1-multihostintegrations-cluster
title: MultihostintegrationsCluster
pagination_label: MultihostintegrationsCluster
sidebar_label: MultihostintegrationsCluster
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultihostintegrationsCluster', 'V1MultihostintegrationsCluster'] 
slug: /tools/sdk/go/multihostintegration/models/multihostintegrations-cluster
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsCluster', 'V1MultihostintegrationsCluster']
---

# MultihostintegrationsCluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Type of object being referenced. | 
**Id** | **string** | Cluster ID. | 
**Name** | **string** | Cluster's human-readable display name. | 

## Methods

### NewMultihostintegrationsCluster

`func NewMultihostintegrationsCluster(type_ string, id string, name string, ) *MultihostintegrationsCluster`

NewMultihostintegrationsCluster instantiates a new MultihostintegrationsCluster object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultihostintegrationsClusterWithDefaults

`func NewMultihostintegrationsClusterWithDefaults() *MultihostintegrationsCluster`

NewMultihostintegrationsClusterWithDefaults instantiates a new MultihostintegrationsCluster object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *MultihostintegrationsCluster) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MultihostintegrationsCluster) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MultihostintegrationsCluster) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *MultihostintegrationsCluster) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MultihostintegrationsCluster) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MultihostintegrationsCluster) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *MultihostintegrationsCluster) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MultihostintegrationsCluster) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MultihostintegrationsCluster) SetName(v string)`

SetName sets Name field to given value.



