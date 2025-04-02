---
id: managed-client-request
title: ManagedClientRequest
pagination_label: ManagedClientRequest
sidebar_label: ManagedClientRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClientRequest', 'ManagedClientRequest'] 
slug: /tools/sdk/go//models/managed-client-request
tags: ['SDK', 'Software Development Kit', 'ManagedClientRequest', 'ManagedClientRequest']
---

# ManagedClientRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClusterId** | **string** | Cluster ID that the ManagedClient is linked to | 
**Description** | Pointer to **NullableString** | description for the ManagedClient to create | [optional] 
**Name** | Pointer to **NullableString** | name for the ManagedClient to create | [optional] 
**Type** | Pointer to **NullableString** | Type of the ManagedClient (VA, CCG) to create | [optional] 

## Methods

### NewManagedClientRequest

`func NewManagedClientRequest(clusterId string, ) *ManagedClientRequest`

NewManagedClientRequest instantiates a new ManagedClientRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClientRequestWithDefaults

`func NewManagedClientRequestWithDefaults() *ManagedClientRequest`

NewManagedClientRequestWithDefaults instantiates a new ManagedClientRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClusterId

`func (o *ManagedClientRequest) GetClusterId() string`

GetClusterId returns the ClusterId field if non-nil, zero value otherwise.

### GetClusterIdOk

`func (o *ManagedClientRequest) GetClusterIdOk() (*string, bool)`

GetClusterIdOk returns a tuple with the ClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterId

`func (o *ManagedClientRequest) SetClusterId(v string)`

SetClusterId sets ClusterId field to given value.


### GetDescription

`func (o *ManagedClientRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ManagedClientRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ManagedClientRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ManagedClientRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *ManagedClientRequest) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *ManagedClientRequest) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetName

`func (o *ManagedClientRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ManagedClientRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ManagedClientRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ManagedClientRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *ManagedClientRequest) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *ManagedClientRequest) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetType

`func (o *ManagedClientRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ManagedClientRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ManagedClientRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ManagedClientRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *ManagedClientRequest) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *ManagedClientRequest) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil

