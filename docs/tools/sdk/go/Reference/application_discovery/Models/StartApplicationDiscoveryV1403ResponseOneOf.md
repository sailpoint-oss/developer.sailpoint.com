---
id: v1-start-application-discovery-v1403-response-one-of
title: StartApplicationDiscoveryV1403ResponseOneOf
pagination_label: StartApplicationDiscoveryV1403ResponseOneOf
sidebar_label: StartApplicationDiscoveryV1403ResponseOneOf
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'StartApplicationDiscoveryV1403ResponseOneOf', 'V1StartApplicationDiscoveryV1403ResponseOneOf'] 
slug: /tools/sdk/go/applicationdiscovery/models/start-application-discovery-v1403-response-one-of
tags: ['SDK', 'Software Development Kit', 'StartApplicationDiscoveryV1403ResponseOneOf', 'V1StartApplicationDiscoveryV1403ResponseOneOf']
---

# StartApplicationDiscoveryV1403ResponseOneOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | **string** | Error message when quota is exceeded | 

## Methods

### NewStartApplicationDiscoveryV1403ResponseOneOf

`func NewStartApplicationDiscoveryV1403ResponseOneOf(error_ string, ) *StartApplicationDiscoveryV1403ResponseOneOf`

NewStartApplicationDiscoveryV1403ResponseOneOf instantiates a new StartApplicationDiscoveryV1403ResponseOneOf object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStartApplicationDiscoveryV1403ResponseOneOfWithDefaults

`func NewStartApplicationDiscoveryV1403ResponseOneOfWithDefaults() *StartApplicationDiscoveryV1403ResponseOneOf`

NewStartApplicationDiscoveryV1403ResponseOneOfWithDefaults instantiates a new StartApplicationDiscoveryV1403ResponseOneOf object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *StartApplicationDiscoveryV1403ResponseOneOf) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *StartApplicationDiscoveryV1403ResponseOneOf) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *StartApplicationDiscoveryV1403ResponseOneOf) SetError(v string)`

SetError sets Error field to given value.



