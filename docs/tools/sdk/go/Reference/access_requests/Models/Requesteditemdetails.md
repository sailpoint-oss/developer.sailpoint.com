---
id: v1-requesteditemdetails
title: Requesteditemdetails
pagination_label: Requesteditemdetails
sidebar_label: Requesteditemdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Requesteditemdetails', 'V1Requesteditemdetails'] 
slug: /tools/sdk/go/accessrequests/models/requesteditemdetails
tags: ['SDK', 'Software Development Kit', 'Requesteditemdetails', 'V1Requesteditemdetails']
---

# Requesteditemdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of access item requested. | [optional] 
**Id** | Pointer to **string** | The id of the access item requested. | [optional] 

## Methods

### NewRequesteditemdetails

`func NewRequesteditemdetails() *Requesteditemdetails`

NewRequesteditemdetails instantiates a new Requesteditemdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequesteditemdetailsWithDefaults

`func NewRequesteditemdetailsWithDefaults() *Requesteditemdetails`

NewRequesteditemdetailsWithDefaults instantiates a new Requesteditemdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Requesteditemdetails) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Requesteditemdetails) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Requesteditemdetails) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Requesteditemdetails) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Requesteditemdetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Requesteditemdetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Requesteditemdetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Requesteditemdetails) HasId() bool`

HasId returns a boolean if a field has been set.


