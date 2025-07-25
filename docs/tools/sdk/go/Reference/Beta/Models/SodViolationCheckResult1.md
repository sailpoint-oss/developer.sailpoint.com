---
id: beta-sod-violation-check-result1
title: SodViolationCheckResult1
pagination_label: SodViolationCheckResult1
sidebar_label: SodViolationCheckResult1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodViolationCheckResult1', 'BetaSodViolationCheckResult1'] 
slug: /tools/sdk/go/beta/models/sod-violation-check-result1
tags: ['SDK', 'Software Development Kit', 'SodViolationCheckResult1', 'BetaSodViolationCheckResult1']
---

# SodViolationCheckResult1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to [**ErrorMessageDto**](error-message-dto) |  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
**ViolationContexts** | Pointer to [**[]SodViolationContext1**](sod-violation-context1) |  | [optional] 
**ViolatedPolicies** | Pointer to [**[]SodPolicyDto1**](sod-policy-dto1) | A list of the Policies that were violated. | [optional] 

## Methods

### NewSodViolationCheckResult1

`func NewSodViolationCheckResult1() *SodViolationCheckResult1`

NewSodViolationCheckResult1 instantiates a new SodViolationCheckResult1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodViolationCheckResult1WithDefaults

`func NewSodViolationCheckResult1WithDefaults() *SodViolationCheckResult1`

NewSodViolationCheckResult1WithDefaults instantiates a new SodViolationCheckResult1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *SodViolationCheckResult1) GetMessage() ErrorMessageDto`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SodViolationCheckResult1) GetMessageOk() (*ErrorMessageDto, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SodViolationCheckResult1) SetMessage(v ErrorMessageDto)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SodViolationCheckResult1) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetClientMetadata

`func (o *SodViolationCheckResult1) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *SodViolationCheckResult1) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *SodViolationCheckResult1) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *SodViolationCheckResult1) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### GetViolationContexts

`func (o *SodViolationCheckResult1) GetViolationContexts() []SodViolationContext1`

GetViolationContexts returns the ViolationContexts field if non-nil, zero value otherwise.

### GetViolationContextsOk

`func (o *SodViolationCheckResult1) GetViolationContextsOk() (*[]SodViolationContext1, bool)`

GetViolationContextsOk returns a tuple with the ViolationContexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationContexts

`func (o *SodViolationCheckResult1) SetViolationContexts(v []SodViolationContext1)`

SetViolationContexts sets ViolationContexts field to given value.

### HasViolationContexts

`func (o *SodViolationCheckResult1) HasViolationContexts() bool`

HasViolationContexts returns a boolean if a field has been set.

### GetViolatedPolicies

`func (o *SodViolationCheckResult1) GetViolatedPolicies() []SodPolicyDto1`

GetViolatedPolicies returns the ViolatedPolicies field if non-nil, zero value otherwise.

### GetViolatedPoliciesOk

`func (o *SodViolationCheckResult1) GetViolatedPoliciesOk() (*[]SodPolicyDto1, bool)`

GetViolatedPoliciesOk returns a tuple with the ViolatedPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolatedPolicies

`func (o *SodViolationCheckResult1) SetViolatedPolicies(v []SodPolicyDto1)`

SetViolatedPolicies sets ViolatedPolicies field to given value.

### HasViolatedPolicies

`func (o *SodViolationCheckResult1) HasViolatedPolicies() bool`

HasViolatedPolicies returns a boolean if a field has been set.


