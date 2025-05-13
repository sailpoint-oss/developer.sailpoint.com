---
id: non-employee-schema-attribute
title: NonEmployeeSchemaAttribute
pagination_label: NonEmployeeSchemaAttribute
sidebar_label: NonEmployeeSchemaAttribute
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NonEmployeeSchemaAttribute', 'NonEmployeeSchemaAttribute'] 
slug: /tools/sdk/go/v3/models/non-employee-schema-attribute
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSchemaAttribute', 'NonEmployeeSchemaAttribute']
---

# NonEmployeeSchemaAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Schema Attribute Id | [optional] 
**System** | Pointer to **bool** | True if this schema attribute is mandatory on all non-employees sources. | [optional] [default to false]
**Modified** | Pointer to **SailPointTime** | When the schema attribute was last modified. | [optional] 
**Created** | Pointer to **SailPointTime** | When the schema attribute was created. | [optional] 
**Type** | [**NonEmployeeSchemaAttributeType**](non-employee-schema-attribute-type) |  | 
**Label** | **string** | Label displayed on the UI for this schema attribute. | 
**TechnicalName** | **string** | The technical name of the attribute. Must be unique per source. | 
**HelpText** | Pointer to **string** | help text displayed by UI. | [optional] 
**Placeholder** | Pointer to **string** | Hint text that fills UI box. | [optional] 
**Required** | Pointer to **bool** | If true, the schema attribute is required for all non-employees in the source | [optional] [default to false]

## Methods

### NewNonEmployeeSchemaAttribute

`func NewNonEmployeeSchemaAttribute(type_ NonEmployeeSchemaAttributeType, label string, technicalName string, ) *NonEmployeeSchemaAttribute`

NewNonEmployeeSchemaAttribute instantiates a new NonEmployeeSchemaAttribute object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeSchemaAttributeWithDefaults

`func NewNonEmployeeSchemaAttributeWithDefaults() *NonEmployeeSchemaAttribute`

NewNonEmployeeSchemaAttributeWithDefaults instantiates a new NonEmployeeSchemaAttribute object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *NonEmployeeSchemaAttribute) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NonEmployeeSchemaAttribute) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NonEmployeeSchemaAttribute) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *NonEmployeeSchemaAttribute) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSystem

`func (o *NonEmployeeSchemaAttribute) GetSystem() bool`

GetSystem returns the System field if non-nil, zero value otherwise.

### GetSystemOk

`func (o *NonEmployeeSchemaAttribute) GetSystemOk() (*bool, bool)`

GetSystemOk returns a tuple with the System field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystem

`func (o *NonEmployeeSchemaAttribute) SetSystem(v bool)`

SetSystem sets System field to given value.

### HasSystem

`func (o *NonEmployeeSchemaAttribute) HasSystem() bool`

HasSystem returns a boolean if a field has been set.

### GetModified

`func (o *NonEmployeeSchemaAttribute) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *NonEmployeeSchemaAttribute) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *NonEmployeeSchemaAttribute) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *NonEmployeeSchemaAttribute) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *NonEmployeeSchemaAttribute) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *NonEmployeeSchemaAttribute) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *NonEmployeeSchemaAttribute) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *NonEmployeeSchemaAttribute) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetType

`func (o *NonEmployeeSchemaAttribute) GetType() NonEmployeeSchemaAttributeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *NonEmployeeSchemaAttribute) GetTypeOk() (*NonEmployeeSchemaAttributeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *NonEmployeeSchemaAttribute) SetType(v NonEmployeeSchemaAttributeType)`

SetType sets Type field to given value.


### GetLabel

`func (o *NonEmployeeSchemaAttribute) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *NonEmployeeSchemaAttribute) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *NonEmployeeSchemaAttribute) SetLabel(v string)`

SetLabel sets Label field to given value.


### GetTechnicalName

`func (o *NonEmployeeSchemaAttribute) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *NonEmployeeSchemaAttribute) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *NonEmployeeSchemaAttribute) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetHelpText

`func (o *NonEmployeeSchemaAttribute) GetHelpText() string`

GetHelpText returns the HelpText field if non-nil, zero value otherwise.

### GetHelpTextOk

`func (o *NonEmployeeSchemaAttribute) GetHelpTextOk() (*string, bool)`

GetHelpTextOk returns a tuple with the HelpText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHelpText

`func (o *NonEmployeeSchemaAttribute) SetHelpText(v string)`

SetHelpText sets HelpText field to given value.

### HasHelpText

`func (o *NonEmployeeSchemaAttribute) HasHelpText() bool`

HasHelpText returns a boolean if a field has been set.

### GetPlaceholder

`func (o *NonEmployeeSchemaAttribute) GetPlaceholder() string`

GetPlaceholder returns the Placeholder field if non-nil, zero value otherwise.

### GetPlaceholderOk

`func (o *NonEmployeeSchemaAttribute) GetPlaceholderOk() (*string, bool)`

GetPlaceholderOk returns a tuple with the Placeholder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlaceholder

`func (o *NonEmployeeSchemaAttribute) SetPlaceholder(v string)`

SetPlaceholder sets Placeholder field to given value.

### HasPlaceholder

`func (o *NonEmployeeSchemaAttribute) HasPlaceholder() bool`

HasPlaceholder returns a boolean if a field has been set.

### GetRequired

`func (o *NonEmployeeSchemaAttribute) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *NonEmployeeSchemaAttribute) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *NonEmployeeSchemaAttribute) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *NonEmployeeSchemaAttribute) HasRequired() bool`

HasRequired returns a boolean if a field has been set.


