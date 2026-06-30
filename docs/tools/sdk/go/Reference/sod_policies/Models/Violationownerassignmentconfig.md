---
id: v1-violationownerassignmentconfig
title: Violationownerassignmentconfig
pagination_label: Violationownerassignmentconfig
sidebar_label: Violationownerassignmentconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Violationownerassignmentconfig', 'V1Violationownerassignmentconfig'] 
slug: /tools/sdk/go/sodpolicies/models/violationownerassignmentconfig
tags: ['SDK', 'Software Development Kit', 'Violationownerassignmentconfig', 'V1Violationownerassignmentconfig']
---

# Violationownerassignmentconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssignmentRule** | Pointer to **NullableString** | Details about the violations owner. MANAGER - identity's manager STATIC - Governance Group or Identity | [optional] 
**OwnerRef** | Pointer to [**NullableViolationownerassignmentconfigOwnerRef**](violationownerassignmentconfig-owner-ref) |  | [optional] 

## Methods

### NewViolationownerassignmentconfig

`func NewViolationownerassignmentconfig() *Violationownerassignmentconfig`

NewViolationownerassignmentconfig instantiates a new Violationownerassignmentconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewViolationownerassignmentconfigWithDefaults

`func NewViolationownerassignmentconfigWithDefaults() *Violationownerassignmentconfig`

NewViolationownerassignmentconfigWithDefaults instantiates a new Violationownerassignmentconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssignmentRule

`func (o *Violationownerassignmentconfig) GetAssignmentRule() string`

GetAssignmentRule returns the AssignmentRule field if non-nil, zero value otherwise.

### GetAssignmentRuleOk

`func (o *Violationownerassignmentconfig) GetAssignmentRuleOk() (*string, bool)`

GetAssignmentRuleOk returns a tuple with the AssignmentRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentRule

`func (o *Violationownerassignmentconfig) SetAssignmentRule(v string)`

SetAssignmentRule sets AssignmentRule field to given value.

### HasAssignmentRule

`func (o *Violationownerassignmentconfig) HasAssignmentRule() bool`

HasAssignmentRule returns a boolean if a field has been set.

### SetAssignmentRuleNil

`func (o *Violationownerassignmentconfig) SetAssignmentRuleNil(b bool)`

 SetAssignmentRuleNil sets the value for AssignmentRule to be an explicit nil

### UnsetAssignmentRule
`func (o *Violationownerassignmentconfig) UnsetAssignmentRule()`

UnsetAssignmentRule ensures that no value is present for AssignmentRule, not even an explicit nil
### GetOwnerRef

`func (o *Violationownerassignmentconfig) GetOwnerRef() ViolationownerassignmentconfigOwnerRef`

GetOwnerRef returns the OwnerRef field if non-nil, zero value otherwise.

### GetOwnerRefOk

`func (o *Violationownerassignmentconfig) GetOwnerRefOk() (*ViolationownerassignmentconfigOwnerRef, bool)`

GetOwnerRefOk returns a tuple with the OwnerRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRef

`func (o *Violationownerassignmentconfig) SetOwnerRef(v ViolationownerassignmentconfigOwnerRef)`

SetOwnerRef sets OwnerRef field to given value.

### HasOwnerRef

`func (o *Violationownerassignmentconfig) HasOwnerRef() bool`

HasOwnerRef returns a boolean if a field has been set.

### SetOwnerRefNil

`func (o *Violationownerassignmentconfig) SetOwnerRefNil(b bool)`

 SetOwnerRefNil sets the value for OwnerRef to be an explicit nil

### UnsetOwnerRef
`func (o *Violationownerassignmentconfig) UnsetOwnerRef()`

UnsetOwnerRef ensures that no value is present for OwnerRef, not even an explicit nil

