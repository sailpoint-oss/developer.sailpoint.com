---
id: beta-multi-host-sources-schemas-inner
title: MultiHostSourcesSchemasInner
pagination_label: MultiHostSourcesSchemasInner
sidebar_label: MultiHostSourcesSchemasInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultiHostSourcesSchemasInner', 'BetaMultiHostSourcesSchemasInner'] 
slug: /tools/sdk/go/beta/models/multi-host-sources-schemas-inner
tags: ['SDK', 'Software Development Kit', 'MultiHostSourcesSchemasInner', 'BetaMultiHostSourcesSchemasInner']
---

# MultiHostSourcesSchemasInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of object being referenced. | [optional] 
**Id** | Pointer to **string** | Schema ID. | [optional] 
**Name** | Pointer to **string** | Schema&#39;s human-readable display name. | [optional] 

## Methods

### NewMultiHostSourcesSchemasInner

`func NewMultiHostSourcesSchemasInner() *MultiHostSourcesSchemasInner`

NewMultiHostSourcesSchemasInner instantiates a new MultiHostSourcesSchemasInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiHostSourcesSchemasInnerWithDefaults

`func NewMultiHostSourcesSchemasInnerWithDefaults() *MultiHostSourcesSchemasInner`

NewMultiHostSourcesSchemasInnerWithDefaults instantiates a new MultiHostSourcesSchemasInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *MultiHostSourcesSchemasInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MultiHostSourcesSchemasInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MultiHostSourcesSchemasInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *MultiHostSourcesSchemasInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *MultiHostSourcesSchemasInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MultiHostSourcesSchemasInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MultiHostSourcesSchemasInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MultiHostSourcesSchemasInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *MultiHostSourcesSchemasInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MultiHostSourcesSchemasInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MultiHostSourcesSchemasInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MultiHostSourcesSchemasInner) HasName() bool`

HasName returns a boolean if a field has been set.


