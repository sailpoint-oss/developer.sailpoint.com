---
id: workflow-trigger-attributes
title: WorkflowTriggerAttributes
pagination_label: WorkflowTriggerAttributes
sidebar_label: WorkflowTriggerAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkflowTriggerAttributes', 'WorkflowTriggerAttributes'] 
slug: /tools/sdk/go/v3/models/workflow-trigger-attributes
tags: ['SDK', 'Software Development Kit', 'WorkflowTriggerAttributes', 'WorkflowTriggerAttributes']
---

# WorkflowTriggerAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the trigger | 
**Filter** | Pointer to **string** | JSON path expression that will limit which events the trigger will fire on | [optional] 
**Description** | Pointer to **string** | Additonal context about the external trigger | [optional] 
**AttributeToFilter** | Pointer to **string** | The attribute to filter on | [optional] 
**FormDefinitionId** | Pointer to **string** | Form definition&#39;s unique identifier. | [optional] 
**Name** | Pointer to **string** | A unique name for the external trigger | [optional] 
**ClientId** | Pointer to **string** | OAuth Client ID to authenticate with this trigger | [optional] 
**Url** | Pointer to **string** | URL to invoke this workflow | [optional] 
**CronString** | Pointer to **string** | A valid CRON expression | [optional] 
**Frequency** | **string** | Frequency of execution | 
**TimeZone** | Pointer to **string** | Time zone identifier | [optional] 
**WeeklyDays** | Pointer to **[]string** | Scheduled days of the week for execution | [optional] 
**WeeklyTimes** | Pointer to **[]string** | Scheduled execution times | [optional] 
**YearlyTimes** | Pointer to **[]string** | Scheduled execution times | [optional] 

## Methods

### NewWorkflowTriggerAttributes

`func NewWorkflowTriggerAttributes(id string, frequency string, ) *WorkflowTriggerAttributes`

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

### GetAttributeToFilter

`func (o *WorkflowTriggerAttributes) GetAttributeToFilter() string`

GetAttributeToFilter returns the AttributeToFilter field if non-nil, zero value otherwise.

### GetAttributeToFilterOk

`func (o *WorkflowTriggerAttributes) GetAttributeToFilterOk() (*string, bool)`

GetAttributeToFilterOk returns a tuple with the AttributeToFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeToFilter

`func (o *WorkflowTriggerAttributes) SetAttributeToFilter(v string)`

SetAttributeToFilter sets AttributeToFilter field to given value.

### HasAttributeToFilter

`func (o *WorkflowTriggerAttributes) HasAttributeToFilter() bool`

HasAttributeToFilter returns a boolean if a field has been set.

### GetFormDefinitionId

`func (o *WorkflowTriggerAttributes) GetFormDefinitionId() string`

GetFormDefinitionId returns the FormDefinitionId field if non-nil, zero value otherwise.

### GetFormDefinitionIdOk

`func (o *WorkflowTriggerAttributes) GetFormDefinitionIdOk() (*string, bool)`

GetFormDefinitionIdOk returns a tuple with the FormDefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormDefinitionId

`func (o *WorkflowTriggerAttributes) SetFormDefinitionId(v string)`

SetFormDefinitionId sets FormDefinitionId field to given value.

### HasFormDefinitionId

`func (o *WorkflowTriggerAttributes) HasFormDefinitionId() bool`

HasFormDefinitionId returns a boolean if a field has been set.

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

### HasName

`func (o *WorkflowTriggerAttributes) HasName() bool`

HasName returns a boolean if a field has been set.

### GetClientId

`func (o *WorkflowTriggerAttributes) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *WorkflowTriggerAttributes) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *WorkflowTriggerAttributes) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *WorkflowTriggerAttributes) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetUrl

`func (o *WorkflowTriggerAttributes) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *WorkflowTriggerAttributes) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *WorkflowTriggerAttributes) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *WorkflowTriggerAttributes) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

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

### HasCronString

`func (o *WorkflowTriggerAttributes) HasCronString() bool`

HasCronString returns a boolean if a field has been set.

### GetFrequency

`func (o *WorkflowTriggerAttributes) GetFrequency() string`

GetFrequency returns the Frequency field if non-nil, zero value otherwise.

### GetFrequencyOk

`func (o *WorkflowTriggerAttributes) GetFrequencyOk() (*string, bool)`

GetFrequencyOk returns a tuple with the Frequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequency

`func (o *WorkflowTriggerAttributes) SetFrequency(v string)`

SetFrequency sets Frequency field to given value.


### GetTimeZone

`func (o *WorkflowTriggerAttributes) GetTimeZone() string`

GetTimeZone returns the TimeZone field if non-nil, zero value otherwise.

### GetTimeZoneOk

`func (o *WorkflowTriggerAttributes) GetTimeZoneOk() (*string, bool)`

GetTimeZoneOk returns a tuple with the TimeZone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZone

`func (o *WorkflowTriggerAttributes) SetTimeZone(v string)`

SetTimeZone sets TimeZone field to given value.

### HasTimeZone

`func (o *WorkflowTriggerAttributes) HasTimeZone() bool`

HasTimeZone returns a boolean if a field has been set.

### GetWeeklyDays

`func (o *WorkflowTriggerAttributes) GetWeeklyDays() []string`

GetWeeklyDays returns the WeeklyDays field if non-nil, zero value otherwise.

### GetWeeklyDaysOk

`func (o *WorkflowTriggerAttributes) GetWeeklyDaysOk() (*[]string, bool)`

GetWeeklyDaysOk returns a tuple with the WeeklyDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeeklyDays

`func (o *WorkflowTriggerAttributes) SetWeeklyDays(v []string)`

SetWeeklyDays sets WeeklyDays field to given value.

### HasWeeklyDays

`func (o *WorkflowTriggerAttributes) HasWeeklyDays() bool`

HasWeeklyDays returns a boolean if a field has been set.

### GetWeeklyTimes

`func (o *WorkflowTriggerAttributes) GetWeeklyTimes() []string`

GetWeeklyTimes returns the WeeklyTimes field if non-nil, zero value otherwise.

### GetWeeklyTimesOk

`func (o *WorkflowTriggerAttributes) GetWeeklyTimesOk() (*[]string, bool)`

GetWeeklyTimesOk returns a tuple with the WeeklyTimes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeeklyTimes

`func (o *WorkflowTriggerAttributes) SetWeeklyTimes(v []string)`

SetWeeklyTimes sets WeeklyTimes field to given value.

### HasWeeklyTimes

`func (o *WorkflowTriggerAttributes) HasWeeklyTimes() bool`

HasWeeklyTimes returns a boolean if a field has been set.

### GetYearlyTimes

`func (o *WorkflowTriggerAttributes) GetYearlyTimes() []string`

GetYearlyTimes returns the YearlyTimes field if non-nil, zero value otherwise.

### GetYearlyTimesOk

`func (o *WorkflowTriggerAttributes) GetYearlyTimesOk() (*[]string, bool)`

GetYearlyTimesOk returns a tuple with the YearlyTimes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYearlyTimes

`func (o *WorkflowTriggerAttributes) SetYearlyTimes(v []string)`

SetYearlyTimes sets YearlyTimes field to given value.

### HasYearlyTimes

`func (o *WorkflowTriggerAttributes) HasYearlyTimes() bool`

HasYearlyTimes returns a boolean if a field has been set.


