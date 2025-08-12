---
id: sod-violation-check-result
title: SodViolationCheckResult
pagination_label: SodViolationCheckResult
sidebar_label: SodViolationCheckResult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodViolationCheckResult', 'SodViolationCheckResult'] 
slug: /tools/sdk/go/v3/models/sod-violation-check-result
tags: ['SDK', 'Software Development Kit', 'SodViolationCheckResult', 'SodViolationCheckResult']
---

# SodViolationCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to [**ErrorMessageDto**](error-message-dto) |  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
**ViolationContexts** | Pointer to [**[]SodViolationContext**](sod-violation-context) |  | [optional] 
**ViolatedPolicies** | Pointer to [**[]SodPolicyDto1**](sod-policy-dto1) | A list of the SOD policies that were violated. | [optional] 

## Methods

### NewSodViolationCheckResult

`func NewSodViolationCheckResult() *SodViolationCheckResult`

NewSodViolationCheckResult instantiates a new SodViolationCheckResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodViolationCheckResultWithDefaults

`func NewSodViolationCheckResultWithDefaults() *SodViolationCheckResult`

NewSodViolationCheckResultWithDefaults instantiates a new SodViolationCheckResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *SodViolationCheckResult) GetMessage() ErrorMessageDto`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SodViolationCheckResult) GetMessageOk() (*ErrorMessageDto, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SodViolationCheckResult) SetMessage(v ErrorMessageDto)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SodViolationCheckResult) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetClientMetadata

`func (o *SodViolationCheckResult) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *SodViolationCheckResult) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *SodViolationCheckResult) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *SodViolationCheckResult) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### SetClientMetadataNil

`func (o *SodViolationCheckResult) SetClientMetadataNil(b bool)`

 SetClientMetadataNil sets the value for ClientMetadata to be an explicit nil

### UnsetClientMetadata
`func (o *SodViolationCheckResult) UnsetClientMetadata()`

UnsetClientMetadata ensures that no value is present for ClientMetadata, not even an explicit nil
### GetViolationContexts

`func (o *SodViolationCheckResult) GetViolationContexts() []SodViolationContext`

GetViolationContexts returns the ViolationContexts field if non-nil, zero value otherwise.

### GetViolationContextsOk

`func (o *SodViolationCheckResult) GetViolationContextsOk() (*[]SodViolationContext, bool)`

GetViolationContextsOk returns a tuple with the ViolationContexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationContexts

`func (o *SodViolationCheckResult) SetViolationContexts(v []SodViolationContext)`

SetViolationContexts sets ViolationContexts field to given value.

### HasViolationContexts

`func (o *SodViolationCheckResult) HasViolationContexts() bool`

HasViolationContexts returns a boolean if a field has been set.

### SetViolationContextsNil

`func (o *SodViolationCheckResult) SetViolationContextsNil(b bool)`

 SetViolationContextsNil sets the value for ViolationContexts to be an explicit nil

### UnsetViolationContexts
`func (o *SodViolationCheckResult) UnsetViolationContexts()`

UnsetViolationContexts ensures that no value is present for ViolationContexts, not even an explicit nil
### GetViolatedPolicies

`func (o *SodViolationCheckResult) GetViolatedPolicies() []SodPolicyDto1`

GetViolatedPolicies returns the ViolatedPolicies field if non-nil, zero value otherwise.

### GetViolatedPoliciesOk

`func (o *SodViolationCheckResult) GetViolatedPoliciesOk() (*[]SodPolicyDto1, bool)`

GetViolatedPoliciesOk returns a tuple with the ViolatedPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolatedPolicies

`func (o *SodViolationCheckResult) SetViolatedPolicies(v []SodPolicyDto1)`

SetViolatedPolicies sets ViolatedPolicies field to given value.

### HasViolatedPolicies

`func (o *SodViolationCheckResult) HasViolatedPolicies() bool`

HasViolatedPolicies returns a boolean if a field has been set.

### SetViolatedPoliciesNil

`func (o *SodViolationCheckResult) SetViolatedPoliciesNil(b bool)`

 SetViolatedPoliciesNil sets the value for ViolatedPolicies to be an explicit nil

### UnsetViolatedPolicies
`func (o *SodViolationCheckResult) UnsetViolatedPolicies()`

UnsetViolatedPolicies ensures that no value is present for ViolatedPolicies, not even an explicit nil

