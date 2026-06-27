---
id: v1-start-launcher-v1200-response
title: StartLauncherV1200Response
pagination_label: StartLauncherV1200Response
sidebar_label: StartLauncherV1200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'StartLauncherV1200Response', 'V1StartLauncherV1200Response'] 
slug: /tools/sdk/go/launchers/models/start-launcher-v1200-response
tags: ['SDK', 'Software Development Kit', 'StartLauncherV1200Response', 'V1StartLauncherV1200Response']
---

# StartLauncherV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InteractiveProcessId** | **string** | ID of the Interactive Process that was launched | 

## Methods

### NewStartLauncherV1200Response

`func NewStartLauncherV1200Response(interactiveProcessId string, ) *StartLauncherV1200Response`

NewStartLauncherV1200Response instantiates a new StartLauncherV1200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStartLauncherV1200ResponseWithDefaults

`func NewStartLauncherV1200ResponseWithDefaults() *StartLauncherV1200Response`

NewStartLauncherV1200ResponseWithDefaults instantiates a new StartLauncherV1200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInteractiveProcessId

`func (o *StartLauncherV1200Response) GetInteractiveProcessId() string`

GetInteractiveProcessId returns the InteractiveProcessId field if non-nil, zero value otherwise.

### GetInteractiveProcessIdOk

`func (o *StartLauncherV1200Response) GetInteractiveProcessIdOk() (*string, bool)`

GetInteractiveProcessIdOk returns a tuple with the InteractiveProcessId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInteractiveProcessId

`func (o *StartLauncherV1200Response) SetInteractiveProcessId(v string)`

SetInteractiveProcessId sets InteractiveProcessId field to given value.



