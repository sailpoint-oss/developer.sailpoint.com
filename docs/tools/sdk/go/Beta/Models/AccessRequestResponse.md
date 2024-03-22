---
id: access-request-response
title: AccessRequestResponse
pagination_label: AccessRequestResponse
sidebar_label: AccessRequestResponse
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestResponse'] 
slug: /tools/sdk/go/beta/models/access-request-response
tags: ['SDK', 'Software Development Kit', 'AccessRequestResponse']
---

# AccessRequestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequesterId** |  Pointer to **string** | the requester Id | [optional] 
**RequesterName** |  Pointer to **string** | the requesterName | [optional] 
**Items** |  Pointer to [**[]AccessRequestItemResponse**](access-request-item-response) |  | [optional] 

## Methods

### NewAccessRequestResponse

`func NewAccessRequestResponse() *AccessRequestResponse`

NewAccessRequestResponse instantiates a new AccessRequestResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestResponseWithDefaults

`func NewAccessRequestResponseWithDefaults() *AccessRequestResponse`

NewAccessRequestResponseWithDefaults instantiates a new AccessRequestResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequesterId

`func (o *AccessRequestResponse) GetRequesterId() string`

GetRequesterId returns the RequesterId field if non-nil, zero value otherwise.

### GetRequesterIdOk

`func (o *AccessRequestResponse) GetRequesterIdOk() (*string, bool)`

GetRequesterIdOk returns a tuple with the RequesterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterId

`func (o *AccessRequestResponse) SetRequesterId(v string)`

SetRequesterId sets RequesterId field to given value.

### HasRequesterId

`func (o *AccessRequestResponse) HasRequesterId() bool`

HasRequesterId returns a boolean if a field has been set.

### GetRequesterName

`func (o *AccessRequestResponse) GetRequesterName() string`

GetRequesterName returns the RequesterName field if non-nil, zero value otherwise.

### GetRequesterNameOk

`func (o *AccessRequestResponse) GetRequesterNameOk() (*string, bool)`

GetRequesterNameOk returns a tuple with the RequesterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterName

`func (o *AccessRequestResponse) SetRequesterName(v string)`

SetRequesterName sets RequesterName field to given value.

### HasRequesterName

`func (o *AccessRequestResponse) HasRequesterName() bool`

HasRequesterName returns a boolean if a field has been set.

### GetItems

`func (o *AccessRequestResponse) GetItems() []AccessRequestItemResponse`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *AccessRequestResponse) GetItemsOk() (*[]AccessRequestItemResponse, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *AccessRequestResponse) SetItems(v []AccessRequestItemResponse)`

SetItems sets Items field to given value.

### HasItems

`func (o *AccessRequestResponse) HasItems() bool`

HasItems returns a boolean if a field has been set.


[[Back to top]](#) 


