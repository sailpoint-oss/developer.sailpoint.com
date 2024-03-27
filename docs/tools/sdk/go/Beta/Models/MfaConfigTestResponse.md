---
id: mfa-config-test-response
title: MfaConfigTestResponse
pagination_label: MfaConfigTestResponse
sidebar_label: MfaConfigTestResponse
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'MfaConfigTestResponse'] 
slug: /tools/sdk/go/beta/models/mfa-config-test-response
tags: ['SDK', 'Software Development Kit', 'MfaConfigTestResponse']
---

# MfaConfigTestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |  Pointer to **string** | The configuration test result. | [optional] [readonly] 
**Error** |  Pointer to **string** | The error message to indicate the failure of configuration test. | [optional] [readonly] 

## Methods

### NewMfaConfigTestResponse

`func NewMfaConfigTestResponse() *MfaConfigTestResponse`

NewMfaConfigTestResponse instantiates a new MfaConfigTestResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMfaConfigTestResponseWithDefaults

`func NewMfaConfigTestResponseWithDefaults() *MfaConfigTestResponse`

NewMfaConfigTestResponseWithDefaults instantiates a new MfaConfigTestResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *MfaConfigTestResponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *MfaConfigTestResponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *MfaConfigTestResponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *MfaConfigTestResponse) HasState() bool`

HasState returns a boolean if a field has been set.

### GetError

`func (o *MfaConfigTestResponse) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *MfaConfigTestResponse) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *MfaConfigTestResponse) SetError(v string)`

SetError sets Error field to given value.

### HasError

`func (o *MfaConfigTestResponse) HasError() bool`

HasError returns a boolean if a field has been set.


[[Back to top]](#) 


