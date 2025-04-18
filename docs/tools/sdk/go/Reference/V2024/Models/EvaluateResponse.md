---
id: v2024-evaluate-response
title: EvaluateResponse
pagination_label: EvaluateResponse
sidebar_label: EvaluateResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EvaluateResponse', 'V2024EvaluateResponse'] 
slug: /tools/sdk/go/v2024/models/evaluate-response
tags: ['SDK', 'Software Development Kit', 'EvaluateResponse', 'V2024EvaluateResponse']
---

# EvaluateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReassignToId** | Pointer to **string** | The Identity ID which should be the recipient of any work items sent to a specific identity & work type | [optional] 
**LookupTrail** | Pointer to [**[]LookupStep**](lookup-step) | List of Reassignments found by looking up the next `TargetIdentity` in a ReassignmentConfiguration | [optional] 

## Methods

### NewEvaluateResponse

`func NewEvaluateResponse() *EvaluateResponse`

NewEvaluateResponse instantiates a new EvaluateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEvaluateResponseWithDefaults

`func NewEvaluateResponseWithDefaults() *EvaluateResponse`

NewEvaluateResponseWithDefaults instantiates a new EvaluateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReassignToId

`func (o *EvaluateResponse) GetReassignToId() string`

GetReassignToId returns the ReassignToId field if non-nil, zero value otherwise.

### GetReassignToIdOk

`func (o *EvaluateResponse) GetReassignToIdOk() (*string, bool)`

GetReassignToIdOk returns a tuple with the ReassignToId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignToId

`func (o *EvaluateResponse) SetReassignToId(v string)`

SetReassignToId sets ReassignToId field to given value.

### HasReassignToId

`func (o *EvaluateResponse) HasReassignToId() bool`

HasReassignToId returns a boolean if a field has been set.

### GetLookupTrail

`func (o *EvaluateResponse) GetLookupTrail() []LookupStep`

GetLookupTrail returns the LookupTrail field if non-nil, zero value otherwise.

### GetLookupTrailOk

`func (o *EvaluateResponse) GetLookupTrailOk() (*[]LookupStep, bool)`

GetLookupTrailOk returns a tuple with the LookupTrail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLookupTrail

`func (o *EvaluateResponse) SetLookupTrail(v []LookupStep)`

SetLookupTrail sets LookupTrail field to given value.

### HasLookupTrail

`func (o *EvaluateResponse) HasLookupTrail() bool`

HasLookupTrail returns a boolean if a field has been set.


