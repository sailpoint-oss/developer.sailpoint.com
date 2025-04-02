---
id: scope
title: Scope
pagination_label: Scope
sidebar_label: Scope
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Scope', 'Scope'] 
slug: /tools/sdk/go//models/scope
tags: ['SDK', 'Software Development Kit', 'Scope', 'Scope']
---

# Scope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scope** | Pointer to [**ScopeType**](scope-type) |  | [optional] 
**Visibility** | Pointer to [**ScopeVisibilityType**](scope-visibility-type) |  | [optional] 
**ScopeFilter** | Pointer to [**VisibilityCriteria**](visibility-criteria) |  | [optional] 
**ScopeSelection** | Pointer to [**[]Ref**](ref) | List of Identities that are assigned to the segment | [optional] 

## Methods

### NewScope

`func NewScope() *Scope`

NewScope instantiates a new Scope object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScopeWithDefaults

`func NewScopeWithDefaults() *Scope`

NewScopeWithDefaults instantiates a new Scope object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScope

`func (o *Scope) GetScope() ScopeType`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *Scope) GetScopeOk() (*ScopeType, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *Scope) SetScope(v ScopeType)`

SetScope sets Scope field to given value.

### HasScope

`func (o *Scope) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetVisibility

`func (o *Scope) GetVisibility() ScopeVisibilityType`

GetVisibility returns the Visibility field if non-nil, zero value otherwise.

### GetVisibilityOk

`func (o *Scope) GetVisibilityOk() (*ScopeVisibilityType, bool)`

GetVisibilityOk returns a tuple with the Visibility field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVisibility

`func (o *Scope) SetVisibility(v ScopeVisibilityType)`

SetVisibility sets Visibility field to given value.

### HasVisibility

`func (o *Scope) HasVisibility() bool`

HasVisibility returns a boolean if a field has been set.

### GetScopeFilter

`func (o *Scope) GetScopeFilter() VisibilityCriteria`

GetScopeFilter returns the ScopeFilter field if non-nil, zero value otherwise.

### GetScopeFilterOk

`func (o *Scope) GetScopeFilterOk() (*VisibilityCriteria, bool)`

GetScopeFilterOk returns a tuple with the ScopeFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeFilter

`func (o *Scope) SetScopeFilter(v VisibilityCriteria)`

SetScopeFilter sets ScopeFilter field to given value.

### HasScopeFilter

`func (o *Scope) HasScopeFilter() bool`

HasScopeFilter returns a boolean if a field has been set.

### GetScopeSelection

`func (o *Scope) GetScopeSelection() []Ref`

GetScopeSelection returns the ScopeSelection field if non-nil, zero value otherwise.

### GetScopeSelectionOk

`func (o *Scope) GetScopeSelectionOk() (*[]Ref, bool)`

GetScopeSelectionOk returns a tuple with the ScopeSelection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeSelection

`func (o *Scope) SetScopeSelection(v []Ref)`

SetScopeSelection sets ScopeSelection field to given value.

### HasScopeSelection

`func (o *Scope) HasScopeSelection() bool`

HasScopeSelection returns a boolean if a field has been set.


