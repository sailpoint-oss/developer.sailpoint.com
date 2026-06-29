---
id: v1-requestabilityforrole
title: Requestabilityforrole
pagination_label: Requestabilityforrole
sidebar_label: Requestabilityforrole
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Requestabilityforrole', 'V1Requestabilityforrole'] 
slug: /tools/sdk/go/roles/models/requestabilityforrole
tags: ['SDK', 'Software Development Kit', 'Requestabilityforrole', 'V1Requestabilityforrole']
---

# Requestabilityforrole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentsRequired** | Pointer to **NullableBool** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to false]
**DenialCommentsRequired** | Pointer to **NullableBool** | Whether an approver must provide comments when denying the request | [optional] [default to false]
**ReauthorizationRequired** | Pointer to **NullableBool** | Indicates whether reauthorization is required for the request. | [optional] [default to false]
**RequireEndDate** | Pointer to **bool** | Indicates whether the requester of the containing object must provide access end date. | [optional] [default to false]
**MaxPermittedAccessDuration** | Pointer to [**NullableAccessduration**](accessduration) |  | [optional] 
**ApprovalSchemes** | Pointer to [**[]Approvalschemeforrole**](approvalschemeforrole) | List describing the steps in approving the request | [optional] 
**DimensionSchema** | Pointer to [**Dimensionschema**](dimensionschema) |  | [optional] 
**FormDefinitionId** | Pointer to **NullableString** | The ID of the form definition used for the access request. If specified, the form is presented to the requester during the access request process. | [optional] 

## Methods

### NewRequestabilityforrole

`func NewRequestabilityforrole() *Requestabilityforrole`

NewRequestabilityforrole instantiates a new Requestabilityforrole object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestabilityforroleWithDefaults

`func NewRequestabilityforroleWithDefaults() *Requestabilityforrole`

NewRequestabilityforroleWithDefaults instantiates a new Requestabilityforrole object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommentsRequired

`func (o *Requestabilityforrole) GetCommentsRequired() bool`

GetCommentsRequired returns the CommentsRequired field if non-nil, zero value otherwise.

### GetCommentsRequiredOk

`func (o *Requestabilityforrole) GetCommentsRequiredOk() (*bool, bool)`

GetCommentsRequiredOk returns a tuple with the CommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentsRequired

`func (o *Requestabilityforrole) SetCommentsRequired(v bool)`

SetCommentsRequired sets CommentsRequired field to given value.

### HasCommentsRequired

`func (o *Requestabilityforrole) HasCommentsRequired() bool`

HasCommentsRequired returns a boolean if a field has been set.

### SetCommentsRequiredNil

`func (o *Requestabilityforrole) SetCommentsRequiredNil(b bool)`

 SetCommentsRequiredNil sets the value for CommentsRequired to be an explicit nil

### UnsetCommentsRequired
`func (o *Requestabilityforrole) UnsetCommentsRequired()`

UnsetCommentsRequired ensures that no value is present for CommentsRequired, not even an explicit nil
### GetDenialCommentsRequired

`func (o *Requestabilityforrole) GetDenialCommentsRequired() bool`

GetDenialCommentsRequired returns the DenialCommentsRequired field if non-nil, zero value otherwise.

### GetDenialCommentsRequiredOk

`func (o *Requestabilityforrole) GetDenialCommentsRequiredOk() (*bool, bool)`

GetDenialCommentsRequiredOk returns a tuple with the DenialCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDenialCommentsRequired

`func (o *Requestabilityforrole) SetDenialCommentsRequired(v bool)`

SetDenialCommentsRequired sets DenialCommentsRequired field to given value.

### HasDenialCommentsRequired

`func (o *Requestabilityforrole) HasDenialCommentsRequired() bool`

HasDenialCommentsRequired returns a boolean if a field has been set.

### SetDenialCommentsRequiredNil

`func (o *Requestabilityforrole) SetDenialCommentsRequiredNil(b bool)`

 SetDenialCommentsRequiredNil sets the value for DenialCommentsRequired to be an explicit nil

### UnsetDenialCommentsRequired
`func (o *Requestabilityforrole) UnsetDenialCommentsRequired()`

UnsetDenialCommentsRequired ensures that no value is present for DenialCommentsRequired, not even an explicit nil
### GetReauthorizationRequired

`func (o *Requestabilityforrole) GetReauthorizationRequired() bool`

GetReauthorizationRequired returns the ReauthorizationRequired field if non-nil, zero value otherwise.

### GetReauthorizationRequiredOk

`func (o *Requestabilityforrole) GetReauthorizationRequiredOk() (*bool, bool)`

GetReauthorizationRequiredOk returns a tuple with the ReauthorizationRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthorizationRequired

`func (o *Requestabilityforrole) SetReauthorizationRequired(v bool)`

SetReauthorizationRequired sets ReauthorizationRequired field to given value.

### HasReauthorizationRequired

`func (o *Requestabilityforrole) HasReauthorizationRequired() bool`

HasReauthorizationRequired returns a boolean if a field has been set.

### SetReauthorizationRequiredNil

`func (o *Requestabilityforrole) SetReauthorizationRequiredNil(b bool)`

 SetReauthorizationRequiredNil sets the value for ReauthorizationRequired to be an explicit nil

### UnsetReauthorizationRequired
`func (o *Requestabilityforrole) UnsetReauthorizationRequired()`

UnsetReauthorizationRequired ensures that no value is present for ReauthorizationRequired, not even an explicit nil
### GetRequireEndDate

`func (o *Requestabilityforrole) GetRequireEndDate() bool`

GetRequireEndDate returns the RequireEndDate field if non-nil, zero value otherwise.

### GetRequireEndDateOk

`func (o *Requestabilityforrole) GetRequireEndDateOk() (*bool, bool)`

GetRequireEndDateOk returns a tuple with the RequireEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequireEndDate

`func (o *Requestabilityforrole) SetRequireEndDate(v bool)`

SetRequireEndDate sets RequireEndDate field to given value.

### HasRequireEndDate

`func (o *Requestabilityforrole) HasRequireEndDate() bool`

HasRequireEndDate returns a boolean if a field has been set.

### GetMaxPermittedAccessDuration

`func (o *Requestabilityforrole) GetMaxPermittedAccessDuration() Accessduration`

GetMaxPermittedAccessDuration returns the MaxPermittedAccessDuration field if non-nil, zero value otherwise.

### GetMaxPermittedAccessDurationOk

`func (o *Requestabilityforrole) GetMaxPermittedAccessDurationOk() (*Accessduration, bool)`

GetMaxPermittedAccessDurationOk returns a tuple with the MaxPermittedAccessDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxPermittedAccessDuration

`func (o *Requestabilityforrole) SetMaxPermittedAccessDuration(v Accessduration)`

SetMaxPermittedAccessDuration sets MaxPermittedAccessDuration field to given value.

### HasMaxPermittedAccessDuration

`func (o *Requestabilityforrole) HasMaxPermittedAccessDuration() bool`

HasMaxPermittedAccessDuration returns a boolean if a field has been set.

### SetMaxPermittedAccessDurationNil

`func (o *Requestabilityforrole) SetMaxPermittedAccessDurationNil(b bool)`

 SetMaxPermittedAccessDurationNil sets the value for MaxPermittedAccessDuration to be an explicit nil

### UnsetMaxPermittedAccessDuration
`func (o *Requestabilityforrole) UnsetMaxPermittedAccessDuration()`

UnsetMaxPermittedAccessDuration ensures that no value is present for MaxPermittedAccessDuration, not even an explicit nil
### GetApprovalSchemes

`func (o *Requestabilityforrole) GetApprovalSchemes() []Approvalschemeforrole`

GetApprovalSchemes returns the ApprovalSchemes field if non-nil, zero value otherwise.

### GetApprovalSchemesOk

`func (o *Requestabilityforrole) GetApprovalSchemesOk() (*[]Approvalschemeforrole, bool)`

GetApprovalSchemesOk returns a tuple with the ApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSchemes

`func (o *Requestabilityforrole) SetApprovalSchemes(v []Approvalschemeforrole)`

SetApprovalSchemes sets ApprovalSchemes field to given value.

### HasApprovalSchemes

`func (o *Requestabilityforrole) HasApprovalSchemes() bool`

HasApprovalSchemes returns a boolean if a field has been set.

### GetDimensionSchema

`func (o *Requestabilityforrole) GetDimensionSchema() Dimensionschema`

GetDimensionSchema returns the DimensionSchema field if non-nil, zero value otherwise.

### GetDimensionSchemaOk

`func (o *Requestabilityforrole) GetDimensionSchemaOk() (*Dimensionschema, bool)`

GetDimensionSchemaOk returns a tuple with the DimensionSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimensionSchema

`func (o *Requestabilityforrole) SetDimensionSchema(v Dimensionschema)`

SetDimensionSchema sets DimensionSchema field to given value.

### HasDimensionSchema

`func (o *Requestabilityforrole) HasDimensionSchema() bool`

HasDimensionSchema returns a boolean if a field has been set.

### GetFormDefinitionId

`func (o *Requestabilityforrole) GetFormDefinitionId() string`

GetFormDefinitionId returns the FormDefinitionId field if non-nil, zero value otherwise.

### GetFormDefinitionIdOk

`func (o *Requestabilityforrole) GetFormDefinitionIdOk() (*string, bool)`

GetFormDefinitionIdOk returns a tuple with the FormDefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormDefinitionId

`func (o *Requestabilityforrole) SetFormDefinitionId(v string)`

SetFormDefinitionId sets FormDefinitionId field to given value.

### HasFormDefinitionId

`func (o *Requestabilityforrole) HasFormDefinitionId() bool`

HasFormDefinitionId returns a boolean if a field has been set.

### SetFormDefinitionIdNil

`func (o *Requestabilityforrole) SetFormDefinitionIdNil(b bool)`

 SetFormDefinitionIdNil sets the value for FormDefinitionId to be an explicit nil

### UnsetFormDefinitionId
`func (o *Requestabilityforrole) UnsetFormDefinitionId()`

UnsetFormDefinitionId ensures that no value is present for FormDefinitionId, not even an explicit nil

