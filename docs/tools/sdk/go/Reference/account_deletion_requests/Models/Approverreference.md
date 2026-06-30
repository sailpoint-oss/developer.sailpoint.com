---
id: v1-approverreference
title: Approverreference
pagination_label: Approverreference
sidebar_label: Approverreference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approverreference', 'V1Approverreference'] 
slug: /tools/sdk/go/accountdeletionrequests/models/approverreference
tags: ['SDK', 'Software Development Kit', 'Approverreference', 'V1Approverreference']
---

# Approverreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of supported DtoType like IDENTITY, MACHINE_IDENTITY etc. | [optional] 
**Type** | Pointer to **string** | Type of Dto | [optional] 
**Name** | Pointer to **string** | Display name of DtoType like IDENTITY, MACHINE_IDENTITY etc | [optional] 

## Methods

### NewApproverreference

`func NewApproverreference() *Approverreference`

NewApproverreference instantiates a new Approverreference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApproverreferenceWithDefaults

`func NewApproverreferenceWithDefaults() *Approverreference`

NewApproverreferenceWithDefaults instantiates a new Approverreference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Approverreference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Approverreference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Approverreference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Approverreference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Approverreference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Approverreference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Approverreference) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Approverreference) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *Approverreference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Approverreference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Approverreference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Approverreference) HasName() bool`

HasName returns a boolean if a field has been set.


