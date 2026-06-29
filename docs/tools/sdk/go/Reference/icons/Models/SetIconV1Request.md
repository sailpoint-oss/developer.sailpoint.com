---
id: v1-set-icon-v1-request
title: SetIconV1Request
pagination_label: SetIconV1Request
sidebar_label: SetIconV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SetIconV1Request', 'V1SetIconV1Request'] 
slug: /tools/sdk/go/icons/models/set-icon-v1-request
tags: ['SDK', 'Software Development Kit', 'SetIconV1Request', 'V1SetIconV1Request']
---

# SetIconV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Image** | ***os.File** | file with icon. Allowed mime-types ['image/png', 'image/jpeg'] | 

## Methods

### NewSetIconV1Request

`func NewSetIconV1Request(image *os.File, ) *SetIconV1Request`

NewSetIconV1Request instantiates a new SetIconV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetIconV1RequestWithDefaults

`func NewSetIconV1RequestWithDefaults() *SetIconV1Request`

NewSetIconV1RequestWithDefaults instantiates a new SetIconV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetImage

`func (o *SetIconV1Request) GetImage() *os.File`

GetImage returns the Image field if non-nil, zero value otherwise.

### GetImageOk

`func (o *SetIconV1Request) GetImageOk() (**os.File, bool)`

GetImageOk returns a tuple with the Image field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImage

`func (o *SetIconV1Request) SetImage(v *os.File)`

SetImage sets Image field to given value.



