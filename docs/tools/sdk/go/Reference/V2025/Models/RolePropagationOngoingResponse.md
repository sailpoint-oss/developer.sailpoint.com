---
id: v2025-role-propagation-ongoing-response
title: RolePropagationOngoingResponse
pagination_label: RolePropagationOngoingResponse
sidebar_label: RolePropagationOngoingResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RolePropagationOngoingResponse', 'V2025RolePropagationOngoingResponse'] 
slug: /tools/sdk/go/v2025/models/role-propagation-ongoing-response
tags: ['SDK', 'Software Development Kit', 'RolePropagationOngoingResponse', 'V2025RolePropagationOngoingResponse']
---

# RolePropagationOngoingResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsRunning** | Pointer to **bool** | Indicates if the role propagation process is currently running on the tenant | [optional] [default to false]
**RolePropagationDetails** | Pointer to [**RolePropagationOngoingResponseRolePropagationDetails**](role-propagation-ongoing-response-role-propagation-details) |  | [optional] 

## Methods

### NewRolePropagationOngoingResponse

`func NewRolePropagationOngoingResponse() *RolePropagationOngoingResponse`

NewRolePropagationOngoingResponse instantiates a new RolePropagationOngoingResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolePropagationOngoingResponseWithDefaults

`func NewRolePropagationOngoingResponseWithDefaults() *RolePropagationOngoingResponse`

NewRolePropagationOngoingResponseWithDefaults instantiates a new RolePropagationOngoingResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsRunning

`func (o *RolePropagationOngoingResponse) GetIsRunning() bool`

GetIsRunning returns the IsRunning field if non-nil, zero value otherwise.

### GetIsRunningOk

`func (o *RolePropagationOngoingResponse) GetIsRunningOk() (*bool, bool)`

GetIsRunningOk returns a tuple with the IsRunning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsRunning

`func (o *RolePropagationOngoingResponse) SetIsRunning(v bool)`

SetIsRunning sets IsRunning field to given value.

### HasIsRunning

`func (o *RolePropagationOngoingResponse) HasIsRunning() bool`

HasIsRunning returns a boolean if a field has been set.

### GetRolePropagationDetails

`func (o *RolePropagationOngoingResponse) GetRolePropagationDetails() RolePropagationOngoingResponseRolePropagationDetails`

GetRolePropagationDetails returns the RolePropagationDetails field if non-nil, zero value otherwise.

### GetRolePropagationDetailsOk

`func (o *RolePropagationOngoingResponse) GetRolePropagationDetailsOk() (*RolePropagationOngoingResponseRolePropagationDetails, bool)`

GetRolePropagationDetailsOk returns a tuple with the RolePropagationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRolePropagationDetails

`func (o *RolePropagationOngoingResponse) SetRolePropagationDetails(v RolePropagationOngoingResponseRolePropagationDetails)`

SetRolePropagationDetails sets RolePropagationDetails field to given value.

### HasRolePropagationDetails

`func (o *RolePropagationOngoingResponse) HasRolePropagationDetails() bool`

HasRolePropagationDetails returns a boolean if a field has been set.


