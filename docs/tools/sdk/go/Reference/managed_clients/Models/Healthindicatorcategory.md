---
id: v1-healthindicatorcategory
title: Healthindicatorcategory
pagination_label: Healthindicatorcategory
sidebar_label: Healthindicatorcategory
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Healthindicatorcategory', 'V1Healthindicatorcategory'] 
slug: /tools/sdk/go/managedclients/models/healthindicatorcategory
tags: ['SDK', 'Software Development Kit', 'Healthindicatorcategory', 'V1Healthindicatorcategory']
---

# Healthindicatorcategory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Errors** | Pointer to [**[]Healthevent**](healthevent) | List of error events for this category | [optional] 
**Warnings** | Pointer to [**[]Healthevent**](healthevent) | List of warning events for this category | [optional] 

## Methods

### NewHealthindicatorcategory

`func NewHealthindicatorcategory() *Healthindicatorcategory`

NewHealthindicatorcategory instantiates a new Healthindicatorcategory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHealthindicatorcategoryWithDefaults

`func NewHealthindicatorcategoryWithDefaults() *Healthindicatorcategory`

NewHealthindicatorcategoryWithDefaults instantiates a new Healthindicatorcategory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrors

`func (o *Healthindicatorcategory) GetErrors() []Healthevent`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *Healthindicatorcategory) GetErrorsOk() (*[]Healthevent, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *Healthindicatorcategory) SetErrors(v []Healthevent)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *Healthindicatorcategory) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetWarnings

`func (o *Healthindicatorcategory) GetWarnings() []Healthevent`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Healthindicatorcategory) GetWarningsOk() (*[]Healthevent, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Healthindicatorcategory) SetWarnings(v []Healthevent)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Healthindicatorcategory) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


