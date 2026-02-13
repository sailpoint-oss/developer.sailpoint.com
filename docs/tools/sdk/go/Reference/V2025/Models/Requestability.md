---
id: v2025-requestability
title: Requestability
pagination_label: Requestability
sidebar_label: Requestability
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Requestability', 'V2025Requestability'] 
slug: /tools/sdk/go/v2025/models/requestability
tags: ['SDK', 'Software Development Kit', 'Requestability', 'V2025Requestability']
---

# Requestability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentsRequired** | Pointer to **NullableBool** | Indicates whether the requester of the containing object must provide comments justifying the request. | [optional] [default to false]
**DenialCommentsRequired** | Pointer to **NullableBool** | Indicates whether an approver must provide comments when denying the request. | [optional] [default to false]
**ReauthorizationRequired** | Pointer to **NullableBool** | Indicates whether reauthorization is required for the request. | [optional] [default to false]
**RequireEndDate** | Pointer to **NullableBool** | Indicates whether the requester of the containing object must provide access end date. | [optional] [default to false]
**MaxPermittedAccessDuration** | Pointer to [**NullableAccessDuration**](access-duration) |  | [optional] 
**ApprovalSchemes** | Pointer to [**[]AccessProfileApprovalScheme**](access-profile-approval-scheme) | List describing the steps involved in approving the request. | [optional] 

## Methods

### NewRequestability

`func NewRequestability() *Requestability`

NewRequestability instantiates a new Requestability object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestabilityWithDefaults

`func NewRequestabilityWithDefaults() *Requestability`

NewRequestabilityWithDefaults instantiates a new Requestability object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommentsRequired

`func (o *Requestability) GetCommentsRequired() bool`

GetCommentsRequired returns the CommentsRequired field if non-nil, zero value otherwise.

### GetCommentsRequiredOk

`func (o *Requestability) GetCommentsRequiredOk() (*bool, bool)`

GetCommentsRequiredOk returns a tuple with the CommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentsRequired

`func (o *Requestability) SetCommentsRequired(v bool)`

SetCommentsRequired sets CommentsRequired field to given value.

### HasCommentsRequired

`func (o *Requestability) HasCommentsRequired() bool`

HasCommentsRequired returns a boolean if a field has been set.

### SetCommentsRequiredNil

`func (o *Requestability) SetCommentsRequiredNil(b bool)`

 SetCommentsRequiredNil sets the value for CommentsRequired to be an explicit nil

### UnsetCommentsRequired
`func (o *Requestability) UnsetCommentsRequired()`

UnsetCommentsRequired ensures that no value is present for CommentsRequired, not even an explicit nil
### GetDenialCommentsRequired

`func (o *Requestability) GetDenialCommentsRequired() bool`

GetDenialCommentsRequired returns the DenialCommentsRequired field if non-nil, zero value otherwise.

### GetDenialCommentsRequiredOk

`func (o *Requestability) GetDenialCommentsRequiredOk() (*bool, bool)`

GetDenialCommentsRequiredOk returns a tuple with the DenialCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDenialCommentsRequired

`func (o *Requestability) SetDenialCommentsRequired(v bool)`

SetDenialCommentsRequired sets DenialCommentsRequired field to given value.

### HasDenialCommentsRequired

`func (o *Requestability) HasDenialCommentsRequired() bool`

HasDenialCommentsRequired returns a boolean if a field has been set.

### SetDenialCommentsRequiredNil

`func (o *Requestability) SetDenialCommentsRequiredNil(b bool)`

 SetDenialCommentsRequiredNil sets the value for DenialCommentsRequired to be an explicit nil

### UnsetDenialCommentsRequired
`func (o *Requestability) UnsetDenialCommentsRequired()`

UnsetDenialCommentsRequired ensures that no value is present for DenialCommentsRequired, not even an explicit nil
### GetReauthorizationRequired

`func (o *Requestability) GetReauthorizationRequired() bool`

GetReauthorizationRequired returns the ReauthorizationRequired field if non-nil, zero value otherwise.

### GetReauthorizationRequiredOk

`func (o *Requestability) GetReauthorizationRequiredOk() (*bool, bool)`

GetReauthorizationRequiredOk returns a tuple with the ReauthorizationRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthorizationRequired

`func (o *Requestability) SetReauthorizationRequired(v bool)`

SetReauthorizationRequired sets ReauthorizationRequired field to given value.

### HasReauthorizationRequired

`func (o *Requestability) HasReauthorizationRequired() bool`

HasReauthorizationRequired returns a boolean if a field has been set.

### SetReauthorizationRequiredNil

`func (o *Requestability) SetReauthorizationRequiredNil(b bool)`

 SetReauthorizationRequiredNil sets the value for ReauthorizationRequired to be an explicit nil

### UnsetReauthorizationRequired
`func (o *Requestability) UnsetReauthorizationRequired()`

UnsetReauthorizationRequired ensures that no value is present for ReauthorizationRequired, not even an explicit nil
### GetRequireEndDate

`func (o *Requestability) GetRequireEndDate() bool`

GetRequireEndDate returns the RequireEndDate field if non-nil, zero value otherwise.

### GetRequireEndDateOk

`func (o *Requestability) GetRequireEndDateOk() (*bool, bool)`

GetRequireEndDateOk returns a tuple with the RequireEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequireEndDate

`func (o *Requestability) SetRequireEndDate(v bool)`

SetRequireEndDate sets RequireEndDate field to given value.

### HasRequireEndDate

`func (o *Requestability) HasRequireEndDate() bool`

HasRequireEndDate returns a boolean if a field has been set.

### SetRequireEndDateNil

`func (o *Requestability) SetRequireEndDateNil(b bool)`

 SetRequireEndDateNil sets the value for RequireEndDate to be an explicit nil

### UnsetRequireEndDate
`func (o *Requestability) UnsetRequireEndDate()`

UnsetRequireEndDate ensures that no value is present for RequireEndDate, not even an explicit nil
### GetMaxPermittedAccessDuration

`func (o *Requestability) GetMaxPermittedAccessDuration() AccessDuration`

GetMaxPermittedAccessDuration returns the MaxPermittedAccessDuration field if non-nil, zero value otherwise.

### GetMaxPermittedAccessDurationOk

`func (o *Requestability) GetMaxPermittedAccessDurationOk() (*AccessDuration, bool)`

GetMaxPermittedAccessDurationOk returns a tuple with the MaxPermittedAccessDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxPermittedAccessDuration

`func (o *Requestability) SetMaxPermittedAccessDuration(v AccessDuration)`

SetMaxPermittedAccessDuration sets MaxPermittedAccessDuration field to given value.

### HasMaxPermittedAccessDuration

`func (o *Requestability) HasMaxPermittedAccessDuration() bool`

HasMaxPermittedAccessDuration returns a boolean if a field has been set.

### SetMaxPermittedAccessDurationNil

`func (o *Requestability) SetMaxPermittedAccessDurationNil(b bool)`

 SetMaxPermittedAccessDurationNil sets the value for MaxPermittedAccessDuration to be an explicit nil

### UnsetMaxPermittedAccessDuration
`func (o *Requestability) UnsetMaxPermittedAccessDuration()`

UnsetMaxPermittedAccessDuration ensures that no value is present for MaxPermittedAccessDuration, not even an explicit nil
### GetApprovalSchemes

`func (o *Requestability) GetApprovalSchemes() []AccessProfileApprovalScheme`

GetApprovalSchemes returns the ApprovalSchemes field if non-nil, zero value otherwise.

### GetApprovalSchemesOk

`func (o *Requestability) GetApprovalSchemesOk() (*[]AccessProfileApprovalScheme, bool)`

GetApprovalSchemesOk returns a tuple with the ApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSchemes

`func (o *Requestability) SetApprovalSchemes(v []AccessProfileApprovalScheme)`

SetApprovalSchemes sets ApprovalSchemes field to given value.

### HasApprovalSchemes

`func (o *Requestability) HasApprovalSchemes() bool`

HasApprovalSchemes returns a boolean if a field has been set.

### SetApprovalSchemesNil

`func (o *Requestability) SetApprovalSchemesNil(b bool)`

 SetApprovalSchemesNil sets the value for ApprovalSchemes to be an explicit nil

### UnsetApprovalSchemes
`func (o *Requestability) UnsetApprovalSchemes()`

UnsetApprovalSchemes ensures that no value is present for ApprovalSchemes, not even an explicit nil

