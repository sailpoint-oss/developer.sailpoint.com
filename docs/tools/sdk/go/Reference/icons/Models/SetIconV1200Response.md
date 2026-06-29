---
id: v1-set-icon-v1200-response
title: SetIconV1200Response
pagination_label: SetIconV1200Response
sidebar_label: SetIconV1200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SetIconV1200Response', 'V1SetIconV1200Response'] 
slug: /tools/sdk/go/icons/models/set-icon-v1200-response
tags: ['SDK', 'Software Development Kit', 'SetIconV1200Response', 'V1SetIconV1200Response']
---

# SetIconV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Icon** | Pointer to **string** | url to file with icon | [optional] 

## Methods

### NewSetIconV1200Response

`func NewSetIconV1200Response() *SetIconV1200Response`

NewSetIconV1200Response instantiates a new SetIconV1200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetIconV1200ResponseWithDefaults

`func NewSetIconV1200ResponseWithDefaults() *SetIconV1200Response`

NewSetIconV1200ResponseWithDefaults instantiates a new SetIconV1200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIcon

`func (o *SetIconV1200Response) GetIcon() string`

GetIcon returns the Icon field if non-nil, zero value otherwise.

### GetIconOk

`func (o *SetIconV1200Response) GetIconOk() (*string, bool)`

GetIconOk returns a tuple with the Icon field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIcon

`func (o *SetIconV1200Response) SetIcon(v string)`

SetIcon sets Icon field to given value.

### HasIcon

`func (o *SetIconV1200Response) HasIcon() bool`

HasIcon returns a boolean if a field has been set.


