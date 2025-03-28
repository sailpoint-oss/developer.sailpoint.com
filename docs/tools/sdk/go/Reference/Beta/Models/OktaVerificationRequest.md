---
id: beta-okta-verification-request
title: OktaVerificationRequest
pagination_label: OktaVerificationRequest
sidebar_label: OktaVerificationRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'OktaVerificationRequest', 'BetaOktaVerificationRequest'] 
slug: /tools/sdk/go/beta/models/okta-verification-request
tags: ['SDK', 'Software Development Kit', 'OktaVerificationRequest', 'BetaOktaVerificationRequest']
---

# OktaVerificationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserId** | **string** | User identifier for Verification request. The value of the user&#39;s attribute. | 

## Methods

### NewOktaVerificationRequest

`func NewOktaVerificationRequest(userId string, ) *OktaVerificationRequest`

NewOktaVerificationRequest instantiates a new OktaVerificationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOktaVerificationRequestWithDefaults

`func NewOktaVerificationRequestWithDefaults() *OktaVerificationRequest`

NewOktaVerificationRequestWithDefaults instantiates a new OktaVerificationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserId

`func (o *OktaVerificationRequest) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *OktaVerificationRequest) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *OktaVerificationRequest) SetUserId(v string)`

SetUserId sets UserId field to given value.



