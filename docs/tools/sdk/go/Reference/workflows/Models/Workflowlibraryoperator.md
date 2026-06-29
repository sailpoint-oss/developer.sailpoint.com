---
id: v1-workflowlibraryoperator
title: Workflowlibraryoperator
pagination_label: Workflowlibraryoperator
sidebar_label: Workflowlibraryoperator
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workflowlibraryoperator', 'V1Workflowlibraryoperator'] 
slug: /tools/sdk/go/workflows/models/workflowlibraryoperator
tags: ['SDK', 'Software Development Kit', 'Workflowlibraryoperator', 'V1Workflowlibraryoperator']
---

# Workflowlibraryoperator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Operator ID. | [optional] 
**Name** | Pointer to **string** | Operator friendly name | [optional] 
**Type** | Pointer to **string** | Operator type | [optional] 
**Description** | Pointer to **string** | Description of the operator | [optional] 
**IsDynamicSchema** | Pointer to **bool** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] 
**Deprecated** | Pointer to **bool** |  | [optional] 
**DeprecatedBy** | Pointer to **SailPointTime** |  | [optional] 
**IsSimulationEnabled** | Pointer to **bool** |  | [optional] 
**FormFields** | Pointer to [**[]Workflowlibraryformfields**](workflowlibraryformfields) | One or more inputs that the operator accepts | [optional] 

## Methods

### NewWorkflowlibraryoperator

`func NewWorkflowlibraryoperator() *Workflowlibraryoperator`

NewWorkflowlibraryoperator instantiates a new Workflowlibraryoperator object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowlibraryoperatorWithDefaults

`func NewWorkflowlibraryoperatorWithDefaults() *Workflowlibraryoperator`

NewWorkflowlibraryoperatorWithDefaults instantiates a new Workflowlibraryoperator object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Workflowlibraryoperator) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Workflowlibraryoperator) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Workflowlibraryoperator) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Workflowlibraryoperator) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Workflowlibraryoperator) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Workflowlibraryoperator) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Workflowlibraryoperator) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Workflowlibraryoperator) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *Workflowlibraryoperator) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Workflowlibraryoperator) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Workflowlibraryoperator) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Workflowlibraryoperator) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDescription

`func (o *Workflowlibraryoperator) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Workflowlibraryoperator) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Workflowlibraryoperator) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Workflowlibraryoperator) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetIsDynamicSchema

`func (o *Workflowlibraryoperator) GetIsDynamicSchema() bool`

GetIsDynamicSchema returns the IsDynamicSchema field if non-nil, zero value otherwise.

### GetIsDynamicSchemaOk

`func (o *Workflowlibraryoperator) GetIsDynamicSchemaOk() (*bool, bool)`

GetIsDynamicSchemaOk returns a tuple with the IsDynamicSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDynamicSchema

`func (o *Workflowlibraryoperator) SetIsDynamicSchema(v bool)`

SetIsDynamicSchema sets IsDynamicSchema field to given value.

### HasIsDynamicSchema

`func (o *Workflowlibraryoperator) HasIsDynamicSchema() bool`

HasIsDynamicSchema returns a boolean if a field has been set.

### GetDeprecated

`func (o *Workflowlibraryoperator) GetDeprecated() bool`

GetDeprecated returns the Deprecated field if non-nil, zero value otherwise.

### GetDeprecatedOk

`func (o *Workflowlibraryoperator) GetDeprecatedOk() (*bool, bool)`

GetDeprecatedOk returns a tuple with the Deprecated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeprecated

`func (o *Workflowlibraryoperator) SetDeprecated(v bool)`

SetDeprecated sets Deprecated field to given value.

### HasDeprecated

`func (o *Workflowlibraryoperator) HasDeprecated() bool`

HasDeprecated returns a boolean if a field has been set.

### GetDeprecatedBy

`func (o *Workflowlibraryoperator) GetDeprecatedBy() SailPointTime`

GetDeprecatedBy returns the DeprecatedBy field if non-nil, zero value otherwise.

### GetDeprecatedByOk

`func (o *Workflowlibraryoperator) GetDeprecatedByOk() (*SailPointTime, bool)`

GetDeprecatedByOk returns a tuple with the DeprecatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeprecatedBy

`func (o *Workflowlibraryoperator) SetDeprecatedBy(v SailPointTime)`

SetDeprecatedBy sets DeprecatedBy field to given value.

### HasDeprecatedBy

`func (o *Workflowlibraryoperator) HasDeprecatedBy() bool`

HasDeprecatedBy returns a boolean if a field has been set.

### GetIsSimulationEnabled

`func (o *Workflowlibraryoperator) GetIsSimulationEnabled() bool`

GetIsSimulationEnabled returns the IsSimulationEnabled field if non-nil, zero value otherwise.

### GetIsSimulationEnabledOk

`func (o *Workflowlibraryoperator) GetIsSimulationEnabledOk() (*bool, bool)`

GetIsSimulationEnabledOk returns a tuple with the IsSimulationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSimulationEnabled

`func (o *Workflowlibraryoperator) SetIsSimulationEnabled(v bool)`

SetIsSimulationEnabled sets IsSimulationEnabled field to given value.

### HasIsSimulationEnabled

`func (o *Workflowlibraryoperator) HasIsSimulationEnabled() bool`

HasIsSimulationEnabled returns a boolean if a field has been set.

### GetFormFields

`func (o *Workflowlibraryoperator) GetFormFields() []Workflowlibraryformfields`

GetFormFields returns the FormFields field if non-nil, zero value otherwise.

### GetFormFieldsOk

`func (o *Workflowlibraryoperator) GetFormFieldsOk() (*[]Workflowlibraryformfields, bool)`

GetFormFieldsOk returns a tuple with the FormFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFields

`func (o *Workflowlibraryoperator) SetFormFields(v []Workflowlibraryformfields)`

SetFormFields sets FormFields field to given value.

### HasFormFields

`func (o *Workflowlibraryoperator) HasFormFields() bool`

HasFormFields returns a boolean if a field has been set.

### SetFormFieldsNil

`func (o *Workflowlibraryoperator) SetFormFieldsNil(b bool)`

 SetFormFieldsNil sets the value for FormFields to be an explicit nil

### UnsetFormFields
`func (o *Workflowlibraryoperator) UnsetFormFields()`

UnsetFormFields ensures that no value is present for FormFields, not even an explicit nil

