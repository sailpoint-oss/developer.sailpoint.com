---
id: v1-createformdefinitionrequest
title: Createformdefinitionrequest
pagination_label: Createformdefinitionrequest
sidebar_label: Createformdefinitionrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Createformdefinitionrequest', 'V1Createformdefinitionrequest'] 
slug: /tools/sdk/go/customforms/models/createformdefinitionrequest
tags: ['SDK', 'Software Development Kit', 'Createformdefinitionrequest', 'V1Createformdefinitionrequest']
---

# Createformdefinitionrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description is the form definition description | [optional] 
**FormConditions** | Pointer to [**[]Formcondition**](formcondition) | FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form | [optional] 
**FormElements** | Pointer to [**[]Formelement**](formelement) | FormElements is a list of nested form elements | [optional] 
**FormInput** | Pointer to [**[]Formdefinitioninput**](formdefinitioninput) | FormInput is a list of form inputs that are required when creating a form-instance object | [optional] 
**Name** | **string** | Name is the form definition name | 
**Owner** | [**Formowner**](formowner) |  | 
**UsedBy** | Pointer to [**[]Formusedby**](formusedby) | UsedBy is a list of objects where when any system uses a particular form it reaches out to the form service to record it is currently being used | [optional] 

## Methods

### NewCreateformdefinitionrequest

`func NewCreateformdefinitionrequest(name string, owner Formowner, ) *Createformdefinitionrequest`

NewCreateformdefinitionrequest instantiates a new Createformdefinitionrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateformdefinitionrequestWithDefaults

`func NewCreateformdefinitionrequestWithDefaults() *Createformdefinitionrequest`

NewCreateformdefinitionrequestWithDefaults instantiates a new Createformdefinitionrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *Createformdefinitionrequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Createformdefinitionrequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Createformdefinitionrequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Createformdefinitionrequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFormConditions

`func (o *Createformdefinitionrequest) GetFormConditions() []Formcondition`

GetFormConditions returns the FormConditions field if non-nil, zero value otherwise.

### GetFormConditionsOk

`func (o *Createformdefinitionrequest) GetFormConditionsOk() (*[]Formcondition, bool)`

GetFormConditionsOk returns a tuple with the FormConditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormConditions

`func (o *Createformdefinitionrequest) SetFormConditions(v []Formcondition)`

SetFormConditions sets FormConditions field to given value.

### HasFormConditions

`func (o *Createformdefinitionrequest) HasFormConditions() bool`

HasFormConditions returns a boolean if a field has been set.

### GetFormElements

`func (o *Createformdefinitionrequest) GetFormElements() []Formelement`

GetFormElements returns the FormElements field if non-nil, zero value otherwise.

### GetFormElementsOk

`func (o *Createformdefinitionrequest) GetFormElementsOk() (*[]Formelement, bool)`

GetFormElementsOk returns a tuple with the FormElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormElements

`func (o *Createformdefinitionrequest) SetFormElements(v []Formelement)`

SetFormElements sets FormElements field to given value.

### HasFormElements

`func (o *Createformdefinitionrequest) HasFormElements() bool`

HasFormElements returns a boolean if a field has been set.

### GetFormInput

`func (o *Createformdefinitionrequest) GetFormInput() []Formdefinitioninput`

GetFormInput returns the FormInput field if non-nil, zero value otherwise.

### GetFormInputOk

`func (o *Createformdefinitionrequest) GetFormInputOk() (*[]Formdefinitioninput, bool)`

GetFormInputOk returns a tuple with the FormInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInput

`func (o *Createformdefinitionrequest) SetFormInput(v []Formdefinitioninput)`

SetFormInput sets FormInput field to given value.

### HasFormInput

`func (o *Createformdefinitionrequest) HasFormInput() bool`

HasFormInput returns a boolean if a field has been set.

### GetName

`func (o *Createformdefinitionrequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Createformdefinitionrequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Createformdefinitionrequest) SetName(v string)`

SetName sets Name field to given value.


### GetOwner

`func (o *Createformdefinitionrequest) GetOwner() Formowner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Createformdefinitionrequest) GetOwnerOk() (*Formowner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Createformdefinitionrequest) SetOwner(v Formowner)`

SetOwner sets Owner field to given value.


### GetUsedBy

`func (o *Createformdefinitionrequest) GetUsedBy() []Formusedby`

GetUsedBy returns the UsedBy field if non-nil, zero value otherwise.

### GetUsedByOk

`func (o *Createformdefinitionrequest) GetUsedByOk() (*[]Formusedby, bool)`

GetUsedByOk returns a tuple with the UsedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedBy

`func (o *Createformdefinitionrequest) SetUsedBy(v []Formusedby)`

SetUsedBy sets UsedBy field to given value.

### HasUsedBy

`func (o *Createformdefinitionrequest) HasUsedBy() bool`

HasUsedBy returns a boolean if a field has been set.


