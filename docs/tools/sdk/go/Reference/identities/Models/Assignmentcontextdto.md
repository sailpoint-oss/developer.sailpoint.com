---
id: v1-assignmentcontextdto
title: Assignmentcontextdto
pagination_label: Assignmentcontextdto
sidebar_label: Assignmentcontextdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Assignmentcontextdto', 'V1Assignmentcontextdto'] 
slug: /tools/sdk/go/identities/models/assignmentcontextdto
tags: ['SDK', 'Software Development Kit', 'Assignmentcontextdto', 'V1Assignmentcontextdto']
---

# Assignmentcontextdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requested** | Pointer to [**Accessrequestcontext**](accessrequestcontext) |  | [optional] 
**Matched** | Pointer to [**[]Rolematchdto**](rolematchdto) |  | [optional] 
**ComputedDate** | Pointer to **string** | Date that the assignment will was evaluated | [optional] 

## Methods

### NewAssignmentcontextdto

`func NewAssignmentcontextdto() *Assignmentcontextdto`

NewAssignmentcontextdto instantiates a new Assignmentcontextdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssignmentcontextdtoWithDefaults

`func NewAssignmentcontextdtoWithDefaults() *Assignmentcontextdto`

NewAssignmentcontextdtoWithDefaults instantiates a new Assignmentcontextdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequested

`func (o *Assignmentcontextdto) GetRequested() Accessrequestcontext`

GetRequested returns the Requested field if non-nil, zero value otherwise.

### GetRequestedOk

`func (o *Assignmentcontextdto) GetRequestedOk() (*Accessrequestcontext, bool)`

GetRequestedOk returns a tuple with the Requested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequested

`func (o *Assignmentcontextdto) SetRequested(v Accessrequestcontext)`

SetRequested sets Requested field to given value.

### HasRequested

`func (o *Assignmentcontextdto) HasRequested() bool`

HasRequested returns a boolean if a field has been set.

### GetMatched

`func (o *Assignmentcontextdto) GetMatched() []Rolematchdto`

GetMatched returns the Matched field if non-nil, zero value otherwise.

### GetMatchedOk

`func (o *Assignmentcontextdto) GetMatchedOk() (*[]Rolematchdto, bool)`

GetMatchedOk returns a tuple with the Matched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatched

`func (o *Assignmentcontextdto) SetMatched(v []Rolematchdto)`

SetMatched sets Matched field to given value.

### HasMatched

`func (o *Assignmentcontextdto) HasMatched() bool`

HasMatched returns a boolean if a field has been set.

### GetComputedDate

`func (o *Assignmentcontextdto) GetComputedDate() string`

GetComputedDate returns the ComputedDate field if non-nil, zero value otherwise.

### GetComputedDateOk

`func (o *Assignmentcontextdto) GetComputedDateOk() (*string, bool)`

GetComputedDateOk returns a tuple with the ComputedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComputedDate

`func (o *Assignmentcontextdto) SetComputedDate(v string)`

SetComputedDate sets ComputedDate field to given value.

### HasComputedDate

`func (o *Assignmentcontextdto) HasComputedDate() bool`

HasComputedDate returns a boolean if a field has been set.


