---
id: v1-managedclusterrequest
title: Managedclusterrequest
pagination_label: Managedclusterrequest
sidebar_label: Managedclusterrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Managedclusterrequest', 'V1Managedclusterrequest'] 
slug: /tools/sdk/go/managedclusters/models/managedclusterrequest
tags: ['SDK', 'Software Development Kit', 'Managedclusterrequest', 'V1Managedclusterrequest']
---

# Managedclusterrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | ManagedCluster name | 
**Type** | Pointer to [**Managedclustertypes**](managedclustertypes) |  | [optional] 
**Configuration** | Pointer to **map[string]string** | ManagedProcess configuration map | [optional] 
**Description** | Pointer to **NullableString** | ManagedCluster description | [optional] 

## Methods

### NewManagedclusterrequest

`func NewManagedclusterrequest(name string, ) *Managedclusterrequest`

NewManagedclusterrequest instantiates a new Managedclusterrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedclusterrequestWithDefaults

`func NewManagedclusterrequestWithDefaults() *Managedclusterrequest`

NewManagedclusterrequestWithDefaults instantiates a new Managedclusterrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Managedclusterrequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Managedclusterrequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Managedclusterrequest) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *Managedclusterrequest) GetType() Managedclustertypes`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Managedclusterrequest) GetTypeOk() (*Managedclustertypes, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Managedclusterrequest) SetType(v Managedclustertypes)`

SetType sets Type field to given value.

### HasType

`func (o *Managedclusterrequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetConfiguration

`func (o *Managedclusterrequest) GetConfiguration() map[string]string`

GetConfiguration returns the Configuration field if non-nil, zero value otherwise.

### GetConfigurationOk

`func (o *Managedclusterrequest) GetConfigurationOk() (*map[string]string, bool)`

GetConfigurationOk returns a tuple with the Configuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfiguration

`func (o *Managedclusterrequest) SetConfiguration(v map[string]string)`

SetConfiguration sets Configuration field to given value.

### HasConfiguration

`func (o *Managedclusterrequest) HasConfiguration() bool`

HasConfiguration returns a boolean if a field has been set.

### GetDescription

`func (o *Managedclusterrequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Managedclusterrequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Managedclusterrequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Managedclusterrequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Managedclusterrequest) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Managedclusterrequest) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil

