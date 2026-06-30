---
id: v1-formdefinitionresponse
title: Formdefinitionresponse
pagination_label: Formdefinitionresponse
sidebar_label: Formdefinitionresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Formdefinitionresponse', 'V1Formdefinitionresponse'] 
slug: /tools/sdk/go/customforms/models/formdefinitionresponse
tags: ['SDK', 'Software Development Kit', 'Formdefinitionresponse', 'V1Formdefinitionresponse']
---

# Formdefinitionresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique guid identifying the form definition. | [optional] 
**Name** | Pointer to **string** | Name of the form definition. | [optional] 
**Description** | Pointer to **string** | Form definition's description. | [optional] 
**Owner** | Pointer to [**Formowner**](formowner) |  | [optional] 
**UsedBy** | Pointer to [**[]Formusedby**](formusedby) | List of objects using the form definition. Whenever a system uses a form, the API reaches out to the form service to record that the system is currently using it. | [optional] 
**FormInput** | Pointer to [**[]Formdefinitioninput**](formdefinitioninput) | List of form inputs required to create a form-instance object. | [optional] 
**FormElements** | Pointer to [**[]Formelement**](formelement) | List of nested form elements. | [optional] 
**FormConditions** | Pointer to [**[]Formcondition**](formcondition) | Conditional logic that can dynamically modify the form as the recipient is interacting with it. | [optional] 
**Created** | Pointer to **SailPointTime** | Created is the date the form definition was created | [optional] 
**Modified** | Pointer to **SailPointTime** | Modified is the last date the form definition was modified | [optional] 

## Methods

### NewFormdefinitionresponse

`func NewFormdefinitionresponse() *Formdefinitionresponse`

NewFormdefinitionresponse instantiates a new Formdefinitionresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormdefinitionresponseWithDefaults

`func NewFormdefinitionresponseWithDefaults() *Formdefinitionresponse`

NewFormdefinitionresponseWithDefaults instantiates a new Formdefinitionresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Formdefinitionresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Formdefinitionresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Formdefinitionresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Formdefinitionresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Formdefinitionresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Formdefinitionresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Formdefinitionresponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Formdefinitionresponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Formdefinitionresponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Formdefinitionresponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Formdefinitionresponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Formdefinitionresponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOwner

`func (o *Formdefinitionresponse) GetOwner() Formowner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Formdefinitionresponse) GetOwnerOk() (*Formowner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Formdefinitionresponse) SetOwner(v Formowner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Formdefinitionresponse) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetUsedBy

`func (o *Formdefinitionresponse) GetUsedBy() []Formusedby`

GetUsedBy returns the UsedBy field if non-nil, zero value otherwise.

### GetUsedByOk

`func (o *Formdefinitionresponse) GetUsedByOk() (*[]Formusedby, bool)`

GetUsedByOk returns a tuple with the UsedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedBy

`func (o *Formdefinitionresponse) SetUsedBy(v []Formusedby)`

SetUsedBy sets UsedBy field to given value.

### HasUsedBy

`func (o *Formdefinitionresponse) HasUsedBy() bool`

HasUsedBy returns a boolean if a field has been set.

### GetFormInput

`func (o *Formdefinitionresponse) GetFormInput() []Formdefinitioninput`

GetFormInput returns the FormInput field if non-nil, zero value otherwise.

### GetFormInputOk

`func (o *Formdefinitionresponse) GetFormInputOk() (*[]Formdefinitioninput, bool)`

GetFormInputOk returns a tuple with the FormInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInput

`func (o *Formdefinitionresponse) SetFormInput(v []Formdefinitioninput)`

SetFormInput sets FormInput field to given value.

### HasFormInput

`func (o *Formdefinitionresponse) HasFormInput() bool`

HasFormInput returns a boolean if a field has been set.

### GetFormElements

`func (o *Formdefinitionresponse) GetFormElements() []Formelement`

GetFormElements returns the FormElements field if non-nil, zero value otherwise.

### GetFormElementsOk

`func (o *Formdefinitionresponse) GetFormElementsOk() (*[]Formelement, bool)`

GetFormElementsOk returns a tuple with the FormElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormElements

`func (o *Formdefinitionresponse) SetFormElements(v []Formelement)`

SetFormElements sets FormElements field to given value.

### HasFormElements

`func (o *Formdefinitionresponse) HasFormElements() bool`

HasFormElements returns a boolean if a field has been set.

### GetFormConditions

`func (o *Formdefinitionresponse) GetFormConditions() []Formcondition`

GetFormConditions returns the FormConditions field if non-nil, zero value otherwise.

### GetFormConditionsOk

`func (o *Formdefinitionresponse) GetFormConditionsOk() (*[]Formcondition, bool)`

GetFormConditionsOk returns a tuple with the FormConditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormConditions

`func (o *Formdefinitionresponse) SetFormConditions(v []Formcondition)`

SetFormConditions sets FormConditions field to given value.

### HasFormConditions

`func (o *Formdefinitionresponse) HasFormConditions() bool`

HasFormConditions returns a boolean if a field has been set.

### GetCreated

`func (o *Formdefinitionresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Formdefinitionresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Formdefinitionresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Formdefinitionresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Formdefinitionresponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Formdefinitionresponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Formdefinitionresponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Formdefinitionresponse) HasModified() bool`

HasModified returns a boolean if a field has been set.


