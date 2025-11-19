---
id: v2025-managed-cluster-type
title: ManagedClusterType
pagination_label: ManagedClusterType
sidebar_label: ManagedClusterType
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClusterType', 'V2025ManagedClusterType'] 
slug: /tools/sdk/go/v2025/models/managed-cluster-type
tags: ['SDK', 'Software Development Kit', 'ManagedClusterType', 'V2025ManagedClusterType']
---

# ManagedClusterType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ManagedClusterType ID | [optional] [readonly] 
**Type** | **string** | ManagedClusterType type name | 
**Pod** | **string** | ManagedClusterType pod | 
**Org** | **string** | ManagedClusterType org | 
**ManagedProcessIds** | Pointer to **[]string** | List of processes for the cluster type | [optional] 

## Methods

### NewManagedClusterType

`func NewManagedClusterType(type_ string, pod string, org string, ) *ManagedClusterType`

NewManagedClusterType instantiates a new ManagedClusterType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClusterTypeWithDefaults

`func NewManagedClusterTypeWithDefaults() *ManagedClusterType`

NewManagedClusterTypeWithDefaults instantiates a new ManagedClusterType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ManagedClusterType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ManagedClusterType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ManagedClusterType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ManagedClusterType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *ManagedClusterType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ManagedClusterType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ManagedClusterType) SetType(v string)`

SetType sets Type field to given value.


### GetPod

`func (o *ManagedClusterType) GetPod() string`

GetPod returns the Pod field if non-nil, zero value otherwise.

### GetPodOk

`func (o *ManagedClusterType) GetPodOk() (*string, bool)`

GetPodOk returns a tuple with the Pod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPod

`func (o *ManagedClusterType) SetPod(v string)`

SetPod sets Pod field to given value.


### GetOrg

`func (o *ManagedClusterType) GetOrg() string`

GetOrg returns the Org field if non-nil, zero value otherwise.

### GetOrgOk

`func (o *ManagedClusterType) GetOrgOk() (*string, bool)`

GetOrgOk returns a tuple with the Org field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrg

`func (o *ManagedClusterType) SetOrg(v string)`

SetOrg sets Org field to given value.


### GetManagedProcessIds

`func (o *ManagedClusterType) GetManagedProcessIds() []string`

GetManagedProcessIds returns the ManagedProcessIds field if non-nil, zero value otherwise.

### GetManagedProcessIdsOk

`func (o *ManagedClusterType) GetManagedProcessIdsOk() (*[]string, bool)`

GetManagedProcessIdsOk returns a tuple with the ManagedProcessIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedProcessIds

`func (o *ManagedClusterType) SetManagedProcessIds(v []string)`

SetManagedProcessIds sets ManagedProcessIds field to given value.

### HasManagedProcessIds

`func (o *ManagedClusterType) HasManagedProcessIds() bool`

HasManagedProcessIds returns a boolean if a field has been set.


