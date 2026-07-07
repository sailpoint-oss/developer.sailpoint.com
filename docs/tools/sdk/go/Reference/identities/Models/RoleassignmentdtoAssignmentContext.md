---
id: v1-roleassignmentdto-assignment-context
title: RoleassignmentdtoAssignmentContext
pagination_label: RoleassignmentdtoAssignmentContext
sidebar_label: RoleassignmentdtoAssignmentContext
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleassignmentdtoAssignmentContext', 'V1RoleassignmentdtoAssignmentContext'] 
slug: /tools/sdk/go/identities/models/roleassignmentdto-assignment-context
tags: ['SDK', 'Software Development Kit', 'RoleassignmentdtoAssignmentContext', 'V1RoleassignmentdtoAssignmentContext']
---

# RoleassignmentdtoAssignmentContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requested** | Pointer to [**Accessrequestcontext**](accessrequestcontext) |  | [optional] 
**Matched** | Pointer to [**[]Rolematchdto**](rolematchdto) |  | [optional] 
**ComputedDate** | Pointer to **string** | Date that the assignment will was evaluated | [optional] 

## Methods

### NewRoleassignmentdtoAssignmentContext

`func NewRoleassignmentdtoAssignmentContext() *RoleassignmentdtoAssignmentContext`

NewRoleassignmentdtoAssignmentContext instantiates a new RoleassignmentdtoAssignmentContext object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleassignmentdtoAssignmentContextWithDefaults

`func NewRoleassignmentdtoAssignmentContextWithDefaults() *RoleassignmentdtoAssignmentContext`

NewRoleassignmentdtoAssignmentContextWithDefaults instantiates a new RoleassignmentdtoAssignmentContext object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequested

`func (o *RoleassignmentdtoAssignmentContext) GetRequested() Accessrequestcontext`

GetRequested returns the Requested field if non-nil, zero value otherwise.

### GetRequestedOk

`func (o *RoleassignmentdtoAssignmentContext) GetRequestedOk() (*Accessrequestcontext, bool)`

GetRequestedOk returns a tuple with the Requested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequested

`func (o *RoleassignmentdtoAssignmentContext) SetRequested(v Accessrequestcontext)`

SetRequested sets Requested field to given value.

### HasRequested

`func (o *RoleassignmentdtoAssignmentContext) HasRequested() bool`

HasRequested returns a boolean if a field has been set.

### GetMatched

`func (o *RoleassignmentdtoAssignmentContext) GetMatched() []Rolematchdto`

GetMatched returns the Matched field if non-nil, zero value otherwise.

### GetMatchedOk

`func (o *RoleassignmentdtoAssignmentContext) GetMatchedOk() (*[]Rolematchdto, bool)`

GetMatchedOk returns a tuple with the Matched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatched

`func (o *RoleassignmentdtoAssignmentContext) SetMatched(v []Rolematchdto)`

SetMatched sets Matched field to given value.

### HasMatched

`func (o *RoleassignmentdtoAssignmentContext) HasMatched() bool`

HasMatched returns a boolean if a field has been set.

### GetComputedDate

`func (o *RoleassignmentdtoAssignmentContext) GetComputedDate() string`

GetComputedDate returns the ComputedDate field if non-nil, zero value otherwise.

### GetComputedDateOk

`func (o *RoleassignmentdtoAssignmentContext) GetComputedDateOk() (*string, bool)`

GetComputedDateOk returns a tuple with the ComputedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComputedDate

`func (o *RoleassignmentdtoAssignmentContext) SetComputedDate(v string)`

SetComputedDate sets ComputedDate field to given value.

### HasComputedDate

`func (o *RoleassignmentdtoAssignmentContext) HasComputedDate() bool`

HasComputedDate returns a boolean if a field has been set.


