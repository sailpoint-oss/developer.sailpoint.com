---
id: workflow-trigger-attributes
title: WorkflowTriggerAttributes
pagination_label: WorkflowTriggerAttributes
sidebar_label: WorkflowTriggerAttributes
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'WorkflowTriggerAttributes'] 
slug: /tools/sdk/go/v3/models/workflow-trigger-attributes
tags: ['SDK', 'Software Development Kit', 'WorkflowTriggerAttributes']
---

# WorkflowTriggerAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **string** | The unique ID of the trigger | 
**Filter** |  Pointer to **string** | JSON path expression that will limit which events the trigger will fire on | [optional] 
**Name** |  **string** | A unique name for the external trigger | 
**Description** |  Pointer to **string** | Additonal context about the external trigger | [optional] 
**CronString** |  **string** | A valid CRON expression | 

## Methods

### NewWorkflowTriggerAttributes

`func NewWorkflowTriggerAttributes(id string, name string, cronString string, ) *WorkflowTriggerAttributes`

NewWorkflowTriggerAttributes instantiates a new WorkflowTriggerAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowTriggerAttributesWithDefaults

`func NewWorkflowTriggerAttributesWithDefaults() *WorkflowTriggerAttributes`

NewWorkflowTriggerAttributesWithDefaults instantiates a new WorkflowTriggerAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *WorkflowTriggerAttributes) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkflowTriggerAttributes) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkflowTriggerAttributes) SetId(v string)`

SetId sets Id field to given value.


### GetFilter

`func (o *WorkflowTriggerAttributes) GetFilter() string`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *WorkflowTriggerAttributes) GetFilterOk() (*string, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *WorkflowTriggerAttributes) SetFilter(v string)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *WorkflowTriggerAttributes) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetName

`func (o *WorkflowTriggerAttributes) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkflowTriggerAttributes) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkflowTriggerAttributes) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *WorkflowTriggerAttributes) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *WorkflowTriggerAttributes) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *WorkflowTriggerAttributes) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *WorkflowTriggerAttributes) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCronString

`func (o *WorkflowTriggerAttributes) GetCronString() string`

GetCronString returns the CronString field if non-nil, zero value otherwise.

### GetCronStringOk

`func (o *WorkflowTriggerAttributes) GetCronStringOk() (*string, bool)`

GetCronStringOk returns a tuple with the CronString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCronString

`func (o *WorkflowTriggerAttributes) SetCronString(v string)`

SetCronString sets CronString field to given value.



[[Back to top]](#) 


