---
id: beta-event-attributes
title: EventAttributes
pagination_label: EventAttributes
sidebar_label: EventAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EventAttributes', 'BetaEventAttributes'] 
slug: /tools/sdk/go/beta/models/event-attributes
tags: ['SDK', 'Software Development Kit', 'EventAttributes', 'BetaEventAttributes']
---

# EventAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **NullableString** | The unique ID of the trigger | 
**Filter** | Pointer to **NullableString** | JSON path expression that will limit which events the trigger will fire on | [optional] 
**Description** | Pointer to **NullableString** | Description of the event trigger | [optional] 
**AttributeToFilter** | Pointer to **NullableString** | The attribute to filter on | [optional] 
**FormDefinitionId** | Pointer to **NullableString** | Form definition&#39;s unique identifier. | [optional] 

## Methods

### NewEventAttributes

`func NewEventAttributes(id NullableString, ) *EventAttributes`

NewEventAttributes instantiates a new EventAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventAttributesWithDefaults

`func NewEventAttributesWithDefaults() *EventAttributes`

NewEventAttributesWithDefaults instantiates a new EventAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EventAttributes) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EventAttributes) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EventAttributes) SetId(v string)`

SetId sets Id field to given value.


### SetIdNil

`func (o *EventAttributes) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *EventAttributes) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetFilter

`func (o *EventAttributes) GetFilter() string`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *EventAttributes) GetFilterOk() (*string, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *EventAttributes) SetFilter(v string)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *EventAttributes) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### SetFilterNil

`func (o *EventAttributes) SetFilterNil(b bool)`

 SetFilterNil sets the value for Filter to be an explicit nil

### UnsetFilter
`func (o *EventAttributes) UnsetFilter()`

UnsetFilter ensures that no value is present for Filter, not even an explicit nil
### GetDescription

`func (o *EventAttributes) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EventAttributes) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EventAttributes) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EventAttributes) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *EventAttributes) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *EventAttributes) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAttributeToFilter

`func (o *EventAttributes) GetAttributeToFilter() string`

GetAttributeToFilter returns the AttributeToFilter field if non-nil, zero value otherwise.

### GetAttributeToFilterOk

`func (o *EventAttributes) GetAttributeToFilterOk() (*string, bool)`

GetAttributeToFilterOk returns a tuple with the AttributeToFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeToFilter

`func (o *EventAttributes) SetAttributeToFilter(v string)`

SetAttributeToFilter sets AttributeToFilter field to given value.

### HasAttributeToFilter

`func (o *EventAttributes) HasAttributeToFilter() bool`

HasAttributeToFilter returns a boolean if a field has been set.

### SetAttributeToFilterNil

`func (o *EventAttributes) SetAttributeToFilterNil(b bool)`

 SetAttributeToFilterNil sets the value for AttributeToFilter to be an explicit nil

### UnsetAttributeToFilter
`func (o *EventAttributes) UnsetAttributeToFilter()`

UnsetAttributeToFilter ensures that no value is present for AttributeToFilter, not even an explicit nil
### GetFormDefinitionId

`func (o *EventAttributes) GetFormDefinitionId() string`

GetFormDefinitionId returns the FormDefinitionId field if non-nil, zero value otherwise.

### GetFormDefinitionIdOk

`func (o *EventAttributes) GetFormDefinitionIdOk() (*string, bool)`

GetFormDefinitionIdOk returns a tuple with the FormDefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormDefinitionId

`func (o *EventAttributes) SetFormDefinitionId(v string)`

SetFormDefinitionId sets FormDefinitionId field to given value.

### HasFormDefinitionId

`func (o *EventAttributes) HasFormDefinitionId() bool`

HasFormDefinitionId returns a boolean if a field has been set.

### SetFormDefinitionIdNil

`func (o *EventAttributes) SetFormDefinitionIdNil(b bool)`

 SetFormDefinitionIdNil sets the value for FormDefinitionId to be an explicit nil

### UnsetFormDefinitionId
`func (o *EventAttributes) UnsetFormDefinitionId()`

UnsetFormDefinitionId ensures that no value is present for FormDefinitionId, not even an explicit nil

