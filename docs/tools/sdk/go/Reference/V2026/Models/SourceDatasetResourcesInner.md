---
id: v2026-source-dataset-resources-inner
title: SourceDatasetResourcesInner
pagination_label: SourceDatasetResourcesInner
sidebar_label: SourceDatasetResourcesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceDatasetResourcesInner', 'V2026SourceDatasetResourcesInner'] 
slug: /tools/sdk/go/v2026/models/source-dataset-resources-inner
tags: ['SDK', 'Software Development Kit', 'SourceDatasetResourcesInner', 'V2026SourceDatasetResourcesInner']
---

# SourceDatasetResourcesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Resource identifier. | [optional] 
**Name** | Pointer to **string** | Display name of the resource. | [optional] 

## Methods

### NewSourceDatasetResourcesInner

`func NewSourceDatasetResourcesInner() *SourceDatasetResourcesInner`

NewSourceDatasetResourcesInner instantiates a new SourceDatasetResourcesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceDatasetResourcesInnerWithDefaults

`func NewSourceDatasetResourcesInnerWithDefaults() *SourceDatasetResourcesInner`

NewSourceDatasetResourcesInnerWithDefaults instantiates a new SourceDatasetResourcesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceDatasetResourcesInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceDatasetResourcesInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceDatasetResourcesInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceDatasetResourcesInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SourceDatasetResourcesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceDatasetResourcesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceDatasetResourcesInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceDatasetResourcesInner) HasName() bool`

HasName returns a boolean if a field has been set.


