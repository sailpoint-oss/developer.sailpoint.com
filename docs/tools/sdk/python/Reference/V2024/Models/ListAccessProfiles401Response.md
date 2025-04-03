---
id: v2024-list-access-profiles401-response
title: ListAccessProfiles401Response
pagination_label: ListAccessProfiles401Response
sidebar_label: ListAccessProfiles401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListAccessProfiles401Response', 'V2024ListAccessProfiles401Response'] 
slug: /tools/sdk/go/v2024/models/list-access-profiles401-response
tags: ['SDK', 'Software Development Kit', 'ListAccessProfiles401Response', 'V2024ListAccessProfiles401Response']
---

# ListAccessProfiles401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **map[string]interface{}** | A message describing the error | [optional] 

## Methods

### NewListAccessProfiles401Response

`func NewListAccessProfiles401Response() *ListAccessProfiles401Response`

NewListAccessProfiles401Response instantiates a new ListAccessProfiles401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListAccessProfiles401ResponseWithDefaults

`func NewListAccessProfiles401ResponseWithDefaults() *ListAccessProfiles401Response`

NewListAccessProfiles401ResponseWithDefaults instantiates a new ListAccessProfiles401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *ListAccessProfiles401Response) GetError() map[string]interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ListAccessProfiles401Response) GetErrorOk() (*map[string]interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ListAccessProfiles401Response) SetError(v map[string]interface{})`

SetError sets Error field to given value.

### HasError

`func (o *ListAccessProfiles401Response) HasError() bool`

HasError returns a boolean if a field has been set.


