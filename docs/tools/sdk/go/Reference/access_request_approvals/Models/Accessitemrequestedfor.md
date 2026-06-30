---
id: v1-accessitemrequestedfor
title: Accessitemrequestedfor
pagination_label: Accessitemrequestedfor
sidebar_label: Accessitemrequestedfor
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessitemrequestedfor', 'V1Accessitemrequestedfor'] 
slug: /tools/sdk/go/accessrequestapprovals/models/accessitemrequestedfor
tags: ['SDK', 'Software Development Kit', 'Accessitemrequestedfor', 'V1Accessitemrequestedfor']
---

# Accessitemrequestedfor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of identity the access item is requested for. | [optional] 
**Id** | Pointer to **string** | ID of identity the access item is requested for. | [optional] 
**Name** | Pointer to **string** | Human-readable display name of identity the access item is requested for. | [optional] 

## Methods

### NewAccessitemrequestedfor

`func NewAccessitemrequestedfor() *Accessitemrequestedfor`

NewAccessitemrequestedfor instantiates a new Accessitemrequestedfor object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessitemrequestedforWithDefaults

`func NewAccessitemrequestedforWithDefaults() *Accessitemrequestedfor`

NewAccessitemrequestedforWithDefaults instantiates a new Accessitemrequestedfor object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Accessitemrequestedfor) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accessitemrequestedfor) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accessitemrequestedfor) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Accessitemrequestedfor) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Accessitemrequestedfor) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessitemrequestedfor) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessitemrequestedfor) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessitemrequestedfor) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Accessitemrequestedfor) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accessitemrequestedfor) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accessitemrequestedfor) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accessitemrequestedfor) HasName() bool`

HasName returns a boolean if a field has been set.


