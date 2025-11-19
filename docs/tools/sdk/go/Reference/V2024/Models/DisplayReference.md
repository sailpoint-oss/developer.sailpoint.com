---
id: v2024-display-reference
title: DisplayReference
pagination_label: DisplayReference
sidebar_label: DisplayReference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DisplayReference', 'V2024DisplayReference'] 
slug: /tools/sdk/go/v2024/models/display-reference
tags: ['SDK', 'Software Development Kit', 'DisplayReference', 'V2024DisplayReference']
---

# DisplayReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique ID of the referenced object. | [optional] 
**Name** | Pointer to **string** | The human readable name of the referenced object. | [optional] 
**DisplayName** | Pointer to **string** |  | [optional] 

## Methods

### NewDisplayReference

`func NewDisplayReference() *DisplayReference`

NewDisplayReference instantiates a new DisplayReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDisplayReferenceWithDefaults

`func NewDisplayReferenceWithDefaults() *DisplayReference`

NewDisplayReferenceWithDefaults instantiates a new DisplayReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DisplayReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DisplayReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DisplayReference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DisplayReference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *DisplayReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DisplayReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DisplayReference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DisplayReference) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *DisplayReference) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *DisplayReference) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *DisplayReference) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *DisplayReference) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.


