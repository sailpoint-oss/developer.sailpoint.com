---
id: v1-forwardapprovaldto
title: Forwardapprovaldto
pagination_label: Forwardapprovaldto
sidebar_label: Forwardapprovaldto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Forwardapprovaldto', 'V1Forwardapprovaldto'] 
slug: /tools/sdk/go/accessrequestapprovals/models/forwardapprovaldto
tags: ['SDK', 'Software Development Kit', 'Forwardapprovaldto', 'V1Forwardapprovaldto']
---

# Forwardapprovaldto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewOwnerId** | **string** | The Id of the new owner | 
**Comment** | **string** | The comment provided by the forwarder | 

## Methods

### NewForwardapprovaldto

`func NewForwardapprovaldto(newOwnerId string, comment string, ) *Forwardapprovaldto`

NewForwardapprovaldto instantiates a new Forwardapprovaldto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForwardapprovaldtoWithDefaults

`func NewForwardapprovaldtoWithDefaults() *Forwardapprovaldto`

NewForwardapprovaldtoWithDefaults instantiates a new Forwardapprovaldto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNewOwnerId

`func (o *Forwardapprovaldto) GetNewOwnerId() string`

GetNewOwnerId returns the NewOwnerId field if non-nil, zero value otherwise.

### GetNewOwnerIdOk

`func (o *Forwardapprovaldto) GetNewOwnerIdOk() (*string, bool)`

GetNewOwnerIdOk returns a tuple with the NewOwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewOwnerId

`func (o *Forwardapprovaldto) SetNewOwnerId(v string)`

SetNewOwnerId sets NewOwnerId field to given value.


### GetComment

`func (o *Forwardapprovaldto) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Forwardapprovaldto) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Forwardapprovaldto) SetComment(v string)`

SetComment sets Comment field to given value.



