---
id: v2024-get-launchers200-response
title: GetLaunchers200Response
pagination_label: GetLaunchers200Response
sidebar_label: GetLaunchers200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetLaunchers200Response', 'V2024GetLaunchers200Response'] 
slug: /tools/sdk/go/v2024/models/get-launchers200-response
tags: ['SDK', 'Software Development Kit', 'GetLaunchers200Response', 'V2024GetLaunchers200Response']
---

# GetLaunchers200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Next** | Pointer to **string** | Pagination marker | [optional] 
**Items** | Pointer to [**[]Launcher**](launcher) |  | [optional] 

## Methods

### NewGetLaunchers200Response

`func NewGetLaunchers200Response() *GetLaunchers200Response`

NewGetLaunchers200Response instantiates a new GetLaunchers200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetLaunchers200ResponseWithDefaults

`func NewGetLaunchers200ResponseWithDefaults() *GetLaunchers200Response`

NewGetLaunchers200ResponseWithDefaults instantiates a new GetLaunchers200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNext

`func (o *GetLaunchers200Response) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *GetLaunchers200Response) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *GetLaunchers200Response) SetNext(v string)`

SetNext sets Next field to given value.

### HasNext

`func (o *GetLaunchers200Response) HasNext() bool`

HasNext returns a boolean if a field has been set.

### GetItems

`func (o *GetLaunchers200Response) GetItems() []Launcher`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *GetLaunchers200Response) GetItemsOk() (*[]Launcher, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *GetLaunchers200Response) SetItems(v []Launcher)`

SetItems sets Items field to given value.

### HasItems

`func (o *GetLaunchers200Response) HasItems() bool`

HasItems returns a boolean if a field has been set.


