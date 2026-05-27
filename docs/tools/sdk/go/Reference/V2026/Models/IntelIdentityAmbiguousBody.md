---
id: v2026-intel-identity-ambiguous-body
title: IntelIdentityAmbiguousBody
pagination_label: IntelIdentityAmbiguousBody
sidebar_label: IntelIdentityAmbiguousBody
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelIdentityAmbiguousBody', 'V2026IntelIdentityAmbiguousBody'] 
slug: /tools/sdk/go/v2026/models/intel-identity-ambiguous-body
tags: ['SDK', 'Software Development Kit', 'IntelIdentityAmbiguousBody', 'V2026IntelIdentityAmbiguousBody']
---

# IntelIdentityAmbiguousBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **string** | Constant detail code indicating that more than one identity matched the filter. | 
**Message** | Pointer to **string** | Optional explanatory text describing why the filter was considered ambiguous. | [optional] 
**Candidates** | [**[]IntelIdentityAmbiguousCandidate**](intel-identity-ambiguous-candidate) | Collection of identities that matched the ambiguous filter expression. | 

## Methods

### NewIntelIdentityAmbiguousBody

`func NewIntelIdentityAmbiguousBody(detailCode string, candidates []IntelIdentityAmbiguousCandidate, ) *IntelIdentityAmbiguousBody`

NewIntelIdentityAmbiguousBody instantiates a new IntelIdentityAmbiguousBody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelIdentityAmbiguousBodyWithDefaults

`func NewIntelIdentityAmbiguousBodyWithDefaults() *IntelIdentityAmbiguousBody`

NewIntelIdentityAmbiguousBodyWithDefaults instantiates a new IntelIdentityAmbiguousBody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *IntelIdentityAmbiguousBody) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *IntelIdentityAmbiguousBody) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *IntelIdentityAmbiguousBody) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.


### GetMessage

`func (o *IntelIdentityAmbiguousBody) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *IntelIdentityAmbiguousBody) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *IntelIdentityAmbiguousBody) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *IntelIdentityAmbiguousBody) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetCandidates

`func (o *IntelIdentityAmbiguousBody) GetCandidates() []IntelIdentityAmbiguousCandidate`

GetCandidates returns the Candidates field if non-nil, zero value otherwise.

### GetCandidatesOk

`func (o *IntelIdentityAmbiguousBody) GetCandidatesOk() (*[]IntelIdentityAmbiguousCandidate, bool)`

GetCandidatesOk returns a tuple with the Candidates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCandidates

`func (o *IntelIdentityAmbiguousBody) SetCandidates(v []IntelIdentityAmbiguousCandidate)`

SetCandidates sets Candidates field to given value.



