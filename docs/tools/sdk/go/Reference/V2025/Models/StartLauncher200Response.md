---
id: v2025-start-launcher200-response
title: StartLauncher200Response
pagination_label: StartLauncher200Response
sidebar_label: StartLauncher200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'StartLauncher200Response', 'V2025StartLauncher200Response'] 
slug: /tools/sdk/go/v2025/models/start-launcher200-response
tags: ['SDK', 'Software Development Kit', 'StartLauncher200Response', 'V2025StartLauncher200Response']
---

# StartLauncher200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InteractiveProcessId** | **string** | ID of the Interactive Process that was launched | 

## Methods

### NewStartLauncher200Response

`func NewStartLauncher200Response(interactiveProcessId string, ) *StartLauncher200Response`

NewStartLauncher200Response instantiates a new StartLauncher200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStartLauncher200ResponseWithDefaults

`func NewStartLauncher200ResponseWithDefaults() *StartLauncher200Response`

NewStartLauncher200ResponseWithDefaults instantiates a new StartLauncher200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInteractiveProcessId

`func (o *StartLauncher200Response) GetInteractiveProcessId() string`

GetInteractiveProcessId returns the InteractiveProcessId field if non-nil, zero value otherwise.

### GetInteractiveProcessIdOk

`func (o *StartLauncher200Response) GetInteractiveProcessIdOk() (*string, bool)`

GetInteractiveProcessIdOk returns a tuple with the InteractiveProcessId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInteractiveProcessId

`func (o *StartLauncher200Response) SetInteractiveProcessId(v string)`

SetInteractiveProcessId sets InteractiveProcessId field to given value.



