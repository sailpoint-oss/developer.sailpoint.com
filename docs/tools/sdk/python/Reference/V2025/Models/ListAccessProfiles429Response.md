---
id: v2025-list-access-profiles429-response
title: ListAccessProfiles429Response
pagination_label: ListAccessProfiles429Response
sidebar_label: ListAccessProfiles429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListAccessProfiles429Response', 'V2025ListAccessProfiles429Response'] 
slug: /tools/sdk/go/v2025/models/list-access-profiles429-response
tags: ['SDK', 'Software Development Kit', 'ListAccessProfiles429Response', 'V2025ListAccessProfiles429Response']
---

# ListAccessProfiles429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **map[string]interface{}** | A message describing the error | [optional] 

## Methods

### NewListAccessProfiles429Response

`func NewListAccessProfiles429Response() *ListAccessProfiles429Response`

NewListAccessProfiles429Response instantiates a new ListAccessProfiles429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListAccessProfiles429ResponseWithDefaults

`func NewListAccessProfiles429ResponseWithDefaults() *ListAccessProfiles429Response`

NewListAccessProfiles429ResponseWithDefaults instantiates a new ListAccessProfiles429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListAccessProfiles429Response) GetMessage() map[string]interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListAccessProfiles429Response) GetMessageOk() (*map[string]interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListAccessProfiles429Response) SetMessage(v map[string]interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListAccessProfiles429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


