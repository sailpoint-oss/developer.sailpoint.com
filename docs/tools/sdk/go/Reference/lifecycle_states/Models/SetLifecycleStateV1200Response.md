---
id: v1-set-lifecycle-state-v1200-response
title: SetLifecycleStateV1200Response
pagination_label: SetLifecycleStateV1200Response
sidebar_label: SetLifecycleStateV1200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SetLifecycleStateV1200Response', 'V1SetLifecycleStateV1200Response'] 
slug: /tools/sdk/go/lifecyclestates/models/set-lifecycle-state-v1200-response
tags: ['SDK', 'Software Development Kit', 'SetLifecycleStateV1200Response', 'V1SetLifecycleStateV1200Response']
---

# SetLifecycleStateV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountActivityId** | Pointer to **string** | ID of the IdentityRequest object that is generated when the workflow launches. To follow the IdentityRequest, you can provide this ID with a [Get Account Activity request](https://developer.sailpoint.com/docs/api/v3/get-account-activity/). The response will contain relevant information about the IdentityRequest, such as its status. | [optional] 

## Methods

### NewSetLifecycleStateV1200Response

`func NewSetLifecycleStateV1200Response() *SetLifecycleStateV1200Response`

NewSetLifecycleStateV1200Response instantiates a new SetLifecycleStateV1200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetLifecycleStateV1200ResponseWithDefaults

`func NewSetLifecycleStateV1200ResponseWithDefaults() *SetLifecycleStateV1200Response`

NewSetLifecycleStateV1200ResponseWithDefaults instantiates a new SetLifecycleStateV1200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountActivityId

`func (o *SetLifecycleStateV1200Response) GetAccountActivityId() string`

GetAccountActivityId returns the AccountActivityId field if non-nil, zero value otherwise.

### GetAccountActivityIdOk

`func (o *SetLifecycleStateV1200Response) GetAccountActivityIdOk() (*string, bool)`

GetAccountActivityIdOk returns a tuple with the AccountActivityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountActivityId

`func (o *SetLifecycleStateV1200Response) SetAccountActivityId(v string)`

SetAccountActivityId sets AccountActivityId field to given value.

### HasAccountActivityId

`func (o *SetLifecycleStateV1200Response) HasAccountActivityId() bool`

HasAccountActivityId returns a boolean if a field has been set.


