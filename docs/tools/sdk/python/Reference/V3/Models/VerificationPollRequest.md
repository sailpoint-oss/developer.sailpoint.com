---
id: verification-poll-request
title: VerificationPollRequest
pagination_label: VerificationPollRequest
sidebar_label: VerificationPollRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'VerificationPollRequest', 'VerificationPollRequest'] 
slug: /tools/sdk/go/v3/models/verification-poll-request
tags: ['SDK', 'Software Development Kit', 'VerificationPollRequest', 'VerificationPollRequest']
---

# VerificationPollRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **string** | Verification request Id | 

## Methods

### NewVerificationPollRequest

`func NewVerificationPollRequest(requestId string, ) *VerificationPollRequest`

NewVerificationPollRequest instantiates a new VerificationPollRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerificationPollRequestWithDefaults

`func NewVerificationPollRequestWithDefaults() *VerificationPollRequest`

NewVerificationPollRequestWithDefaults instantiates a new VerificationPollRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *VerificationPollRequest) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *VerificationPollRequest) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *VerificationPollRequest) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.



