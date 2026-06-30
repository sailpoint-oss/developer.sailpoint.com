---
id: v1-evaluateresponse
title: Evaluateresponse
pagination_label: Evaluateresponse
sidebar_label: Evaluateresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Evaluateresponse', 'V1Evaluateresponse'] 
slug: /tools/sdk/go/workreassignment/models/evaluateresponse
tags: ['SDK', 'Software Development Kit', 'Evaluateresponse', 'V1Evaluateresponse']
---

# Evaluateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReassignToId** | Pointer to **string** | The Identity ID which should be the recipient of any work items sent to a specific identity & work type | [optional] 
**LookupTrail** | Pointer to [**[]Lookupstep**](lookupstep) | List of Reassignments found by looking up the next `TargetIdentity` in a ReassignmentConfiguration | [optional] 

## Methods

### NewEvaluateresponse

`func NewEvaluateresponse() *Evaluateresponse`

NewEvaluateresponse instantiates a new Evaluateresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEvaluateresponseWithDefaults

`func NewEvaluateresponseWithDefaults() *Evaluateresponse`

NewEvaluateresponseWithDefaults instantiates a new Evaluateresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReassignToId

`func (o *Evaluateresponse) GetReassignToId() string`

GetReassignToId returns the ReassignToId field if non-nil, zero value otherwise.

### GetReassignToIdOk

`func (o *Evaluateresponse) GetReassignToIdOk() (*string, bool)`

GetReassignToIdOk returns a tuple with the ReassignToId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignToId

`func (o *Evaluateresponse) SetReassignToId(v string)`

SetReassignToId sets ReassignToId field to given value.

### HasReassignToId

`func (o *Evaluateresponse) HasReassignToId() bool`

HasReassignToId returns a boolean if a field has been set.

### GetLookupTrail

`func (o *Evaluateresponse) GetLookupTrail() []Lookupstep`

GetLookupTrail returns the LookupTrail field if non-nil, zero value otherwise.

### GetLookupTrailOk

`func (o *Evaluateresponse) GetLookupTrailOk() (*[]Lookupstep, bool)`

GetLookupTrailOk returns a tuple with the LookupTrail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLookupTrail

`func (o *Evaluateresponse) SetLookupTrail(v []Lookupstep)`

SetLookupTrail sets LookupTrail field to given value.

### HasLookupTrail

`func (o *Evaluateresponse) HasLookupTrail() bool`

HasLookupTrail returns a boolean if a field has been set.


