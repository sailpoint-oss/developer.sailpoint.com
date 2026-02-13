---
id: beta-sod-violation-check-result2
title: SodViolationCheckResult2
pagination_label: SodViolationCheckResult2
sidebar_label: SodViolationCheckResult2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodViolationCheckResult2', 'BetaSodViolationCheckResult2'] 
slug: /tools/sdk/go/beta/models/sod-violation-check-result2
tags: ['SDK', 'Software Development Kit', 'SodViolationCheckResult2', 'BetaSodViolationCheckResult2']
---

# SodViolationCheckResult2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to [**ErrorMessageDto**](error-message-dto) |  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
**ViolationContexts** | Pointer to [**[]SodViolationContext2**](sod-violation-context2) |  | [optional] 
**ViolatedPolicies** | Pointer to [**[]SodPolicyDto1**](sod-policy-dto1) | A list of the Policies that were violated. | [optional] 

## Methods

### NewSodViolationCheckResult2

`func NewSodViolationCheckResult2() *SodViolationCheckResult2`

NewSodViolationCheckResult2 instantiates a new SodViolationCheckResult2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodViolationCheckResult2WithDefaults

`func NewSodViolationCheckResult2WithDefaults() *SodViolationCheckResult2`

NewSodViolationCheckResult2WithDefaults instantiates a new SodViolationCheckResult2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *SodViolationCheckResult2) GetMessage() ErrorMessageDto`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SodViolationCheckResult2) GetMessageOk() (*ErrorMessageDto, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SodViolationCheckResult2) SetMessage(v ErrorMessageDto)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SodViolationCheckResult2) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetClientMetadata

`func (o *SodViolationCheckResult2) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *SodViolationCheckResult2) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *SodViolationCheckResult2) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *SodViolationCheckResult2) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### GetViolationContexts

`func (o *SodViolationCheckResult2) GetViolationContexts() []SodViolationContext2`

GetViolationContexts returns the ViolationContexts field if non-nil, zero value otherwise.

### GetViolationContextsOk

`func (o *SodViolationCheckResult2) GetViolationContextsOk() (*[]SodViolationContext2, bool)`

GetViolationContextsOk returns a tuple with the ViolationContexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationContexts

`func (o *SodViolationCheckResult2) SetViolationContexts(v []SodViolationContext2)`

SetViolationContexts sets ViolationContexts field to given value.

### HasViolationContexts

`func (o *SodViolationCheckResult2) HasViolationContexts() bool`

HasViolationContexts returns a boolean if a field has been set.

### GetViolatedPolicies

`func (o *SodViolationCheckResult2) GetViolatedPolicies() []SodPolicyDto1`

GetViolatedPolicies returns the ViolatedPolicies field if non-nil, zero value otherwise.

### GetViolatedPoliciesOk

`func (o *SodViolationCheckResult2) GetViolatedPoliciesOk() (*[]SodPolicyDto1, bool)`

GetViolatedPoliciesOk returns a tuple with the ViolatedPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolatedPolicies

`func (o *SodViolationCheckResult2) SetViolatedPolicies(v []SodPolicyDto1)`

SetViolatedPolicies sets ViolatedPolicies field to given value.

### HasViolatedPolicies

`func (o *SodViolationCheckResult2) HasViolatedPolicies() bool`

HasViolatedPolicies returns a boolean if a field has been set.


