---
id: v1-completeinvocation
title: Completeinvocation
pagination_label: Completeinvocation
sidebar_label: Completeinvocation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Completeinvocation', 'V1Completeinvocation'] 
slug: /tools/sdk/go/triggers/models/completeinvocation
tags: ['SDK', 'Software Development Kit', 'Completeinvocation', 'V1Completeinvocation']
---

# Completeinvocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Secret** | **string** | Unique invocation secret that was generated when the invocation was created. Required to authenticate to the endpoint. | 
**Error** | Pointer to **string** | The error message to indicate a failed invocation or error if any. | [optional] 
**Output** | **map[string]interface{}** | Trigger output to complete the invocation. Its schema is defined in the trigger definition. | 

## Methods

### NewCompleteinvocation

`func NewCompleteinvocation(secret string, output map[string]interface{}, ) *Completeinvocation`

NewCompleteinvocation instantiates a new Completeinvocation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompleteinvocationWithDefaults

`func NewCompleteinvocationWithDefaults() *Completeinvocation`

NewCompleteinvocationWithDefaults instantiates a new Completeinvocation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSecret

`func (o *Completeinvocation) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *Completeinvocation) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *Completeinvocation) SetSecret(v string)`

SetSecret sets Secret field to given value.


### GetError

`func (o *Completeinvocation) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *Completeinvocation) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *Completeinvocation) SetError(v string)`

SetError sets Error field to given value.

### HasError

`func (o *Completeinvocation) HasError() bool`

HasError returns a boolean if a field has been set.

### GetOutput

`func (o *Completeinvocation) GetOutput() map[string]interface{}`

GetOutput returns the Output field if non-nil, zero value otherwise.

### GetOutputOk

`func (o *Completeinvocation) GetOutputOk() (*map[string]interface{}, bool)`

GetOutputOk returns a tuple with the Output field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutput

`func (o *Completeinvocation) SetOutput(v map[string]interface{})`

SetOutput sets Output field to given value.



