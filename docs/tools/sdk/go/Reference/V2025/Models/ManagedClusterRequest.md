---
id: managed-cluster-request
title: ManagedClusterRequest
pagination_label: ManagedClusterRequest
sidebar_label: ManagedClusterRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClusterRequest', 'ManagedClusterRequest'] 
slug: /tools/sdk/go//models/managed-cluster-request
tags: ['SDK', 'Software Development Kit', 'ManagedClusterRequest', 'ManagedClusterRequest']
---

# ManagedClusterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | ManagedCluster name | 
**Type** | Pointer to [**ManagedClusterTypes**](managed-cluster-types) |  | [optional] 
**Configuration** | Pointer to **map[string]string** | ManagedProcess configuration map | [optional] 
**Description** | Pointer to **NullableString** | ManagedCluster description | [optional] 

## Methods

### NewManagedClusterRequest

`func NewManagedClusterRequest(name string, ) *ManagedClusterRequest`

NewManagedClusterRequest instantiates a new ManagedClusterRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClusterRequestWithDefaults

`func NewManagedClusterRequestWithDefaults() *ManagedClusterRequest`

NewManagedClusterRequestWithDefaults instantiates a new ManagedClusterRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ManagedClusterRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ManagedClusterRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ManagedClusterRequest) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *ManagedClusterRequest) GetType() ManagedClusterTypes`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ManagedClusterRequest) GetTypeOk() (*ManagedClusterTypes, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ManagedClusterRequest) SetType(v ManagedClusterTypes)`

SetType sets Type field to given value.

### HasType

`func (o *ManagedClusterRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetConfiguration

`func (o *ManagedClusterRequest) GetConfiguration() map[string]string`

GetConfiguration returns the Configuration field if non-nil, zero value otherwise.

### GetConfigurationOk

`func (o *ManagedClusterRequest) GetConfigurationOk() (*map[string]string, bool)`

GetConfigurationOk returns a tuple with the Configuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfiguration

`func (o *ManagedClusterRequest) SetConfiguration(v map[string]string)`

SetConfiguration sets Configuration field to given value.

### HasConfiguration

`func (o *ManagedClusterRequest) HasConfiguration() bool`

HasConfiguration returns a boolean if a field has been set.

### GetDescription

`func (o *ManagedClusterRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ManagedClusterRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ManagedClusterRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ManagedClusterRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *ManagedClusterRequest) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *ManagedClusterRequest) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil

