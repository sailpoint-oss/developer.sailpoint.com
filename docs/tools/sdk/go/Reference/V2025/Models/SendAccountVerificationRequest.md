---
id: send-account-verification-request
title: SendAccountVerificationRequest
pagination_label: SendAccountVerificationRequest
sidebar_label: SendAccountVerificationRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SendAccountVerificationRequest', 'SendAccountVerificationRequest'] 
slug: /tools/sdk/go//models/send-account-verification-request
tags: ['SDK', 'Software Development Kit', 'SendAccountVerificationRequest', 'SendAccountVerificationRequest']
---

# SendAccountVerificationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceName** | Pointer to **NullableString** | The source name where identity account password should be reset | [optional] 
**Via** | **string** | The method to send notification | 

## Methods

### NewSendAccountVerificationRequest

`func NewSendAccountVerificationRequest(via string, ) *SendAccountVerificationRequest`

NewSendAccountVerificationRequest instantiates a new SendAccountVerificationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendAccountVerificationRequestWithDefaults

`func NewSendAccountVerificationRequestWithDefaults() *SendAccountVerificationRequest`

NewSendAccountVerificationRequestWithDefaults instantiates a new SendAccountVerificationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceName

`func (o *SendAccountVerificationRequest) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *SendAccountVerificationRequest) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *SendAccountVerificationRequest) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *SendAccountVerificationRequest) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### SetSourceNameNil

`func (o *SendAccountVerificationRequest) SetSourceNameNil(b bool)`

 SetSourceNameNil sets the value for SourceName to be an explicit nil

### UnsetSourceName
`func (o *SendAccountVerificationRequest) UnsetSourceName()`

UnsetSourceName ensures that no value is present for SourceName, not even an explicit nil
### GetVia

`func (o *SendAccountVerificationRequest) GetVia() string`

GetVia returns the Via field if non-nil, zero value otherwise.

### GetViaOk

`func (o *SendAccountVerificationRequest) GetViaOk() (*string, bool)`

GetViaOk returns a tuple with the Via field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVia

`func (o *SendAccountVerificationRequest) SetVia(v string)`

SetVia sets Via field to given value.



