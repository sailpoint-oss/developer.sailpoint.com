---
id: v2025-access-request-response1
title: AccessRequestResponse1
pagination_label: AccessRequestResponse1
sidebar_label: AccessRequestResponse1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestResponse1', 'V2025AccessRequestResponse1'] 
slug: /tools/sdk/go/v2025/models/access-request-response1
tags: ['SDK', 'Software Development Kit', 'AccessRequestResponse1', 'V2025AccessRequestResponse1']
---

# AccessRequestResponse1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequesterId** | Pointer to **string** | the requester Id | [optional] 
**RequesterName** | Pointer to **string** | the requesterName | [optional] 
**Items** | Pointer to [**[]AccessRequestItemResponse**](access-request-item-response) |  | [optional] 

## Methods

### NewAccessRequestResponse1

`func NewAccessRequestResponse1() *AccessRequestResponse1`

NewAccessRequestResponse1 instantiates a new AccessRequestResponse1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestResponse1WithDefaults

`func NewAccessRequestResponse1WithDefaults() *AccessRequestResponse1`

NewAccessRequestResponse1WithDefaults instantiates a new AccessRequestResponse1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequesterId

`func (o *AccessRequestResponse1) GetRequesterId() string`

GetRequesterId returns the RequesterId field if non-nil, zero value otherwise.

### GetRequesterIdOk

`func (o *AccessRequestResponse1) GetRequesterIdOk() (*string, bool)`

GetRequesterIdOk returns a tuple with the RequesterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterId

`func (o *AccessRequestResponse1) SetRequesterId(v string)`

SetRequesterId sets RequesterId field to given value.

### HasRequesterId

`func (o *AccessRequestResponse1) HasRequesterId() bool`

HasRequesterId returns a boolean if a field has been set.

### GetRequesterName

`func (o *AccessRequestResponse1) GetRequesterName() string`

GetRequesterName returns the RequesterName field if non-nil, zero value otherwise.

### GetRequesterNameOk

`func (o *AccessRequestResponse1) GetRequesterNameOk() (*string, bool)`

GetRequesterNameOk returns a tuple with the RequesterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterName

`func (o *AccessRequestResponse1) SetRequesterName(v string)`

SetRequesterName sets RequesterName field to given value.

### HasRequesterName

`func (o *AccessRequestResponse1) HasRequesterName() bool`

HasRequesterName returns a boolean if a field has been set.

### GetItems

`func (o *AccessRequestResponse1) GetItems() []AccessRequestItemResponse`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *AccessRequestResponse1) GetItemsOk() (*[]AccessRequestItemResponse, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *AccessRequestResponse1) SetItems(v []AccessRequestItemResponse)`

SetItems sets Items field to given value.

### HasItems

`func (o *AccessRequestResponse1) HasItems() bool`

HasItems returns a boolean if a field has been set.


