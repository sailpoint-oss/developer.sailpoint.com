---
id: v1-managedclientrequest
title: Managedclientrequest
pagination_label: Managedclientrequest
sidebar_label: Managedclientrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Managedclientrequest', 'V1Managedclientrequest'] 
slug: /tools/sdk/go/managedclients/models/managedclientrequest
tags: ['SDK', 'Software Development Kit', 'Managedclientrequest', 'V1Managedclientrequest']
---

# Managedclientrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClusterId** | **string** | Cluster ID that the ManagedClient is linked to | 
**Description** | Pointer to **NullableString** | description for the ManagedClient to create | [optional] 
**Name** | Pointer to **NullableString** | name for the ManagedClient to create | [optional] 
**Type** | Pointer to **NullableString** | Type of the ManagedClient (VA, CCG) to create | [optional] 

## Methods

### NewManagedclientrequest

`func NewManagedclientrequest(clusterId string, ) *Managedclientrequest`

NewManagedclientrequest instantiates a new Managedclientrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedclientrequestWithDefaults

`func NewManagedclientrequestWithDefaults() *Managedclientrequest`

NewManagedclientrequestWithDefaults instantiates a new Managedclientrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClusterId

`func (o *Managedclientrequest) GetClusterId() string`

GetClusterId returns the ClusterId field if non-nil, zero value otherwise.

### GetClusterIdOk

`func (o *Managedclientrequest) GetClusterIdOk() (*string, bool)`

GetClusterIdOk returns a tuple with the ClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterId

`func (o *Managedclientrequest) SetClusterId(v string)`

SetClusterId sets ClusterId field to given value.


### GetDescription

`func (o *Managedclientrequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Managedclientrequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Managedclientrequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Managedclientrequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Managedclientrequest) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Managedclientrequest) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetName

`func (o *Managedclientrequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Managedclientrequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Managedclientrequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Managedclientrequest) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Managedclientrequest) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Managedclientrequest) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetType

`func (o *Managedclientrequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Managedclientrequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Managedclientrequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Managedclientrequest) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *Managedclientrequest) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *Managedclientrequest) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil

