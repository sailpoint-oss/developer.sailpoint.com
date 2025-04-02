---
id: workflow-trigger-attributes
title: WorkflowTriggerAttributes
pagination_label: WorkflowTriggerAttributes
sidebar_label: WorkflowTriggerAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkflowTriggerAttributes', 'WorkflowTriggerAttributes'] 
slug: /tools/sdk/go//models/workflow-trigger-attributes
tags: ['SDK', 'Software Development Kit', 'WorkflowTriggerAttributes', 'WorkflowTriggerAttributes']
---

# WorkflowTriggerAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **NullableString** | The unique ID of the trigger | 
**Filter** | Pointer to **NullableString** | JSON path expression that will limit which events the trigger will fire on | [optional] 
**Description** | Pointer to **NullableString** | Additional context about the external trigger | [optional] 
**AttributeToFilter** | Pointer to **NullableString** | The attribute to filter on | [optional] 
**FormDefinitionId** | Pointer to **NullableString** | Form definition's unique identifier. | [optional] 
**Name** | Pointer to **NullableString** | A unique name for the external trigger | [optional] 
**ClientId** | Pointer to **NullableString** | OAuth Client ID to authenticate with this trigger | [optional] 
**Url** | Pointer to **NullableString** | URL to invoke this workflow | [optional] 
**Frequency** | **NullableString** | Frequency of execution | 
**TimeZone** | Pointer to **NullableString** | Time zone identifier | [optional] 
**CronString** | Pointer to **NullableString** | A valid CRON expression | [optional] 
**WeeklyDays** | Pointer to **[]string** | Scheduled days of the week for execution | [optional] 
**WeeklyTimes** | Pointer to **[]string** | Scheduled execution times | [optional] 
**YearlyTimes** | Pointer to **[]string** | Scheduled execution times | [optional] 

## Methods

### NewWorkflowTriggerAttributes

`func NewWorkflowTriggerAttributes(id NullableString, frequency NullableString, ) *WorkflowTriggerAttributes`

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


### SetIdNil

`func (o *WorkflowTriggerAttributes) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *WorkflowTriggerAttributes) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
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

### SetFilterNil

`func (o *WorkflowTriggerAttributes) SetFilterNil(b bool)`

 SetFilterNil sets the value for Filter to be an explicit nil

### UnsetFilter
`func (o *WorkflowTriggerAttributes) UnsetFilter()`

UnsetFilter ensures that no value is present for Filter, not even an explicit nil
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

### SetDescriptionNil

`func (o *WorkflowTriggerAttributes) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *WorkflowTriggerAttributes) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
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

### SetAttributeToFilterNil

`func (o *WorkflowTriggerAttributes) SetAttributeToFilterNil(b bool)`

 SetAttributeToFilterNil sets the value for AttributeToFilter to be an explicit nil

### UnsetAttributeToFilter
`func (o *WorkflowTriggerAttributes) UnsetAttributeToFilter()`

UnsetAttributeToFilter ensures that no value is present for AttributeToFilter, not even an explicit nil
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

### SetFormDefinitionIdNil

`func (o *WorkflowTriggerAttributes) SetFormDefinitionIdNil(b bool)`

 SetFormDefinitionIdNil sets the value for FormDefinitionId to be an explicit nil

### UnsetFormDefinitionId
`func (o *WorkflowTriggerAttributes) UnsetFormDefinitionId()`

UnsetFormDefinitionId ensures that no value is present for FormDefinitionId, not even an explicit nil
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

### SetNameNil

`func (o *WorkflowTriggerAttributes) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *WorkflowTriggerAttributes) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
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

### SetClientIdNil

`func (o *WorkflowTriggerAttributes) SetClientIdNil(b bool)`

 SetClientIdNil sets the value for ClientId to be an explicit nil

### UnsetClientId
`func (o *WorkflowTriggerAttributes) UnsetClientId()`

UnsetClientId ensures that no value is present for ClientId, not even an explicit nil
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

### SetUrlNil

`func (o *WorkflowTriggerAttributes) SetUrlNil(b bool)`

 SetUrlNil sets the value for Url to be an explicit nil

### UnsetUrl
`func (o *WorkflowTriggerAttributes) UnsetUrl()`

UnsetUrl ensures that no value is present for Url, not even an explicit nil
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


### SetFrequencyNil

`func (o *WorkflowTriggerAttributes) SetFrequencyNil(b bool)`

 SetFrequencyNil sets the value for Frequency to be an explicit nil

### UnsetFrequency
`func (o *WorkflowTriggerAttributes) UnsetFrequency()`

UnsetFrequency ensures that no value is present for Frequency, not even an explicit nil
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

### SetTimeZoneNil

`func (o *WorkflowTriggerAttributes) SetTimeZoneNil(b bool)`

 SetTimeZoneNil sets the value for TimeZone to be an explicit nil

### UnsetTimeZone
`func (o *WorkflowTriggerAttributes) UnsetTimeZone()`

UnsetTimeZone ensures that no value is present for TimeZone, not even an explicit nil
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

### SetCronStringNil

`func (o *WorkflowTriggerAttributes) SetCronStringNil(b bool)`

 SetCronStringNil sets the value for CronString to be an explicit nil

### UnsetCronString
`func (o *WorkflowTriggerAttributes) UnsetCronString()`

UnsetCronString ensures that no value is present for CronString, not even an explicit nil
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

### SetWeeklyDaysNil

`func (o *WorkflowTriggerAttributes) SetWeeklyDaysNil(b bool)`

 SetWeeklyDaysNil sets the value for WeeklyDays to be an explicit nil

### UnsetWeeklyDays
`func (o *WorkflowTriggerAttributes) UnsetWeeklyDays()`

UnsetWeeklyDays ensures that no value is present for WeeklyDays, not even an explicit nil
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

### SetWeeklyTimesNil

`func (o *WorkflowTriggerAttributes) SetWeeklyTimesNil(b bool)`

 SetWeeklyTimesNil sets the value for WeeklyTimes to be an explicit nil

### UnsetWeeklyTimes
`func (o *WorkflowTriggerAttributes) UnsetWeeklyTimes()`

UnsetWeeklyTimes ensures that no value is present for WeeklyTimes, not even an explicit nil
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

### SetYearlyTimesNil

`func (o *WorkflowTriggerAttributes) SetYearlyTimesNil(b bool)`

 SetYearlyTimesNil sets the value for YearlyTimes to be an explicit nil

### UnsetYearlyTimes
`func (o *WorkflowTriggerAttributes) UnsetYearlyTimes()`

UnsetYearlyTimes ensures that no value is present for YearlyTimes, not even an explicit nil

