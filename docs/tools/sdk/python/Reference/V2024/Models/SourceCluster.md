---
id: v2024-source-cluster
title: SourceCluster
pagination_label: SourceCluster
sidebar_label: SourceCluster
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceCluster', 'V2024SourceCluster'] 
slug: /tools/sdk/go/v2024/models/source-cluster
tags: ['SDK', 'Software Development Kit', 'SourceCluster', 'V2024SourceCluster']
---

# SourceCluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Type of object being referenced. | 
**Id** | **string** | Cluster ID. | 
**Name** | **string** | Cluster's human-readable display name. | 

## Methods

### NewSourceCluster

`func NewSourceCluster(type_ string, id string, name string, ) *SourceCluster`

NewSourceCluster instantiates a new SourceCluster object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceClusterWithDefaults

`func NewSourceClusterWithDefaults() *SourceCluster`

NewSourceClusterWithDefaults instantiates a new SourceCluster object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourceCluster) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceCluster) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceCluster) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *SourceCluster) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceCluster) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceCluster) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *SourceCluster) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceCluster) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceCluster) SetName(v string)`

SetName sets Name field to given value.



