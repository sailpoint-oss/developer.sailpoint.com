---
id: v1-accessitemrequester
title: Accessitemrequester
pagination_label: Accessitemrequester
sidebar_label: Accessitemrequester
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessitemrequester', 'V1Accessitemrequester'] 
slug: /tools/sdk/go/accessrequests/models/accessitemrequester
tags: ['SDK', 'Software Development Kit', 'Accessitemrequester', 'V1Accessitemrequester']
---

# Accessitemrequester

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Access item requester's DTO type. | [optional] 
**Id** | Pointer to **string** | Access item requester's identity ID. | [optional] 
**Name** | Pointer to **string** | Access item owner's human-readable display name. | [optional] 

## Methods

### NewAccessitemrequester

`func NewAccessitemrequester() *Accessitemrequester`

NewAccessitemrequester instantiates a new Accessitemrequester object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessitemrequesterWithDefaults

`func NewAccessitemrequesterWithDefaults() *Accessitemrequester`

NewAccessitemrequesterWithDefaults instantiates a new Accessitemrequester object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Accessitemrequester) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accessitemrequester) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accessitemrequester) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Accessitemrequester) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Accessitemrequester) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessitemrequester) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessitemrequester) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessitemrequester) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Accessitemrequester) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accessitemrequester) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accessitemrequester) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accessitemrequester) HasName() bool`

HasName returns a boolean if a field has been set.


