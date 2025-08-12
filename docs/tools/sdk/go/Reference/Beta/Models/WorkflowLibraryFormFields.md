---
id: beta-workflow-library-form-fields
title: WorkflowLibraryFormFields
pagination_label: WorkflowLibraryFormFields
sidebar_label: WorkflowLibraryFormFields
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkflowLibraryFormFields', 'BetaWorkflowLibraryFormFields'] 
slug: /tools/sdk/go/beta/models/workflow-library-form-fields
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryFormFields', 'BetaWorkflowLibraryFormFields']
---

# WorkflowLibraryFormFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the form field | [optional] 
**HelpText** | Pointer to **string** | Describes the form field in the UI | [optional] 
**Label** | Pointer to **string** | A human readable name for this form field in the UI | [optional] 
**Name** | Pointer to **string** | The name of the input attribute | [optional] 
**Required** | Pointer to **bool** | Denotes if this field is a required attribute | [optional] 
**Type** | Pointer to **NullableString** | The type of the form field | [optional] 

## Methods

### NewWorkflowLibraryFormFields

`func NewWorkflowLibraryFormFields() *WorkflowLibraryFormFields`

NewWorkflowLibraryFormFields instantiates a new WorkflowLibraryFormFields object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowLibraryFormFieldsWithDefaults

`func NewWorkflowLibraryFormFieldsWithDefaults() *WorkflowLibraryFormFields`

NewWorkflowLibraryFormFieldsWithDefaults instantiates a new WorkflowLibraryFormFields object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *WorkflowLibraryFormFields) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *WorkflowLibraryFormFields) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *WorkflowLibraryFormFields) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *WorkflowLibraryFormFields) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHelpText

`func (o *WorkflowLibraryFormFields) GetHelpText() string`

GetHelpText returns the HelpText field if non-nil, zero value otherwise.

### GetHelpTextOk

`func (o *WorkflowLibraryFormFields) GetHelpTextOk() (*string, bool)`

GetHelpTextOk returns a tuple with the HelpText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHelpText

`func (o *WorkflowLibraryFormFields) SetHelpText(v string)`

SetHelpText sets HelpText field to given value.

### HasHelpText

`func (o *WorkflowLibraryFormFields) HasHelpText() bool`

HasHelpText returns a boolean if a field has been set.

### GetLabel

`func (o *WorkflowLibraryFormFields) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *WorkflowLibraryFormFields) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *WorkflowLibraryFormFields) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *WorkflowLibraryFormFields) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetName

`func (o *WorkflowLibraryFormFields) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkflowLibraryFormFields) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkflowLibraryFormFields) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *WorkflowLibraryFormFields) HasName() bool`

HasName returns a boolean if a field has been set.

### GetRequired

`func (o *WorkflowLibraryFormFields) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *WorkflowLibraryFormFields) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *WorkflowLibraryFormFields) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *WorkflowLibraryFormFields) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetType

`func (o *WorkflowLibraryFormFields) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *WorkflowLibraryFormFields) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *WorkflowLibraryFormFields) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *WorkflowLibraryFormFields) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *WorkflowLibraryFormFields) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *WorkflowLibraryFormFields) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil

