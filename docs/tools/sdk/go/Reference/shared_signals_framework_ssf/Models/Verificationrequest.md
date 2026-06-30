---
id: v1-verificationrequest
title: Verificationrequest
pagination_label: Verificationrequest
sidebar_label: Verificationrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Verificationrequest', 'V1Verificationrequest'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/verificationrequest
tags: ['SDK', 'Software Development Kit', 'Verificationrequest', 'V1Verificationrequest']
---

# Verificationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **string** | Stream ID for verification. | 
**State** | Pointer to **string** | Optional state value for verification challenge. | [optional] 

## Methods

### NewVerificationrequest

`func NewVerificationrequest(streamId string, ) *Verificationrequest`

NewVerificationrequest instantiates a new Verificationrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerificationrequestWithDefaults

`func NewVerificationrequestWithDefaults() *Verificationrequest`

NewVerificationrequestWithDefaults instantiates a new Verificationrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreamId

`func (o *Verificationrequest) GetStreamId() string`

GetStreamId returns the StreamId field if non-nil, zero value otherwise.

### GetStreamIdOk

`func (o *Verificationrequest) GetStreamIdOk() (*string, bool)`

GetStreamIdOk returns a tuple with the StreamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamId

`func (o *Verificationrequest) SetStreamId(v string)`

SetStreamId sets StreamId field to given value.


### GetState

`func (o *Verificationrequest) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Verificationrequest) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Verificationrequest) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *Verificationrequest) HasState() bool`

HasState returns a boolean if a field has been set.


