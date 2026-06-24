---
id: v2024-set-lifecycle-state200-response
title: SetLifecycleState200Response
pagination_label: SetLifecycleState200Response
sidebar_label: SetLifecycleState200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SetLifecycleState200Response', 'V2024SetLifecycleState200Response'] 
slug: /tools/sdk/go/v2024/models/set-lifecycle-state200-response
tags: ['SDK', 'Software Development Kit', 'SetLifecycleState200Response', 'V2024SetLifecycleState200Response']
---

# SetLifecycleState200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountActivityId** | Pointer to **string** | ID of the IdentityRequest object that is generated when the workflow launches. To follow the IdentityRequest, you can provide this ID with a [Get Account Activity request](https://developer.sailpoint.com/docs/api/v3/get-account-activity/). The response will contain relevant information about the IdentityRequest, such as its status. | [optional] 

## Methods

### NewSetLifecycleState200Response

`func NewSetLifecycleState200Response() *SetLifecycleState200Response`

NewSetLifecycleState200Response instantiates a new SetLifecycleState200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetLifecycleState200ResponseWithDefaults

`func NewSetLifecycleState200ResponseWithDefaults() *SetLifecycleState200Response`

NewSetLifecycleState200ResponseWithDefaults instantiates a new SetLifecycleState200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountActivityId

`func (o *SetLifecycleState200Response) GetAccountActivityId() string`

GetAccountActivityId returns the AccountActivityId field if non-nil, zero value otherwise.

### GetAccountActivityIdOk

`func (o *SetLifecycleState200Response) GetAccountActivityIdOk() (*string, bool)`

GetAccountActivityIdOk returns a tuple with the AccountActivityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountActivityId

`func (o *SetLifecycleState200Response) SetAccountActivityId(v string)`

SetAccountActivityId sets AccountActivityId field to given value.

### HasAccountActivityId

`func (o *SetLifecycleState200Response) HasAccountActivityId() bool`

HasAccountActivityId returns a boolean if a field has been set.


