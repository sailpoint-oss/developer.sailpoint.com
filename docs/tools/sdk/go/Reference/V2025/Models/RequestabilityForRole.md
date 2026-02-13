---
id: v2025-requestability-for-role
title: RequestabilityForRole
pagination_label: RequestabilityForRole
sidebar_label: RequestabilityForRole
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequestabilityForRole', 'V2025RequestabilityForRole'] 
slug: /tools/sdk/go/v2025/models/requestability-for-role
tags: ['SDK', 'Software Development Kit', 'RequestabilityForRole', 'V2025RequestabilityForRole']
---

# RequestabilityForRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentsRequired** | Pointer to **NullableBool** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to false]
**DenialCommentsRequired** | Pointer to **NullableBool** | Whether an approver must provide comments when denying the request | [optional] [default to false]
**ReauthorizationRequired** | Pointer to **NullableBool** | Indicates whether reauthorization is required for the request. | [optional] [default to false]
**ApprovalSchemes** | Pointer to [**[]ApprovalSchemeForRole**](approval-scheme-for-role) | List describing the steps in approving the request | [optional] 
**DimensionSchema** | Pointer to [**DimensionSchema**](dimension-schema) |  | [optional] 

## Methods

### NewRequestabilityForRole

`func NewRequestabilityForRole() *RequestabilityForRole`

NewRequestabilityForRole instantiates a new RequestabilityForRole object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestabilityForRoleWithDefaults

`func NewRequestabilityForRoleWithDefaults() *RequestabilityForRole`

NewRequestabilityForRoleWithDefaults instantiates a new RequestabilityForRole object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommentsRequired

`func (o *RequestabilityForRole) GetCommentsRequired() bool`

GetCommentsRequired returns the CommentsRequired field if non-nil, zero value otherwise.

### GetCommentsRequiredOk

`func (o *RequestabilityForRole) GetCommentsRequiredOk() (*bool, bool)`

GetCommentsRequiredOk returns a tuple with the CommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentsRequired

`func (o *RequestabilityForRole) SetCommentsRequired(v bool)`

SetCommentsRequired sets CommentsRequired field to given value.

### HasCommentsRequired

`func (o *RequestabilityForRole) HasCommentsRequired() bool`

HasCommentsRequired returns a boolean if a field has been set.

### SetCommentsRequiredNil

`func (o *RequestabilityForRole) SetCommentsRequiredNil(b bool)`

 SetCommentsRequiredNil sets the value for CommentsRequired to be an explicit nil

### UnsetCommentsRequired
`func (o *RequestabilityForRole) UnsetCommentsRequired()`

UnsetCommentsRequired ensures that no value is present for CommentsRequired, not even an explicit nil
### GetDenialCommentsRequired

`func (o *RequestabilityForRole) GetDenialCommentsRequired() bool`

GetDenialCommentsRequired returns the DenialCommentsRequired field if non-nil, zero value otherwise.

### GetDenialCommentsRequiredOk

`func (o *RequestabilityForRole) GetDenialCommentsRequiredOk() (*bool, bool)`

GetDenialCommentsRequiredOk returns a tuple with the DenialCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDenialCommentsRequired

`func (o *RequestabilityForRole) SetDenialCommentsRequired(v bool)`

SetDenialCommentsRequired sets DenialCommentsRequired field to given value.

### HasDenialCommentsRequired

`func (o *RequestabilityForRole) HasDenialCommentsRequired() bool`

HasDenialCommentsRequired returns a boolean if a field has been set.

### SetDenialCommentsRequiredNil

`func (o *RequestabilityForRole) SetDenialCommentsRequiredNil(b bool)`

 SetDenialCommentsRequiredNil sets the value for DenialCommentsRequired to be an explicit nil

### UnsetDenialCommentsRequired
`func (o *RequestabilityForRole) UnsetDenialCommentsRequired()`

UnsetDenialCommentsRequired ensures that no value is present for DenialCommentsRequired, not even an explicit nil
### GetReauthorizationRequired

`func (o *RequestabilityForRole) GetReauthorizationRequired() bool`

GetReauthorizationRequired returns the ReauthorizationRequired field if non-nil, zero value otherwise.

### GetReauthorizationRequiredOk

`func (o *RequestabilityForRole) GetReauthorizationRequiredOk() (*bool, bool)`

GetReauthorizationRequiredOk returns a tuple with the ReauthorizationRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthorizationRequired

`func (o *RequestabilityForRole) SetReauthorizationRequired(v bool)`

SetReauthorizationRequired sets ReauthorizationRequired field to given value.

### HasReauthorizationRequired

`func (o *RequestabilityForRole) HasReauthorizationRequired() bool`

HasReauthorizationRequired returns a boolean if a field has been set.

### SetReauthorizationRequiredNil

`func (o *RequestabilityForRole) SetReauthorizationRequiredNil(b bool)`

 SetReauthorizationRequiredNil sets the value for ReauthorizationRequired to be an explicit nil

### UnsetReauthorizationRequired
`func (o *RequestabilityForRole) UnsetReauthorizationRequired()`

UnsetReauthorizationRequired ensures that no value is present for ReauthorizationRequired, not even an explicit nil
### GetApprovalSchemes

`func (o *RequestabilityForRole) GetApprovalSchemes() []ApprovalSchemeForRole`

GetApprovalSchemes returns the ApprovalSchemes field if non-nil, zero value otherwise.

### GetApprovalSchemesOk

`func (o *RequestabilityForRole) GetApprovalSchemesOk() (*[]ApprovalSchemeForRole, bool)`

GetApprovalSchemesOk returns a tuple with the ApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSchemes

`func (o *RequestabilityForRole) SetApprovalSchemes(v []ApprovalSchemeForRole)`

SetApprovalSchemes sets ApprovalSchemes field to given value.

### HasApprovalSchemes

`func (o *RequestabilityForRole) HasApprovalSchemes() bool`

HasApprovalSchemes returns a boolean if a field has been set.

### GetDimensionSchema

`func (o *RequestabilityForRole) GetDimensionSchema() DimensionSchema`

GetDimensionSchema returns the DimensionSchema field if non-nil, zero value otherwise.

### GetDimensionSchemaOk

`func (o *RequestabilityForRole) GetDimensionSchemaOk() (*DimensionSchema, bool)`

GetDimensionSchemaOk returns a tuple with the DimensionSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimensionSchema

`func (o *RequestabilityForRole) SetDimensionSchema(v DimensionSchema)`

SetDimensionSchema sets DimensionSchema field to given value.

### HasDimensionSchema

`func (o *RequestabilityForRole) HasDimensionSchema() bool`

HasDimensionSchema returns a boolean if a field has been set.


