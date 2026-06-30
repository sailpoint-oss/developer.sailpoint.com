---
id: v1-accessitemreviewedby
title: Accessitemreviewedby
pagination_label: Accessitemreviewedby
sidebar_label: Accessitemreviewedby
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessitemreviewedby', 'V1Accessitemreviewedby'] 
slug: /tools/sdk/go/accessrequests/models/accessitemreviewedby
tags: ['SDK', 'Software Development Kit', 'Accessitemreviewedby', 'V1Accessitemreviewedby']
---

# Accessitemreviewedby

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of identity who reviewed the access item request. | [optional] 
**Id** | Pointer to **string** | ID of identity who reviewed the access item request. | [optional] 
**Name** | Pointer to **string** | Human-readable display name of identity who reviewed the access item request. | [optional] 

## Methods

### NewAccessitemreviewedby

`func NewAccessitemreviewedby() *Accessitemreviewedby`

NewAccessitemreviewedby instantiates a new Accessitemreviewedby object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessitemreviewedbyWithDefaults

`func NewAccessitemreviewedbyWithDefaults() *Accessitemreviewedby`

NewAccessitemreviewedbyWithDefaults instantiates a new Accessitemreviewedby object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Accessitemreviewedby) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accessitemreviewedby) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accessitemreviewedby) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Accessitemreviewedby) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Accessitemreviewedby) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessitemreviewedby) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessitemreviewedby) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessitemreviewedby) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Accessitemreviewedby) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accessitemreviewedby) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accessitemreviewedby) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accessitemreviewedby) HasName() bool`

HasName returns a boolean if a field has been set.


