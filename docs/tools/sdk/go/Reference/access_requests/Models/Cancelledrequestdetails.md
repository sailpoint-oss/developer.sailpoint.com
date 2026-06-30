---
id: v1-cancelledrequestdetails
title: Cancelledrequestdetails
pagination_label: Cancelledrequestdetails
sidebar_label: Cancelledrequestdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Cancelledrequestdetails', 'V1Cancelledrequestdetails'] 
slug: /tools/sdk/go/accessrequests/models/cancelledrequestdetails
tags: ['SDK', 'Software Development Kit', 'Cancelledrequestdetails', 'V1Cancelledrequestdetails']
---

# Cancelledrequestdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment made by the owner when cancelling the associated request. | [optional] 
**Owner** | Pointer to [**Ownerdto**](ownerdto) |  | [optional] 
**Modified** | Pointer to **SailPointTime** | Date comment was added by the owner when cancelling the associated request. | [optional] 

## Methods

### NewCancelledrequestdetails

`func NewCancelledrequestdetails() *Cancelledrequestdetails`

NewCancelledrequestdetails instantiates a new Cancelledrequestdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelledrequestdetailsWithDefaults

`func NewCancelledrequestdetailsWithDefaults() *Cancelledrequestdetails`

NewCancelledrequestdetailsWithDefaults instantiates a new Cancelledrequestdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *Cancelledrequestdetails) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Cancelledrequestdetails) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Cancelledrequestdetails) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Cancelledrequestdetails) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetOwner

`func (o *Cancelledrequestdetails) GetOwner() Ownerdto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Cancelledrequestdetails) GetOwnerOk() (*Ownerdto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Cancelledrequestdetails) SetOwner(v Ownerdto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Cancelledrequestdetails) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetModified

`func (o *Cancelledrequestdetails) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Cancelledrequestdetails) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Cancelledrequestdetails) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Cancelledrequestdetails) HasModified() bool`

HasModified returns a boolean if a field has been set.


