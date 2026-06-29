---
id: v1-nonemployeeschemaattribute
title: Nonemployeeschemaattribute
pagination_label: Nonemployeeschemaattribute
sidebar_label: Nonemployeeschemaattribute
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeeschemaattribute', 'V1Nonemployeeschemaattribute'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeeschemaattribute
tags: ['SDK', 'Software Development Kit', 'Nonemployeeschemaattribute', 'V1Nonemployeeschemaattribute']
---

# Nonemployeeschemaattribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Schema Attribute Id | [optional] 
**System** | Pointer to **bool** | True if this schema attribute is mandatory on all non-employees sources. | [optional] [default to false]
**Modified** | Pointer to **SailPointTime** | When the schema attribute was last modified. | [optional] 
**Created** | Pointer to **SailPointTime** | When the schema attribute was created. | [optional] 
**Type** | [**Nonemployeeschemaattributetype**](nonemployeeschemaattributetype) |  | 
**Label** | **string** | Label displayed on the UI for this schema attribute. | 
**TechnicalName** | **string** | The technical name of the attribute. Must be unique per source. | 
**HelpText** | Pointer to **string** | help text displayed by UI. | [optional] 
**Placeholder** | Pointer to **string** | Hint text that fills UI box. | [optional] 
**Required** | Pointer to **bool** | If true, the schema attribute is required for all non-employees in the source | [optional] [default to false]

## Methods

### NewNonemployeeschemaattribute

`func NewNonemployeeschemaattribute(type_ Nonemployeeschemaattributetype, label string, technicalName string, ) *Nonemployeeschemaattribute`

NewNonemployeeschemaattribute instantiates a new Nonemployeeschemaattribute object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeeschemaattributeWithDefaults

`func NewNonemployeeschemaattributeWithDefaults() *Nonemployeeschemaattribute`

NewNonemployeeschemaattributeWithDefaults instantiates a new Nonemployeeschemaattribute object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Nonemployeeschemaattribute) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Nonemployeeschemaattribute) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Nonemployeeschemaattribute) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Nonemployeeschemaattribute) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSystem

`func (o *Nonemployeeschemaattribute) GetSystem() bool`

GetSystem returns the System field if non-nil, zero value otherwise.

### GetSystemOk

`func (o *Nonemployeeschemaattribute) GetSystemOk() (*bool, bool)`

GetSystemOk returns a tuple with the System field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystem

`func (o *Nonemployeeschemaattribute) SetSystem(v bool)`

SetSystem sets System field to given value.

### HasSystem

`func (o *Nonemployeeschemaattribute) HasSystem() bool`

HasSystem returns a boolean if a field has been set.

### GetModified

`func (o *Nonemployeeschemaattribute) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Nonemployeeschemaattribute) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Nonemployeeschemaattribute) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Nonemployeeschemaattribute) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *Nonemployeeschemaattribute) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Nonemployeeschemaattribute) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Nonemployeeschemaattribute) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Nonemployeeschemaattribute) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetType

`func (o *Nonemployeeschemaattribute) GetType() Nonemployeeschemaattributetype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Nonemployeeschemaattribute) GetTypeOk() (*Nonemployeeschemaattributetype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Nonemployeeschemaattribute) SetType(v Nonemployeeschemaattributetype)`

SetType sets Type field to given value.


### GetLabel

`func (o *Nonemployeeschemaattribute) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *Nonemployeeschemaattribute) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *Nonemployeeschemaattribute) SetLabel(v string)`

SetLabel sets Label field to given value.


### GetTechnicalName

`func (o *Nonemployeeschemaattribute) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *Nonemployeeschemaattribute) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *Nonemployeeschemaattribute) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetHelpText

`func (o *Nonemployeeschemaattribute) GetHelpText() string`

GetHelpText returns the HelpText field if non-nil, zero value otherwise.

### GetHelpTextOk

`func (o *Nonemployeeschemaattribute) GetHelpTextOk() (*string, bool)`

GetHelpTextOk returns a tuple with the HelpText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHelpText

`func (o *Nonemployeeschemaattribute) SetHelpText(v string)`

SetHelpText sets HelpText field to given value.

### HasHelpText

`func (o *Nonemployeeschemaattribute) HasHelpText() bool`

HasHelpText returns a boolean if a field has been set.

### GetPlaceholder

`func (o *Nonemployeeschemaattribute) GetPlaceholder() string`

GetPlaceholder returns the Placeholder field if non-nil, zero value otherwise.

### GetPlaceholderOk

`func (o *Nonemployeeschemaattribute) GetPlaceholderOk() (*string, bool)`

GetPlaceholderOk returns a tuple with the Placeholder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlaceholder

`func (o *Nonemployeeschemaattribute) SetPlaceholder(v string)`

SetPlaceholder sets Placeholder field to given value.

### HasPlaceholder

`func (o *Nonemployeeschemaattribute) HasPlaceholder() bool`

HasPlaceholder returns a boolean if a field has been set.

### GetRequired

`func (o *Nonemployeeschemaattribute) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *Nonemployeeschemaattribute) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *Nonemployeeschemaattribute) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *Nonemployeeschemaattribute) HasRequired() bool`

HasRequired returns a boolean if a field has been set.


