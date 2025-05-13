---
id: v2024-complete-invocation
title: CompleteInvocation
pagination_label: CompleteInvocation
sidebar_label: CompleteInvocation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CompleteInvocation', 'V2024CompleteInvocation'] 
slug: /tools/sdk/go/v2024/models/complete-invocation
tags: ['SDK', 'Software Development Kit', 'CompleteInvocation', 'V2024CompleteInvocation']
---

# CompleteInvocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Secret** | **string** | Unique invocation secret that was generated when the invocation was created. Required to authenticate to the endpoint. | 
**Error** | Pointer to **string** | The error message to indicate a failed invocation or error if any. | [optional] 
**Output** | **map[string]interface{}** | Trigger output to complete the invocation. Its schema is defined in the trigger definition. | 

## Methods

### NewCompleteInvocation

`func NewCompleteInvocation(secret string, output map[string]interface{}, ) *CompleteInvocation`

NewCompleteInvocation instantiates a new CompleteInvocation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompleteInvocationWithDefaults

`func NewCompleteInvocationWithDefaults() *CompleteInvocation`

NewCompleteInvocationWithDefaults instantiates a new CompleteInvocation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSecret

`func (o *CompleteInvocation) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *CompleteInvocation) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *CompleteInvocation) SetSecret(v string)`

SetSecret sets Secret field to given value.


### GetError

`func (o *CompleteInvocation) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *CompleteInvocation) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *CompleteInvocation) SetError(v string)`

SetError sets Error field to given value.

### HasError

`func (o *CompleteInvocation) HasError() bool`

HasError returns a boolean if a field has been set.

### GetOutput

`func (o *CompleteInvocation) GetOutput() map[string]interface{}`

GetOutput returns the Output field if non-nil, zero value otherwise.

### GetOutputOk

`func (o *CompleteInvocation) GetOutputOk() (*map[string]interface{}, bool)`

GetOutputOk returns a tuple with the Output field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutput

`func (o *CompleteInvocation) SetOutput(v map[string]interface{})`

SetOutput sets Output field to given value.



