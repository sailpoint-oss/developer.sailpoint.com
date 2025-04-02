---
id: kba-auth-response
title: KbaAuthResponse
pagination_label: KbaAuthResponse
sidebar_label: KbaAuthResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'KbaAuthResponse', 'KbaAuthResponse'] 
slug: /tools/sdk/go/v3/models/kba-auth-response
tags: ['SDK', 'Software Development Kit', 'KbaAuthResponse', 'KbaAuthResponse']
---

# KbaAuthResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**KbaAuthResponseItems** | Pointer to [**[]KbaAuthResponseItem**](kba-auth-response-item) |  | [optional] 
**Status** | Pointer to **string** | MFA Authentication status | [optional] 

## Methods

### NewKbaAuthResponse

`func NewKbaAuthResponse() *KbaAuthResponse`

NewKbaAuthResponse instantiates a new KbaAuthResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKbaAuthResponseWithDefaults

`func NewKbaAuthResponseWithDefaults() *KbaAuthResponse`

NewKbaAuthResponseWithDefaults instantiates a new KbaAuthResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKbaAuthResponseItems

`func (o *KbaAuthResponse) GetKbaAuthResponseItems() []KbaAuthResponseItem`

GetKbaAuthResponseItems returns the KbaAuthResponseItems field if non-nil, zero value otherwise.

### GetKbaAuthResponseItemsOk

`func (o *KbaAuthResponse) GetKbaAuthResponseItemsOk() (*[]KbaAuthResponseItem, bool)`

GetKbaAuthResponseItemsOk returns a tuple with the KbaAuthResponseItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKbaAuthResponseItems

`func (o *KbaAuthResponse) SetKbaAuthResponseItems(v []KbaAuthResponseItem)`

SetKbaAuthResponseItems sets KbaAuthResponseItems field to given value.

### HasKbaAuthResponseItems

`func (o *KbaAuthResponse) HasKbaAuthResponseItems() bool`

HasKbaAuthResponseItems returns a boolean if a field has been set.

### GetStatus

`func (o *KbaAuthResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *KbaAuthResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *KbaAuthResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *KbaAuthResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


