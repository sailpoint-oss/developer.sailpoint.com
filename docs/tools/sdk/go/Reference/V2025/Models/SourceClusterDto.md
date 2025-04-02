---
id: source-cluster-dto
title: SourceClusterDto
pagination_label: SourceClusterDto
sidebar_label: SourceClusterDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceClusterDto', 'SourceClusterDto'] 
slug: /tools/sdk/go//models/source-cluster-dto
tags: ['SDK', 'Software Development Kit', 'SourceClusterDto', 'SourceClusterDto']
---

# SourceClusterDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Source cluster DTO type. | [optional] 
**Id** | Pointer to **string** | Source cluster ID. | [optional] 
**Name** | Pointer to **string** | Source cluster display name. | [optional] 

## Methods

### NewSourceClusterDto

`func NewSourceClusterDto() *SourceClusterDto`

NewSourceClusterDto instantiates a new SourceClusterDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceClusterDtoWithDefaults

`func NewSourceClusterDtoWithDefaults() *SourceClusterDto`

NewSourceClusterDtoWithDefaults instantiates a new SourceClusterDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourceClusterDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceClusterDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceClusterDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceClusterDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SourceClusterDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceClusterDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceClusterDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceClusterDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SourceClusterDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceClusterDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceClusterDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceClusterDto) HasName() bool`

HasName returns a boolean if a field has been set.


