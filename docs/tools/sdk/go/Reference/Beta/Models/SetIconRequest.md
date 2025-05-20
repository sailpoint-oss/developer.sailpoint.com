---
id: beta-set-icon-request
title: SetIconRequest
pagination_label: SetIconRequest
sidebar_label: SetIconRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SetIconRequest', 'BetaSetIconRequest'] 
slug: /tools/sdk/go/beta/models/set-icon-request
tags: ['SDK', 'Software Development Kit', 'SetIconRequest', 'BetaSetIconRequest']
---

# SetIconRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Image** | ***os.File** | file with icon. Allowed mime-types ['image/png', 'image/jpeg'] | 

## Methods

### NewSetIconRequest

`func NewSetIconRequest(image *os.File, ) *SetIconRequest`

NewSetIconRequest instantiates a new SetIconRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetIconRequestWithDefaults

`func NewSetIconRequestWithDefaults() *SetIconRequest`

NewSetIconRequestWithDefaults instantiates a new SetIconRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetImage

`func (o *SetIconRequest) GetImage() *os.File`

GetImage returns the Image field if non-nil, zero value otherwise.

### GetImageOk

`func (o *SetIconRequest) GetImageOk() (**os.File, bool)`

GetImageOk returns a tuple with the Image field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImage

`func (o *SetIconRequest) SetImage(v *os.File)`

SetImage sets Image field to given value.



