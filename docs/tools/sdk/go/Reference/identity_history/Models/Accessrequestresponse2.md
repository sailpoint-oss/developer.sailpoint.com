---
id: v1-accessrequestresponse2
title: Accessrequestresponse2
pagination_label: Accessrequestresponse2
sidebar_label: Accessrequestresponse2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestresponse2', 'V1Accessrequestresponse2'] 
slug: /tools/sdk/go/identityhistory/models/accessrequestresponse2
tags: ['SDK', 'Software Development Kit', 'Accessrequestresponse2', 'V1Accessrequestresponse2']
---

# Accessrequestresponse2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequesterId** | Pointer to **string** | the requester Id | [optional] 
**RequesterName** | Pointer to **string** | the requesterName | [optional] 
**Items** | Pointer to [**[]Accessrequestitemresponse**](accessrequestitemresponse) |  | [optional] 

## Methods

### NewAccessrequestresponse2

`func NewAccessrequestresponse2() *Accessrequestresponse2`

NewAccessrequestresponse2 instantiates a new Accessrequestresponse2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestresponse2WithDefaults

`func NewAccessrequestresponse2WithDefaults() *Accessrequestresponse2`

NewAccessrequestresponse2WithDefaults instantiates a new Accessrequestresponse2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequesterId

`func (o *Accessrequestresponse2) GetRequesterId() string`

GetRequesterId returns the RequesterId field if non-nil, zero value otherwise.

### GetRequesterIdOk

`func (o *Accessrequestresponse2) GetRequesterIdOk() (*string, bool)`

GetRequesterIdOk returns a tuple with the RequesterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterId

`func (o *Accessrequestresponse2) SetRequesterId(v string)`

SetRequesterId sets RequesterId field to given value.

### HasRequesterId

`func (o *Accessrequestresponse2) HasRequesterId() bool`

HasRequesterId returns a boolean if a field has been set.

### GetRequesterName

`func (o *Accessrequestresponse2) GetRequesterName() string`

GetRequesterName returns the RequesterName field if non-nil, zero value otherwise.

### GetRequesterNameOk

`func (o *Accessrequestresponse2) GetRequesterNameOk() (*string, bool)`

GetRequesterNameOk returns a tuple with the RequesterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterName

`func (o *Accessrequestresponse2) SetRequesterName(v string)`

SetRequesterName sets RequesterName field to given value.

### HasRequesterName

`func (o *Accessrequestresponse2) HasRequesterName() bool`

HasRequesterName returns a boolean if a field has been set.

### GetItems

`func (o *Accessrequestresponse2) GetItems() []Accessrequestitemresponse`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *Accessrequestresponse2) GetItemsOk() (*[]Accessrequestitemresponse, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *Accessrequestresponse2) SetItems(v []Accessrequestitemresponse)`

SetItems sets Items field to given value.

### HasItems

`func (o *Accessrequestresponse2) HasItems() bool`

HasItems returns a boolean if a field has been set.


