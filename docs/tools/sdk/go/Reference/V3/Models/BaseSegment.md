---
id: base-segment
title: BaseSegment
pagination_label: BaseSegment
sidebar_label: BaseSegment
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BaseSegment', 'BaseSegment'] 
slug: /tools/sdk/go/v3/models/base-segment
tags: ['SDK', 'Software Development Kit', 'BaseSegment', 'BaseSegment']
---

# BaseSegment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Segment&#39;s unique ID. | [optional] 
**Name** | Pointer to **string** | Segment&#39;s display name. | [optional] 

## Methods

### NewBaseSegment

`func NewBaseSegment() *BaseSegment`

NewBaseSegment instantiates a new BaseSegment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseSegmentWithDefaults

`func NewBaseSegmentWithDefaults() *BaseSegment`

NewBaseSegmentWithDefaults instantiates a new BaseSegment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BaseSegment) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BaseSegment) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BaseSegment) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BaseSegment) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *BaseSegment) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BaseSegment) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BaseSegment) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BaseSegment) HasName() bool`

HasName returns a boolean if a field has been set.


