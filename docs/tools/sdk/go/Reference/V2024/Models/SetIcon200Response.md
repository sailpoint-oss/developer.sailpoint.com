---
id: v2024-set-icon200-response
title: SetIcon200Response
pagination_label: SetIcon200Response
sidebar_label: SetIcon200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SetIcon200Response', 'V2024SetIcon200Response'] 
slug: /tools/sdk/go/v2024/models/set-icon200-response
tags: ['SDK', 'Software Development Kit', 'SetIcon200Response', 'V2024SetIcon200Response']
---

# SetIcon200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Icon** | Pointer to **string** | url to file with icon | [optional] 

## Methods

### NewSetIcon200Response

`func NewSetIcon200Response() *SetIcon200Response`

NewSetIcon200Response instantiates a new SetIcon200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetIcon200ResponseWithDefaults

`func NewSetIcon200ResponseWithDefaults() *SetIcon200Response`

NewSetIcon200ResponseWithDefaults instantiates a new SetIcon200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIcon

`func (o *SetIcon200Response) GetIcon() string`

GetIcon returns the Icon field if non-nil, zero value otherwise.

### GetIconOk

`func (o *SetIcon200Response) GetIconOk() (*string, bool)`

GetIconOk returns a tuple with the Icon field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIcon

`func (o *SetIcon200Response) SetIcon(v string)`

SetIcon sets Icon field to given value.

### HasIcon

`func (o *SetIcon200Response) HasIcon() bool`

HasIcon returns a boolean if a field has been set.


