---
id: v1-managedclustertype
title: Managedclustertype
pagination_label: Managedclustertype
sidebar_label: Managedclustertype
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Managedclustertype', 'V1Managedclustertype'] 
slug: /tools/sdk/go/managedclustertypes/models/managedclustertype
tags: ['SDK', 'Software Development Kit', 'Managedclustertype', 'V1Managedclustertype']
---

# Managedclustertype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ManagedClusterType ID | [optional] [readonly] 
**Type** | **string** | ManagedClusterType type name | 
**Pod** | **string** | ManagedClusterType pod | 
**Org** | **string** | ManagedClusterType org | 
**ManagedProcessIds** | Pointer to **[]string** | List of processes for the cluster type | [optional] 

## Methods

### NewManagedclustertype

`func NewManagedclustertype(type_ string, pod string, org string, ) *Managedclustertype`

NewManagedclustertype instantiates a new Managedclustertype object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedclustertypeWithDefaults

`func NewManagedclustertypeWithDefaults() *Managedclustertype`

NewManagedclustertypeWithDefaults instantiates a new Managedclustertype object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Managedclustertype) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Managedclustertype) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Managedclustertype) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Managedclustertype) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Managedclustertype) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Managedclustertype) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Managedclustertype) SetType(v string)`

SetType sets Type field to given value.


### GetPod

`func (o *Managedclustertype) GetPod() string`

GetPod returns the Pod field if non-nil, zero value otherwise.

### GetPodOk

`func (o *Managedclustertype) GetPodOk() (*string, bool)`

GetPodOk returns a tuple with the Pod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPod

`func (o *Managedclustertype) SetPod(v string)`

SetPod sets Pod field to given value.


### GetOrg

`func (o *Managedclustertype) GetOrg() string`

GetOrg returns the Org field if non-nil, zero value otherwise.

### GetOrgOk

`func (o *Managedclustertype) GetOrgOk() (*string, bool)`

GetOrgOk returns a tuple with the Org field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrg

`func (o *Managedclustertype) SetOrg(v string)`

SetOrg sets Org field to given value.


### GetManagedProcessIds

`func (o *Managedclustertype) GetManagedProcessIds() []string`

GetManagedProcessIds returns the ManagedProcessIds field if non-nil, zero value otherwise.

### GetManagedProcessIdsOk

`func (o *Managedclustertype) GetManagedProcessIdsOk() (*[]string, bool)`

GetManagedProcessIdsOk returns a tuple with the ManagedProcessIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedProcessIds

`func (o *Managedclustertype) SetManagedProcessIds(v []string)`

SetManagedProcessIds sets ManagedProcessIds field to given value.

### HasManagedProcessIds

`func (o *Managedclustertype) HasManagedProcessIds() bool`

HasManagedProcessIds returns a boolean if a field has been set.


