---
id: duo-verification-request
title: DuoVerificationRequest
pagination_label: DuoVerificationRequest
sidebar_label: DuoVerificationRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'DuoVerificationRequest'] 
slug: /tools/sdk/go/beta/models/duo-verification-request
tags: ['SDK', 'Software Development Kit', 'DuoVerificationRequest']
---

# DuoVerificationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserId** |  **string** | User id for Verification request. | 
**SignedResponse** |  **string** | User id for Verification request. | 

## Methods

### NewDuoVerificationRequest

`func NewDuoVerificationRequest(userId string, signedResponse string, ) *DuoVerificationRequest`

NewDuoVerificationRequest instantiates a new DuoVerificationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDuoVerificationRequestWithDefaults

`func NewDuoVerificationRequestWithDefaults() *DuoVerificationRequest`

NewDuoVerificationRequestWithDefaults instantiates a new DuoVerificationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserId

`func (o *DuoVerificationRequest) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *DuoVerificationRequest) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *DuoVerificationRequest) SetUserId(v string)`

SetUserId sets UserId field to given value.


### GetSignedResponse

`func (o *DuoVerificationRequest) GetSignedResponse() string`

GetSignedResponse returns the SignedResponse field if non-nil, zero value otherwise.

### GetSignedResponseOk

`func (o *DuoVerificationRequest) GetSignedResponseOk() (*string, bool)`

GetSignedResponseOk returns a tuple with the SignedResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignedResponse

`func (o *DuoVerificationRequest) SetSignedResponse(v string)`

SetSignedResponse sets SignedResponse field to given value.



[[Back to top]](#) 


