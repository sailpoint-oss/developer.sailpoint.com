---
id: beta-multi-host-integrations-owner
title: MultiHostIntegrationsOwner
pagination_label: MultiHostIntegrationsOwner
sidebar_label: MultiHostIntegrationsOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultiHostIntegrationsOwner', 'BetaMultiHostIntegrationsOwner'] 
slug: /tools/sdk/go/beta/models/multi-host-integrations-owner
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsOwner', 'BetaMultiHostIntegrationsOwner']
---

# MultiHostIntegrationsOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of object being referenced. | [optional] 
**Id** | Pointer to **string** | Owner identity&#39;s ID. | [optional] 
**Name** | Pointer to **string** | Owner identity&#39;s human-readable display name. | [optional] 

## Methods

### NewMultiHostIntegrationsOwner

`func NewMultiHostIntegrationsOwner() *MultiHostIntegrationsOwner`

NewMultiHostIntegrationsOwner instantiates a new MultiHostIntegrationsOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiHostIntegrationsOwnerWithDefaults

`func NewMultiHostIntegrationsOwnerWithDefaults() *MultiHostIntegrationsOwner`

NewMultiHostIntegrationsOwnerWithDefaults instantiates a new MultiHostIntegrationsOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *MultiHostIntegrationsOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MultiHostIntegrationsOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MultiHostIntegrationsOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *MultiHostIntegrationsOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *MultiHostIntegrationsOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MultiHostIntegrationsOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MultiHostIntegrationsOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MultiHostIntegrationsOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *MultiHostIntegrationsOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MultiHostIntegrationsOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MultiHostIntegrationsOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MultiHostIntegrationsOwner) HasName() bool`

HasName returns a boolean if a field has been set.


